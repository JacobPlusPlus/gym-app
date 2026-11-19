import { useMemo, useState } from "react";

const initialWorkouts = [
  {
    id: 1,
    name: "Push",
    subtitle: "Chest, shoulders, and triceps",
    category: "Upper body",
    level: "Intermediate",
    duration: 60,
    icon: "↗",
    items: [
      { name: "Barbell Bench Press", sets: "4 × 8", muscle: "Chest" },
      { name: "Incline Dumbbell Press", sets: "3 × 10", muscle: "Chest" },
      { name: "Overhead Press", sets: "3 × 8", muscle: "Shoulders" },
      { name: "Dumbbell Lateral Raise", sets: "3 × 12", muscle: "Shoulders" },
      { name: "Triceps Pushdown", sets: "3 × 12", muscle: "Triceps" },
      { name: "Push-Up", sets: "3 × max", muscle: "Chest" },
    ],
  },
  {
    id: 2,
    name: "Pull",
    subtitle: "Back and biceps",
    category: "Upper body",
    level: "Intermediate",
    duration: 75,
    icon: "⌁",
    items: [
      { name: "Deadlift", sets: "4 × 5", muscle: "Back" },
      { name: "Pull-Up", sets: "4 × 8–10", muscle: "Back" },
      { name: "Dumbbell Row", sets: "4 × 8–10", muscle: "Back" },
      { name: "Lat Pulldown", sets: "3 × 12", muscle: "Back" },
      { name: "Face Pull", sets: "3 × 15", muscle: "Shoulders" },
      { name: "Barbell Curl", sets: "3 × 10", muscle: "Biceps" },
      { name: "Hammer Curl", sets: "3 × 12", muscle: "Biceps" },
    ],
  },
  {
    id: 3,
    name: "Legs",
    subtitle: "Legs and glutes",
    category: "Lower body",
    level: "Intermediate",
    duration: 65,
    icon: "⌘",
    items: [
      { name: "Barbell Back Squat", sets: "4 × 8", muscle: "Legs" },
      { name: "Leg Press", sets: "3 × 12", muscle: "Legs" },
      { name: "Romanian Deadlift", sets: "3 × 10", muscle: "Hamstrings" },
      { name: "Leg Extension", sets: "3 × 12", muscle: "Quadriceps" },
      { name: "Leg Curl", sets: "3 × 12", muscle: "Hamstrings" },
      { name: "Calf Raise", sets: "4 × 15", muscle: "Calves" },
    ],
  },
  {
    id: 4,
    name: "Full Body",
    subtitle: "A full-body session",
    category: "Full body",
    level: "Beginner",
    duration: 45,
    icon: "▤",
    items: [
      { name: "Goblet Squat", sets: "3 × 12", muscle: "Legs" },
      { name: "Dumbbell Bench Press", sets: "3 × 10", muscle: "Chest" },
      { name: "Machine Row", sets: "3 × 12", muscle: "Back" },
      { name: "Dumbbell Shoulder Press", sets: "3 × 10", muscle: "Shoulders" },
      { name: "Plank", sets: "3 × 30 sec", muscle: "Core" },
    ],
  },
];

const categories = ["All workouts", "Upper body", "Lower body", "Full body"];

const overview = [
  { icon: "▦", value: "4", label: "Workouts this week", note: "+1 this week" },
  { icon: "↗", value: "29,240 kg", label: "Total volume", note: "+8.4%" },
  { icon: "◷", value: "4h 20m", label: "Training time", note: "This week" },
  { icon: "♨", value: "3 / 4", label: "Weekly goal", note: "Goal: 4" },
];

const Workout = () => {
  const [workouts] = useState(initialWorkouts);
  const [category, setCategory] = useState("All workouts");
  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  const nextWorkout = workouts[1];

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesCategory =
        category === "All workouts" || workout.category === category;
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
      {/* Page heading */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Workouts</h1>
          <p className="muted">Plan your sessions, reach your goals, and build consistency.</p>
        </div>

        <button className="btn btn-primary" onClick={() => startWorkout(workouts[0])}>
          ▷ Start a workout
        </button>
      </header>

      {/* Weekly overview */}
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

      {/* Next workout */}
      <section className="card">
        <span className="eyebrow">Your next workout</span>
        <h2 className="stat-label">
          {nextWorkout.name} — {nextWorkout.subtitle.toLowerCase()}
        </h2>
        <p className="muted">
          {nextWorkout.items.length} exercises · about {nextWorkout.duration} min
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
          ▷ Start this plan
        </button>
      </section>

      {/* Workout plans */}
      <section className="card">
        <div className="card-header row row-between">
          <div>
            <h2>Workout library</h2>
            <p className="muted">Choose a session that fits your training plan.</p>
          </div>
          <span className="muted">{filteredWorkouts.length} plans</span>
        </div>

        <div className="stack">
          <div className="toolbar">
            <input
              type="search"
              className="input"
              placeholder="Search workouts..."
              aria-label="Search workouts"
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
                <span className="muted">▦ {workout.items.length} exercises</span>
              </div>

              <div className="row row-between">
                <span className="muted">{workout.level}</span>
                <button
                  className="btn-link"
                  onClick={() => setSelectedWorkout(workout)}
                >
                  Details ›
                </button>
              </div>

              <button
                className="btn btn-secondary btn-block stat-label"
                onClick={() => startWorkout(workout)}
              >
                ▷ Start workout
              </button>
            </article>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="empty-state">
            <h3>No workouts found</h3>
            <p>Adjust your search or choose a different category.</p>
          </div>
        )}
      </section>

      {/* Plan details modal */}
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
              aria-label="Close"
            >
              ×
            </button>

            <span className="eyebrow">Plan details</span>
            <h2 id="workout-dialog-title" className="stat-label">
              {selectedWorkout.name} — workout plan
            </h2>
            <p className="muted">{selectedWorkout.subtitle}</p>

            <div className="row row-tight stat-label">
              <span className="badge">{selectedWorkout.duration} min</span>
              <span className="badge">{selectedWorkout.items.length} exercises</span>
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
              ▷ Start workout
            </button>
          </section>
        </div>
      )}

      {/* Active workout modal */}
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
              aria-label="Close workout"
            >
              ×
            </button>

            <span className="eyebrow">Active workout</span>
            <h2 id="workout-session-title" className="stat-label">
              {activeWorkout.name}
            </h2>
            <p className="muted">
              Exercises completed: {completedExercises.length} of{" "}
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
              Finish session
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Workout;