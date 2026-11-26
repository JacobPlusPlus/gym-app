import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const scrypt = promisify(scryptCallback)
const KEY_LENGTH = 64
const SALT_LENGTH = 16
const SCRYPT_OPTIONS = { N: 16_384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }

export async function hashPassword(password) {
  const salt = randomBytes(SALT_LENGTH)
  const derivedKey = await scrypt(password, salt, KEY_LENGTH, SCRYPT_OPTIONS)
  return `scrypt$${salt.toString('base64url')}$${derivedKey.toString('base64url')}`
}

export async function verifyPassword(password, encodedHash) {
  const [algorithm, saltText, keyText, extra] = encodedHash.split('$')
  if (algorithm !== 'scrypt' || !saltText || !keyText || extra !== undefined) return false

  const salt = Buffer.from(saltText, 'base64url')
  const expectedKey = Buffer.from(keyText, 'base64url')
  if (salt.length !== SALT_LENGTH || expectedKey.length !== KEY_LENGTH) return false

  const actualKey = await scrypt(password, salt, KEY_LENGTH, SCRYPT_OPTIONS)
  return timingSafeEqual(expectedKey, actualKey)
}

export function createSessionToken() {
  return randomBytes(32).toString('base64url')
}

export function hashSessionToken(token) {
  return createHash('sha256').update(token).digest('hex')
}
