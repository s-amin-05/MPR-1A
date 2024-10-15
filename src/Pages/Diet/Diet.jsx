import React from 'react'
import Plans from './Plans'
import DietPlanner from './DietPlanner'

function Diet() {
    return (
        <div className='h-auto bg-gray-300 flex justify-center items-center text-xl pt-10'>
            
            {/* <Plans /> */}
            <DietPlanner/>
        </div>
    )
}

export default Diet
