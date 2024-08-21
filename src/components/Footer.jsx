import React from 'react'
import { Link } from 'react-router-dom'
import InstaIcon from '../assets/logos--instagram-icon.svg'
import GoogleIcon from '../assets/logos--google-gmail.svg'
import TwitterIcon from '../assets/logos--twitter.svg'

function Footer() {
    return (
        <div className='bg-gray-300 '>
            <hr className='h-[2px] bg-gray-500 '/>
            <div className='flex flex-col items-center justify-center py-2'>
                <div className='flex items-center justify-center font-bold text-xl'>
                    FITVERSE 
                </div>
                <ul className='flex justify-around items-center gap-4 py-6'>
                    <Link>
                        <img src={InstaIcon}/>
                    </Link>
                    <Link><img src={GoogleIcon}/></Link>
                    <Link><img src={TwitterIcon}/></Link>
                    
                </ul>
                <ul className='flex justify-around items-center gap-5 font-light'>
                    <Link to={''}>Home</Link>
                    <Link to={'/Workout'}>Workout</Link>
                    <Link to={'/Diet'}>Diet</Link>
                    <Link>About Us</Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
