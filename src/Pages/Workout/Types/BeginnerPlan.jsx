import React, { useState } from 'react';

const exercises = {
    shoulders: {
      beginner: {
        Male: [
          "Cuffed Behind-The-Back Lateral Raise",
          "Machine Lateral Raise",
          "Dumbbell Shoulder Press",
          "Cable Front Raise"
        ],
        Female: [
          "Seated Dumbbell Shoulder Press",
          "Resistance Band Lateral Raise",
          "Cable Face Pull",
          "Dumbbell Lateral Raise"
        ]
      },
      advanced: {
        Male: [
          "Dumbbell Lateral Raise",
          "Machine Shoulder Press",
          "Smith Machine Shoulder Press",
          "Standing DB Arnold Press",
          "Overhead Barbell Press"
        ],
        Female: [
          "Cable Face Pull",
          "Seated Dumbbell Shoulder Press",
          "Resistance Band Shoulder Press",
          "Standing DB Lateral Raise",
          "Single-Arm Landmine Press"
        ]
      }
    },
    lats: {
      beginner: {
        Male: [
          "Cable Lat Prayer",
          "DB Lat Pullover",
          "Lat Pulldown Machine",
          "Resistance Band Lat Pulldown"
        ],
        Female: [
          "Lat Pulldown Machine",
          "Resistance Band Lat Pulldown",
          "Seated Cable Row",
          "Assisted Pull-Up"
        ]
      },
      advanced: {
        Male: [
          "Machine Lat Pullover",
          "Lat-Focused Cable Row",
          "Elbows-In 1-Arm DB Row",
          "Half-Kneeling 1-Arm Lat Pulldown",
          "Weighted Pull-Up"
        ],
        Female: [
          "Wide Grip Lat Pulldown",
          "Assisted Pull-Up",
          "Single-Arm Cable Row",
          "Resistance Band Rows",
          "Incline Dumbbell Row"
        ]
      }
    },
    quads: {
      beginner: {
        Male: [
          "Leg Extension",
          "Reverse Nordics",
          "Goblet Squat",
          "Bodyweight Lunges"
        ],
        Female: [
          "Leg Extension",
          "Bodyweight Squat",
          "Dumbbell Step-Up",
          "Resistance Band Leg Extension"
        ]
      },
      advanced: {
        Male: [
          "Single-Leg Leg Press",
          "Sissy Squat",
          "Barbell Front Squat",
          "Bulgarian Split Squat"
        ],
        Female: [
          "Sissy Squat",
          "Weighted Step-Up",
          "Dumbbell Bulgarian Split Squat",
          "Barbell Front Squat"
        ]
      }
    },
    glutes: {
      beginner: {
        Male: [
          "Machine Hip Abduction",
          "Cable Hip Abduction",
          "Bodyweight Glute Bridge",
          "Banded Squats"
        ],
        Female: [
          "Machine Hip Abduction",
          "Cable Hip Abduction",
          "Banded Glute Bridge",
          "Bodyweight Hip Thrust"
        ]
      },
      advanced: {
        Male: [
          "Lateral Band Walk",
          "Barbell Hip Thrust",
          "Single-Leg DB Hip Thrust",
          "Cable Kickback"
        ],
        Female: [
          "Lateral Band Walk",
          "Barbell Hip Thrust",
          "Weighted Glute Bridge",
          "Cable Glute Kickback"
        ]
      }
    },
    chest: {
      beginner: {
        Male: [
          "Low Incline DB Flye",
          "Low-To-High Cable Crossover",
          "Push-Ups",
          "Machine Chest Press"
        ],
        Female: [
          "Machine Chest Fly",
          "Low Incline DB Press",
          "Push-Ups",
          "Cable Chest Fly"
        ]
      },
      advanced: {
        Male: [
          "Chest Press Machine (incline if upper pecs are lagging, flat if entire chest is lagging)",
          "Dumbbell Chest Press (incline if upper pecs are lagging, flat if entire chest is lagging)",
          "Weighted Dips",
          "Cable Flyes"
        ],
        Female: [
          "Incline DB Press",
          "Pec Deck Machine",
          "Weighted Push-Ups",
          "Cable Flyes (High-to-Low)"
        ]
      }
    },
    neck: {
      beginner: {
        Male: [
          "Plate-Loaded Neck Curls",
          "Isometric Neck Hold",
          "Resistance Band Neck Flexion"
        ],
        Female: [
          "Neck Flexion with Resistance Band",
          "Neck Extension",
          "Isometric Neck Hold"
        ]
      },
      advanced: {
        Male: [
          "Head Harness Neck Extension",
          "Plate-Loaded Neck Extension",
          "Weighted Neck Side Flexion"
        ],
        Female: [
          "Head Harness Neck Flexion",
          "Weighted Neck Extension",
          "Isometric Neck Hold"
        ]
      }
    },
    arms: {
      beginner: {
        Male: [
          "Dumbbell Bicep Curl",
          "Tricep Pushdown",
          "Resistance Band Bicep Curl",
          "Dumbbell Hammer Curl"
        ],
        Female: [
          "Resistance Band Tricep Extension",
          "Dumbbell Bicep Curl",
          "Seated Overhead Tricep Extension",
          "Cable Bicep Curl"
        ]
      },
      advanced: {
        Male: [
          "Barbell Curl",
          "Skull Crushers",
          "Cable Tricep Pushdown",
          "Incline Dumbbell Curl"
        ],
        Female: [
          "Cable Tricep Extension",
          "Preacher Curl",
          "Incline Dumbbell Curl",
          "Overhead Cable Extension"
        ]
      }
    },
    abs: {
      beginner: {
        Male: [
          "Crunches",
          "Plank",
          "Leg Raises",
          "Russian Twist"
        ],
        Female: [
          "Bodyweight Crunch",
          "Side Plank",
          "Bicycle Crunch",
          "Reverse Crunch"
        ]
      },
      advanced: {
        Male: [
          "Weighted Crunch",
          "Hanging Leg Raise",
          "Cable Crunch",
          "Ab Wheel Rollout"
        ],
        Female: [
          "Hanging Knee Raise",
          "Cable Woodchopper",
          "Weighted Russian Twist",
          "Decline Sit-Up"
        ]
      }
    },
    calves: {
      beginner: {
        Male: [
          "Standing Calf Raise",
          "Seated Calf Raise",
          "Bodyweight Calf Raise"
        ],
        Female: [
          "Standing Calf Raise",
          "Seated Calf Raise",
          "Resistance Band Calf Extension"
        ]
      },
      advanced: {
        Male: [
          "Weighted Calf Raise",
          "Smith Machine Calf Raise",
          "Single-Leg Calf Raise"
        ],
        Female: [
          "Weighted Calf Raise",
          "Single-Leg Calf Raise",
          "Standing Smith Machine Calf Raise"
        ]
      }
    }
  };
  

