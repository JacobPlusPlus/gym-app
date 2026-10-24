const Profile = () => {
  return (
    <div className="profile-content">
      <section className="section">
        <p className="muted">YOUR ACCOUNT</p>
        <h1 className="page-title">User Profile</h1>
        <p className="muted">
          Manage your details, goals, and workout progress.
        </p>
      </section>

      <section className="section">
        <h2>User Information</h2>

        <div className="card">
          <h3>Your Profile</h3>
          <p>Username: Not set</p>
          <p>Age: —</p>
          <p>Height: —</p>
          <p>Body weight: —</p>
          <p className="muted">
            You will be able to add your details in the future.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Workout Goals</h2>

        <div className="card-list">
          <div className="card">
            <h3>Primary Goal</h3>
            <p>No goal selected.</p>
            <p className="muted">
              For example, building muscle.
            </p>
          </div>

          <div className="card">
            <h3>Weight Goal</h3>
            <p>Current weight: —</p>
            <p>Target weight: —</p>
          </div>

          <div className="card">
            <h3>Workout Priority</h3>
            <p>No priority set.</p>
            <p className="muted">
              For example, strength, muscle building, or fitness.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Body Measurements</h2>

        <div className="card">
          <p>Body weight: —</p>
          <p>Chest circumference: —</p>
          <p>Waist circumference: —</p>
          <p>Arm circumference: —</p>
          <p className="muted">
            Measurement history and a progress chart will be available once data logging is added.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Workout Activity</h2>

        <div className="card-list">
          <div className="card">
            <h3>Workouts</h3>
            <p className="muted">Total</p>
            <h2>—</h2>
          </div>

          <div className="card">
            <h3>Sets</h3>
            <p className="muted">Total</p>
            <h2>—</h2>
          </div>

          <div className="card">
            <h3>Consistency</h3>
            <p className="muted">Activity history</p>
            <h2>—</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Settings</h2>

        <div className="card">
          <p>Weight units: kg</p>
          <p>Height units: cm</p>
          <p>Workout preferences: not set</p>
          <p className="muted">
            Editing your details and preferences will be added in the future.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Profile