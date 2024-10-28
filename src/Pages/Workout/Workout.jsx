import React from 'react'
import WorkoutPlans from './WorkoutPlans'
import BeginnerPlan from './Types/BeginnerPlan'
function Workout() {
    return (
        <div className='h-auto  flex justify-center items-center flex-col text-xl pt-10 pb-10 '>
            <WorkoutPlans/>
            <BeginnerPlan/>
        </div>
    )
}

export default Workout