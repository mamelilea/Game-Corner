import React from 'react'
import vector from '../assets/login/Vector.png'
import vector1 from '../assets/login/Vector-1.png'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

const login = () => {
    return (
        <div className=' pt-36 bg-abu'>
            <Navbar className='relative'></Navbar>
            <div className='w-screen lg:h-[50rem] h-[35rem] bg-abu flex justify-center'>
                {/* versi laptop */}
                <div className='hidden lg:flex w-[70rem] h-[43.5rem]  rounded-[2.6rem] bg-putih2 relative'>
                    <div className='w-[30rem] flex justify-center'>
                        <img src={vector} className='-ml-5' alt="" />
                        <div className='mr-16 -mt-10 h-full flex flex-col justify-center absolute top-0'>
                            <h3 className='text-black text-xl font-bold'>Don’t have an account?</h3>
                            <p className='text-putih opacity-70 text-[0.875rem] w-56 text-center font-semibold mt-9'>Sign Up so you can continue your activity.</p>
                            <a href="/sign"><button className='w-48 h-9 border-2 text-center text-potih border-potih text-base font-semibold mt-7 ml-3 hover:bg-[#3c5249] hover:border-0'>SIGN UP</button></a>
                        </div>
                    </div>
                    <div className='w-[40rem] pl-16'>
                        <div className='flex flex-col w-[28rem]'>
                            <h3 className='text-xl font-bold text-black mt-32 mx-auto'>
                                Log in to your Account
                            </h3>
                            <form className='mt-16' action="">
                                <p className='flex flex-col'>
                                    <label className='font-semibold' htmlFor="">Email</label>
                                    <input className='mt-3 font-semibold border-2 bg-putih2 border-abu3 py-1 pl-2' type="email" placeholder='Enter your Student Email Here!' />
                                </p>
                                <p className='flex flex-col'>
                                    <label className='font-semibold mt-6' htmlFor="">Password</label>
                                    <input className='mt-3 font-semibold border-2 bg-putih2 border-abu3 py-1 pl-2' type="password" placeholder='Enter your Password Here!' />
                                </p>
                            </form>
                            <button className='w-[16.5rem] h-10 mx-auto my-auto bg-ijo text-potih font-semibold mt-16 hover:bg-[#3c5249]'>LOG IN</button>
                        </div>
                    </div>
                </div>
                {/* versi mobile */}
                <div className='lg:hidden rounded-xl flex flex-col items-center relative w-80 h-[29.5rem] bg-putih2'>
                    <img src={vector1} alt="" className='bottom-0 absolute' />
                    <h3 className='font-bold text-black w-40 text-center mt-6 text-xl'>Sign in to Your Account</h3>
                    <div className='text-left w-[17rem] flex flex-col items-center '>
                        <div>
                            <form action="" className='w-[17rem] mt-4'>
                                <p className='flex flex-col'>
                                    <label htmlFor="" className='text-black font-bold text-lg mb-1'>Email</label>
                                    <input className=' font-semibold border-2 bg-putih2 border-abu3 py-1 pl-2' type="email" placeholder='Enter your Student Email Here!' />
                                </p>
                                
                                <p className='flex flex-col mt-4'>
                                    <label htmlFor="" className='text-black font-bold text-lg mb-1'>Password</label>
                                    <input className=' font-semibold border-2 bg-putih2 border-abu3 py-1 pl-2' type="password" placeholder='Enter your Password Here!' />
                                </p>
                            </form>
                        </div>
                        <button className='w-[14.5rem] h-10 mx-auto my-auto bg-ijo text-potih font-semibold mt-8 hover:bg-[#3c5249]'>LOG IN</button>

                        <div className='z-10'>
                            <h3 className='text-base mt-14 text-center font-semibold text-potih'>Don't have an account?</h3>
                            <a href="/sign"><button className='w-48 h-9 border-2 text-center text-potih border-potih text-base font-semibold mt-4 ml-3 hover:bg-[#3c5249] hover:border-0'>SIGN UP</button></a>
                        </div>
                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default login
