import { Router } from 'express'
import pool from '../db.js'
import { createSessionToken, hashPassword, hashSessionToken, verifyPassword } from '../auth/crypto.js'
import requireAuth from '../auth/requireAuth.js'

const router = Router()
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const userFields = `
  id,
  username,
  email,
  weight_kg::float8 AS "weightKg",
  height_cm AS "heightCm",
  created_at AS "createdAt"
`

async function createSession(client, userId) {
  const token = createSessionToken()
  const tokenHash = hashSessionToken(token)
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS)

  await client.query('DELETE FROM auth_sessions WHERE expires_at <= NOW()')
  await client.query(
    'INSERT INTO auth_sessions (user_id, token_hash, expires_at) VALUES ($1, $2, $3)',
    [userId, tokenHash, expiresAt],
  )
  return token
}

function isValidCredentials(username, email, password) {
  return (
    typeof username === 'string' &&
    username.trim().length >= 3 &&
    username.trim().length <= 50 &&
    typeof email === 'string' &&
    email.length <= 100 &&
    EMAIL_PATTERN.test(email) &&
    typeof password === 'string' &&
    password.length >= 8 &&
    password.length <= 128
  )
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body ?? {}
  const normalizedUsername = typeof username === 'string' ? username.trim() : ''
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''

  if (!isValidCredentials(normalizedUsername, normalizedEmail, password)) {
    return res.status(400).json({
      error: 'Enter a username (3-50 characters), a valid email, and a password (8-128 characters)',
    })
  }

  const client = await pool.connect()
  try {
    const passwordHash = await hashPassword(password)
    await client.query('BEGIN')
    const { rows } = await client.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING ${userFields}`,
      [normalizedUsername, normalizedEmail, passwordHash],
    )
    const token = await createSession(client, rows[0].id)
    await client.query('COMMIT')
    res.status(201).json({ user: rows[0], token })
  } catch (error) {
    await client.query('ROLLBACK')
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Username or email is already in use' })
    }
    console.error(error)
    res.status(500).json({ error: 'Could not create account' })
  } finally {
    client.release()
  }
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body ?? {}
  if (
    typeof email !== 'string' ||
    email.length > 100 ||
    !EMAIL_PATTERN.test(email.trim()) ||
    typeof password !== 'string' ||
    password.length === 0 ||
    password.length > 128
  ) {
    return res.status(400).json({ error: 'Enter a valid email and password' })
  }

  try {
    const { rows } = await pool.query(
      `SELECT ${userFields}, password_hash AS "passwordHash"
       FROM users
       WHERE email = $1`,
      [email.trim().toLowerCase()],
    )
    const user = rows[0]
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ error: 'Email or password is incorrect' })
    }

    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const token = await createSession(client, user.id)
      await client.query('COMMIT')
      delete user.passwordHash
      res.json({ user, token })
    } catch (error) {
      await client.query('ROLLBACK')
      throw error
    } finally {
      client.release()
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not sign in' })
  }
})

// GET /api/auth/me
router.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.user })
})

// PATCH /api/auth/me
router.patch('/me', requireAuth, async (req, res) => {
  const body = req.body
  const profileFields = ['username', 'email', 'weightKg', 'heightCm']
  if (
    !body ||
    typeof body !== 'object' ||
    Array.isArray(body) ||
    Object.keys(body).length === 0 ||
    Object.keys(body).some((field) => !profileFields.includes(field))
  ) {
    return res.status(400).json({ error: 'Provide valid profile fields to update' })
  }

  const username = body.username === undefined
    ? req.user.username
    : typeof body.username === 'string' ? body.username.trim() : body.username
  const email = body.email === undefined
    ? req.user.email
    : typeof body.email === 'string' ? body.email.trim().toLowerCase() : body.email
  const weightKg = body.weightKg === undefined ? req.user.weightKg : body.weightKg
  const heightCm = body.heightCm === undefined ? req.user.heightCm : body.heightCm
  const hasValidWeight = weightKg === null || (
    (typeof weightKg === 'number' || (typeof weightKg === 'string' && weightKg.trim() !== '')) &&
    Number.isFinite(Number(weightKg)) &&
    Number(weightKg) > 0 &&
    Number(weightKg) <= 999.99
  )
  const hasValidHeight = heightCm === null || (
    (typeof heightCm === 'number' || (typeof heightCm === 'string' && heightCm.trim() !== '')) &&
    Number.isInteger(Number(heightCm)) &&
    Number(heightCm) >= 30 &&
    Number(heightCm) <= 300
  )

  if (
    typeof username !== 'string' ||
    username.trim().length < 3 ||
    username.trim().length > 50 ||
    typeof email !== 'string' ||
    email.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    !hasValidWeight ||
    !hasValidHeight
  ) {
    return res.status(400).json({ error: 'Profile details are invalid' })
  }

  try {
    const { rows } = await pool.query(
      `UPDATE users
       SET username = $1, email = $2, weight_kg = $3, height_cm = $4
       WHERE id = $5
       RETURNING ${userFields}`,
      [username.trim(), email, weightKg, heightCm, req.user.id],
    )
    res.json({ user: rows[0] })
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Username or email is already in use' })
    }
    console.error(error)
    res.status(500).json({ error: 'Could not update profile' })
  }
})

// POST /api/auth/logout
router.post('/logout', requireAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM auth_sessions WHERE token_hash = $1', [req.sessionTokenHash])
    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not end session' })
  }
})

export default router
