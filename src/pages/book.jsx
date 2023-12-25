import React, { useState } from 'react';
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'
import CarouselDate from '../Component/carouselDate';


const book = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const changeColor = (day) => { setSelectedDate(day); };
    const [selectedTime, setSelectedTime] = useState('');

    const changeColorTime = (time) => {
        setSelectedTime(time);
    };
    return (
        <> 
            <Navbar></Navbar>
            <div className='pt-36 bg-abu'>
                <div className='w-screen lg:h-[55rem] h-[60rem] bg-abu flex flex-col items-center'>
                    {/* tabel 1 */}
                    <div className='lg:w-[70rem] w-80 lg:h-[33rem] h-[36rem] rounded-xl bg-abu2  lg:pl-10 pt-6 lg:items-start items-center flex flex-col lg:px-0 px-[2rem] '>
                        <h2 className='text-potih lg:text-2xl text-xl  items-center font-bold'>
                            Select a Slot
                        </h2>
                        <div className='mt-10 flex items-center lg:justify-between justify-evenly w-[18.75rem]'>
                            <h3 className='text-potih lg:text-xl text-xs font-bold'>Select Date
                            </h3>
                            <div className='lg:w-[.5rem] w-1.5 lg:h-[.5rem] h-1.5 rounded-full bg-[#D9D9D9] '></div>
                            <h3 className='text-potih lg:text-xl text-xs font-bold opacity-50'>
                                Januari 2024
                            </h3>
                        </div>
                        {/* kalender nya */}
                        <div className='gap-8 mt-6 lg:flex hidden'>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'SUN' ? ' bg-biru' : ''}`} onClick={() => changeColor('SUN')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    SUN
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    4
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'MON' ? ' bg-biru' : ''}`} onClick={() => changeColor('MON')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    MON
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    5
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'TUE' ? ' bg-biru' : ''}`} onClick={() => changeColor('TUE')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    TUE
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    6
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'WED' ? ' bg-biru' : ''}`} onClick={() => changeColor('WED')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    WED
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    7
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'THU' ? ' bg-biru' : ''}`} onClick={() => changeColor('THU')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    THU
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    8
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${selectedDate === 'FRI' ? ' bg-biru' : ''}`} onClick={() => changeColor('FRI')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    FRI
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    9
                                </div>
                            </div>
                            <div className={`  active:bg-biru hover:bg-biru hover:cursor-pointer lg:w-[7.25rem] w-[4.6rem] lg:h-[6.5rem] h-[4.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${selectedDate === 'SAT' ? ' bg-biru' : ''}`} onClick={() => changeColor('SAT')}>
                                <div className='text-potih lg:text-base text-xs font-bold'>
                                    SAT
                                </div>
                                <div className='text-potih lg:text-[2rem] text-2xl font-bold'>
                                    10
                                </div>
                            </div>
                        </div>
                        <div className='lg:hidden relative -mt-1 -mb-5'>
                            <CarouselDate className='absolute'></CarouselDate>
                        </div>
                        <hr className='w-[95%] text-potih opacity-30 mt-10' />
                        {/* jam nya */}
                        <h3 className='text-potih lg:text-xl text-xs font-bold mt-7'>Select Time
                        </h3>
                        <div className='lg:grid-cols-6 grid-cols-2 lg:gap-y-5 lg:gap-x-0 gap-[1.4rem] grid w-[95%] mt-5 '>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '1' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('1')}>08.00 - 09.00</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '2' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('2')}>09.15 - 10.15</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '3' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('3')}>10.30 - 11.30</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '4' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('4')}>11.45 - 12.45</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '5' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('5')}>13.00 - 14.00</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '6' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('6')}>1 4.15 - 15.15</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '7' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('7')}>15.30 - 16.30</div>
                            <div className={`'font-bold lg:w-36 w-[7.5rem] lg:h-11 h-[2.6rem] rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '8' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('8')}>16.45 - 17.45</div>
                        </div>
                    </div>
                    {/* tabel 2 */}
                    <div className='mt-3 lg:w-[70rem] w-80 lg:h-[17.25rem] h-[20rem] rounded-xl bg-abu2 lg:pl-10 pt-6 lg:items-stretch items-center flex flex-col'>
                        <h2 className='text-potih lg:text-2xl text-xl font-bold'>
                            Your Order Details
                        </h2>
                        <hr className='w-[35%] text-potih opacity-30 mt-5' />
                        <div className='grid lg:grid-cols-2 grid-cols-none lg:grid-rows-none grid-rows-4 mt-7 gap-y-3'>
                            <h3 className='lg:order-none order-1 text-potih lg:text-xl text-xs font-semibold '>Date: Sunday  December 4, 2023</h3>
                            <h3 className='lg:order-none order-3 text-potih lg:text-xl text-xs font-semibold lg:mt-0 mt-1'>Name       : John Doe</h3>
                            <h3 className='lg:order-none order-2 text-potih lg:text-xl text-xs font-semibold lg:mt-0 -mt-1'>Time: 09.15 - 10. 15 AM</h3>
                            <h3 className='lg:order-none order-4 text-potih lg:text-xl text-xs font-semibold '>NIM           : 255170893708201</h3>
                        </div>
                        <button className=' text-sm font-bold w-44 h-12 bg-biru hover:bg-[#1e3454] rounded-sm mt-7 text-potih'>
                            CONFIRM ORDER
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    )

}

export default book
