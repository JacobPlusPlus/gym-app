-- sample data so the app has something to show
-- password_hash is just a placeholder, there is no login yet

INSERT INTO users (username, email, password_hash, weight_kg, height_cm) VALUES
('tester', 'tester@example.com', 'placeholder', 78.5, 181);

INSERT INTO exercises (name, equipment, muscle_group) VALUES
('Przysiad ze sztangą',           'sztanga',    'nogi'),      -- 1
('Martwy ciąg',                   'sztanga',    'plecy'),     -- 2
('Wyciskanie leżąc',              'sztanga',    'klatka'),    -- 3
('Wyciskanie żołnierskie',        'sztanga',    'barki'),     -- 4
('Podciąganie na drążku',         'masa ciala', 'plecy'),     -- 5
('Wiosłowanie sztangą',           'sztanga',    'plecy'),     -- 6
('Wykroki z hantlami',            'hantle',     'nogi'),      -- 7
('Uginanie ramion z hantlami',    'hantle',     'biceps'),    -- 8
('Prostowanie ramion na wyciągu', 'wyciag',     'triceps'),   -- 9
('Wznosy bokiem',                 'hantle',     'barki'),     -- 10
('Plank',                         'masa ciala', 'brzuch'),    -- 11
('Wypychanie na suwnicy',         'maszyna',    'nogi'),      -- 12
('Pompki na poręczach',           'masa ciala', 'triceps');   -- 13

-- plans for the test user (Day 3 is rest day :))
INSERT INTO plans (user_id, name) VALUES
(1, 'Day 1'),
(1, 'Day 2'),
(1, 'Day 4');

-- Day 1 = push
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(1, 3,  4, 8,  1),
(1, 4,  3, 8,  2),
(1, 10, 3, 12, 3),
(1, 9,  3, 12, 4),
(1, 13, 3, 10, 5);

-- Day 2 = pull
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(2, 2, 4, 5,  1),
(2, 5, 4, 8,  2),
(2, 6, 3, 8,  3),
(2, 8, 3, 12, 4);

-- Day 4 = legs
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(3, 1,  5, 5,  1),
(3, 12, 3, 12, 2),
(3, 7,  3, 10, 3),
(3, 11, 3, 1,  4);

-- a few workouts for the raport
INSERT INTO workouts (user_id, plan_id, workout_date, duration_min, notes) VALUES
(1, 1, '2026-10-05', 55, 'dobry trening'),
(1, 2, '2026-10-07', 60, NULL),
(1, 3, '2026-10-09', 65, 'ciezkie nogi');

-- sets from workout 1 (Day 1)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(1, 3, 1, 8, 70),
(1, 3, 2, 8, 70),
(1, 3, 3, 8, 70),
(1, 3, 4, 6, 70),
(1, 4, 1, 8, 40),
(1, 4, 2, 8, 40),
(1, 4, 3, 7, 40),
(1, 10, 1, 12, 10),
(1, 10, 2, 12, 10),
(1, 10, 3, 12, 10);

-- sets from workout 2 (Day 2)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(2, 2, 1, 5, 120),
(2, 2, 2, 5, 120),
(2, 2, 3, 5, 120),
(2, 2, 4, 5, 120),
(2, 5, 1, 8, 0),
(2, 5, 2, 7, 0),
(2, 5, 3, 6, 0),
(2, 6, 1, 8, 60),
(2, 6, 2, 8, 60),
(2, 6, 3, 8, 60);

-- sets from workout 3 (Day 4)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(3, 1, 1, 5, 100),
(3, 1, 2, 5, 100),
(3, 1, 3, 5, 100),
(3, 1, 4, 5, 100),
(3, 1, 5, 5, 100),
(3, 12, 1, 12, 150),
(3, 12, 2, 12, 150),
(3, 12, 3, 12, 150);
