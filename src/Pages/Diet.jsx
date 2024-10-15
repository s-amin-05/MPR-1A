import React from 'react'
import Plans from './Diet/Plans'
import DietPlanner from './Diet/DietPlanner'

function Diet() {
    return (
        <div className='h-screen bg-gray-300 flex justify-center items-center text-xl pt-10'>
            
            {/* <Plans /> */}
            <DietPlanner/>
        </div>
    )
}

export default Diet
