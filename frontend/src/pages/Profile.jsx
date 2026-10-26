import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    firstName: "Michał",
    lastName: "Kowalski",
    email: "michal.kowalski@example.com",
    weight: "78",
    height: "180",
    goal: "Budowanie masy mięśniowej",
    level: "Średniozaawansowany",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const stats = [
    {
      icon: "▦",
      label: "Treningi łącznie",
      value: "128",
      detail: "+12 w tym miesiącu",
    },
    {
      icon: "↗",
      label: "Łączna objętość",
      value: "84 320 kg",
      detail: "Wszystkie treningi",
    },
    {
      icon: "◷",
      label: "Czas treningów",
      value: "96 h",
      detail: "Łączny czas",
    },
    {
      icon: "♨",
      label: "Regularna seria",
      value: "6 tyg.",
      detail: "Najlepsza: 9 tyg.",
    },
  ];

  return (
    <main className="profile-page">
      <header className="profile-header">
        <div>
          <h1>Twój profil</h1>
          <p>Zarządzaj swoimi danymi i śledź postępy.</p>
        </div>

        <button
          className="profile-primary-button"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Anuluj edycję" : "Edytuj profil"}
        </button>
      </header>

      <section className="profile-hero">
        <div className="profile-identity">
          <div className="profile-avatar">
            {user.firstName[0]}
            {user.lastName[0]}
          </div>

          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>

            <p>{user.email}</p>

            <div className="profile-tags">
              <span className="profile-tag">Plan Pro</span>
              <span className="profile-tag">
                {user.level}
              </span>
            </div>
          </div>
        </div>

        <div className="profile-member-info">
          <span>DATA DOŁĄCZENIA</span>
          <strong>Styczeń 2026</strong>
          <span className="profile-member-status">
            ● Aktywne konto
          </span>
        </div>
      </section>

      <section className="profile-stats-grid">
        {stats.map((stat) => (
          <article className="profile-stat-card" key={stat.label}>
            <div className="profile-stat-top">
              <span className="profile-stat-icon">{stat.icon}</span>
            </div>

            <p>{stat.label}</p>
            <h3>{stat.value}</h3>
            <span className="profile-stat-detail">
              {stat.detail}
            </span>
          </article>
        ))}
      </section>

      <div className="profile-content-grid">
        <section className="profile-panel">
          <div className="profile-panel-heading">
            <div>
              <h2>Dane osobowe</h2>
              <p>Podstawowe informacje o Tobie.</p>
            </div>
          </div>

          {editing ? (
            <form
              className="profile-form"
              onSubmit={handleSubmit}
            >
              <label>
                Imię
                <input
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Nazwisko
                <input
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Adres e-mail
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Waga (kg)
                <input
                  type="number"
                  name="weight"
                  value={user.weight}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </label>

              <label>
                Wzrost (cm)
                <input
                  type="number"
                  name="height"
                  value={user.height}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </label>

              <label>
                Poziom zaawansowania
                <select
                  name="level"
                  value={user.level}
                  onChange={handleChange}
                >
                  <option>Początkujący</option>
                  <option>Średniozaawansowany</option>
                  <option>Zaawansowany</option>
                </select>
              </label>

              <label className="profile-form-full">
                Cel treningowy
                <select
                  name="goal"
                  value={user.goal}
                  onChange={handleChange}
                >
                  <option>Budowanie masy mięśniowej</option>
                  <option>Poprawa siły</option>
                  <option>Poprawa kondycji</option>
                  <option>Utrzymanie formy</option>
                </select>
              </label>

              <button
                className="profile-primary-button profile-form-full"
                type="submit"
              >
                Zapisz zmiany
              </button>
            </form>
          ) : (
            <div className="profile-details-grid">
              <div>
                <span>Imię i nazwisko</span>
                <strong>
                  {user.firstName} {user.lastName}
                </strong>
              </div>

              <div>
                <span>Adres e-mail</span>
                <strong>{user.email}</strong>
              </div>

              <div>
                <span>Waga</span>
                <strong>{user.weight} kg</strong>
              </div>

              <div>
                <span>Wzrost</span>
                <strong>{user.height} cm</strong>
              </div>

              <div>
                <span>Poziom</span>
                <strong>{user.level}</strong>
              </div>

              <div>
                <span>Cel treningowy</span>
                <strong>{user.goal}</strong>
              </div>
            </div>
          )}
        </section>

        <section className="profile-panel">
          <div className="profile-panel-heading">
            <div>
              <h2>Twój cel</h2>
              <p>Aktualny kierunek treningowy.</p>
            </div>
            <span className="profile-stat-icon">◎</span>
          </div>

          <div className="profile-goal-box">
            <span>GŁÓWNY CEL</span>
            <h3>{user.goal}</h3>
            <p>
              Regularne treningi i systematyczne zwiększanie
              obciążeń.
            </p>
          </div>

          <div className="profile-goal-progress">
            <div>
              <span>Realizacja tygodniowego planu</span>
              <strong>75%</strong>
            </div>

            <div className="profile-progress-track">
              <div style={{ width: "75%" }} />
            </div>

            <p>3 z 4 zaplanowanych treningów</p>
          </div>

          <div className="profile-divider" />

          <div className="profile-preferences">
            <h3>Preferencje treningowe</h3>

            <div>
              <span>Typ treningu</span>
              <strong>Trening siłowy</strong>
            </div>

            <div>
              <span>Cel tygodniowy</span>
              <strong>4 treningi</strong>
            </div>

            <div>
              <span>Poziom</span>
              <strong>{user.level}</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="profile-panel profile-history">
        <div className="profile-panel-heading">
          <div>
            <h2>Ostatnie osiągnięcia</h2>
            <p>Twoje ostatnie kamienie milowe.</p>
          </div>
        </div>

        <div className="profile-achievements">
          <article>
            <span className="profile-achievement-icon">🏆</span>
            <div>
              <strong>Pierwsze 100 treningów</strong>
              <p>Ukończono 12 września 2026</p>
            </div>
            <span className="profile-achievement-status">
              Odblokowano
            </span>
          </article>

          <article>
            <span className="profile-achievement-icon">🔥</span>
            <div>
              <strong>Regularność przede wszystkim</strong>
              <p>6 tygodni systematycznych treningów</p>
            </div>
            <span className="profile-achievement-status">
              Odblokowano
            </span>
          </article>

          <article>
            <span className="profile-achievement-icon">💪</span>
            <div>
              <strong>Coraz silniejszy</strong>
              <p>Poprawa wyników w wyciskaniu sztangi</p>
            </div>
            <span className="profile-achievement-status">
              Odblokowano
            </span>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Profile;