const Workout = () => {
  return (
    <div className="workout-content">
      <section className="section">
        <p className="muted">PLANOWANIE I TRENING</p>
        <h1 className="page-title">Twoje treningi</h1>
        <p className="muted">
          Planuj sesje treningowe i kontroluj swoje postępy.
        </p>
      </section>

      <section className="section">
        <h2>Podsumowanie</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Aktywny plan</p>
            <h3>Nie wybrano</h3>
            <p>Wybierz plan dopasowany do swojego celu.</p>
          </div>

          <div className="card">
            <p className="muted">Ćwiczenia w planie</p>
            <h2>—</h2>
            <p>Liczba ćwiczeń do wykonania.</p>
          </div>

          <div className="card">
            <p className="muted">Ostatni trening</p>
            <h3>Brak danych</h3>
            <p>Twoja historia pojawi się tutaj.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Przykładowe plany treningowe</h2>

        <div className="card-list">
          <div className="card">
            <h3>Push</h3>
            <p className="muted">Klatka piersiowa, barki, triceps</p>
            <ul>
              <li>Wyciskanie sztangi leżąc</li>
              <li>Wyciskanie hantli nad głowę</li>
              <li>Prostowanie ramion na wyciągu</li>
            </ul>
            <p className="muted">Przykładowy plan</p>
          </div>

          <div className="card">
            <h3>Pull</h3>
            <p className="muted">Plecy, tył barków, biceps</p>
            <ul>
              <li>Wiosłowanie</li>
              <li>Ściąganie drążka wyciągu</li>
              <li>Uginanie ramion z hantlami</li>
            </ul>
            <p className="muted">Przykładowy plan</p>
          </div>

          <div className="card">
            <h3>Legs</h3>
            <p className="muted">Uda, pośladki, łydki</p>
            <ul>
              <li>Przysiady ze sztangą</li>
              <li>Uginanie nóg na maszynie</li>
              <li>Wspięcia na palce</li>
            </ul>
            <p className="muted">Przykładowy plan</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ostatnie treningi</h2>

        <div className="card">
          <p>Nie masz jeszcze zapisanych treningów.</p>
          <p className="muted">
            Po dodaniu zapisywania treningów pojawią się tutaj
            daty, czas trwania i wykonane ćwiczenia.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Rejestracja treningu</h2>

        <div className="card">
          <h3>Śledź każdą serię</h3>
          <p>
            W przyszłości będzie można wybrać ćwiczenie,
            podać ciężar, liczbę powtórzeń i zapisać serię.
          </p>
          <p className="muted">
            Funkcja zostanie dodana w kolejnym etapie projektu.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Workout