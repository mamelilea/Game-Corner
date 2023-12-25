import React from 'react'
import gacor from '../assets/about/gacor.png'

const about = () => {
  return (
    <>
    <div id='about' className='w-screen lg:h-[60rem] h-[45rem] bg-abu flex flex-col items-center lg:pt-44 pt-24 relative'>
        <h1 className='lg:text-[2rem] font-beyonders text-potih'>ABOUT</h1>
        <div className='lg:flex lg:flex-row flex flex-col-reverse'>
            <div className='w-[32rem] ml-60  lg:mt-[12.5rem] relative'>
                <h3 className='lg:font-bold font-semibold lg:text-[2rem] text-base text-potih mb-4 relative lg:right-0 right-8 mt-6'>Get to know Filkom Game Corner!</h3>
                <p className='lg:font-bold lg:text-xl text-potih text-justify lg:w-[32rem] lg:leading-6 relative lg:right-0 right-20 w-[21rem] lg:mx-0 mx-12 '>
                FILKOM UB secara resmi telah meresmikan “Game Corner”, sebuah ruang khusus yang diperuntukkan bagi mahasiswa untuk menghabiskan waktu luang mereka antar kuliah. Game Corner ini merupakan bentuk Kerjasama FILKOM UB dengan Bank Rakyat Indonesia (BRI). Letak dari ruang Game Corner ini berada di Gedung F lantai 1 di depan Loket Pelayanan Akademik.
                </p>
            </div>
            <div className='w-[60%]' >
              {/* gambar pc */}
                <img src={gacor} alt="" className='hidden lg:block lg:h-[41rem] lg:max-w-[58rem] lg:relative -right-12'/>
                {/* gambar mobile */}
                <img src={gacor} alt="" className='lg:hidden relative -right-52 '/>
            </div>
        </div>
    </div>
    </>
  )
}

export default about
