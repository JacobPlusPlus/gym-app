import { useMemo, useState } from "react";

const initialWorkouts = [
  {
    id: 1,
    name: "Push",
    subtitle: "Klatka piersiowa, barki i triceps",
    category: "Góra ciała",
    level: "Średniozaawansowany",
    duration: 60,
    icon: "↗",
    items: [
      { name: "Wyciskanie sztangi", sets: "4 × 8", muscle: "Klatka piersiowa" },
      { name: "Wyciskanie hantli na skosie", sets: "3 × 10", muscle: "Klatka piersiowa" },
      { name: "Wyciskanie żołnierskie", sets: "3 × 8", muscle: "Barki" },
      { name: "Unoszenie hantli bokiem", sets: "3 × 12", muscle: "Barki" },
      { name: "Prostowanie ramion na wyciągu", sets: "3 × 12", muscle: "Triceps" },
      { name: "Pompki", sets: "3 × max", muscle: "Klatka piersiowa" },
    ],
  },
  {
    id: 2,
    name: "Pull",
    subtitle: "Plecy i bicepsy",
    category: "Góra ciała",
    level: "Średniozaawansowany",
    duration: 75,
    icon: "⌁",
    items: [
      { name: "Martwy ciąg", sets: "4 × 5", muscle: "Plecy" },
      { name: "Podciąganie", sets: "4 × 8–10", muscle: "Plecy" },
      { name: "Wiosłowanie hantlem", sets: "4 × 8–10", muscle: "Plecy" },
      { name: "Ściąganie drążka wyciągu", sets: "3 × 12", muscle: "Plecy" },
      { name: "Face pull", sets: "3 × 15", muscle: "Barki" },
      { name: "Uginanie ramion ze sztangą", sets: "3 × 10", muscle: "Bicepsy" },
      { name: "Uginanie młotkowe", sets: "3 × 12", muscle: "Bicepsy" },
    ],
  },
  {
    id: 3,
    name: "Legs",
    subtitle: "Nogi i pośladki",
    category: "Dół ciała",
    level: "Średniozaawansowany",
    duration: 65,
    icon: "⌘",
    items: [
      { name: "Przysiad ze sztangą", sets: "4 × 8", muscle: "Nogi" },
      { name: "Wypychanie na suwnicy", sets: "3 × 12", muscle: "Nogi" },
      { name: "Rumuński martwy ciąg", sets: "3 × 10", muscle: "Dwugłowe uda" },
      { name: "Prostowanie nóg", sets: "3 × 12", muscle: "Czworogłowe uda" },
      { name: "Uginanie nóg", sets: "3 × 12", muscle: "Dwugłowe uda" },
      { name: "Wspięcia na palce", sets: "4 × 15", muscle: "Łydki" },
    ],
  },
  {
    id: 4,
    name: "Full Body",
    subtitle: "Trening całego ciała",
    category: "Całe ciało",
    level: "Początkujący",
    duration: 45,
    icon: "▤",
    items: [
      { name: "Przysiad goblet", sets: "3 × 12", muscle: "Nogi" },
      { name: "Wyciskanie hantli", sets: "3 × 10", muscle: "Klatka piersiowa" },
      { name: "Wiosłowanie na maszynie", sets: "3 × 12", muscle: "Plecy" },
      { name: "Wyciskanie hantli nad głowę", sets: "3 × 10", muscle: "Barki" },
      { name: "Plank", sets: "3 × 30 s", muscle: "Brzuch" },
    ],
  },
];

const categories = ["Wszystkie", "Góra ciała", "Dół ciała", "Całe ciało"];

const overview = [
  { icon: "▦", value: "4", label: "Treningi w tym tygodniu", note: "+1 w tym tyg." },
  { icon: "↗", value: "29 240 kg", label: "Łączna objętość", note: "+8,4%" },
  { icon: "◷", value: "4h 20m", label: "Czas treningów", note: "W tym tygodniu" },
  { icon: "♨", value: "3 / 4", label: "Realizacja planu", note: "Cel: 4" },
];

