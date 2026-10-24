import { useMemo, useState } from 'react'
import exercises from '../data/exercises.json'
import './Exercises.css'

const exerciseImages = import.meta.glob('../assets/exercises/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})

const Exercises = () => {
  const [search, setSearch] = useState('')
  const [muscleGroup, setMuscleGroup] = useState('All muscle groups')

  const muscleGroups = useMemo(
    () => ['All muscle groups', ...new Set(exercises.map((exercise) => exercise.muscleGroup))],
    [],
  )
  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
    const matchesMuscleGroup = muscleGroup === 'All muscle groups' || exercise.muscleGroup === muscleGroup

    return matchesSearch && matchesMuscleGroup
  })

  return (
    <section className="page">
      <header className="page-heading">
        <p className="eyebrow">Exercise library</p>
        <h1>Find your next move.</h1>
        <p>Explore popular strength exercises by muscle group and equipment.</p>
      </header>

      <div className="catalog-toolbar">
        <input
          className="search-input"
          type="search"
          aria-label="Search exercises"
          placeholder="Search exercises or equipment..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <label className="muscle-filter">
          <span className="result-count">Filter: </span>
          <select
            className="form-select"
            aria-label="Filter by muscle group"
            value={muscleGroup}
            onChange={(event) => setMuscleGroup(event.target.value)}
          >
            {muscleGroups.map((group) => <option key={group}>{group}</option>)}
          </select>
        </label>
        <span className="result-count" aria-live="polite">{filteredExercises.length} exercises</span>
      </div>

      {filteredExercises.length > 0 ? (
        <div className="exercise-grid">
          {filteredExercises.map((exercise) => (
            <article className="exercise-card" key={exercise.id}>
              <div className="exercise-card-top">
                <span className="exercise-mark">
                  <img
                    src={exerciseImages[`../assets/exercises/${exercise.image}`]}
                    alt={`${exercise.name} exercise`}
                  />
                </span>
                <span className="difficulty">{exercise.difficulty}</span>
              </div>
              <h2>{exercise.name}</h2>
              <p className="exercise-meta">
                <span>{exercise.muscleGroup}</span>
                <span>{exercise.equipment}</span>
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No exercises match your search. Try another name or muscle group.</p>
      )}
    </section>
  )
}

export default Exercises
