import exerciseDescriptions from "../data/exerciseDescriptions";
import { createPortal } from "react-dom";

const exerciseImages = import.meta.glob("../assets/exercises/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});

const groupDescriptions = {
  Legs: "Exercises targeting the lower body, including the quadriceps, hamstrings and glutes.",
  Back: "Exercises focused on developing back strength and pulling movements.",
  Chest: "Exercises designed to develop the chest muscles and pressing strength.",
  Shoulders: "Exercises targeting shoulder strength, stability and development.",
  Arms: "Exercises focused on the biceps, triceps and forearms.",
  Glutes: "Exercises targeting the gluteal muscles and hip extension.",
  Core: "Exercises designed to improve abdominal strength and trunk stability.",
};

const ExerciseDetails = ({ exercise, onClose }) => {
  if (!exercise) return null;

  const details = exerciseDescriptions[exercise.name] || {};

  const image =
    exerciseImages[`../assets/exercises/${exercise.image}`];

  const description =
    details.description ||
    groupDescriptions[exercise.muscleGroup] ||
    "An exercise designed to improve strength and muscular development.";

  const muscles = details.muscles || [exercise.muscleGroup];

  const secondaryMuscles =
    details.secondaryMuscles || ["Supporting muscles"];

  const instructions = details.instructions || [
    "Prepare the required equipment.",
    "Position yourself correctly before starting the exercise.",
    "Perform the movement in a controlled manner.",
    "Return slowly to the starting position.",
    "Repeat for the planned number of repetitions.",
  ];

  const tips = details.tips || [
    "Maintain proper technique throughout the movement.",
    "Use a controlled range of motion.",
    "Choose a weight appropriate for your experience.",
  ];

  const mistakes = details.mistakes || [
    "Using excessive momentum.",
    "Losing control of the movement.",
    "Using incorrect technique.",
  ];

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="modal-overlay"
      onMouseDown={handleOverlayClick}
    >
      <section
        className="modal exercise-details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exercise-details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close exercise details"
        >
          ×
        </button>

        {/* Header */}
        <div className="exercise-details-header">
          <div className="exercise-details-image">
            {image ? (
              <img src={image} alt={exercise.name} />
            ) : (
              <span>💪</span>
            )}
          </div>

          <div className="exercise-details-heading">
            <span className="eyebrow">EXERCISE DETAILS</span>

            <h2 id="exercise-details-title">
              {exercise.name}
            </h2>

            <div className="exercise-details-badges">
              <span className="badge">
                {exercise.difficulty || "Not specified"}
              </span>

              <span className="badge">
                {exercise.muscleGroup}
              </span>
            </div>
          </div>
        </div>

        {/* Basic information */}
        <div className="exercise-details-info">
          <article>
            <span className="exercise-details-info-icon">◇</span>
            <div>
              <small>EQUIPMENT</small>
              <strong>{exercise.equipment}</strong>
            </div>
          </article>

          <article>
            <span className="exercise-details-info-icon">◎</span>
            <div>
              <small>MUSCLE GROUP</small>
              <strong>{exercise.muscleGroup}</strong>
            </div>
          </article>

          <article>
            <span className="exercise-details-info-icon">▤</span>
            <div>
              <small>DIFFICULTY</small>
              <strong>{exercise.difficulty || "N/A"}</strong>
            </div>
          </article>
        </div>

        {/* Description */}
        <section className="exercise-details-section">
          <h3>About this exercise</h3>
          <p>{description}</p>
        </section>

        {/* Muscles */}
        <section className="exercise-details-section">
          <h3>Muscles worked</h3>

          <p className="exercise-details-label">
            Primary muscles
          </p>

          <div className="exercise-muscle-list">
            {muscles.map((muscle) => (
              <span key={muscle}>{muscle}</span>
            ))}
          </div>

          <p className="exercise-details-label">
            Secondary muscles
          </p>

          <div className="exercise-muscle-list secondary">
            {secondaryMuscles.map((muscle) => (
              <span key={muscle}>{muscle}</span>
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="exercise-details-section">
          <h3>How to perform</h3>

          <div className="exercise-instructions">
            {instructions.map((instruction, index) => (
              <div
                className="exercise-instruction"
                key={index}
              >
                <span>{index + 1}</span>
                <p>{instruction}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="exercise-details-section">
          <h3>Training tips</h3>

          <ul className="exercise-tips">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Mistakes */}
        <section className="exercise-details-section">
          <h3>Common mistakes</h3>

          <ul className="exercise-mistakes">
            {mistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </section>

        <button
          className="exercise-details-footer-button"
          onClick={onClose}
        >
          Close details
        </button>
      </section>
    </div>,
    document.body
  );
};

export default ExerciseDetails;