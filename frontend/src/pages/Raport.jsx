const Raport = () => {
  return (
    <div className="raport-content">
      <section className="section">
        <p className="muted">ANALIZA TWOJEJ AKTYWNOŚCI</p>
        <h1 className="page-title">Raporty treningowe</h1>
        <p className="muted">
          Sprawdzaj historię treningów i monitoruj swoje postępy.
        </p>
      </section>

      <section className="section">
        <h2>Podsumowanie</h2>

        <div className="card-list">
          <div className="card">
            <p className="muted">Liczba treningów</p>
            <h2>—</h2>
            <p>Wszystkie wykonane treningi</p>
          </div>

          <div className="card">
            <p className="muted">Wykonane serie</p>
            <h2>—</h2>
            <p>Łączna liczba serii</p>
          </div>

          <div className="card">
            <p className="muted">Powtórzenia</p>
            <h2>—</h2>
            <p>Łączna liczba powtórzeń</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Historia treningów</h2>

        <div className="card">
          <p className="muted">
            Tutaj pojawią się zapisane treningi.
          </p>

          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Trening</th>
                <th>Czas</th>
                <th>Serie</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4">
                  Brak zapisanych treningów.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Postępy siłowe</h2>

        <div className="card">
          <h3>Twoje wyniki</h3>
          <p>
            Wyciskanie na ławce: —
          </p>
          <p>
            Przysiad ze sztangą: —
          </p>
          <p>
            Martwy ciąg: —
          </p>
          <p className="muted">
            Historia ciężarów i wykresy zmian będą dostępne
            po zapisaniu wyników treningowych.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Aktywność tygodniowa</h2>

        <div className="card">
          <h3>Regularność treningów</h3>
          <p>
            Tutaj będzie można sprawdzić liczbę treningów
            w poszczególnych dniach i tygodniach.
          </p>
          <p className="muted">
            Wykres zostanie dodany w przyszłości.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Raport