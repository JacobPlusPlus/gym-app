import { Router } from 'express'
import pool from '../db.js'

const router = Router()

// GET /api/exercises
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id,
              name,
              equipment,
              muscle_group AS "muscleGroup",
              image,
              difficulty
       FROM exercises
       ORDER BY id`
    )
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Database error' })
  }
})

export default router