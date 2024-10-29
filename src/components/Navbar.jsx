import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CTA from './CTA'
import LogoImg from '../assets/logo1.png'

function Navbar() {
  
    const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className={`bg-black flex items-center justify-around text-white h-14 w-full overflow-y-hidden `} 
      >
        <Link to={"/"} className='flex justify-center'>
          <img src={LogoImg} className='h-14'/>
        </Link>
        <ul className='flex w-2/4 items-center justify-center gap-20'>
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
          <li>
          <NavLink to={'/Tracker'}
          className={({isActive})=>(
            `${isActive? `text-red-500 font-bold`: `text-white`}`
            )}>
              Tracker
          </NavLink>

          </li>
          <li>
          <NavLink to={'/Resources'}
          className={({isActive})=>(
            `${isActive? `text-red-500 font-bold`: `text-white`}`
            )}>
              Resources
          </NavLink>

          </li>
            </ul>
        <Link to={'/Login'} 
        onClick={() => {setIsLogin(true)}}
        className='text-white h-full flex items-center'>
            {!isLogin ? <CTA content="Login"/> : <div>User</div>}
        </Link>
      </div>
    </>
  )
}

export default Navbar
