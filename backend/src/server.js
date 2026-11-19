import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import exercisesRouter from './routes/exercises.js'
import reportsRouter from './routes/reports.js'
import authRouter from './routes/auth.js'
import session from 'express-session'

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(
  session({
    secret: 'PLMOKNIJBUHVYGCTFXRDZESWAQ',
    resave: false,
    saveUninitialized: false
  })
)

app.use('/api/exercises', exercisesRouter)
app.use('/api/reports', reportsRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(process.env.PORT, () => {
  console.log(`API działa na http://localhost:${process.env.PORT}`)
})