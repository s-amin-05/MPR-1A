import React from 'react'
import HeroImg from '../assets/hero.jpeg'
import WorkoutImg from '../assets/workout.jpg'
import DietImg from '../assets/diet.jpeg'


function Home() {
    return (
        <>
            {/* <div className="relative max-w-xl mx-auto pt-20">
                <img className="h-70 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" />
                <div className="absolute inset-0 bg-gray-700 opacity-60 mt-20 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center mt-">
                    <h2 className="text-white text-3xl font-bold">Get Lost in Mountains</h2>
                </div>
            </div> */}
            <div className='flex items-center justify-center flex-col pt-10 '>

                <div style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    
                    height: '100vh',
                }} className='w-2/3 flex justify-start items-center bg-slate-50 bg-gradient-to-r from-white to-black rounded-2xl'>
                    <h1 className='text-black text-4xl font-bold pl-8'>Welcome to Fitverse</h1>
                </div>
                <div className='flex justify-around items-center w-1/2 mt-20 gap-10'>
                    <img src={WorkoutImg} className='h-96'/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas odit cupiditate sunt sit hic commodi praesentium aperiam cum nemo laboriosam, nulla deleniti, fugit eos cumque beatae molestias qui ab! Commodi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum corporis debitis qui provident ut eligendi aliquam ullam nobis perspiciatis. 
                </div>
                <div className='flex justify-around items-center w-1/2 mt-20 gap-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore. Aliquid officia, quaerat autem cupiditate voluptatibus natus, quo in deleniti asperiores sapiente alias, 
                    <img src={DietImg} className='w-96 h-96 object-contain'/>
                </div>
            </div>
            
        </>
    )
}

export default Home
