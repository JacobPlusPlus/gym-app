import { Router } from 'express'
import pool from '../db.js'
import requireAuth from '../auth/requireAuth.js'

const router = Router()
router.use(requireAuth)

router.get('/', async (req, res) => {
  try {
    const [summaryResult, workoutsResult, weeklyResult, recordsResult] =
      await Promise.all([
        pool.query(
          `SELECT COUNT(w.id)::int AS workouts,
                  COALESCE(SUM(w.duration_min), 0)::int AS minutes,
                  COALESCE(SUM(sets.set_count), 0)::int AS sets,
                  COALESCE(SUM(sets.rep_count), 0)::int AS reps,
                  COALESCE(SUM(sets.volume), 0)::numeric AS volume
           FROM workouts w
           LEFT JOIN (
             SELECT workout_id,
                    COUNT(*)::int AS set_count,
                    SUM(reps)::int AS rep_count,
                    SUM(reps * weight_kg) AS volume
             FROM workout_sets
             GROUP BY workout_id
           ) sets ON sets.workout_id = w.id
           WHERE w.user_id = $1`,
          [req.user.id],
        ),
        pool.query(
          `SELECT w.id,
                  to_char(w.workout_date, 'YYYY-MM-DD') AS "workoutDate",
                  COALESCE(p.name, 'Independent workout') AS "planName",
                  w.duration_min AS "durationMin",
                  COUNT(ws.id)::int AS sets
           FROM workouts w
           LEFT JOIN plans p ON p.id = w.plan_id
           LEFT JOIN workout_sets ws ON ws.workout_id = w.id
           WHERE w.user_id = $1
           GROUP BY w.id, p.name
           ORDER BY w.workout_date DESC, w.id DESC
           LIMIT 8`,
          [req.user.id],
        ),
        pool.query(
          `WITH weeks AS (
             SELECT generate_series(
               date_trunc('week', CURRENT_DATE) - INTERVAL '7 weeks',
               date_trunc('week', CURRENT_DATE),
               INTERVAL '1 week'
             )::date AS week_start
           )
           SELECT to_char(weeks.week_start, 'YYYY-MM-DD') AS "weekStart",
                  COUNT(w.id)::int AS workouts
           FROM weeks
           LEFT JOIN workouts w
             ON date_trunc('week', w.workout_date)::date = weeks.week_start
            AND w.user_id = $1
           GROUP BY weeks.week_start
           ORDER BY weeks.week_start`,
          [req.user.id],
        ),
        pool.query(
          `SELECT e.name,
                  MAX(ws.weight_kg)::numeric AS "bestWeight"
           FROM workout_sets ws
           JOIN workouts w ON w.id = ws.workout_id
           JOIN exercises e ON e.id = ws.exercise_id
           WHERE w.user_id = $1 AND ws.weight_kg > 0
           GROUP BY e.id, e.name
           ORDER BY MAX(ws.weight_kg) DESC, e.name
           LIMIT 3`,
          [req.user.id],
        ),
      ])

    res.json({
      summary: summaryResult.rows[0],
      workouts: workoutsResult.rows,
      weeklyActivity: weeklyResult.rows,
      records: recordsResult.rows,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not load workout reports' })
  }
})

export default router
