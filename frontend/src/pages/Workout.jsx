const Workout = () => {
  return (
    <div className="workout-content">
      <section className="section">
        <p className="muted">WORKOUT PLANNING AND TRAINING</p>
        <h1 className="page-title">Your Workouts</h1>
        <p className="muted">
          Plan your workout sessions and track your progress.
        </p>
      </section>

      <section className="section">
        <h2>Summary</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Active Plan</p>
            <h3>None selected</h3>
            <p>Choose a plan that matches your goal.</p>
          </div>

          <div className="card">
            <p className="muted">Exercises in Plan</p>
            <h2>—</h2>
            <p>Number of exercises to complete.</p>
          </div>

          <div className="card">
            <p className="muted">Last Workout</p>
            <h3>No data</h3>
            <p>Your history will appear here.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Sample Workout Plans</h2>

        <div className="card-list">
          <div className="card">
            <h3>Push</h3>
            <p className="muted">Chest, shoulders, triceps</p>
            <ul>
              <li>Barbell Bench Press</li>
              <li>Dumbbell Overhead Press</li>
              <li>Cable Triceps Extension</li>
            </ul>
            <p className="muted">Sample plan</p>
          </div>

          <div className="card">
            <h3>Pull</h3>
            <p className="muted">Back, rear shoulders, biceps</p>
            <ul>
              <li>Row</li>
              <li>Lat Pulldown</li>
              <li>Dumbbell Curl</li>
            </ul>
            <p className="muted">Sample plan</p>
          </div>

          <div className="card">
            <h3>Legs</h3>
            <p className="muted">Thighs, glutes, calves</p>
            <ul>
              <li>Barbell Squat</li>
              <li>Machine Leg Curl</li>
              <li>Calf Raise</li>
            </ul>
            <p className="muted">Sample plan</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Recent Workouts</h2>

        <div className="card">
          <p>You have no saved workouts yet.</p>
          <p className="muted">
            Once workout logging is available, your workout dates, durations, and exercises will appear here.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Workout Logging</h2>

        <div className="card">
          <h3>Track Every Set</h3>
          <p>
            In the future, you will be able to choose an exercise, enter the weight and reps, and save each set.
          </p>
          <p className="muted">
            This feature will be added in a later stage of the project.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Workout