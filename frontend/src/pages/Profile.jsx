import { useState } from "react";

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
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const stats = [
    { icon: "▦", label: "Treningi łącznie", value: "128", detail: "+12 w tym miesiącu" },
    { icon: "↗", label: "Łączna objętość", value: "84 320 kg", detail: "Wszystkie treningi" },
    { icon: "◷", label: "Czas treningów", value: "96 h", detail: "Łączny czas" },
    { icon: "♨", label: "Regularna seria", value: "6 tyg.", detail: "Najlepsza: 9 tyg." },
  ];

  const achievements = [
    { icon: "🏆", title: "Pierwsze 100 treningów", desc: "Ukończono 12 września 2026" },
    { icon: "🔥", title: "Regularność przede wszystkim", desc: "6 tygodni systematycznych treningów" },
    { icon: "💪", title: "Coraz silniejszy", desc: "Poprawa wyników w wyciskaniu sztangi" },
  ];

  return (
    <div className="page">
      {/* Nagłówek strony */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Twój profil</h1>
          <p className="muted">Zarządzaj swoimi danymi i śledź postępy.</p>
        </div>

        <button className="btn btn-primary" onClick={() => setEditing(!editing)}>
          {editing ? "Anuluj edycję" : "Edytuj profil"}
        </button>
      </header>

      {/* Karta użytkownika */}
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
          <span className="eyebrow">Data dołączenia</span>
          <strong>Styczeń 2026</strong>
          <span className="text-success">● Aktywne konto</span>
        </div>
      </section>

      {/* Statystyki */}
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

      {/* Dane osobowe + cel */}
      <div className="grid-split">
        <section className="card">
          <div className="card-header">
            <h2>Dane osobowe</h2>
            <p className="muted">Podstawowe informacje o Tobie.</p>
          </div>

          {editing ? (
            <form className="form-grid" onSubmit={handleSubmit}>
              <label>
                Imię
                <input className="input" name="firstName" value={user.firstName} onChange={handleChange} required />
              </label>

              <label>
                Nazwisko
                <input className="input" name="lastName" value={user.lastName} onChange={handleChange} required />
              </label>

              <label>
                Adres e-mail
                <input className="input" type="email" name="email" value={user.email} onChange={handleChange} required />
              </label>

              <label>
                Waga (kg)
                <input className="input" type="number" name="weight" value={user.weight} onChange={handleChange} min="1" required />
              </label>

              <label>
                Wzrost (cm)
                <input className="input" type="number" name="height" value={user.height} onChange={handleChange} min="1" required />
              </label>

              <label>
                Poziom zaawansowania
                <select className="input" name="level" value={user.level} onChange={handleChange}>
                  <option>Początkujący</option>
                  <option>Średniozaawansowany</option>
                  <option>Zaawansowany</option>
                </select>
              </label>

              <label className="form-full">
                Cel treningowy
                <select className="input" name="goal" value={user.goal} onChange={handleChange}>
                  <option>Budowanie masy mięśniowej</option>
                  <option>Poprawa siły</option>
                  <option>Poprawa kondycji</option>
                  <option>Utrzymanie formy</option>
                </select>
              </label>

              <button className="btn btn-primary form-full" type="submit">
                Zapisz zmiany
              </button>
            </form>
          ) : (
            <div className="profile-details-grid">
              <div>
                <span>Imię i nazwisko</span>
                <strong>{user.firstName} {user.lastName}</strong>
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

        <section className="card">
          <div className="card-header row row-between">
            <div>
              <h2>Twój cel</h2>
              <p className="muted">Aktualny kierunek treningowy.</p>
            </div>
            <span className="icon-box">◎</span>
          </div>

          <div className="callout">
            <span className="eyebrow">Główny cel</span>
            <h3>{user.goal}</h3>
            <p className="muted">
              Regularne treningi i systematyczne zwiększanie obciążeń.
            </p>
          </div>

          <div className="stack">
            <div className="row row-between">
              <span className="muted">Realizacja tygodniowego planu</span>
              <strong>75%</strong>
            </div>
            <div className="progress">
              <div style={{ width: "75%" }} />
            </div>
            <span className="muted">3 z 4 zaplanowanych treningów</span>
          </div>

          <h3 className="card-subtitle">Preferencje treningowe</h3>

          <div className="list-row row-between">
            <span className="muted">Typ treningu</span>
            <strong>Trening siłowy</strong>
          </div>
          <div className="list-row row-between">
            <span className="muted">Cel tygodniowy</span>
            <strong>4 treningi</strong>
          </div>
          <div className="list-row row-between">
            <span className="muted">Poziom</span>
            <strong>{user.level}</strong>
          </div>
        </section>
      </div>

      {/* Osiągnięcia */}
      <section className="card">
        <div className="card-header">
          <h2>Ostatnie osiągnięcia</h2>
          <p className="muted">Twoje ostatnie kamienie milowe.</p>
        </div>

        {achievements.map((item) => (
          <article className="list-row" key={item.title}>
            <span className="icon-box">{item.icon}</span>
            <div className="grow">
              <strong>{item.title}</strong>
              <p className="muted">{item.desc}</p>
            </div>
            <span className="text-success">Odblokowano</span>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Profile;