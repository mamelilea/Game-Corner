import React from 'react'
// ini buat carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pump from '../assets/fasility/consoleGame/PumpIt.png'
import xbox from '../assets/fasility/consoleGame/XBOX.png'
import ps5 from '../assets/fasility/consoleGame/PS5.png'
import rog from '../assets/fasility/consoleGame/ROG.png'

const carouselFacility = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    };
  return (
    <div>
      <Carousel showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className='w-[100vw] h-[16.75rem] flex items-center'>
                <div className='mx-auto w-[21.5rem] h-[15rem] bottom-7 relative'><img src={pump} alt="" /></div>
                <div className='mx-auto w-[21.7rem] h-[15rem] bottom-5 relative'><img src={xbox} alt="" /></div>
                <div className='mx-auto w-[21rem] h-[15rem] '><img src={ps5} alt="" /></div>
                <div className='mx-auto w-[20.7rem] h-[15rem] '><img src={rog} alt="" /></div>
            </Carousel>
    </div>
  )
}

export default carouselFacility
