import React from 'react'
import Web from '../assets/footer/web.png'
import Facebook from '../assets/footer/facebook.png'
import Linkedin from '../assets/footer/linkedin.png'
import Instagram from '../assets/footer/instagram.png'

const footer = () => {
  return (
    <div className='relative w-screen lg:h-72 h-max  bg-ijo bottom-0 flex flex-col justify-center lg:py-0 py-7'>
    {/* info footer */}
      <div className='lg:flex lg:flex-row flex flex-col justify-start text-potih items-center'>
        <div className='lg:mx-20 mx-auto text-center'>
            <ul>
                <li><h1 className='lg:text-xl font-cyborg text-[#F7F7F7]'>Game Corner</h1></li>
                <li className='font-semibold lg:text-sm text-[0.6rem] lg:mb-0 mb-6'>SATU HATI SATU JIWA FILKOM</li>
            </ul>
        </div>
        <div className='order-last lg:order-none'>
            <ul className='font-semibold text-sm mx-40 w-56 '>
                <li className='mb-2 hidden lg:block'>ABOUT US</li>
                <li className='lg:text-sm text-[0.5rem] lg:text-left text-center leading-normal lg:mt-0 mt-4 lg:w-[11.8rem] w-[11rem] lg:mx-0 mx-auto lg:mb-0 mb-3'>Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur, Indonesia - 65145</li>
            </ul>
        </div>
        <div>
            <ul className='font-semibold flex lg:block'>
                <li className='mb-2 hidden absolute lg:relative lg:block'>CONTACT US</li>
                <li className='lg:block hidden text-sm'>Telp. 0341-577911</li>
                <li className='lg:block hidden text-sm'>Fax (0341) 577-911</li>
                <li className='lg:block hidden text-sm'>filkom@ub.ac.id</li>
                <li className='lg:hidden text-[0.5rem]'>Telp. 0341-577911&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fax (0341) 577-911&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filkom@ub.ac.id</li>
            </ul>
        </div>
      </div>
      {/* garis */}
      <div className='h-[1px] lg:w-[90%] w-[80%] bg-potih mx-auto lg:mt-16'>

      </div>
      {/* sosmed footer */}
      <div className='w-screen flex justify-center'>
        <ul className='w-72 flex text-center justify-center lg:pt-8 pt-3'>
            <li className='lg:w-10 w-[1.672rem] lg:mx-4 mx-[0.6rem]'><a href="https://filkom.ub.ac.id/" target='_blank'><img src={Web} alt="" /></a></li>
            <li className='lg:w-10 w-[1.672rem] lg:mx-4 mx-[0.6rem]'><a href="https://www.facebook.com/filkombrawijaya/" target='_blank'><img src={Facebook} alt="" /></a></li>
            <li className='lg:w-10 w-[1.672rem] lg:mx-4 mx-[0.6rem]'><a href="https://www.linkedin.com/company/filkombrawijaya/?originalSubdomain=id" target='_blank'><img src={Linkedin} alt="" /></a></li>
            <li className='lg:w-10 w-[1.672rem] lg:mx-4 mx-[0.6rem]'><a href="https://www.instagram.com/filkomub/" target='_blank'><img src={Instagram} alt=""/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default footer
