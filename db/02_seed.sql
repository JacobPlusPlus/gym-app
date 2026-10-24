-- sample data so the app has something to show
-- password_hash is just a placeholder, there is no login yet

INSERT INTO users (username, email, password_hash, weight_kg, height_cm) VALUES
('tester', 'tester@example.com', 'placeholder', 78.5, 181);

-- all 50 exercises, imported from frontend/src/data/exercises.json (ids match the json)
INSERT INTO exercises (id, name, equipment, muscle_group, image, difficulty) VALUES
( 1, 'Barbell Back Squat',      'Barbell',               'Legs',      'barbell-back-squat.jpg',    'Intermediate'),
( 2, 'Barbell Deadlift',        'Barbell',               'Back',      'barbell-deadlift.jpg',      'Intermediate'),
( 3, 'Barbell Bench Press',     'Barbell',               'Chest',     'barbell-bench-press.jpg',   'Intermediate'),
( 4, 'Overhead Press',          'Barbell',               'Shoulders', 'overhead-press.jpg',        'Intermediate'),
( 5, 'Dumbbell Bench Press',    'Dumbbells',             'Chest',     'barbell-bench-press.jpg',   'Beginner'),
( 6, 'Incline Dumbbell Press',  'Dumbbells',             'Chest',     'barbell-bench-press.jpg',   'Beginner'),
( 7, 'Dumbbell Shoulder Press', 'Dumbbells',             'Shoulders', 'overhead-press.jpg',        'Beginner'),
( 8, 'Dumbbell Lateral Raise',  'Dumbbells',             'Shoulders', 'overhead-press.jpg',        'Beginner'),
( 9, 'Dumbbell Bicep Curl',     'Dumbbells',             'Arms',      'dumbbell-bicep-curl.jpg',   'Beginner'),
(10, 'Hammer Curl',             'Dumbbells',             'Arms',      'dumbbell-bicep-curl.jpg',   'Beginner'),
(11, 'Triceps Pushdown',        'Cable',                 'Arms',      'triceps-pushdown.jpg',      'Beginner'),
(12, 'Cable Triceps Extension', 'Cable',                 'Arms',      'triceps-pushdown.jpg',      'Beginner'),
(13, 'Pull-Up',                 'Pull-up Bar',           'Back',      'pull-up.jpg',               'Intermediate'),
(14, 'Lat Pulldown',            'Cable Machine',         'Back',      'pull-up.jpg',               'Beginner'),
(15, 'Seated Cable Row',        'Cable Machine',         'Back',      'barbell-bent-over-row.jpg', 'Beginner'),
(16, 'Barbell Bent-Over Row',   'Barbell',               'Back',      'barbell-bent-over-row.jpg', 'Intermediate'),
(17, 'Dumbbell Row',            'Dumbbell',              'Back',      'barbell-bent-over-row.jpg', 'Beginner'),
(18, 'Leg Press',               'Leg Press Machine',     'Legs',      'barbell-back-squat.jpg',    'Beginner'),
(19, 'Romanian Deadlift',       'Barbell',               'Legs',      'romanian-deadlift.jpg',     'Intermediate'),
(20, 'Leg Extension',           'Leg Extension Machine', 'Legs',      'barbell-back-squat.jpg',    'Beginner'),
(21, 'Lying Leg Curl',          'Leg Curl Machine',      'Legs',      'romanian-deadlift.jpg',     'Beginner'),
(22, 'Walking Lunge',           'Bodyweight',            'Legs',      'barbell-back-squat.jpg',    'Beginner'),
(23, 'Hip Thrust',              'Barbell',               'Glutes',    'hip-thrust.jpg',            'Beginner'),
(24, 'Calf Raise',              'Machine',               'Legs',      'calf-raise.jpg',            'Beginner'),
(25, 'Chest Fly',               'Dumbbells',             'Chest',     'barbell-bench-press.jpg',   'Beginner'),
(26, 'Cable Crossover',         'Cable Machine',         'Chest',     'barbell-bench-press.jpg',   'Beginner'),
(27, 'Face Pull',               'Cable Machine',         'Shoulders', 'barbell-bent-over-row.jpg', 'Beginner'),
(28, 'Plank',                   'Bodyweight',            'Core',      'plank.jpg',                 'Beginner'),
(29, 'Hanging Leg Raise',       'Pull-up Bar',           'Core',      'plank.jpg',                 'Intermediate'),
(30, 'Push-Up',                 'Bodyweight',            'Chest',     'barbell-bench-press.jpg',   'Beginner'),
(31, 'Goblet Squat',            'Dumbbell',              'Legs',      'barbell-back-squat.jpg',    'Beginner'),
(32, 'Bulgarian Split Squat',   'Dumbbells',             'Legs',      'barbell-back-squat.jpg',    'Intermediate'),
(33, 'Front Squat',             'Barbell',               'Legs',      'barbell-back-squat.jpg',    'Intermediate'),
(34, 'Sumo Deadlift',           'Barbell',               'Legs',      'barbell-deadlift.jpg',      'Intermediate'),
(35, 'Good Morning',            'Barbell',               'Back',      'romanian-deadlift.jpg',     'Intermediate'),
(36, 'Glute Bridge',            'Bodyweight',            'Glutes',    'hip-thrust.jpg',            'Beginner'),
(37, 'Step-Up',                 'Bodyweight',            'Legs',      'barbell-back-squat.jpg',    'Beginner'),
(38, 'Seated Leg Curl',         'Leg Curl Machine',      'Legs',      'romanian-deadlift.jpg',     'Beginner'),
(39, 'Arnold Press',            'Dumbbells',             'Shoulders', 'overhead-press.jpg',        'Intermediate'),
(40, 'Rear Delt Fly',           'Dumbbells',             'Shoulders', 'overhead-press.jpg',        'Beginner'),
(41, 'Upright Row',             'Barbell',               'Shoulders', 'barbell-bent-over-row.jpg', 'Intermediate'),
(42, 'Barbell Shrug',           'Barbell',               'Shoulders', 'barbell-bent-over-row.jpg', 'Beginner'),
(43, 'Dips',                    'Dip Bars',              'Arms',      'triceps-pushdown.jpg',      'Intermediate'),
(44, 'Chest-Supported Row',     'Dumbbells',             'Back',      'barbell-bent-over-row.jpg', 'Beginner'),
(45, 'Single-Arm Cable Row',    'Cable Machine',         'Back',      'barbell-bent-over-row.jpg', 'Beginner'),
(46, 'EZ-Bar Curl',             'EZ Bar',                'Arms',      'dumbbell-bicep-curl.jpg',   'Beginner'),
(47, 'Preacher Curl',           'Preacher Curl Bench',   'Arms',      'dumbbell-bicep-curl.jpg',   'Beginner'),
(48, 'Skull Crusher',           'EZ Bar',                'Arms',      'triceps-pushdown.jpg',      'Intermediate'),
(49, 'Russian Twist',           'Bodyweight',            'Core',      'plank.jpg',                 'Beginner'),
(50, 'Dead Bug',                'Bodyweight',            'Core',      'plank.jpg',                 'Beginner');

