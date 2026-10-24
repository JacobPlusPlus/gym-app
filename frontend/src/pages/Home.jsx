const Home = () => {
  return (
    <div className="home-content">
      <section className="section">
        <p className="muted">YOUR TRAINING, YOUR PROGRESS</p>
        <h1 className="page-title">Welcome to GymApp!</h1>
        <p className="muted">
          Plan workouts, explore exercises, and track your progress.
        </p>
      </section>

      <section className="section">
        <h2>Your Dashboard</h2>

        <div className="card-list">
          <div className="card">
            <h3>Workout</h3>
            <p>Start a workout and log your sets, reps, and weights.</p>
          </div>

          <div className="card">
            <h3>Exercises</h3>
            <p>Browse exercises and learn which muscle groups they target.</p>
          </div>

          <div className="card">
            <h3>Reports</h3>
            <p>Your workout history and progress will be available here in the future.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Where to Start</h2>

        <div className="card">
          <h3>Plan Your Workout</h3>
          <p>
            Go to the Workout section to start working toward your fitness goals.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Your Stats</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Workouts</p>
            <h3>—</h3>
            <p>Data will be available in the future.</p>
          </div>

          <div className="card">
            <p className="muted">Completed Sets</p>
            <h3>—</h3>
            <p>Data will be available in the future.</p>
          </div>

          <div className="card">
            <p className="muted">Progress</p>
            <h3>—</h3>
            <p>Data will be available in the future.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
