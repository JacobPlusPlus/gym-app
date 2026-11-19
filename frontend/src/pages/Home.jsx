import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(
    new Date(`${date}T00:00:00`),
  )

const Home = () => {
  const [report, setReport] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/reports')
      .then((response) => {
        if (!response.ok) throw new Error('Request failed')
        return response.json()
      })
      .then(setReport)
      .catch(() => setError(true))
  }, [])

  const maxWorkouts = Math.max(
    ...(report?.weeklyActivity.map((week) => week.workouts) ?? [0]),
    1,
  )

  return (
    <div className="page dashboard-page">
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <span className="hero-kicker"><span className="hero-kicker-dot" /> YOUR TRAINING SPACE</span>
          <h1>Make every session<br />count.</h1>
          <p>Your progress starts with showing up. Keep building strength, one workout at a time.</p>
          <Link className="btn hero-button" to="/workout">
            <span aria-hidden="true">▶</span> Start a workout
          </Link>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="hero-orbit-ring hero-orbit-ring-outer" />
          <div className="hero-orbit-ring hero-orbit-ring-inner" />
          <div className="hero-orbit-core"><span>G</span></div>
          <span className="hero-orbit-spark">✦</span>
          <span className="hero-orbit-label">SHOW UP<br />GET STRONGER</span>
        </div>
        <div className="hero-bottom-line">
          <span>SMALL STEPS. STRONGER YOU.</span>
          <span>{new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date())}</span>
        </div>
      </section>

      <div className="dashboard-section-heading">
        <div>
          <span className="eyebrow">YOUR OVERVIEW</span>
          <h2>This is your momentum.</h2>
        </div>
        <Link className="text-link" to="/reports">View reports <span aria-hidden="true">↗</span></Link>
      </div>

      {error && (
        <div className="dashboard-notice" role="status">
          Workout stats are unavailable right now. Check that the backend and database are running.
        </div>
      )}

      <section className="dashboard-stats">
        <article className="dashboard-stat-card">
          <div className="dashboard-stat-top"><span className="dashboard-stat-icon">◷</span><span className="stat-trend">ALL TIME</span></div>
          <p>Workouts completed</p>
          <strong>{report?.summary.workouts ?? '—'}</strong>
          <span className="stat-footnote">Every session adds up</span>
        </article>
        <article className="dashboard-stat-card">
          <div className="dashboard-stat-top"><span className="dashboard-stat-icon">↗</span><span className="stat-trend">ALL TIME</span></div>
          <p>Time invested</p>
          <strong>
            {report ? <>{Math.floor(report.summary.minutes / 60)}<small>h</small> {report.summary.minutes % 60}<small>m</small></> : '—'}
          </strong>
          <span className="stat-footnote">Time spent getting stronger</span>
        </article>
        <article className="dashboard-stat-card">
          <div className="dashboard-stat-top"><span className="dashboard-stat-icon">▦</span><span className="stat-trend">ALL TIME</span></div>
          <p>Sets completed</p>
          <strong>{report?.summary.sets ?? '—'}</strong>
          <span className="stat-footnote">One rep at a time</span>
        </article>
      </section>

      <section className="dashboard-lower-grid">
        <article className="dashboard-panel activity-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">CONSISTENCY</span><h2>Weekly activity</h2></div>
            <span className="panel-period">LAST 8 WEEKS</span>
          </div>
          {report ? (
            <div className="activity-chart" aria-label="Workouts per week over the last eight weeks">
              {report.weeklyActivity.map((week) => (
                <div className="activity-column" key={week.weekStart} title={`${week.workouts} workouts`}>
                  <span className="activity-value">{week.workouts || ''}</span>
                  <div className="activity-track">
                    <div className={`activity-bar ${week.workouts ? 'has-activity' : ''}`} style={{ height: `${Math.max((week.workouts / maxWorkouts) * 100, 5)}%` }} />
                  </div>
                  <span className="activity-label">{formatDate(week.weekStart)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="dashboard-chart-placeholder">Loading your activity...</div>
          )}
          <div className="chart-legend"><span /> Completed workouts <span className="chart-legend-note">A little consistency goes a long way.</span></div>
        </article>

        <article className="dashboard-panel latest-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">KEEP IT GOING</span><h2>Recent sessions</h2></div>
            <Link className="panel-link" to="/reports" aria-label="See all workout reports">↗</Link>
          </div>
          {report?.workouts.length ? (
            <div className="recent-session-list">
              {report.workouts.slice(0, 4).map((workout, index) => (
                <div className="recent-session" key={workout.id}>
                  <span className={`session-index session-index-${index + 1}`}>0{index + 1}</span>
                  <div className="session-info">
                    <strong>{workout.planName}</strong>
                    <span>{formatDate(workout.workoutDate)}{workout.durationMin ? ` · ${workout.durationMin} min` : ''}</span>
                  </div>
                  <span className="session-sets">{workout.sets}<small> sets</small></span>
                </div>
              ))}
            </div>
          ) : (
            <div className="dashboard-empty">
              <span className="empty-dumbbell" aria-hidden="true">↗</span>
              <strong>Your first session is waiting.</strong>
              <p>Start a workout and your history will show up here.</p>
              <Link className="text-link" to="/workout">Explore workout plans →</Link>
            </div>
          )}
        </article>
      </section>

      <section className="dashboard-cta">
        <div className="cta-mark" aria-hidden="true">✦</div>
        <div><span className="eyebrow">READY WHEN YOU ARE</span><h2>One more workout can change your week.</h2></div>
        <Link className="btn btn-primary" to="/workout">Explore workout plans <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  )
}

export default Home
