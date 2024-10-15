import React from 'react'
import WorkoutPlans from './Workout/WorkoutPlans'
import BeginnerPlan from './Workout/Types/BeginnerPlan'
function Workout() {
    return (
        <div className='h-screen bg-gray-300 flex justify-center items-center text-xl pt-10'>
            {/* <WorkoutPlans/> */}
            <BeginnerPlan/>
        </div>
    )
}

export default Workout
