import React from 'react';

const WorkoutPlans = () => {
  const workoutCategories = [
    {
      level: 'Beginner',
      description: 'Ideal for those new to fitness, focusing on foundational movements and low intensity.',
      exercises: [
        'Bodyweight Squats',
        'Push-ups (knee or standard)',
        'Plank (30 seconds)',
        'Walking Lunges',
        'Light Jogging (15-20 minutes)',
      ],
    },
    {
      level: 'Intermediate',
      description: 'For individuals with some fitness experience, introducing more complex movements and higher intensity.',
      exercises: [
        'Dumbbell Squats',
        'Bench Press',
        'Plank (1 minute)',
        'Deadlifts',
        'Running (30 minutes)',
      ],
    },
    {
      level: 'Expert',
      description: 'Designed for advanced athletes, focusing on heavy lifts and high-intensity workouts.',
      exercises: [
        'Barbell Squats',
        'Weighted Pull-ups',
        'Deadlifts (heavy)',
        'HIIT Workouts (20 minutes)',
        'CrossFit-style WODs',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Workout Plans</h1>
      <p className="text-center text-gray-600 mb-6">
        Choose a workout plan based on your fitness level and goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workoutCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{category.level}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <h3 className="font-medium text-gray-800 mb-2">Exercises:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {category.exercises.map((exercise, idx) => (
                <li key={idx} className="relative pl-4">
                  <span className="absolute left-0 top-0 text-green-500">✔</span>
                  {exercise}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
