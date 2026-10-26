import { useMemo, useState } from "react";
import "./Workout.css";

const initialWorkouts = [
  {
    id: 1,
    name: "Push",
    subtitle: "Klatka piersiowa, barki i triceps",
    category: "Góra ciała",
    level: "Średniozaawansowany",
    duration: 60,
    exercises: 6,
    frequency: "Poniedziałek",
    color: "blue",
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
    exercises: 7,
    frequency: "Środa",
    color: "purple",
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
    exercises: 6,
    frequency: "Piątek",
    color: "orange",
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
    exercises: 5,
    frequency: "Wtorek",
    color: "green",
    items: [
      { name: "Przysiad goblet", sets: "3 × 12", muscle: "Nogi" },
      { name: "Wyciskanie hantli", sets: "3 × 10", muscle: "Klatka piersiowa" },
      { name: "Wiosłowanie na maszynie", sets: "3 × 12", muscle: "Plecy" },
      { name: "Wyciskanie hantli nad głowę", sets: "3 × 10", muscle: "Barki" },
      { name: "Plank", sets: "3 × 30 s", muscle: "Brzuch" },
    ],
  },
];

const categories = [
  "Wszystkie",
  "Góra ciała",
  "Dół ciała",
  "Całe ciało",
];

const Workout = () => {
  const [workouts] = useState(initialWorkouts);
  const [category, setCategory] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

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
    <main className="workout-page">
      <header className="workout-header">
        <div>
          <h1>Treningi</h1>
          <p>Planuj treningi, realizuj cele i buduj regularność.</p>
        </div>

        <button
          className="workout-primary-button"
          onClick={() => startWorkout(workouts[0])}
        >
          <span>▷</span>
          Rozpocznij trening
        </button>
      </header>

      <section className="workout-overview">
        <article className="workout-overview-card">
          <div className="workout-overview-top">
            <span className="workout-icon">▦</span>
            <span className="workout-positive">+1 w tym tyg.</span>
          </div>
          <h2>4</h2>
          <p>Treningi w tym tygodniu</p>
        </article>

        <article className="workout-overview-card">
          <div className="workout-overview-top">
            <span className="workout-icon">↗</span>
            <span className="workout-positive">+8,4%</span>
          </div>
          <h2>29 240 kg</h2>
          <p>Łączna objętość</p>
        </article>

        <article className="workout-overview-card">
          <div className="workout-overview-top">
            <span className="workout-icon">◷</span>
            <span className="workout-muted">W tym tygodniu</span>
          </div>
          <h2>4h 20m</h2>
          <p>Czas treningów</p>
        </article>

        <article className="workout-overview-card">
          <div className="workout-overview-top">
            <span className="workout-icon">♨</span>
            <span className="workout-positive">Cel: 4</span>
          </div>
          <h2>3 / 4</h2>
          <p>Realizacja planu</p>
        </article>
      </section>

      <section className="workout-featured">
        <div className="workout-featured-info">
          <span className="workout-eyebrow">TWÓJ NASTĘPNY TRENING</span>
          <h2>Pull — plecy i bicepsy</h2>
          <p>7 ćwiczeń · około 75 min</p>
        </div>

        <div className="workout-featured-list">
          {workouts[1].items.slice(0, 3).map((item, index) => (
            <div className="workout-featured-item" key={item.name}>
              <span className="workout-number">{index + 1}</span>
              <strong>{item.name}</strong>
              <span>{item.sets}</span>
            </div>
          ))}
        </div>

        <button
          className="workout-primary-button workout-featured-button"
          onClick={() => startWorkout(workouts[1])}
        >
          <span>▷</span>
          Rozpocznij plan
        </button>
      </section>

      <section className="workout-library">
        <div className="workout-library-heading">
          <div>
            <h2>Biblioteka planów</h2>
            <p>Wybierz trening odpowiedni do Twojego planu.</p>
          </div>

          <span className="workout-result-count">
            {filteredWorkouts.length} planów
          </span>
        </div>

        <div className="workout-toolbar">
          <input
            type="search"
            className="workout-search"
            placeholder="Szukaj treningu..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="workout-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "workout-filter active"
                    : "workout-filter"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="workout-grid">
          {filteredWorkouts.map((workout) => (
            <article
              className={`workout-card workout-card-${workout.color}`}
              key={workout.id}
            >
              <div className="workout-card-top">
                <span className="workout-card-icon">
                  {workout.name === "Push"
                    ? "↗"
                    : workout.name === "Pull"
                      ? "⌁"
                      : workout.name === "Legs"
                        ? "⌘"
                        : "▤"}
                </span>

                <span className="workout-card-category">
                  {workout.category}
                </span>
              </div>

              <h3>{workout.name}</h3>
              <p className="workout-card-subtitle">
                {workout.subtitle}
              </p>

              <div className="workout-card-meta">
                <span>◷ {workout.duration} min</span>
                <span>▦ {workout.exercises} ćwiczeń</span>
              </div>

              <div className="workout-card-footer">
                <span>{workout.level}</span>

                <button
                  className="workout-details-button"
                  onClick={() => setSelectedWorkout(workout)}
                >
                  Szczegóły <span>›</span>
                </button>
              </div>

              <button
                className="workout-card-start"
                onClick={() => startWorkout(workout)}
              >
                ▷ Rozpocznij trening
              </button>
            </article>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="workout-empty">
            <h3>Nie znaleziono treningów</h3>
            <p>Zmień wyszukiwanie lub wybierz inną kategorię.</p>
          </div>
        )}
      </section>

      {selectedWorkout && (
        <div
          className="workout-overlay"
          onClick={() => setSelectedWorkout(null)}
        >
          <section
            className="workout-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workout-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="workout-dialog-close"
              onClick={() => setSelectedWorkout(null)}
              aria-label="Zamknij"
            >
              ×
            </button>

            <span className="workout-eyebrow">SZCZEGÓŁY PLANU</span>
            <h2 id="workout-dialog-title">
              {selectedWorkout.name} — plan treningowy
            </h2>
            <p>{selectedWorkout.subtitle}</p>

            <div className="workout-dialog-summary">
              <span>{selectedWorkout.duration} min</span>
              <span>{selectedWorkout.items.length} ćwiczeń</span>
              <span>{selectedWorkout.level}</span>
            </div>

            <div className="workout-exercise-list">
              {selectedWorkout.items.map((item, index) => (
                <div className="workout-exercise-row" key={item.name}>
                  <span className="workout-number">{index + 1}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.muscle}</p>
                  </div>
                  <span>{item.sets}</span>
                </div>
              ))}
            </div>

            <button
              className="workout-primary-button workout-dialog-start"
              onClick={() => startWorkout(selectedWorkout)}
            >
              ▷ Rozpocznij trening
            </button>
          </section>
        </div>
      )}

      {activeWorkout && (
        <div
          className="workout-overlay"
          onClick={() => setActiveWorkout(null)}
        >
          <section
            className="workout-dialog workout-session"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workout-session-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="workout-dialog-close"
              onClick={() => setActiveWorkout(null)}
              aria-label="Zamknij trening"
            >
              ×
            </button>

            <span className="workout-eyebrow">AKTYWNY TRENING</span>
            <h2 id="workout-session-title">{activeWorkout.name}</h2>
            <p>
              Wykonane ćwiczenia: {completedExercises.length} z{" "}
              {activeWorkout.items.length}
            </p>

            <div className="workout-progress-track">
              <div
                style={{
                  width: `${
                    (completedExercises.length /
                      activeWorkout.items.length) *
                    100
                  }%`,
                }}
              />
            </div>

            <div className="workout-exercise-list">
              {activeWorkout.items.map((item, index) => {
                const completed = completedExercises.includes(index);

                return (
                  <label
                    className={`workout-session-row ${
                      completed ? "completed" : ""
                    }`}
                    key={item.name}
                  >
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => toggleExercise(index)}
                    />

                    <span className="workout-session-exercise">
                      <strong>{item.name}</strong>
                      <small>{item.muscle}</small>
                    </span>

                    <span>{item.sets}</span>
                  </label>
                );
              })}
            </div>

            <button
              className="workout-primary-button workout-dialog-start"
              onClick={finishWorkout}
            >
              Zakończ sesję
            </button>
          </section>
        </div>
      )}
    </main>
  );
};

export default Workout;