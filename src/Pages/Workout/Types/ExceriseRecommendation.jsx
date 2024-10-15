import React, { useState } from 'react';

const ExerciseRecommendation = () => {
  const [goal, setGoal] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getExerciseRecommendations(goal);
  };

  const getExerciseRecommendations = (goal) => {
    let recommendedExercises = [];

    switch (goal) {
      case 'weight_loss':
        recommendedExercises = [
          { exercise: 'High-Intensity Interval Training (HIIT)', sets: '3-5', reps: '30 sec work / 30 sec rest' },
          { exercise: 'Running or Jogging', sets: '3', reps: '30 min' },
          { exercise: 'Cycling', sets: '3', reps: '30 min' },
          { exercise: 'Bodyweight Squats', sets: '3', reps: '12-15' },
          { exercise: 'Jump Rope', sets: '5', reps: '1 min' },
        ];
        break;
      case 'muscle_gain':
        recommendedExercises = [
          { exercise: 'Barbell Squats', sets: '4', reps: '6-8' },
          { exercise: 'Bench Press', sets: '4', reps: '6-8' },
          { exercise: 'Deadlifts', sets: '4', reps: '6-8' },
          { exercise: 'Pull-Ups', sets: '3', reps: '8-10' },
          { exercise: 'Dumbbell Rows', sets: '3', reps: '8-10' },
        ];
        break;
      case 'toning':
        recommendedExercises = [
          { exercise: 'Resistance Band Squats', sets: '3', reps: '12-15' },
          { exercise: 'Pilates Leg Lifts', sets: '3', reps: '10-12 per leg' },
          { exercise: 'Yoga Sun Salutations', sets: '3', reps: '5 rounds' },
          { exercise: 'Circuit Training (various bodyweight exercises)', sets: '3', reps: '10-15' },
          { exercise: 'Core Exercises (Planks, Russian Twists)', sets: '3', reps: '30 sec' },
        ];
        break;
      case 'endurance':
        recommendedExercises = [
          { exercise: 'Long-Distance Running', sets: '1', reps: '60 min' },
          { exercise: 'Cycling', sets: '1', reps: '45-60 min' },
          { exercise: 'Swimming', sets: '1', reps: '30 min' },
          { exercise: 'Rowing', sets: '1', reps: '30 min' },
          { exercise: 'Jump Rope', sets: '5', reps: '2 min' },
        ];
        break;
      default:
        recommendedExercises = [];
    }

    setExercises(recommendedExercises);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Exercise Recommendation</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="goal">
            What is your fitness goal?
          </label>
          <select
            id="goal"
            value={goal}
            onChange={handleGoalChange}
            className="block w-full p-3 border border-gray-300 rounded mb-4"
            required
          >
            <option value="" disabled>Select your goal</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="toning">Toning</option>
            <option value="endurance">Endurance</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          >
            Get Recommendations
          </button>
        </form>

        {exercises.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Exercises:</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Exercise</th>
                  <th className="px-4 py-2 text-left text-gray-600">Sets</th>
                  <th className="px-4 py-2 text-left text-gray-600">Reps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {exercises.map((exercise, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{exercise.exercise}</td>
                    <td className="px-4 py-2">{exercise.sets}</td>
                    <td className="px-4 py-2">{exercise.reps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseRecommendation;
