import { useCallback, useEffect, useState } from 'react'
import AuthContext from './auth-context'

const TOKEN_KEY = 'gymAppToken'

async function readResponse(response) {
  const payload = response.status === 204 ? null : await response.json()
  if (!response.ok) {
    throw new Error(payload?.error || 'The request could not be completed')
  }
  return payload
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(Boolean(token))
  const [verificationError, setVerificationError] = useState('')
  const [verificationAttempt, setVerificationAttempt] = useState(0)

  useEffect(() => {
    if (!token) {
      return undefined
    }

    let active = true

    fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(async (response) => {
        if (response.status === 401) {
          localStorage.removeItem(TOKEN_KEY)
          if (active) {
            setToken(null)
            setUser(null)
            setLoading(false)
            setVerificationError('')
          }
          return
        }

        const payload = await readResponse(response)
        if (active) setUser(payload.user)
      })
      .catch((error) => {
        if (active) setVerificationError(error.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [token, verificationAttempt])

  const saveSession = (session) => {
    localStorage.setItem(TOKEN_KEY, session.token)
    setToken(session.token)
    setUser(session.user)
    setLoading(false)
    setVerificationError('')
  }

  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const session = await readResponse(response)
    saveSession(session)
  }

  const register = async (username, email, password) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
    const session = await readResponse(response)
    saveSession(session)
  }

  const apiFetch = useCallback(async (path, options = {}) => {
    const headers = new Headers(options.headers)
    if (token) headers.set('Authorization', `Bearer ${token}`)

    const response = await fetch(path, { ...options, headers })
    if (response.status === 401 && token) {
      localStorage.removeItem(TOKEN_KEY)
      setToken(null)
      setUser(null)
    }
    return readResponse(response)
  }, [token])

  const logout = async () => {
    if (token) {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })
      await readResponse(response)
    }

    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
  }

  const retrySessionVerification = () => {
    setLoading(true)
    setVerificationError('')
    setVerificationAttempt((attempt) => attempt + 1)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        verificationError,
        login,
        register,
        logout,
        apiFetch,
        updateUser: setUser,
        retrySessionVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
