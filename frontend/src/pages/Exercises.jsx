const Exercises = () => {
  return (
    <div className="exercises-page">
      <h1 className="page-title">Ćwiczenia</h1>
      <p className="muted">
        Przeglądaj ćwiczenia i poznawaj technikę ich wykonywania.
      </p>

      <section className="section">
        <h2>Kategorie</h2>

        <div className="card-list">
          <div className="card">
            <h3>Klatka piersiowa</h3>
            <p>Wyciskanie sztangi, rozpiętki, wyciskanie hantli.</p>
          </div>

          <div className="card">
            <h3>Plecy</h3>
            <p>Wiosłowanie, ściąganie drążka, martwy ciąg.</p>
          </div>

          <div className="card">
            <h3>Barki</h3>
            <p>Wyciskanie hantli, unoszenie bokiem.</p>
          </div>

          <div className="card">
            <h3>Nogi</h3>
            <p>Przysiady, suwnica, prostowanie nóg.</p>
          </div>

          <div className="card">
            <h3>Biceps</h3>
            <p>Uginanie ramion z hantlami i ze sztangą.</p>
          </div>

          <div className="card">
            <h3>Triceps</h3>
            <p>Prostowanie ramion na wyciągu, wyciskanie wąsko.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Popularne ćwiczenia</h2>

        <div className="card-list">
          <div className="card">
            <h3>Wyciskanie sztangi leżąc</h3>
            <p className="muted">Klatka piersiowa</p>
            <p>Ćwiczenie wielostawowe rozwijające klatkę piersiową,
              tricepsy i przednią część barków.</p>
          </div>

          <div className="card">
            <h3>Przysiad ze sztangą</h3>
            <p className="muted">Nogi</p>
            <p>Ćwiczenie angażujące mięśnie ud, pośladków i tułowia.</p>
          </div>

          <div className="card">
            <h3>Wiosłowanie hantlem</h3>
            <p className="muted">Plecy</p>
            <p>Ćwiczenie wzmacniające mięśnie pleców i pomagające
              rozwijać siłę przyciągania.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exercises