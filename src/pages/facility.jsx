import React from 'react'
import pump from '../assets/fasility/consoleGame/PumpIt.png'
import xbox from '../assets/fasility/consoleGame/XBOX.png'
import ps5 from '../assets/fasility/consoleGame/PS5.png'
import rog from '../assets/fasility/consoleGame/ROG.png'
import Carousel from '../Component/carousel'


const fasility = () => {
  return (
    <div id='facility' className='w-screen h-[70rem] bg-abu  flex flex-col items-center pt-40'>
        <h1 className='text-[2rem] font-beyonders text-potih mb-20'>OUR FASILITY</h1>
        <div>
            <h2 className='text-[2rem] font-bold text-potih mb-9 ml-9'>Available Gaming Console</h2>
            <div className='flex justify-around gap-1 mx-6'>
                <div><img src={pump} alt="" /></div>
                <div className='mt-2'><img src={xbox} alt="" /></div>
                <div className='mt-7'><img src={ps5} alt="" /></div>
                <div className='mt-7'><img src={rog} alt="" /></div>
            </div>
        </div>
        
        <div className='w-screen'>
        <h2 className='text-[2rem] font-bold text-potih mb-20 ml-9'>Available Games</h2>
          <Carousel></Carousel>
        </div>
    </div>
  )
}

export default fasility
