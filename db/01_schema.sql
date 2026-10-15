-- Gym App database schema (PostgreSQL)
-- runs automatically when the docker container starts for the first time
-- (see docker-compose.yml)

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    username      VARCHAR(50) UNIQUE NOT NULL,
    email         VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    weight_kg     NUMERIC(5,2),
    height_cm     INTEGER,
    created_at    TIMESTAMP DEFAULT NOW()
);

-- shared catalog of exercises, same for every user
CREATE TABLE exercises (
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    equipment    VARCHAR(50) NOT NULL,   -- sztanga, hantle, maszyna, wyciag, masa ciala
    muscle_group VARCHAR(50) NOT NULL    -- nogi, plecy, klatka, barki, biceps, triceps, brzuch
);

-- a plan is one of the cards in the Workout tab (Day 1, Day 2, Day 4...)
CREATE TABLE plans (
    id         SERIAL PRIMARY KEY,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name       VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- which exercises are in a plan and in what order
CREATE TABLE plan_exercises (
    id          SERIAL PRIMARY KEY,
    plan_id     INTEGER NOT NULL REFERENCES plans(id) ON DELETE CASCADE,
    exercise_id INTEGER NOT NULL REFERENCES exercises(id),
    sets        INTEGER NOT NULL CHECK (sets > 0),
    reps        INTEGER NOT NULL CHECK (reps > 0),
    position    INTEGER NOT NULL,
    UNIQUE (plan_id, position)
);

-- one finished training session
CREATE TABLE workouts (
    id           SERIAL PRIMARY KEY,
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    plan_id      INTEGER REFERENCES plans(id) ON DELETE SET NULL, -- keep the workout even if the plan gets deleted
    workout_date DATE NOT NULL,
    duration_min INTEGER,
    notes        TEXT
);

-- every set done during a workout (this is what the Raport tab sums up)
CREATE TABLE workout_sets (
    id          SERIAL PRIMARY KEY,
    workout_id  INTEGER NOT NULL REFERENCES workouts(id) ON DELETE CASCADE,
    exercise_id INTEGER NOT NULL REFERENCES exercises(id),
    set_number  INTEGER NOT NULL,
    reps        INTEGER NOT NULL CHECK (reps > 0),
    weight_kg   NUMERIC(5,2) NOT NULL DEFAULT 0
);
