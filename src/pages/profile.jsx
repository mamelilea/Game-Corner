import React from 'react'
import Navbar from '../Component/navbar'
import user from '../assets/profile/Profile.png'
import Footer from '../Component/footer'

const profile = () => {
    return (
        <div className='pt-36 bg-abu'>
            <Navbar className='relative'></Navbar>
            <div className='w-screen lg:h-screen h-[40rem] bg-abu  flex justify-center'>
                <div className='lg:w-[70rem] w-80 lg:h-[30.5rem] h-[35rem] bg-abu2 rounded-xl lg:flex  lg:items-center lg:flex-row flex flex-col items-center relative'>
                    <div className='flex items-center lg:justify-center h-full lg:w-1/2 w-[8.4rem] lg:-mt-0 relative lg:top-0 -top-44'>
                        <img src={user} alt="" />
                    </div>
                    {/* versi mobile */}
                    <div className='lg:hidden flex flex-col absolute top-48 text-left w-[17rem] items-center'>
                        <div>
                            <h3 className='text-potih font-semibold text-lg mb-1'>Nama</h3>
                            <div className='w-[17rem] bg-abu h-[2.75rem] rounded-md mb-1'>
                                <h3 className='text-potih font-semibold text-lg mx-4 py-1.5'>John Doe</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-potih font-semibold text-lg mb-1'>NIM</h3>
                            <div className='w-[17rem] bg-abu h-[2.75rem] rounded-md mb-1'>
                                <h3 className='text-potih font-semibold text-lg mx-4 py-1.5'>255170893708201</h3>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-potih font-semibold text-lg mb-1'>Prodi</h3>
                            <div className='w-[17rem] bg-abu h-[2.75rem] rounded-md mb-1'>
                                <h3 className='text-potih font-semibold text-lg mx-4 py-1.5'>Teknologi Informasi</h3>
                            </div>
                        </div>
                        <a href="/login"><button className='lg:hidden lg:absolute relative bottom-5 w-[11.5rem] h-12 flex justify-center items-center mt-12 bg-ijo hover:bg-[#3c5249] text-potih font-bold rounded-md'> LOG OUT</button></a>
                    </div>
                    {/* button login mobile */}
                    
                    {/* versi browser */}
                    <div className='w-1/2 lg:flex flex-col h-52 leading-[4rem] justify-center pt-10 hidden lg:relative absolute'>
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
