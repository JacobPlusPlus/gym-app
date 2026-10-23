const Home = () => {
  return (
    <div className="home-content">
      <section className="section">
        <p className="muted">TWÓJ TRENING, TWOJE POSTĘPY</p>
        <h1 className="page-title">Witaj w GymApp!</h1>
        <p className="muted">
          Planuj treningi, poznawaj ćwiczenia i śledź swoje postępy.
        </p>
      </section>

      <section className="section">
        <h2>Twój panel</h2>

        <div className="card-list">
          <div className="card">
            <h3>Trening</h3>
            <p>Rozpocznij trening i zapisuj wykonane serie,
              powtórzenia oraz ciężary.</p>
          </div>

          <div className="card">
            <h3>Ćwiczenia</h3>
            <p>Przeglądaj ćwiczenia i poznawaj grupy mięśniowe,
              które angażują.</p>
          </div>

          <div className="card">
            <h3>Raporty</h3>
            <p>W przyszłości sprawdzisz tutaj historię treningów
              i swoje postępy.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Od czego zacząć?</h2>

        <div className="card">
          <h3>Zaplanuj swój trening</h3>
          <p>
            Przejdź do sekcji Workout, aby rozpocząć pracę
            nad swoją formą.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Twoje statystyki</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Treningi</p>
            <h3>—</h3>
            <p>Dane pojawią się w przyszłości.</p>
          </div>

          <div className="card">
            <p className="muted">Wykonane serie</p>
            <h3>—</h3>
            <p>Dane pojawią się w przyszłości.</p>
          </div>

          <div className="card">
            <p className="muted">Postępy</p>
            <h3>—</h3>
            <p>Dane pojawią się w przyszłości.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
