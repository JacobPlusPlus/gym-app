import pool from '../db.js'
import { hashSessionToken } from './crypto.js'

export default async function requireAuth(req, res, next) {
  const authorization = req.get('authorization') || ''
  const match = /^Bearer ([\w-]{43})$/.exec(authorization)
  if (!match) {
    return res.status(401).json({ error: 'Authentication required' })
  }

  const tokenHash = hashSessionToken(match[1])
  try {
    const { rows } = await pool.query(
      `SELECT u.id,
              u.username,
              u.email,
              u.weight_kg::float8 AS "weightKg",
              u.height_cm AS "heightCm",
              u.created_at AS "createdAt"
       FROM auth_sessions s
       JOIN users u ON u.id = s.user_id
       WHERE s.token_hash = $1 AND s.expires_at > NOW()`,
      [tokenHash],
    )

    if (!rows[0]) {
      return res.status(401).json({ error: 'Session is invalid or expired' })
    }

    req.user = rows[0]
    req.sessionTokenHash = tokenHash
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not verify session' })
  }
}
