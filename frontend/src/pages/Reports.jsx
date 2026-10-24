const Reports = () => {
  return (
    <div className="raport-content">
      <section className="section">
        <p className="muted">YOUR ACTIVITY AT A GLANCE</p>
        <h1 className="page-title">Workout Reports</h1>
        <p className="muted">
          Review your workout history and track your progress.
        </p>
      </section>

      <section className="section">
        <h2>Summary</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Number of Workouts</p>
            <h2>—</h2>
            <p>Total completed workouts</p>
          </div>

          <div className="card">
            <p className="muted">Completed Sets</p>
            <h2>—</h2>
            <p>Total number of sets</p>
          </div>

          <div className="card">
            <p className="muted">Reps</p>
            <h2>—</h2>
            <p>Total number of repetitions</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Workout History</h2>

        <div className="card">
          <p className="muted">
            Your saved workouts will appear here.
          </p>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Workout</th>
                <th>Duration</th>
                <th>Sets</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4">
                  No saved workouts.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Strength Progress</h2>

        <div className="card">
          <h3>Your Results</h3>
          <p>
            Bench Press: —
          </p>
          <p>
            Barbell Squat: —
          </p>
          <p>
            Deadlift: —
          </p>
          <p className="muted">
            Weight history and progress charts will be available once workout results are saved.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Weekly Activity</h2>

        <div className="card">
          <h3>Workout Consistency</h3>
          <p>
            See how many workouts you complete on different days and weeks.
          </p>
          <p className="muted">
            A chart will be added in the future.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Reports