const BeginnerPlan = () => {
    const [workoutGenerated, setWorkoutGenerated] = useState(false);
    const [generatedWorkout, setGeneratedWorkout] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState("");
  
    const [formState, setFormState] = useState({
      selectedMuscleGroup: 'shoulders',
      fitnessLevel: 'beginner',
      fitnessGoal: 'Build Muscle',
      bodyweight: '',
      height: '',
      gender: 'Male'
    });
  
    // Handle input changes and update form state
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    // BMI Calculation and Category Function
    const calculateBMI = () => {
      const weight = parseFloat(formState.bodyweight);
      const heightInMeters = parseFloat(formState.height) / 100;
      if (weight > 0 && heightInMeters > 0) {
        const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(calculatedBmi);
        setBmiCategory(getBmiCategory(calculatedBmi));
      }
    };
  
    // Function to categorize BMI
    const getBmiCategory = (bmi) => {
      if (bmi < 18.5) return "Underweight";
      if (bmi >= 18.5 && bmi < 24.9) return "Normal";
      if (bmi >= 25 && bmi < 29.9) return "Overweight";
      if (bmi >= 30) return "Obesity";
    };
  
    // Handler for form submission (generate workout)
    const handleGenerateWorkout = () => {
      calculateBMI();  // Calculate BMI when generating workout
      const { selectedMuscleGroup, fitnessLevel, gender } = formState;
      const workoutPlan = {
        muscleGroup: selectedMuscleGroup,
        level: fitnessLevel,
        exercises: exercises[selectedMuscleGroup][fitnessLevel][gender],
      };
      setGeneratedWorkout(workoutPlan);
      setWorkoutGenerated(true);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-8 w-2/4 shadow-2xl">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Get Started</h1>
  
          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-2 flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formState.gender === "Male"}
                onChange={handleInputChange}
                className="mr-2"
              /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formState.gender === "Female"}
                onChange={handleInputChange}
                className="ml-4 mr-2"
              /> Female
            </div>
          </div>
  
          {/* Bodyweight */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Bodyweight (kg)</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              name="bodyweight"
              value={formState.bodyweight}
              onChange={handleInputChange}
              placeholder="Enter your bodyweight in kg"
            />
          </div>
  
          {/* Height */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              className="w-full border rounded p-2"
              name="height"
              value={formState.height}
              onChange={handleInputChange}
              placeholder="Enter your height in cm"
            />
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
            className="w-full bg-red-500 text-white p-2 rounded"
          >
            Generate Your Workout
          </button>
        </div>
  
        {/* BMI Display */}
        {bmi && (
          <div className="mt-6 text-center bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto flex justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Your BMI: {bmi}
            </h3>
            <span className="ml-4 text-lg text-gray-500">({bmiCategory})</span>
          </div>
        )}
  
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