import React from 'react'

const navbar = () => {
  return (
    
    <div className='w-screen h-20 bg-abu shadow-lg flex flex-row justify-between px-28 items-center fixed top-0 z-10'>
        <div className=''>
            <h1 className='text-4xl font-cyborg text-[#F7F7F7]'><a href="/">Game Corner</a></h1>
        </div>
        <div>
            <ul className='flex flex-row text-2xl justify-between text-putih'>
                <li className=' mx-8 hover:bg-biru px-2 py-1 rounded-3xl'><a href="/#about">About</a></li>
                <li className=' mx-8 hover:bg-biru px-2 py-1 rounded-3xl'><a href="/#facility">Facility</a></li>
                <li className=' mx-8 hover:bg-biru px-2 py-1 rounded-3xl'><a href="/book">Book</a></li>
                <li className=' mx-8 hover:bg-biru px-2 py-1 rounded-3xl'><a href="/profile">Profile</a></li>
            </ul>
        </div>
    </div>
  )
}

export default navbar
