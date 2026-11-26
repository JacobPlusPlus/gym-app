// makes a self-signed certificate for local https (used by both vite and the backend)
//
//   npm run certs              -> creates certs/ if it is missing or about to expire
//   npm run certs -- --force   -> always makes a new one
//
// the browser will warn that the certificate is not trusted, that is expected for
// a self-signed cert. click "Advanced" -> "Proceed to localhost" once.

import { X509Certificate } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import selfsigned from 'selfsigned'

const certDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'certs')
const keyPath = join(certDir, 'localhost-key.pem')
const certPath = join(certDir, 'localhost.pem')

const VALID_DAYS = 365
const RENEW_DAYS_BEFORE = 7

function daysLeft() {
  if (!existsSync(keyPath) || !existsSync(certPath)) return -1
  try {
    const { validTo } = new X509Certificate(readFileSync(certPath))
    return (new Date(validTo) - Date.now()) / 86_400_000
  } catch {
    return -1 // unreadable file, make a new one
  }
}

const force = process.argv.includes('--force')
const left = daysLeft()
if (!force && left > RENEW_DAYS_BEFORE) {
  console.log(`certs: using existing certificate (${Math.floor(left)} days left)`)
  process.exit(0)
}

const notAfter = new Date()
notAfter.setDate(notAfter.getDate() + VALID_DAYS)

const pems = await selfsigned.generate([{ name: 'commonName', value: 'localhost' }], {
  keyType: 'ec',
  algorithm: 'sha256', // the library defaults to sha1, which browsers reject
  notAfterDate: notAfter,
  extensions: [
    { name: 'basicConstraints', cA: false, critical: true },
    { name: 'keyUsage', digitalSignature: true, critical: true },
    { name: 'extKeyUsage', serverAuth: true },
    {
      name: 'subjectAltName',
      altNames: [
        { type: 2, value: 'localhost' },
        { type: 7, ip: '127.0.0.1' },
        { type: 7, ip: '::1' },
      ],
    },
  ],
})

mkdirSync(certDir, { recursive: true })
writeFileSync(keyPath, pems.private, { mode: 0o600 })
writeFileSync(certPath, pems.cert)

console.log(`certs: new self-signed certificate in certs/ (valid ${VALID_DAYS} days)`)
console.log(`certs: SHA-256 fingerprint ${new X509Certificate(pems.cert).fingerprint256}`)
