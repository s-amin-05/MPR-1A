import React, { useState } from 'react';

const exercises = {
  shoulders: {
    beginner: [
      "Cuffed Behind-The-Back Lateral Raise",
      "Machine Lateral Raise"
    ],
    advanced: [
      "Dumbbell Lateral Raise",
      "Machine Shoulder Press",
      "Smith Machine Shoulder Press",
      "Standing DB Arnold Press"
    ]
  },
  lats: {
    beginner: [
      "Cable Lat Prayer",
      "DB Lat Pullover"
    ],
    advanced: [
      "Machine Lat Pullover",
      "Lat-Focused Cable Row",
      "Elbows-In 1-Arm DB Row",
      "Half-Kneeling 1-Arm Lat Pulldown"
    ]
  },
  quads: {
    beginner: [
      "Leg Extension",
      "Reverse Nordics"
    ],
    advanced: [
      "Single-Leg Leg Press",
      "Sissy Squat"
    ]
  },
  glutes: {
    beginner: [
      "Machine Hip Abduction",
      "Cable Hip Abduction"
    ],
    advanced: [
      "Lateral Band Walk",
      "Barbell Hip Thrust",
      "Single-Leg DB Hip Thrust"
    ]
  },
  chest: {
    beginner: [
      "Low Incline DB Flye",
      "Low-To-High Cable Crossover"
    ],
    advanced: [
      "Chest Press Machine (incline if upper pecs are lagging, flat if entire chest is lagging)",
      "Dumbbell Chest Press (incline if upper pecs are lagging, flat if entire chest is lagging)"
    ]
  },
  neck: {
    beginner: [
      "Plate-Loaded Neck Curls"
    ],
    advanced: [
      "Head Harness Neck Extension",
      "Plate-Loaded Neck Extension"
    ]
  }
};

const BeginnerPlan = () => {
  const [workoutGenerated, setWorkoutGenerated] = useState(false);

  // Form state to capture real-time changes but not reflect them until submission
  const [formState, setFormState] = useState({
    selectedMuscleGroup: 'shoulders',
    fitnessLevel: 'beginner',
    fitnessGoal: 'Build Muscle',
  });

  // Final generated workout based on formState
  const [generatedWorkout, setGeneratedWorkout] = useState(null);

  // Handle input changes and update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission (generate workout)
  const handleGenerateWorkout = () => {
    const workoutPlan = {
      muscleGroup: formState.selectedMuscleGroup,
      level: formState.fitnessLevel,
      exercises: exercises[formState.selectedMuscleGroup][formState.fitnessLevel],
    };
    setGeneratedWorkout(workoutPlan);
    setWorkoutGenerated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-900 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-10">
        <h1 className="text-2xl font-bold text-teal-900 mb-4">Get Started</h1>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="mt-2 flex items-center">
            <input type="radio" name="gender" value="Male" className="mr-2" /> Male
            <input type="radio" name="gender" value="Female" className="ml-4 mr-2" /> Female
          </div>
        </div>

        {/* Unit of Measurement */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Unit of Measurement</label>
          <div className="mt-2 flex items-center">
            <input type="radio" name="unit" value="Lbs" className="mr-2" /> Lbs
            <input type="radio" name="unit" value="Kgs" className="ml-4 mr-2" /> Kgs
          </div>
        </div>

        {/* Bodyweight */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bodyweight</label>
          <input type="number" className="w-full border rounded p-2" placeholder="Enter your bodyweight" />
        </div>

        {/* Fitness Level */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fitness Level</label>
          <select
            className="w-full border rounded p-2"
            name="fitnessLevel"
            value={formState.fitnessLevel}
            onChange={handleInputChange}
          >
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Fitness Goal */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fitness Goal</label>
          <select
            className="w-full border rounded p-2"
            name="fitnessGoal"
            value={formState.fitnessGoal}
            onChange={handleInputChange}
          >
            <option value="Build Muscle">Build Muscle</option>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Improve Endurance">Improve Endurance</option>
          </select>
        </div>

        {/* Days per week */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How many days can you workout per week?</label>
          <input type="range" min="1" max="6" className="w-full mt-2" />
        </div>

        {/* Muscle Group Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Muscle Group</label>
          <select
            className="w-full border rounded p-2"
            name="selectedMuscleGroup"
            value={formState.selectedMuscleGroup}
            onChange={handleInputChange}
          >
            <option value="shoulders">Shoulders</option>
            <option value="lats">Lats</option>
            <option value="quads">Quads</option>
            <option value="glutes">Glutes</option>
            <option value="chest">Chest</option>
            <option value="neck">Neck</option>
          </select>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateWorkout}
          className="w-full bg-teal-600 text-white p-2 rounded"
        >
          Generate Your Workout
        </button>
      </div>

      {/* Workout Plan Section */}
      {workoutGenerated && generatedWorkout && (
        <div className="mt-6 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-teal-900 mb-4">
            Your workout plan for {generatedWorkout.muscleGroup} ({generatedWorkout.level} level)
          </h2>

          {/* Exercise List */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Exercises</h3>
            <ul className="space-y-4">
              {generatedWorkout.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeginnerPlan;
