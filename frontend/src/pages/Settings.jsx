const Settings = () => {
  return (
    <div className="home-content">
      <section className="section">
        <p className="muted">PERSONALIZE YOUR EXPERIENCE</p>
        <h1 className="page-title">Settings</h1>
        <p className="muted">Manage your preferences and customize your GymApp experience.</p>
      </section>

      <section className="section">
        <h2>Appearance</h2>

        <div className="card-list">
          <div className="card">
            <h3>Theme</h3>
            <p>Choose between dark and light mode.</p>
          </div>

          <div className="card">
            <h3>Interface</h3>
            <p>Customize the way GymApp looks and feels.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Workout Preferences</h2>

        <div className="card-list">
          <div className="card">
            <h3>Weight Unit</h3>
            <p>Choose kilograms (kg) or pounds (lbs).</p>
          </div>

          <div className="card">
            <h3>Default Rest Time</h3>
            <p>Set your preferred rest time between workout sets.</p>
          </div>

          <div className="card">
            <h3>Training Goals</h3>
            <p>Manage your fitness goals and training preferences.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>General Preferences</h2>

        <div className="card-list">
          <div className="card">
            <h3>Language</h3>
            <p>Choose your preferred application language.</p>
          </div>

          <div className="card">
            <h3>Notifications</h3>
            <p>Manage workout reminders and application notifications.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Data & Privacy</h2>

        <div className="card-list">
          <div className="card">
            <h3>Workout Data</h3>
            <p>Manage your workout history and training information.</p>
          </div>

          <div className="card">
            <h3>Account Privacy</h3>
            <p>Manage your personal information and privacy preferences.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>About</h2>

        <div className="card">
          <h3>GymApp</h3>
          <p>Version 1.0.0</p>
          <p className="muted">Your personal fitness and workout tracking application.</p>
        </div>
      </section>
    </div>
  );
};

export default Settings;
