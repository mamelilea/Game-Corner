import React from 'react'
import pump from '../assets/fasility/consoleGame/PumpIt.png'
import xbox from '../assets/fasility/consoleGame/XBOX.png'
import ps5 from '../assets/fasility/consoleGame/PS5.png'
import rog from '../assets/fasility/consoleGame/ROG.png'
import Carousel from '../Component/carousel'
import CarouselFacility from '../Component/carouselFacility'



const fasility = () => {
  return (
    <div id='facility' className='w-screen lg:h-[70rem] h-[60rem] bg-abu  flex flex-col items-center lg:pt-40 pt-28'>
        <h1 className='lg:text-[2rem] font-beyonders text-potih mb-20'>OUR FASILITY</h1>
        <div>
            <h2 className='lg:text-[2rem] text-sm font-bold text-potih lg:mb-9 lg:ml-9 text-center lg:text-justify lg:mt-0 mt-0'>Available Gaming Console</h2>
            <div className='lg:flex justify-around gap-1 mx-6 hidden'>
                <div><img src={pump} alt="" /></div>
                <div className='mt-2'><img src={xbox} alt="" /></div>
                <div className='mt-7'><img src={ps5} alt="" /></div>
                <div className='mt-7'><img src={rog} alt="" /></div>
            </div>
            <div className='lg:hidden'>
              <CarouselFacility></CarouselFacility>
            </div>
        </div>
        
        <div className='w-screen'>
        <h2 className='lg:text-[2rem] text-sm font-bold text-potih lg:mb-9 lg:ml-9 text-center lg:text-justify lg:mt-0 mt-14 mb-10'>Available Games</h2>
          <Carousel></Carousel>
        </div>
    </div>
  )
}

export default fasility
