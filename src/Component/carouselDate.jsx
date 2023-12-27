import React, { useState } from 'react';
// ini buat carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const carouselDate = (props) => {
    const { selectedDate = '', changeColor } = props;
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
            items: 3,
            slidesToSlide: 3
        },
    };

    
    return (
        <div className='w-[100%]'>
            <Carousel showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} className='w-[70vw] h-[7rem] flex items-center'>
                {/* kalendernya */}
                <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${props.selectedDate === 'SUN' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('SUN')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    SUN
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    4
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${props.selectedDate === 'MON' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('MON')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    MON
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    5
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${props.selectedDate === 'TUE' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('TUE')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    TUE
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    6
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${props.selectedDate === 'WED' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('WED')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    WED
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    7
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${props.selectedDate === 'THU' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('THU')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    THU
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    8
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${props.selectedDate === 'FRI' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('FRI')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    FRI
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    9
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${props.selectedDate === 'SAT' ? ' bg-biru' : ''}`} onClick={() => props.changeColor('SAT')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    SAT
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    10
                                </div>
                            </div>
            </Carousel>
        </div>
    )
}

export default carouselDate
