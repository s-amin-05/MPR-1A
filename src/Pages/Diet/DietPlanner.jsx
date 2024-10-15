import React, { useState } from 'react';
import axios from 'axios';

const DietPlanner = () => {
  const [goal, setGoal] = useState('');
  const [calories, setCalories] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [dietPlan, setDietPlan] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

 

  const fetchDietPlan = async () => {
    try {
      setLoading(true);
      setError('');

      // Map the user's inputs to Spoonacular's diet and nutrient parameters
      let diet = '';
      if (foodPreference === 'vegetarian') diet = 'vegetarian';
      if (foodPreference === 'vegan') diet = 'vegan';
      
      let targetGoal = '';
      if (goal === 'weight loss') targetGoal = 'weight loss';
      if (goal === 'muscle gain') targetGoal = 'high-protein';
      if (goal === 'balanced') targetGoal = 'balanced';

      // Fetch meal plans based on the user's inputs
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&diet=${diet}&maxCalories=${calories}&number=5`
      );

      setDietPlan(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching diet plan:', error);
      setError('Failed to fetch diet plan. Please try again.');
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal || !calories || !foodPreference) {
      setError('Please fill out all fields.');
      return;
    }
    fetchDietPlan();
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 my-10 overflow-x-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Personalized Diet Planner</h1>
        <p className="text-center text-gray-600 mb-4">
          Fill in your details and get a personalized diet plan based on your fitness goals.
        </p>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Goal</label>
            <select
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="">Select your goal</option>
              <option value="weight loss">Weight Loss</option>
              <option value="muscle gain">Muscle Gain</option>
              <option value="balanced">Balanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Daily Caloric Intake</label>
            <input
              type="number"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="e.g. 2000"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Food Preference</label>
            <select
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={foodPreference}
              onChange={(e) => setFoodPreference(e.target.value)}
            >
              <option value="">Select your preference</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Diet Plan'}
          </button>
        </form>

        {/* Generated Diet Plan */}
        {dietPlan && (
          <div className="mt-8 bg-gray-50 shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Personalized Diet Plan</h2>
            <ul className="list-disc list-inside space-y-2">
              {dietPlan.map((meal, index) => (
                <li key={index} className="text-gray-700">
                  {meal.title} <br />
                  <a href={`https://spoonacular.com/recipes/${meal.title}-${meal.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
                    View Recipe
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanner;
