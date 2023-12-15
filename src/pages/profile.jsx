import React from 'react'
import Navbar from '../Component/navbar'
import user from '../assets/profile/profile.png'
import Footer from '../Component/footer'

const profile = () => {
    return (
        <div className='pt-36 bg-abu'>
            <Navbar className='relative'></Navbar>
            <div className='w-screen h-screen bg-abu  flex justify-center'>
                <div className='w-[70rem] h-[30.5rem] bg-abu2 rounded-xl flex items-center'>
                    <div className='flex items-center justify-center h-full w-1/2'>
                        <img src={user} alt="" />
                    </div>
                    <div className='w-1/2 flex flex-col h-52 leading-[4rem] justify-center pt-10'>
                        <p className='text-[2rem] font-semibold text-potih'>Nama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: John Doe</p>
                        <p className='text-[2rem] font-semibold text-potih'>NIM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 255170893708201</p>
                        <p className='text-[2rem] font-semibold text-potih'>Prodi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Teknologi Informasi</p>
                        <a href="/login"><button className='w-[11.5rem] h-12 flex justify-center items-center mt-12 bg-ijo hover:bg-[#3c5249] text-potih font-bold rounded-md'> LOG OUT</button></a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default profile
