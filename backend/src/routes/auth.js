import { Router } from 'express'
import crypto from 'crypto'
import pool from '../db.js'

const router = Router()

// password + salt -> hash we can store
function hash(password, salt) {
  return crypto.scryptSync(password, salt, 32).toString('base64')
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' })
  }

  // every user gets their own random salt
  const salt = crypto.randomBytes(16).toString('base64')

  try {
    const { rows } = await pool.query(
      `INSERT INTO users (username, password_hash, salt)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [username, hash(password, salt), salt]
    )
    res.status(201).json({ id: rows[0].id, username })
  } catch (err) {
    console.error(err)
    res.status(409).json({ error: 'Username already taken' })
  }
})

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const { rows } = await pool.query(
      `SELECT id, password_hash, salt
       FROM users
       WHERE username = $1`,
      [username]
    )
    const user = rows[0]

    // same answer for a wrong password and an unknown user
    if (!user || hash(password, user.salt) !== user.password_hash) {
      return res.status(401).json({ error: 'Wrong username or password' })
    }

    res.json({ id: user.id, username })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

export default router
