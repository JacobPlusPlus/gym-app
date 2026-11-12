import { useEffect, useState } from 'react'

const formatDate = (date, options = { month: 'short', day: 'numeric', year: 'numeric' }) =>
  new Intl.DateTimeFormat('en', options).format(new Date(`${date}T00:00:00`))

const Reports = () => {
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
    <div className="page reports-page">
      <header className="reports-hero">
        <div>
          <span className="hero-kicker"><span className="hero-kicker-dot" /> YOUR TRAINING, MEASURED</span>
          <h1>Progress you<br />can <span>feel.</span></h1>
          <p>Every session tells a story. Here’s yours so far.</p>
        </div>
        <div className="reports-hero-mark" aria-hidden="true">
          <div className="reports-mark-circle"><span>↗</span></div>
          <span className="reports-mark-caption">BUILT<br />BY YOU</span>
        </div>
        <div className="reports-hero-footer">
          <span>YOUR WORKOUT JOURNAL</span>
          <span>{report ? `${report.summary.workouts} sessions logged` : 'Loading your sessions'}</span>
        </div>
      </header>

      {error && (
        <div className="dashboard-notice" role="alert">
          Could not load workout reports. Check that the backend and database are running, then refresh this page.
        </div>
      )}

      <section className="report-metrics">
        <article className="report-metric report-metric-featured">
          <span className="metric-icon">◷</span>
          <span className="metric-label">TOTAL WORKOUTS</span>
          <strong>{report?.summary.workouts ?? '—'}</strong>
          <span className="metric-caption">Sessions completed</span>
        </article>
        <article className="report-metric">
          <span className="metric-icon">⌁</span>
          <span className="metric-label">TRAINING TIME</span>
          <strong>{report ? `${Math.floor(report.summary.minutes / 60)}h ${report.summary.minutes % 60}m` : '—'}</strong>
          <span className="metric-caption">Time invested in yourself</span>
        </article>
        <article className="report-metric">
          <span className="metric-icon">▦</span>
          <span className="metric-label">SETS COMPLETED</span>
          <strong>{report?.summary.sets ?? '—'}</strong>
          <span className="metric-caption">All logged working sets</span>
        </article>
        <article className="report-metric">
          <span className="metric-icon">↗</span>
          <span className="metric-label">TOTAL REPS</span>
          <strong>{report?.summary.reps ?? '—'}</strong>
          <span className="metric-caption">Repetitions recorded</span>
        </article>
      </section>

      <section className="reports-content-grid">
        <article className="dashboard-panel report-activity-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">SHOWING UP</span><h2>Training rhythm</h2></div>
            <span className="panel-period">8 WEEK VIEW</span>
          </div>
          <p className="report-panel-intro">Your completed sessions, week by week.</p>
          {report ? (
            <div className="activity-chart report-chart" aria-label="Workouts per week over the last eight weeks">
              {report.weeklyActivity.map((week) => (
                <div className="activity-column" key={week.weekStart} title={`${week.workouts} workouts`}>
                  <span className="activity-value">{week.workouts || ''}</span>
                  <div className="activity-track">
                    <div className={`activity-bar ${week.workouts ? 'has-activity' : ''}`} style={{ height: `${Math.max((week.workouts / maxWorkouts) * 100, 5)}%` }} />
                  </div>
                  <span className="activity-label">{formatDate(week.weekStart, { month: 'short', day: 'numeric' })}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="dashboard-chart-placeholder">Your activity chart will appear here.</div>
          )}
          <div className="chart-legend"><span /> Workouts completed</div>
        </article>

        <article className="dashboard-panel records-panel">
          <div className="panel-heading">
            <div><span className="eyebrow">PERSONAL BESTS</span><h2>Top lifts</h2></div>
            <span className="records-trophy" aria-hidden="true">✦</span>
          </div>
          <p className="report-panel-intro">Your heaviest logged sets.</p>
          {report?.records.length ? (
            <div className="record-list">
              {report.records.map((record, index) => (
                <div className="record-item" key={record.name}>
                  <span className="record-rank">0{index + 1}</span>
                  <span className="record-name">{record.name}</span>
                  <strong>{Number(record.bestWeight).toLocaleString('en')}<small> kg</small></strong>
                </div>
              ))}
            </div>
          ) : (
            <div className="record-empty">
              <span aria-hidden="true">✦</span>
              <p>Log weighted sets to see your personal bests here.</p>
            </div>
          )}
        </article>
      </section>

      <section className="dashboard-panel history-panel">
        <div className="panel-heading history-heading">
          <div><span className="eyebrow">THE WORK YOU PUT IN</span><h2>Workout history</h2></div>
          <span className="panel-period">{report?.workouts.length ?? 0} RECENT SESSIONS</span>
        </div>
        {report?.workouts.length ? (
          <div className="history-table-wrap">
            <table className="history-table">
              <thead>
                <tr><th>SESSION</th><th>DATE</th><th>DURATION</th><th>SETS</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                {report.workouts.map((workout) => (
                  <tr key={workout.id}>
                    <td><span className="history-session-icon">↗</span><strong>{workout.planName}</strong></td>
                    <td>{formatDate(workout.workoutDate)}</td>
                    <td>{workout.durationMin ? `${workout.durationMin} min` : '—'}</td>
                    <td>{workout.sets}</td>
                    <td><span className="session-status"><span /> Completed</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="history-empty">
            <span className="history-empty-icon" aria-hidden="true">◷</span>
            <strong>No workouts logged yet</strong>
            <p>Your completed sessions will appear here. Start with one workout and build from there.</p>
          </div>
        )}
      </section>

      <p className="reports-footnote">Your reports are based on workout sessions saved to your account.</p>
    </div>
  )
}

export default Reports
