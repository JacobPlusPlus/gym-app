import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import https from 'node:https'
import { defineConfig } from 'vite'

// self-signed certificate made by `npm run certs` (scripts/gen-certs.mjs)
function loadCert() {
  try {
    return {
      key: readFileSync(new URL('../certs/localhost-key.pem', import.meta.url)),
      cert: readFileSync(new URL('../certs/localhost.pem', import.meta.url)),
    }
  } catch {
    throw new Error('No certificate found in certs/. Run "npm run certs" in the project root.')
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // `vite build` does not need the certificate
  if (command !== 'serve') return { plugins: [react()] }

  const tls = loadCert()
  return {
    plugins: [react()],
    server: {
      https: tls,
      proxy: {
        '/api': {
          target: 'https://localhost:3000',
          // the backend uses the same self-signed cert, so trust exactly that one
          // instead of turning certificate checks off
          agent: new https.Agent({ ca: tls.cert }),
        },
      },
    },
  }
})
