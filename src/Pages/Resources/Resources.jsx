// Resources.js
import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className='flex items-center h-screen justify-center'>
        <div className="flex justify-center gap-10 p-5">
        
        <Link to="/pdf/Deit.pdf" className="w-72 p-5 border border-gray-300 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">Diet</h2>
            <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Healthy diet"
            className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">Explore meal plans, nutrition tips, and healthy recipes to support your fitness goals.</p>
        </Link>

        <Link to="/pdf/WorkOut.pdf" className="w-72 p-5 border border-gray-300 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">Workout</h2>
            <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Workout plan"
            className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">Discover workout routines, exercises, and fitness tips to help you stay active.</p>
        </Link>

        </div>

    </div>
  );
};

export default Resources;
