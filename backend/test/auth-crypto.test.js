import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { createSessionToken, hashPassword, hashSessionToken, verifyPassword } from '../src/auth/crypto.js'

describe('authentication cryptography', () => {
  it('stores a password as a salted hash and verifies only the original password', async () => {
    const password = 'correct-horse-battery'
    const encodedHash = await hashPassword(password)

    assert.notEqual(encodedHash, password)
    assert.notEqual(await hashPassword(password), encodedHash)
    assert.equal(await verifyPassword(password, encodedHash), true)
    assert.equal(await verifyPassword('wrong-password', encodedHash), false)
  })

  it('rejects malformed password hashes', async () => {
    assert.equal(await verifyPassword('password', 'not-a-hash'), false)
  })

  it('creates opaque session tokens and deterministic token hashes', () => {
    const firstToken = createSessionToken()
    const secondToken = createSessionToken()

    assert.match(firstToken, /^[\w-]{43}$/)
    assert.notEqual(firstToken, secondToken)
    assert.equal(hashSessionToken(firstToken), hashSessionToken(firstToken))
    assert.notEqual(hashSessionToken(firstToken), firstToken)
  })
})
