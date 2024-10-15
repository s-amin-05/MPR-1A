import React from 'react';

const Diet = () => {
  const dietPlans = [
    {
      name: 'Weight Loss Plan',
      description: 'This plan focuses on calorie deficit with balanced macronutrients to help you lose weight gradually.',
      items: ['Breakfast: Oatmeal with fruits', 'Lunch: Grilled chicken with quinoa', 'Dinner: Salmon with steamed vegetables'],
    },
    {
      name: 'Muscle Gain Plan',
      description: 'High-protein meals to support muscle growth and repair.',
      items: ['Breakfast: Protein shake with bananas', 'Lunch: Chicken breast with sweet potatoes', 'Dinner: Beef stir-fry with brown rice'],
    },
    {
      name: 'Balanced Diet Plan',
      description: 'A balanced diet with all essential nutrients for maintaining overall health.',
      items: ['Breakfast: Avocado toast with eggs', 'Lunch: Turkey sandwich with whole grain bread', 'Dinner: Grilled tofu with mixed vegetables'],
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Diet Plans</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Welcome to Fitverse's Diet Section! Here are some personalized diet plans to help you reach your fitness goals.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dietPlans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <ul className="list-disc pl-6">
              {plan.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
