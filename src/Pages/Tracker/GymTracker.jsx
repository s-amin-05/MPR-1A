import React, { useState, useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const exerciseColors = {
  "Squat": { border: 'rgba(255, 99, 132, 1)', background: 'rgba(255, 99, 132, 0.2)' },
  "Bench Press": { border: 'rgba(54, 162, 235, 1)', background: 'rgba(54, 162, 235, 0.2)' },
  "Deadlift": { border: 'rgba(255, 206, 86, 1)', background: 'rgba(255, 206, 86, 0.2)' },
  "Overhead Press": { border: 'rgba(75, 192, 192, 1)', background: 'rgba(75, 192, 192, 0.2)' },
  "Pull-Up": { border: 'rgba(153, 102, 255, 1)', background: 'rgba(153, 102, 255, 0.2)' },
};

const GymTracker = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({ exercise: "Squat", sets: "", reps: "", weight: "" });
  const exerciseData = useRef({
    "Squat": { labels: [], data: [] },
    "Bench Press": { labels: [], data: [] },
    "Deadlift": { labels: [], data: [] },
    "Overhead Press": { labels: [], data: [] },
    "Pull-Up": { labels: [], data: [] },
  });
  const chartInstances = useRef({});

  useEffect(() => {
    Object.keys(exerciseData.current).forEach((exercise) => {
      const ctx = document.getElementById(`${exercise}Chart`).getContext('2d');

      if (chartInstances.current[exercise]) {
        chartInstances.current[exercise].destroy();
      }

      chartInstances.current[exercise] = new Chart(ctx, {
        type: 'line',
        data: {
          labels: exerciseData.current[exercise].labels,
          datasets: [{
            label: `${exercise} Weight (kg)`,
            data: exerciseData.current[exercise].data,
            borderColor: exerciseColors[exercise].border,
            backgroundColor: exerciseColors[exercise].background,
            borderWidth: 2,
            fill: true,
          }]
        },
        options: {
          scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: 'Weight (kg)' }, beginAtZero: true }
          },
        },
      });
    });

    return () => {
      Object.values(chartInstances.current).forEach((chartInstance) => chartInstance.destroy());
    };
  }, [entries]);

  const addExercise = () => {
    const { exercise, sets, reps, weight } = formData;
    const date = new Date().toLocaleDateString();
    const entry = { exercise, sets, reps, weight, date };

    setEntries([...entries, entry]);
    updateChart(entry);

    setFormData({ exercise: "Squat", sets: "", reps: "", weight: "" });
  };

  const updateChart = (entry) => {
    const { exercise, weight, date } = entry;
    exerciseData.current[exercise].labels.push(date);
    exerciseData.current[exercise].data.push(weight);

    if (chartInstances.current[exercise]) {
      chartInstances.current[exercise].update();
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row mt-10 p-4 bg-white rounded-lg shadow-lg">
      <div className="form-container flex-1 bg-gray-100 p-6 rounded-l-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Gym Tracker</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="exercise">Exercise</label>
          <select
            className="w-full p-2 border rounded-md"
            id="exercise"
            value={formData.exercise}
            onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
          >
            <option value="Squat">Squat</option>
            <option value="Bench Press">Bench Press</option>
            <option value="Deadlift">Deadlift</option>
            <option value="Overhead Press">Overhead Press</option>
            <option value="Pull-Up">Pull-Up</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="sets">Sets</label>
          <input
            className="w-full p-2 border rounded-md"
            type="number"
            id="sets"
            placeholder="e.g., 3"
            value={formData.sets}
            onChange={(e) => setFormData({ ...formData, sets: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="reps">Reps</label>
          <input
            className="w-full p-2 border rounded-md"
            type="number"
            id="reps"
            placeholder="e.g., 10"
            value={formData.reps}
            onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="weight">Weight (kg)</label>
          <input
            className="w-full p-2 border rounded-md"
            type="number"
            id="weight"
            placeholder="e.g., 50"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          />
        </div>

        <button
          onClick={addExercise}
          className="w-full text-white py-2 rounded-md bg-red-500 hover:bg-red-600"
        >
          Add Exercise
        </button>

        <div className="entry-list mt-6">
          {entries.map((entry, index) => (
            <div key={index} className="entry bg-white p-4 mb-4 rounded-md shadow-md">
              <p><strong>Exercise:</strong> {entry.exercise}</p>
              <p><strong>Sets:</strong> {entry.sets}</p>
              <p><strong>Reps:</strong> {entry.reps}</p>
              <p><strong>Weight:</strong> {entry.weight} kg</p>
              <p><strong>Date:</strong> {entry.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-container flex-1 p-6 bg-white">
        {Object.keys(exerciseData.current).map((exercise) => (
          <div key={exercise} className="chart-section mb-6">
            <h2 className="chart-title text-lg font-semibold text-gray-700 mb-2">{exercise} Progress</h2>
            <canvas id={`${exercise}Chart`} width="400" height="200"></canvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymTracker;