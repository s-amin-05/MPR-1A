import React from 'react'
import { Link } from 'react-router-dom'
import InstaIcon from '../assets/logos--instagram-icon.svg'
import GoogleIcon from '../assets/logos--google-gmail.svg'
import TwitterIcon from '../assets/logos--twitter.svg'

function Footer() {
    return (
        <div className='bg-gray-300 h-auto '>
            <hr className='h-[2px] bg-gray-500 '/>
            <div className='flex flex-col items-center justify-center py-6'>
                <div className='flex items-center justify-center font-bold text-xl'>
                    FITVERSE 
                </div>
                <ul className='flex justify-around items-center gap-8 py-6'>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <img src={InstaIcon}/>
                    </a>
                    <a href='https://mail.google.com/' target='_blank'><img src={GoogleIcon}/></a>
                    <a href='https://x.com/?lang=en' target='_blank'><img src={TwitterIcon}/></a>
                    
                </ul>
                <ul className='flex justify-around items-center gap-12 font-light'>
                    <Link to={''}>Home</Link>
                    <Link to={'/Workout'}>Workout</Link>
                    <Link to={'/Diet'}>Diet</Link>
                    <Link to={'/'}>About Us</Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer
