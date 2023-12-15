import React from 'react'
import gacor from '../assets/about/gacor.png'

const about = () => {
  return (
    <>
    <div id='about' className='w-screen h-[60rem] bg-abu flex flex-col items-center pt-44 relative'>
        <h1 className='text-[2rem] font-beyonders text-potih'>ABOUT</h1>
        <div className='flex'>
            <div className='w-[40%] ml-60 mt-[12.5rem] relative'>
                <h3 className='font-bold text-[2rem] text-potih mb-4'>Get to know Filkom Game Corner!</h3>
                <p className='font-bold text-xl text-potih text-justify w-[32rem] leading-6'>
                FILKOM UB secara resmi telah meresmikan “Game Corner”, sebuah ruang khusus yang diperuntukkan bagi mahasiswa untuk menghabiskan waktu luang mereka antar kuliah. Game Corner ini merupakan bentuk Kerjasama FILKOM UB dengan Bank Rakyat Indonesia (BRI). Letak dari ruang Game Corner ini berada di Gedung F lantai 1 di depan Loket Pelayanan Akademik.
                </p>
            </div>
            <div className='w-[60%]' >
                <img src={gacor} alt="" className='h-[41rem] max-w-[58rem] relative -right-12'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default about
