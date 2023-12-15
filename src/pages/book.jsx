import React, { useState } from 'react';
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'


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
                <div className='w-screen h-[55rem] bg-abu flex flex-col items-center'>
                    {/* tabel 1 */}
                    <div className='w-[70rem] h-[33rem] rounded-xl bg-abu2 bg pl-10 pt-6'>
                        <h2 className='text-potih text-2xl font-bold'>
                            Select a Slot
                        </h2>
                        <div className='mt-10 flex items-center justify-between w-[18.75rem]'>
                            <h3 className='text-potih text-xl font-bold'>Select Date
                            </h3>
                            <div className='w-[.5rem] h-[.5rem] rounded-full bg-[#D9D9D9] '></div>
                            <h3 className='text-potih text-xl font-bold opacity-50'>
                                December 2023
                            </h3>
                        </div>
                        {/* kalender nya */}
                        <div className='flex gap-8 mt-6'>
                        <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'SUN' ? ' bg-biru' : ''}`} onClick={() => changeColor('SUN')}>
                                <div className='text-potih text-base font-bold'>
                                    SUN
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    4
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'MON' ? ' bg-biru' : ''}`} onClick={() => changeColor('MON')}>
                                <div className='text-potih text-base font-bold'>
                                    MON
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    5
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'TUE' ? ' bg-biru' : ''}`} onClick={() => changeColor('TUE')}>
                                <div className='text-potih text-base font-bold'>
                                    TUE
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    6
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'WED' ? ' bg-biru' : ''}`} onClick={() => changeColor('WED')}>
                                <div className='text-potih text-base font-bold'>
                                    WED
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    7
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center${selectedDate === 'THU' ? ' bg-biru' : ''}`} onClick={() => changeColor('THU')}>
                                <div className='text-potih text-base font-bold'>
                                    THU
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    8
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${selectedDate === 'FRI' ? ' bg-biru' : ''}`} onClick={() => changeColor('FRI')}>
                                <div className='text-potih text-base font-bold'>
                                    FRI
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    9
                                </div>
                            </div>
                            <div className={` active:bg-biru hover:cursor-pointer w-[7.25rem] h-[6.5rem] rounded-lg bg-abu3 flex flex-col items-center justify-center ${selectedDate === 'SAT' ? ' bg-biru' : ''}`} onClick={() => changeColor('SAT')}>
                                <div className='text-potih text-base font-bold'>
                                    SAT
                                </div>
                                <div className='text-potih text-[2rem] font-bold'>
                                    10
                                </div>
                            </div>
                        </div>
                        <hr className='w-[95%] text-potih opacity-30 mt-10' />
                        {/* jam nya */}
                        <h3 className='text-potih text-xl font-bold mt-7'>Select Time
                        </h3>
                        <div className='grid-cols-6 gap-y-5 grid w-[95%] mt-5'>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '1' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('1')}>08.00 - 09.00</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '2' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('2')}>09.15 - 10.15</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '3' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('3')}>10.30 - 11.30</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '4' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('4')}>11.45 - 12.45</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '5' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('5')}>13.00 - 14.00</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '6' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('6')}>1 4.15 - 15.15</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '7' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('7')}>15.30 - 16.30</div>
                            <div className={`'font-bold w-36 h-11 rounded-sm bg-abu3 text-potih flex justify-center items-center hover:bg-biru active:bg-biru hover:cursor-pointer ${selectedTime === '8' ? ' bg-biru' : ''}`} onClick={() => changeColorTime('8')}>16.45 - 17.45</div>
                        </div>
                    </div>

                    <div className='mt-3 w-[70rem] h-[17.25rem] rounded-xl bg-abu2 pl-10 pt-6'>
                        <h2 className='text-potih text-2xl font-bold'>
                            Your Order Details
                        </h2>
                        <hr className='w-[35%] text-potih opacity-30 mt-5' />
                        <div className='grid grid-cols-2 mt-7 gap-y-3'>
                            <h3 className='text-potih text-xl font-semibold '>Date: Sunday  December 4, 2023</h3>
                            <h3 className='text-potih text-xl font-semibold '>Name       : John Doe</h3>
                            <h3 className='text-potih text-xl font-semibold '>Time: 09.15 - 10. 15 AM</h3>
                            <h3 className='text-potih text-xl font-semibold '>NIM           : 255170893708201</h3>
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
