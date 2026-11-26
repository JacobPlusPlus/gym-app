import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GymAppIcon } from '../components/Icons'
import { useAuth } from '../context/useAuth'

function Login() {
  const navigate = useNavigate()
  const { user, login, register } = useAuth()
  const [isRegistering, setIsRegistering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (user) return <Navigate to="/" replace />

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    if (isRegistering && password !== formData.get('confirmPassword')) {
      setError('Passwords do not match')
      return
    }

    setIsSubmitting(true)
    try {
      if (isRegistering) {
        await register(username, email, password)
      } else {
        await login(email, password)
      }
      navigate('/', { replace: true })
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleMode = () => {
    setIsRegistering((current) => !current)
    setError('')
  }

  return (
    <main className="login-shell">
      <section className="login-showcase">
        <Link to="/" className="login-brand">
          <GymAppIcon />
          <span><strong>Gym</strong>App</span>
        </Link>

        <div className="login-showcase-copy">
          <span className="hero-kicker"><span className="hero-kicker-dot" /> YOUR TRAINING, YOUR PACE</span>
          <h1>Stronger starts<br />with <span>showing up.</span></h1>
          <p>Make space for your goals. Keep track of your sessions. See how far you’ve come.</p>
        </div>

        <div className="login-showcase-art" aria-hidden="true">
          <div className="login-art-ring login-art-ring-one" />
          <div className="login-art-ring login-art-ring-two" />
          <div className="login-art-dumbbell">
            <span />
            <i />
            <b />
            <i />
            <span />
          </div>
          <div className="login-art-chip login-art-chip-top">✦ <span>SHOW UP</span></div>
          <div className="login-art-chip login-art-chip-bottom"><span>ONE SESSION AT A TIME</span> ↗</div>
        </div>

        <div className="login-showcase-footer">
          <span>BUILT FOR YOUR NEXT PERSONAL BEST</span>
          <span>01 — 03</span>
        </div>
      </section>

      <section className="login-form-side">
        <div className="login-form-top">
          <span>{isRegistering ? 'Already have an account?' : 'New to GymApp?'}</span>
          <button type="button" className="login-mode-toggle" onClick={toggleMode}>
            {isRegistering ? 'Sign in' : 'Create an account'} <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="login-card">
          <div className="login-mobile-brand">
            <GymAppIcon />
            <span><strong>Gym</strong>App</span>
          </div>
          <span className="eyebrow">{isRegistering ? 'GET STARTED' : 'WELCOME BACK'}</span>
          <h2>{isRegistering ? <>Create your<br />training account.</> : <>Sign in to your<br />training space.</>}</h2>
          <p className="login-intro">
            {isRegistering
              ? 'Create an account to save your profile and training progress.'
              : 'Pick up where you left off and keep your momentum going.'}
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            {isRegistering && (
              <>
                <label htmlFor="login-username">Username</label>
                <input
                  id="login-username"
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Your name"
                  autoComplete="nickname"
                  minLength="3"
                  maxLength="50"
                  required
                />
              </>
            )}

            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              className="input"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <div className="login-password-label">
              <label htmlFor="login-password">Password</label>
            </div>
            <div className="login-password-field">
              <input
                id="login-password"
                className="input"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={isRegistering ? 'At least 8 characters' : 'Enter your password'}
                autoComplete={isRegistering ? 'new-password' : 'current-password'}
                minLength={isRegistering ? 8 : undefined}
                maxLength="128"
                required
              />
              <button
                type="button"
                className="login-password-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {isRegistering && (
              <>
                <label htmlFor="login-confirm-password">Confirm password</label>
                <input
                  id="login-confirm-password"
                  className="input"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  minLength="8"
                  maxLength="128"
                  required
                />
              </>
            )}

            {error && <p className="login-notice" role="alert">{error}</p>}

            <button type="submit" className="btn btn-primary login-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Please wait...' : isRegistering ? 'Create account' : 'Sign in'}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        <p className="login-legal">By continuing, you agree to focus on progress, not perfection.</p>
      </section>
    </main>
  )
}

export default Login
