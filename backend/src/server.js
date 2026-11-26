import express from 'express'
import cors from 'cors'
import https from 'node:https'
import { readFileSync } from 'node:fs'
import 'dotenv/config'
import { initializeAuthSchema } from './db.js'
import authRouter from './routes/auth.js'
import exercisesRouter from './routes/exercises.js'
import reportsRouter from './routes/reports.js'

const app = express()

app.use(cors({ origin: 'https://localhost:5173' }))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/exercises', exercisesRouter)
app.use('/api/reports', reportsRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

// self-signed certificate made by `npm run certs` (scripts/gen-certs.mjs)
const certDir = new URL('../../certs/', import.meta.url)
let tls
try {
  tls = {
    key: readFileSync(new URL('localhost-key.pem', certDir)),
    cert: readFileSync(new URL('localhost.pem', certDir)),
  }
} catch {
  console.error('No certificate found in certs/. Run "npm run certs" in the project root.')
  process.exit(1)
}

async function startServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      await initializeAuthSchema()
      break
    } catch (error) {
      if (attempt === 29) throw error
      if (attempt === 0) {
        console.warn('PostgreSQL is not ready yet; retrying database initialization for up to 30 seconds.')
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  https.createServer(tls, app).listen(process.env.PORT, () => {
  console.log(`API działa na https://localhost:${process.env.PORT}`)
  })
}

startServer().catch((error) => {
  console.error('Could not start the backend:', error)
  process.exitCode = 1
})
