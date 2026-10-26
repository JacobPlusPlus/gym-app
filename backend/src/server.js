import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import exercisesRouter from './routes/exercises.js'

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/exercises', exercisesRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(process.env.PORT, () => {
  console.log(`API działa na http://localhost:${process.env.PORT}`)
})