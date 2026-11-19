import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

const STORAGE_KEY = 'gymAppPreferences'

const defaultPreferences = {
  weightUnit: 'kg',
  restTime: '90',
  weeklyGoal: '4',
  workoutReminders: true,
}

const readPreferences = () => {
  try {
    return { ...defaultPreferences, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  } catch {
    return defaultPreferences
  }
}

const Settings = () => {
  const { theme, setTheme } = useOutletContext()
  const [preferences, setPreferences] = useState(readPreferences)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  }, [preferences])

  const updatePreference = (key, value) => {
    setPreferences((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="page settings-page">
      <header className="settings-hero">
        <div>
          <span className="hero-kicker"><span className="hero-kicker-dot" /> YOUR SPACE, YOUR RULES</span>
          <h1>Make it<br /><span>work for you.</span></h1>
          <p>Fine-tune your training setup and make GymApp feel like yours.</p>
        </div>
        <div className="settings-hero-art" aria-hidden="true">
          <div className="settings-gear">⚙</div>
          <span className="settings-art-dot settings-art-dot-one" />
          <span className="settings-art-dot settings-art-dot-two" />
          <span className="settings-art-label">YOUR<br />PREFERENCES</span>
        </div>
        <div className="settings-hero-footer">
          <span>SETTINGS</span>
          <span>Changes are saved automatically</span>
        </div>
      </header>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div><span className="eyebrow">THE LOOK</span><h2>Appearance</h2></div>
          <span className="settings-section-number">01</span>
        </div>
        <article className="settings-card">
          <div className="settings-card-icon">◐</div>
          <div className="settings-card-copy">
            <strong>Color theme</strong>
            <p>Choose the look that feels right for your training space.</p>
          </div>
          <div className="settings-segmented" role="group" aria-label="Color theme">
            <button
              type="button"
              className={theme === 'dark' ? 'selected' : ''}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              <span aria-hidden="true">☾</span> Dark
            </button>
            <button
              type="button"
              className={theme === 'light' ? 'selected' : ''}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              <span aria-hidden="true">☀</span> Light
            </button>
          </div>
        </article>
      </section>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div><span className="eyebrow">YOUR ROUTINE</span><h2>Workout preferences</h2></div>
          <span className="settings-section-number">02</span>
        </div>
        <div className="settings-card-list">
          <article className="settings-card">
            <div className="settings-card-icon">↗</div>
            <div className="settings-card-copy">
              <strong>Weight unit</strong>
              <p>Set the unit you prefer to track.</p>
            </div>
            <select
              className="input settings-select"
              aria-label="Weight unit"
              value={preferences.weightUnit}
              onChange={(event) => updatePreference('weightUnit', event.target.value)}
            >
              <option value="kg">Kilograms (kg)</option>
              <option value="lbs">Pounds (lbs)</option>
            </select>
          </article>

          <article className="settings-card">
            <div className="settings-card-icon">◷</div>
            <div className="settings-card-copy">
              <strong>Rest between sets</strong>
              <p>Your preferred recovery time between sets.</p>
            </div>
            <select
              className="input settings-select"
              aria-label="Rest time between sets"
              value={preferences.restTime}
              onChange={(event) => updatePreference('restTime', event.target.value)}
            >
              <option value="30">30 seconds</option>
              <option value="60">1 minute</option>
              <option value="90">1 minute 30 seconds</option>
              <option value="120">2 minutes</option>
              <option value="180">3 minutes</option>
            </select>
          </article>

          <article className="settings-card">
            <div className="settings-card-icon">▦</div>
            <div className="settings-card-copy">
              <strong>Weekly workout goal</strong>
              <p>Choose how many sessions you’re aiming for.</p>
            </div>
            <select
              className="input settings-select"
              aria-label="Weekly workout goal"
              value={preferences.weeklyGoal}
              onChange={(event) => updatePreference('weeklyGoal', event.target.value)}
            >
              {[2, 3, 4, 5, 6].map((goal) => (
                <option key={goal} value={goal}>{goal} workouts / week</option>
              ))}
            </select>
          </article>
        </div>
      </section>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div><span className="eyebrow">STAY IN THE LOOP</span><h2>Reminders</h2></div>
          <span className="settings-section-number">03</span>
        </div>
        <article className="settings-card">
          <div className="settings-card-icon">♧</div>
          <div className="settings-card-copy">
            <strong>Workout reminders</strong>
            <p>Keep your reminder preference ready for future notifications.</p>
          </div>
          <button
            type="button"
            className={`settings-switch ${preferences.workoutReminders ? 'is-on' : ''}`}
            role="switch"
            aria-checked={preferences.workoutReminders}
            aria-label="Workout reminders"
            onClick={() => updatePreference('workoutReminders', !preferences.workoutReminders)}
          >
            <span />
          </button>
        </article>
      </section>

      <section className="settings-account">
        <div className="settings-account-mark">AM</div>
        <div className="settings-account-copy">
          <span className="eyebrow">YOUR ACCOUNT</span>
          <strong>Alex Morgan</strong>
          <p>Language: English · GymApp version 1.0.0</p>
        </div>
        <Link to="/profile" className="btn btn-secondary">View profile <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  )
}

export default Settings
