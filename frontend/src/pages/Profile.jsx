import { useEffect, useState } from 'react'
import { useAuth } from '../context/useAuth'

const Profile = () => {
  const { user, apiFetch, updateUser } = useAuth()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [report, setReport] = useState(null)
  const [form, setForm] = useState({
    username: user.username,
    email: user.email,
    weightKg: user.weightKg ?? '',
    heightCm: user.heightCm ?? '',
  })

  useEffect(() => {
    apiFetch('/api/reports')
      .then(setReport)
      .catch((requestError) => setError(requestError.message))
  }, [apiFetch])

  const initials = user.username.trim().split(/\s+/).slice(0, 2)
    .map((part) => part[0]).join('').toUpperCase()
  const memberSince = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })
    .format(new Date(user.createdAt))

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSaving(true)
    setError('')
    try {
      const { user: updatedUser } = await apiFetch('/api/auth/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          weightKg: form.weightKg === '' ? null : Number(form.weightKg),
          heightCm: form.heightCm === '' ? null : Number(form.heightCm),
        }),
      })
      updateUser(updatedUser)
      setEditing(false)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setSaving(false)
    }
  }

  const stats = [
    { icon: '◷', label: 'Workouts completed', value: report?.summary.workouts ?? '—' },
    {
      icon: '↗',
      label: 'Total volume',
      value: report ? `${Number(report.summary.volume).toLocaleString('en')} kg` : '—',
    },
    {
      icon: '◴',
      label: 'Training time',
      value: report
        ? `${Math.floor(report.summary.minutes / 60)} h ${report.summary.minutes % 60} m`
        : '—',
    },
    { icon: '▦', label: 'Sets completed', value: report?.summary.sets ?? '—' },
  ]

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Your profile</h1>
          <p className="muted">Manage your account details and see your training progress.</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!editing) {
              setForm({
                username: user.username,
                email: user.email,
                weightKg: user.weightKg ?? '',
                heightCm: user.heightCm ?? '',
              })
            }
            setEditing((current) => !current)
            setError('')
          }}
        >
          {editing ? 'Cancel' : 'Edit profile'}
        </button>
      </header>

      <section className="card row row-between">
        <div className="row">
          <div className="profile-avatar">{initials}</div>
          <div>
            <h2>{user.username}</h2>
            <p className="muted">{user.email}</p>
            <span className="badge">GymApp member</span>
          </div>
        </div>
        <div className="stack stack-end">
          <span className="eyebrow">Member since</span>
          <strong>{memberSince}</strong>
          <span className="text-success">● Active account</span>
        </div>
      </section>

      <section className="grid-4">
        {stats.map((stat) => (
          <article className="card" key={stat.label}>
            <span className="icon-box">{stat.icon}</span>
            <p className="muted stat-label">{stat.label}</p>
            <h3>{stat.value}</h3>
          </article>
        ))}
      </section>

      {error && <p className="login-notice" role="alert">{error}</p>}

      <section className="card">
        <div className="card-header">
          <h2>Account details</h2>
          <p className="muted">Your profile is shared across your GymApp screens.</p>
        </div>
        {editing ? (
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Username
              <input
                className="input"
                name="username"
                value={form.username}
                onChange={handleChange}
                minLength="3"
                maxLength="50"
                required
              />
            </label>
            <label>
              Email address
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                maxLength="100"
                required
              />
            </label>
            <label>
              Weight (kg)
              <input
                className="input"
                type="number"
                name="weightKg"
                value={form.weightKg}
                onChange={handleChange}
                min="1"
                max="999.99"
                step="0.01"
              />
            </label>
            <label>
              Height (cm)
              <input
                className="input"
                type="number"
                name="heightCm"
                value={form.heightCm}
                onChange={handleChange}
                min="30"
                max="300"
                step="1"
              />
            </label>
            <button className="btn btn-primary form-full" type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save changes'}
            </button>
          </form>
        ) : (
          <div className="profile-details-grid">
            <div><span>Username</span><strong>{user.username}</strong></div>
            <div><span>Email address</span><strong>{user.email}</strong></div>
            <div><span>Weight</span><strong>{user.weightKg ? `${user.weightKg} kg` : 'Not set'}</strong></div>
            <div><span>Height</span><strong>{user.heightCm ? `${user.heightCm} cm` : 'Not set'}</strong></div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Profile
