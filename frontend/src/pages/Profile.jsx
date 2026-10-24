const Profile = () => {
  return (
    <div className="profile-content">
      <section className="section">
        <p className="muted">TWOJE KONTO</p>
        <h1 className="page-title">Profil użytkownika</h1>
        <p className="muted">
          Zarządzaj swoimi danymi, celami i postępami treningowymi.
        </p>
      </section>

      <section className="section">
        <h2>Informacje o użytkowniku</h2>

        <div className="card">
          <h3>Twój profil</h3>
          <p>Nazwa użytkownika: Nie ustawiono</p>
          <p>Wiek: —</p>
          <p>Wzrost: —</p>
          <p>Masa ciała: —</p>
          <p className="muted">
            Dane będzie można uzupełnić w przyszłości.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Cele treningowe</h2>

        <div className="card-list">
          <div className="card">
            <h3>Główny cel</h3>
            <p>Nie wybrano celu.</p>
            <p className="muted">
              Np. budowanie masy mięśniowej.
            </p>
          </div>

          <div className="card">
            <h3>Cel wagowy</h3>
            <p>Aktualna waga: —</p>
            <p>Waga docelowa: —</p>
          </div>

          <div className="card">
            <h3>Priorytet treningowy</h3>
            <p>Nie ustawiono priorytetu.</p>
            <p className="muted">
              Np. siła, masa mięśniowa lub kondycja.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Pomiary ciała</h2>

        <div className="card">
          <p>Masa ciała: —</p>
          <p>Obwód klatki piersiowej: —</p>
          <p>Obwód talii: —</p>
          <p>Obwód ramienia: —</p>
          <p className="muted">
            Historia pomiarów i wykres postępów będą dostępne
            po dodaniu zapisywania danych.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Aktywność treningowa</h2>

        <div className="card-list">
          <div className="card">
            <h3>Treningi</h3>
            <p className="muted">Łączna liczba</p>
            <h2>—</h2>
          </div>

          <div className="card">
            <h3>Serie</h3>
            <p className="muted">Łączna liczba</p>
            <h2>—</h2>
          </div>

          <div className="card">
            <h3>Regularność</h3>
            <p className="muted">Historia aktywności</p>
            <h2>—</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ustawienia</h2>

        <div className="card">
          <p>Jednostki wagi: kg</p>
          <p>Jednostki wzrostu: cm</p>
          <p>Preferencje treningowe: nie ustawiono</p>
          <p className="muted">
            Edycja danych i preferencji zostanie dodana w przyszłości.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Profile