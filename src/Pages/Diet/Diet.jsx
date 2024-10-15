import React from 'react'
import Plans from './Plans'
import DietPlanner from './DietPlanner'
import BMICalculator from './BMICalculator'

function Diet() {
    return (
        <div className='h-auto flex justify-center items-center text-xl pt-10 flex-col overflow-x-hidden pb-10'>
            
            {/* <Plans /> */}
            <DietPlanner/>
            <BMICalculator />
        </div>
    )
}

export default Diet
