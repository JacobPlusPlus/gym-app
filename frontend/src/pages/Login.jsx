import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GymAppIcon } from '../components/Icons'

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [notice] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
    });

    const data = await response.json();

    if(response.ok) {
      console.log("Zalogowano: ", data.email);
    }
    else {
      console.log("Nie udało się zalogować");
    }

    //setNotice('Account sign-in is not connected yet. Use demo access to explore the app.')
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
          <span>New to GymApp?</span>
          <button type="button" className="login-demo-link" onClick={() => navigate('/')}>
            Explore the app <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="login-card">
          <div className="login-mobile-brand">
            <GymAppIcon />
            <span><strong>Gym</strong>App</span>
          </div>
          <span className="eyebrow">WELCOME BACK</span>
          <h2>Sign in to your<br />training space.</h2>
          <p className="login-intro">Pick up where you left off and keep your momentum going.</p>

          <form className="login-form" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                autoComplete="current-password"
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

            {notice && <p className="login-notice" role="status">{notice}</p>}

            <button type="submit" className="btn btn-primary login-submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="login-divider"><span>OR</span></div>

          <div className="login-demo-note">
            <span className="login-demo-icon" aria-hidden="true">✦</span>
            <p><strong>Just looking around?</strong><br />Sign-in isn’t connected yet. Explore the app in demo mode.</p>
          </div>
          <button type="button" className="btn btn-secondary login-demo-button" onClick={() => navigate('/')}>
            Continue with demo access
          </button>
        </div>

        <p className="login-legal">By continuing, you agree to focus on progress, not perfection.</p>
      </section>
    </main>
  )
}

export default Login
