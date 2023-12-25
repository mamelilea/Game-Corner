import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const navbar = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (

    <div className='w-screen lg:h-20 h-16 bg-abu shadow-lg flex flex-row justify-between lg:px-28 items-center fixed top-0 z-10'>
      <div>
        <h1 className='lg:text-4xl lg:pl-0 pl-8 min-w-max font-cyborg text-[#F7F7F7]'><a href="/">Game Corner</a></h1>
      </div>
      <div>
        <ul className={`navbar-list lg:translate-x-0 lg:opacity-100 ${isChecked ? 'active' : ''} lg:translate-x-0 lg:flex lg:relative absolute right-0 lg:bg-transparent bg-ijo lg:mt-0 lg:h-10 h-44 mt-8 flex-row text-2xl justify-between text-putih`}>
          <li className=' mx-8 hover:bg-ijo px-2 py-1 rounded-md'><a href="/#about">About</a></li>
          <li className=' mx-8 hover:bg-ijo px-2 py-1 rounded-md'><a href="/#facility">Facility</a></li>
          <li className=' mx-8 hover:bg-ijo px-2 py-1 rounded-md'><a href="/book">Book</a></li>
          <li className=' mx-8 hover:bg-ijo px-2 py-1 rounded-md'><a href="/profile">Profile</a></li>
        </ul>
      </div>

      <div id='mobile' className='lg:hidden lg:absolute flex flex-col'>
        <input type="checkbox" checked={isChecked}
          onChange={handleCheckboxChange} className='absolute w-5 h-5 opacity-0 cursor-pointer' />
          <FontAwesomeIcon
          icon={isChecked ? faTimes : faBars}
          className='pr-8 text-2xl text-potih'
        />  

        
      </div>
    </div>
  )
}

export default navbar