-- we inserted the exercises with explicit ids, so bump the sequence
-- otherwise the next auto id would start at 1 and clash
SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises));

-- plans for the test user (Day 3 is a rest day :))
INSERT INTO plans (user_id, name) VALUES
(1, 'Day 1'),
(1, 'Day 2'),
(1, 'Day 4');

-- Day 1 = push (chest / shoulders / triceps)
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(1, 3,  4, 8,  1),   -- Barbell Bench Press
(1, 4,  3, 8,  2),   -- Overhead Press
(1, 6,  3, 10, 3),   -- Incline Dumbbell Press
(1, 8,  3, 15, 4),   -- Dumbbell Lateral Raise
(1, 11, 3, 12, 5),   -- Triceps Pushdown
(1, 43, 3, 10, 6);   -- Dips

-- Day 2 = pull (back / biceps)
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(2, 13, 4, 6,  1),   -- Pull-Up
(2, 16, 4, 8,  2),   -- Barbell Bent-Over Row
(2, 14, 3, 10, 3),   -- Lat Pulldown
(2, 9,  3, 12, 4),   -- Dumbbell Bicep Curl
(2, 27, 3, 15, 5);   -- Face Pull

-- Day 4 = legs
INSERT INTO plan_exercises (plan_id, exercise_id, sets, reps, position) VALUES
(3, 1,  5, 5,  1),   -- Barbell Back Squat
(3, 19, 3, 8,  2),   -- Romanian Deadlift
(3, 18, 3, 12, 3),   -- Leg Press
(3, 20, 3, 15, 4),   -- Leg Extension
(3, 24, 4, 20, 5);   -- Calf Raise

-- a few finished workouts for the raport
INSERT INTO workouts (user_id, plan_id, workout_date, duration_min, notes) VALUES
(1, 1, '2026-10-05', 55, 'good session'),
(1, 2, '2026-10-07', 60, NULL),
(1, 3, '2026-10-09', 65, 'heavy legs');

-- sets from workout 1 (Day 1)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(1, 3,  1, 8, 70),
(1, 3,  2, 8, 70),
(1, 3,  3, 8, 70),
(1, 3,  4, 6, 70),
(1, 4,  1, 8, 40),
(1, 4,  2, 8, 40),
(1, 4,  3, 7, 40),
(1, 11, 1, 12, 25),
(1, 11, 2, 12, 25),
(1, 11, 3, 12, 25);

-- sets from workout 2 (Day 2)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(2, 13, 1, 6, 0),
(2, 13, 2, 6, 0),
(2, 13, 3, 5, 0),
(2, 16, 1, 8, 60),
(2, 16, 2, 8, 60),
(2, 16, 3, 8, 60),
(2, 9,  1, 12, 12),
(2, 9,  2, 12, 12),
(2, 9,  3, 10, 12);

-- sets from workout 3 (Day 4)
INSERT INTO workout_sets (workout_id, exercise_id, set_number, reps, weight_kg) VALUES
(3, 1,  1, 5, 100),
(3, 1,  2, 5, 100),
(3, 1,  3, 5, 100),
(3, 1,  4, 5, 100),
(3, 1,  5, 5, 100),
(3, 18, 1, 12, 150),
(3, 18, 2, 12, 150),
(3, 18, 3, 12, 150);
