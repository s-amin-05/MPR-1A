import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CTA from './CTA'
import LogoImg from '../assets/logo1.png'

const appName = "Weather App"

function Navbar() {
  
  return (
    <>
      <div className={`bg-black flex items-center justify-around text-white h-14 w-screen `} 
      >
        <Link to={"/"} >
          <img src={LogoImg} className='h-14'/>
        </Link>
        <ul className='flex w-2/4 justify-center gap-20'>
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-red-500 font-bold`: `text-white`}`
              )}>
              Home
            </NavLink>

          </li>
          <li> 
          <NavLink to={'/Workout'}
          className={({isActive})=>(
            `${isActive? `text-red-500 font-bold`: `text-white`}`
            )}>
              Workout
          </NavLink>

          </li>
          <li>
          <NavLink to={'/Diet'}
          className={({isActive})=>(
            `${isActive? `text-red-500 font-bold`: `text-white`}`
            )}>
              Diet
          </NavLink>

          </li>
            </ul>
        <Link to={'/Login'} className='text-white h-full flex items-center'>
            <CTA content="Login"/>
        </Link>
      </div>
    </>
  )
}

export default Navbar
