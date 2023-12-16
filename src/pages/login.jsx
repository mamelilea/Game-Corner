import React from 'react'
import vector from '../assets/login/Vector.png'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'

const login = () => {
    return (
        <div className=' pt-36 bg-abu'>
            <Navbar className='relative'></Navbar>
            <div className='w-screen h-[50rem] bg-abu flex justify-center'>

                <div className='w-[70rem] h-[43.5rem] flex rounded-[2.6rem] bg-putih2 relative'>
                    <div className='w-[30rem] flex justify-center'>
                        <img src={vector} className='-ml-5' alt="" />
                        <div className='mr-16 -mt-10 h-full flex flex-col justify-center absolute top-0'>
                            <h3 className='text-black text-xl font-bold'>Don’t have an account?</h3>
                            <p className='text-putih opacity-70 text-[0.875rem] w-56 text-center font-semibold mt-9'>Sign Up so you can continue your activity.</p>
                            <a href="/gacor/sign"><button className='w-48 h-9 border-2 text-center text-potih border-potih text-base font-semibold mt-7 ml-3 hover:bg-[#3c5249] hover:border-0'>SIGN UP</button></a>
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
            </div>
            <Footer></Footer>
        </div>
    )
}

export default login