const Workout = () => {
  const [workouts] = useState(initialWorkouts);
  const [category, setCategory] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  const nextWorkout = workouts[1];

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesCategory =
        category === "Wszystkie" || workout.category === category;
      const matchesSearch = `${workout.name} ${workout.subtitle}`
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [workouts, category, search]);

  const startWorkout = (workout) => {
    setSelectedWorkout(null);
    setActiveWorkout(workout);
    setCompletedExercises([]);
  };

  const toggleExercise = (index) => {
    setCompletedExercises((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  const finishWorkout = () => {
    setActiveWorkout(null);
    setCompletedExercises([]);
  };

  return (
    <div className="page">
      {/* Nagłówek strony */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Treningi</h1>
          <p className="muted">Planuj treningi, realizuj cele i buduj regularność.</p>
        </div>

        <button className="btn btn-primary" onClick={() => startWorkout(workouts[0])}>
          ▷ Rozpocznij trening
        </button>
      </header>

      {/* Statystyki */}
      <section className="grid-4">
        {overview.map((stat) => (
          <article className="card" key={stat.label}>
            <div className="row row-between">
              <span className="icon-box">{stat.icon}</span>
              <span className="text-success">{stat.note}</span>
            </div>
            <h2 className="stat-label">{stat.value}</h2>
            <p className="muted">{stat.label}</p>
          </article>
        ))}
      </section>

      {/* Następny trening */}
      <section className="card">
        <span className="eyebrow">Twój następny trening</span>
        <h2 className="stat-label">
          {nextWorkout.name} — {nextWorkout.subtitle.toLowerCase()}
        </h2>
        <p className="muted">
          {nextWorkout.items.length} ćwiczeń · około {nextWorkout.duration} min
        </p>

        <div className="card-subtitle">
          {nextWorkout.items.slice(0, 3).map((item, index) => (
            <div className="list-row" key={item.name}>
              <span className="icon-box">{index + 1}</span>
              <strong className="grow">{item.name}</strong>
              <span className="muted">{item.sets}</span>
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary btn-block"
          onClick={() => startWorkout(nextWorkout)}
        >
          ▷ Rozpocznij plan
        </button>
      </section>

      {/* Biblioteka planów */}
      <section className="card">
        <div className="card-header row row-between">
          <div>
            <h2>Biblioteka planów</h2>
            <p className="muted">Wybierz trening odpowiedni do Twojego planu.</p>
          </div>
          <span className="muted">{filteredWorkouts.length} planów</span>
        </div>

        <div className="stack">
          <div className="toolbar">
            <input
              type="search"
              className="input"
              placeholder="Szukaj treningu..."
              aria-label="Szukaj treningu"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="row row-tight">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "chip active" : "chip"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-2 card-subtitle">
          {filteredWorkouts.map((workout) => (
            <article className="card" key={workout.id}>
              <div className="row row-between">
                <span className="icon-box">{workout.icon}</span>
                <span className="badge">{workout.category}</span>
              </div>

              <h3 className="stat-label">{workout.name}</h3>
              <p className="muted">{workout.subtitle}</p>

              <div className="row row-tight stat-label">
                <span className="muted">◷ {workout.duration} min</span>
                <span className="muted">▦ {workout.items.length} ćwiczeń</span>
              </div>

              <div className="row row-between">
                <span className="muted">{workout.level}</span>
                <button
                  className="btn-link"
                  onClick={() => setSelectedWorkout(workout)}
                >
                  Szczegóły ›
                </button>
              </div>

              <button
                className="btn btn-secondary btn-block stat-label"
                onClick={() => startWorkout(workout)}
              >
                ▷ Rozpocznij trening
              </button>
            </article>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="empty-state">
            <h3>Nie znaleziono treningów</h3>
            <p>Zmień wyszukiwanie lub wybierz inną kategorię.</p>
          </div>
        )}
      </section>

      {/* Modal: szczegóły planu */}
      {selectedWorkout && (
        <div className="modal-overlay" onClick={() => setSelectedWorkout(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workout-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedWorkout(null)}
              aria-label="Zamknij"
            >
              ×
            </button>

            <span className="eyebrow">Szczegóły planu</span>
            <h2 id="workout-dialog-title" className="stat-label">
              {selectedWorkout.name} — plan treningowy
            </h2>
            <p className="muted">{selectedWorkout.subtitle}</p>

            <div className="row row-tight stat-label">
              <span className="badge">{selectedWorkout.duration} min</span>
              <span className="badge">{selectedWorkout.items.length} ćwiczeń</span>
              <span className="badge">{selectedWorkout.level}</span>
            </div>

            <div>
              {selectedWorkout.items.map((item, index) => (
                <div className="list-row" key={item.name}>
                  <span className="icon-box">{index + 1}</span>
                  <div className="grow">
                    <strong>{item.name}</strong>
                    <p className="muted">{item.muscle}</p>
                  </div>
                  <span className="muted">{item.sets}</span>
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary btn-block stat-label"
              onClick={() => startWorkout(selectedWorkout)}
            >
              ▷ Rozpocznij trening
            </button>
          </section>
        </div>
      )}

      {/* Modal: aktywny trening */}
      {activeWorkout && (
        <div className="modal-overlay" onClick={() => setActiveWorkout(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workout-session-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveWorkout(null)}
              aria-label="Zamknij trening"
            >
              ×
            </button>

            <span className="eyebrow">Aktywny trening</span>
            <h2 id="workout-session-title" className="stat-label">
              {activeWorkout.name}
            </h2>
            <p className="muted">
              Wykonane ćwiczenia: {completedExercises.length} z{" "}
              {activeWorkout.items.length}
            </p>

            <div className="progress stat-label">
              <div
                style={{
                  width: `${
                    (completedExercises.length / activeWorkout.items.length) * 100
                  }%`,
                }}
              />
            </div>

            <div>
              {activeWorkout.items.map((item, index) => {
                const completed = completedExercises.includes(index);

                return (
                  <label
                    className={`workout-session-row ${completed ? "completed" : ""}`}
                    key={item.name}
                  >
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => toggleExercise(index)}
                    />
                    <span className="grow">
                      <strong>{item.name}</strong>
                      <small className="muted block">{item.muscle}</small>
                    </span>
                    <span className="muted">{item.sets}</span>
                  </label>
                );
              })}
            </div>

            <button
              className="btn btn-primary btn-block stat-label"
              onClick={finishWorkout}
            >
              Zakończ sesję
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Workout;