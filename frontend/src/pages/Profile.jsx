import { useState } from "react";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex.morgan@example.com",
    weight: "78",
    height: "180",
    goal: "Build muscle",
    level: "Intermediate",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const stats = [
    { icon: "▦", label: "Total workouts", value: "128", detail: "+12 this month" },
    { icon: "↗", label: "Total volume", value: "84,320 kg", detail: "Across all workouts" },
    { icon: "◷", label: "Training time", value: "96 h", detail: "Time invested" },
    { icon: "♨", label: "Current streak", value: "6 weeks", detail: "Best: 9 weeks" },
  ];

  const achievements = [
    { icon: "🏆", title: "First 100 workouts", desc: "Completed on September 12, 2026" },
    { icon: "🔥", title: "Consistency is key", desc: "6 weeks of consistent training" },
    { icon: "💪", title: "Getting stronger", desc: "Improved your bench press" },
  ];

  return (
    <div className="page">
      {/* Page heading */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Your profile</h1>
          <p className="muted">Manage your details and keep track of your progress.</p>
        </div>

        <button className="btn btn-primary" onClick={() => setEditing(!editing)}>
          {editing ? "Cancel" : "Edit profile"}
        </button>
      </header>

      {/* User card */}
      <section className="card row row-between">
        <div className="row">
          <div className="profile-avatar">
            {user.firstName[0]}
            {user.lastName[0]}
          </div>

          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p className="muted">{user.email}</p>
            <div className="row row-tight">
              <span className="badge">Plan Pro</span>
              <span className="badge">{user.level}</span>
            </div>
          </div>
        </div>

        <div className="stack stack-end">
          <span className="eyebrow">Member since</span>
          <strong>January 2026</strong>
          <span className="text-success">● Active account</span>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid-4">
        {stats.map((stat) => (
          <article className="card" key={stat.label}>
            <span className="icon-box">{stat.icon}</span>
            <p className="muted stat-label">{stat.label}</p>
            <h3>{stat.value}</h3>
            <span className="muted">{stat.detail}</span>
          </article>
        ))}
      </section>

      {/* Personal details and goals */}
      <div className="grid-split">
        <section className="card">
          <div className="card-header">
            <h2>Personal details</h2>
            <p className="muted">Your basic information.</p>
          </div>

          {editing ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <label>
                First name
                <input className="input" name="firstName" value={user.firstName} onChange={handleChange} required />
              </label>

              <label>
                Last name
                <input className="input" name="lastName" value={user.lastName} onChange={handleChange} required />
              </label>

              <label>
                Email address
                <input className="input" type="email" name="email" value={user.email} onChange={handleChange} required />
              </label>

              <label>
                Weight (kg)
                <input className="input" type="number" name="weight" value={user.weight} onChange={handleChange} min="1" required />
              </label>

              <label>
                Height (cm)
                <input className="input" type="number" name="height" value={user.height} onChange={handleChange} min="1" required />
              </label>

              <label>
                Experience level
                <select className="input" name="level" value={user.level} onChange={handleChange}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>

              <label className="form-full">
                Training goal
                <select className="input" name="goal" value={user.goal} onChange={handleChange}>
                  <option>Build muscle</option>
                  <option>Improve strength</option>
                  <option>Improve fitness</option>
                  <option>Stay in shape</option>
                </select>
              </label>

              <button className="btn btn-primary form-full" type="submit">
                Save changes
              </button>
            </form>
          ) : (
            <div className="profile-details-grid">
              <div>
                <span>Full name</span>
                <strong>{user.firstName} {user.lastName}</strong>
              </div>
              <div>
                <span>Email address</span>
                <strong>{user.email}</strong>
              </div>
              <div>
                <span>Weight</span>
                <strong>{user.weight} kg</strong>
              </div>
              <div>
                <span>Height</span>
                <strong>{user.height} cm</strong>
              </div>
              <div>
                <span>Experience level</span>
                <strong>{user.level}</strong>
              </div>
              <div>
                <span>Training goal</span>
                <strong>{user.goal}</strong>
              </div>
            </div>
          )}
        </section>

        <section className="card">
          <div className="card-header row row-between">
            <div>
              <h2>Your goal</h2>
              <p className="muted">Your current training focus.</p>
            </div>
            <span className="icon-box">◎</span>
          </div>

          <div className="callout">
            <span className="eyebrow">Main goal</span>
            <h3>{user.goal}</h3>
            <p className="muted">
              Train consistently and gradually increase your weights.
            </p>
          </div>

          <div className="stack">
            <div className="row row-between">
              <span className="muted">Weekly plan progress</span>
              <strong>75%</strong>
            </div>
            <div className="progress">
              <div style={{ width: "75%" }} />
            </div>
            <span className="muted">3 of 4 planned workouts</span>
          </div>

          <h3 className="card-subtitle">Workout preferences</h3>

          <div className="list-row row-between">
            <span className="muted">Workout type</span>
            <strong>Strength training</strong>
          </div>
          <div className="list-row row-between">
            <span className="muted">Weekly target</span>
            <strong>4 workouts</strong>
          </div>
          <div className="list-row row-between">
            <span className="muted">Experience level</span>
            <strong>{user.level}</strong>
          </div>
        </section>
      </div>

      {/* Achievements */}
      <section className="card">
        <div className="card-header">
          <h2>Recent achievements</h2>
          <p className="muted">Your latest milestones.</p>
        </div>

        {achievements.map((item) => (
          <article className="list-row" key={item.title}>
            <span className="icon-box">{item.icon}</span>
            <div className="grow">
              <strong>{item.title}</strong>
              <p className="muted">{item.desc}</p>
            </div>
            <span className="text-success">Unlocked</span>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Profile;