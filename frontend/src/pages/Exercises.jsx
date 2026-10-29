import { useEffect, useMemo, useState } from 'react'

const exerciseImages = import.meta.glob('../assets/exercises/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})

const ALL_GROUPS = 'All muscle groups'

const Exercises = () => {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [muscleGroup, setMuscleGroup] = useState(ALL_GROUPS)

  useEffect(() => {
    fetch('/api/exercises')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json()
      })
      .then((data) => setExercises(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const muscleGroups = useMemo(
    () => [ALL_GROUPS, ...new Set(exercises.map((exercise) => exercise.muscleGroup))],
    [exercises],
  )

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = `${exercise.name} ${exercise.muscleGroup} ${exercise.equipment}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
    const matchesMuscleGroup =
      muscleGroup === ALL_GROUPS || exercise.muscleGroup === muscleGroup

    return matchesSearch && matchesMuscleGroup
  })

  if (loading) {
    return <div className="empty-state">Loading exercises...</div>
  }

  if (error) {
    return (
      <div className="empty-state">
        <p>Could not load exercises.</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Exercise library</p>
          <h1 className="page-title">Find your next move.</h1>
          <p className="muted">
            Explore popular strength exercises by muscle group and equipment.
          </p>
        </div>
      </header>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          aria-label="Search exercises"
          placeholder="Search exercises or equipment..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          className="input input-auto"
          aria-label="Filter by muscle group"
          value={muscleGroup}
          onChange={(event) => setMuscleGroup(event.target.value)}
        >
          {muscleGroups.map((group) => (
            <option key={group}>{group}</option>
          ))}
        </select>

        <span className="muted" aria-live="polite">
          {filteredExercises.length} exercises
        </span>
      </div>

      {filteredExercises.length > 0 ? (
        <div className="exercise-grid">
          {filteredExercises.map((exercise) => (
            <article className="card" key={exercise.id}>
              <div className="exercise-card-top">
                <span className="exercise-mark">
                  <img
                    src={exerciseImages[`../assets/exercises/${exercise.image}`]}
                    alt={`${exercise.name} exercise`}
                  />
                </span>
                <span className="badge">{exercise.difficulty}</span>
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
        <div className="empty-state">
          No exercises match your search. Try another name or muscle group.
        </div>
      )}
    </div>
  )
}

export default Exercises