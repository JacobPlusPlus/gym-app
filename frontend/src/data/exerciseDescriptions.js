const exerciseDescriptions = {
  "Barbell Back Squat": {
    description:
      "A fundamental compound exercise targeting the lower body. The barbell squat develops strength in the quadriceps, glutes and core.",
    muscles: ["Quadriceps", "Glutes", "Core"],
    secondaryMuscles: ["Hamstrings", "Lower back"],
    instructions: [
      "Position the barbell across your upper back and grip it firmly.",
      "Stand with your feet approximately shoulder-width apart.",
      "Brace your core and begin lowering your hips.",
      "Bend your knees while keeping your chest lifted.",
      "Lower yourself to a comfortable depth while maintaining balance.",
      "Push through your feet to return to the starting position.",
    ],
    tips: [
      "Keep your back neutral throughout the movement.",
      "Keep your knees aligned with your toes.",
      "Avoid lifting your heels off the ground.",
    ],
    mistakes: [
      "Rounding the lower back.",
      "Allowing the knees to collapse inward.",
      "Lifting the heels during the movement.",
    ],
  },

  "Barbell Deadlift": {
    description:
      "A compound strength exercise that develops the posterior chain, including the back, glutes and hamstrings.",
    muscles: ["Glutes", "Hamstrings", "Back"],
    secondaryMuscles: ["Core", "Forearms"],
    instructions: [
      "Stand with the barbell over the middle of your feet.",
      "Bend your hips and knees to grip the bar.",
      "Keep your spine neutral and brace your core.",
      "Push through your feet and extend your hips and knees.",
      "Stand upright without leaning backwards.",
      "Lower the bar under control.",
    ],
    tips: [
      "Keep the bar close to your body.",
      "Maintain a neutral spine.",
      "Engage your core before lifting.",
    ],
    mistakes: [
      "Rounding the back.",
      "Moving the bar away from the body.",
      "Jerking the weight off the floor.",
    ],
  },

  "Barbell Bench Press": {
    description:
      "A classic upper-body compound exercise focused on developing chest strength and pressing power.",
    muscles: ["Chest", "Triceps"],
    secondaryMuscles: ["Front deltoids"],
    instructions: [
      "Lie flat on the bench with your eyes underneath the bar.",
      "Grip the bar slightly wider than shoulder-width.",
      "Unrack the bar and position it above your chest.",
      "Lower the bar under control towards your mid-chest.",
      "Press the bar upwards until your arms are extended.",
      "Return the bar safely to the rack.",
    ],
    tips: [
      "Keep your shoulder blades retracted.",
      "Keep your feet firmly planted.",
      "Use a controlled movement.",
    ],
    mistakes: [
      "Bouncing the bar off the chest.",
      "Lifting the hips off the bench.",
      "Allowing the wrists to bend excessively.",
    ],
  },

  "Overhead Press": {
    description:
      "A compound shoulder exercise performed by pressing a barbell overhead.",
    muscles: ["Shoulders", "Triceps"],
    secondaryMuscles: ["Core", "Upper chest"],
    instructions: [
      "Position the barbell at upper chest height.",
      "Grip the bar slightly wider than shoulder-width.",
      "Brace your core and keep your body stable.",
      "Press the bar overhead.",
      "Move your head slightly forward as the bar passes.",
      "Lower the bar under control.",
    ],
    tips: [
      "Avoid excessive arching of the lower back.",
      "Keep your core engaged.",
      "Use a comfortable range of motion.",
    ],
    mistakes: [
      "Leaning backwards excessively.",
      "Using momentum to lift the bar.",
      "Losing control during the lowering phase.",
    ],
  },

  "Dumbbell Bicep Curl": {
    description:
      "An isolation exercise focused on strengthening the biceps using dumbbells.",
    muscles: ["Biceps"],
    secondaryMuscles: ["Forearms"],
    instructions: [
      "Stand upright holding a dumbbell in each hand.",
      "Keep your elbows close to your torso.",
      "Curl the dumbbells towards your shoulders.",
      "Contract your biceps at the top.",
      "Slowly lower the dumbbells to the starting position.",
    ],
    tips: [
      "Keep your elbows relatively stationary.",
      "Avoid swinging your torso.",
      "Control the lowering phase.",
    ],
    mistakes: [
      "Using momentum to lift the weights.",
      "Moving the elbows excessively.",
      "Dropping the weights too quickly.",
    ],
  },

  "Hammer Curl": {
    description:
      "A variation of the bicep curl using a neutral grip, emphasizing the brachialis and brachioradialis.",
    muscles: ["Brachialis", "Brachioradialis"],
    secondaryMuscles: ["Biceps"],
    instructions: [
      "Hold dumbbells with your palms facing each other.",
      "Keep your elbows close to your torso.",
      "Curl the dumbbells upwards without rotating your wrists.",
      "Pause briefly at the top.",
      "Lower the dumbbells slowly.",
    ],
    tips: [
      "Maintain a neutral wrist position.",
      "Avoid swinging the weights.",
      "Keep your elbows close to your body.",
    ],
    mistakes: [
      "Rotating the wrists during the movement.",
      "Using excessive momentum.",
      "Moving the elbows forward.",
    ],
  },

  "Pull-Up": {
    description:
      "A bodyweight compound exercise that develops upper-body pulling strength, especially in the back.",
    muscles: ["Latissimus dorsi", "Biceps"],
    secondaryMuscles: ["Forearms", "Core", "Upper back"],
    instructions: [
      "Grip the pull-up bar slightly wider than shoulder-width.",
      "Start from a controlled hanging position.",
      "Engage your shoulder blades and pull yourself upwards.",
      "Continue until your chin reaches bar height.",
      "Lower yourself slowly to the starting position.",
    ],
    tips: [
      "Avoid swinging your legs.",
      "Use a controlled range of motion.",
      "Focus on pulling with your back.",
    ],
    mistakes: [
      "Using excessive momentum.",
      "Performing uncontrolled repetitions.",
      "Shrugging the shoulders excessively.",
    ],
  },

  "Romanian Deadlift": {
    description:
      "A hip-hinge exercise that primarily targets the hamstrings and glutes while developing posterior-chain strength.",
    muscles: ["Hamstrings", "Glutes"],
    secondaryMuscles: ["Lower back", "Core"],
    instructions: [
      "Stand upright holding the barbell in front of your thighs.",
      "Keep a slight bend in your knees.",
      "Push your hips backwards while lowering the bar.",
      "Keep the bar close to your legs.",
      "Lower until you feel a comfortable hamstring stretch.",
      "Drive your hips forward to return upright.",
    ],
    tips: [
      "Focus on moving through the hips.",
      "Maintain a neutral spine.",
      "Keep the bar close to your body.",
    ],
    mistakes: [
      "Bending the knees excessively.",
      "Rounding the lower back.",
      "Lowering the bar beyond your comfortable range.",
    ],
  },

  "Plank": {
    description:
      "An isometric core exercise that develops trunk stability and endurance.",
    muscles: ["Abdominals", "Core"],
    secondaryMuscles: ["Shoulders", "Glutes"],
    instructions: [
      "Position your forearms on the floor.",
      "Extend your legs behind you.",
      "Keep your body in a straight line.",
      "Brace your abdominal muscles.",
      "Hold the position while breathing normally.",
    ],
    tips: [
      "Keep your hips level.",
      "Avoid holding your breath.",
      "Maintain a neutral neck position.",
    ],
    mistakes: [
      "Allowing the hips to sag.",
      "Raising the hips excessively.",
      "Holding your breath.",
    ],
  },

  "Push-Up": {
    description:
      "A bodyweight pressing exercise that develops chest, shoulder and triceps strength.",
    muscles: ["Chest", "Triceps"],
    secondaryMuscles: ["Shoulders", "Core"],
    instructions: [
      "Place your hands slightly wider than shoulder-width.",
      "Extend your legs and maintain a straight body position.",
      "Brace your core.",
      "Lower your chest towards the floor.",
      "Push through your hands to return to the starting position.",
    ],
    tips: [
      "Keep your body aligned.",
      "Avoid flaring your elbows excessively.",
      "Use a controlled tempo.",
    ],
    mistakes: [
      "Allowing the hips to sag.",
      "Performing partial repetitions.",
      "Moving the head excessively.",
    ],
  },
};

export default exerciseDescriptions;