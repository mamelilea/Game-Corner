import React from 'react'
// ini buat carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ini gambar game
import assassin from '../assets/fasility/games/assassin.png'
import cod from '../assets/fasility/games/cod.png'
import f1 from '../assets/fasility/games/f1.png'
import fifa23 from '../assets/fasility/games/fifa23.png'
import forza from '../assets/fasility/games/forza.png'
import gears from '../assets/fasility/games/gears.png'
import gow from '../assets/fasility/games/gow.png'
import gran from '../assets/fasility/games/gran.png'
import gta from '../assets/fasility/games/gta.png'
import hitman from '../assets/fasility/games/hitman.png'
import nba from '../assets/fasility/games/nba.png'
import re from '../assets/fasility/games/re.png'
import spiderman from '../assets/fasility/games/spiderman.png'
import tekken from '../assets/fasility/games/tekken.png'


const carousel = () => {
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
                removeArrowOnDeviceType={["tablet"]} responsive={responsive} className='w-[100vw] h-[16.75rem] lg:-mx-1 '>
                <div className='mx-auto w-52 h-64'><img src={fifa23} alt="" /></div>
                <div className='mx-auto w-52 '><img src={f1} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={cod} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={forza} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={gran} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={gow} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={nba} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={spiderman} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={tekken} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={gta} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={hitman} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={re} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={gears} alt="" /></div>
                <div className='mx-auto w-52 h-64'><img src={assassin} alt="" /></div>
            </Carousel>
        </div>
    )
}

export default carousel
