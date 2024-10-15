import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    // Check if weight and height inputs are valid
    if (!weight || !height || weight <= 0 || height <= 0) {
      setError('Please enter valid weight and height.');
      return;
    }

    // Clear previous errors
    setError('');

    // Calculate BMI
    const heightInMeters = parseFloat(height) / 100; // converting height to meters
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);
    determineBMICategory(bmiValue);
  };

  const determineBMICategory = (bmiValue) => {
    let category = '';
    if (bmiValue < 18.5) {
      category = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    setBmiCategory(category);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 px-10 py-10 overflow-x-hidden shadow-2xl">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">BMI Calculator</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={calculateBMI} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-black"
          >
            Calculate BMI
          </button>
        </form>

        {/* BMI Result */}
        {bmi && (
          <div className="mt-6 bg-gray-50 shadow rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Your BMI is: {bmi}</h2>
            <p className="text-lg text-gray-600">{bmiCategory}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
