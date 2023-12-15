import React from 'react'
import Web from '../assets/footer/web.png'
import Facebook from '../assets/footer/facebook.png'
import Linkedin from '../assets/footer/linkedin.png'
import Instagram from '../assets/footer/instagram.png'

const footer = () => {
  return (
    <div className='relative w-screen h-72 bg-ijo bottom-0 flex flex-col justify-center'>
    {/* info footer */}
      <div className='flex justify-start text-potih items-center'>
        <div className='mx-20 text-center'>
            <ul>
                <li><h1 className='text-xl font-cyborg text-[#F7F7F7]'>Game Corner</h1></li>
                <li className='font-semibold text-sm'>SATU HATI SATU JIWA FILKOM</li>
            </ul>
        </div>
        <div>
            <ul className='font-semibold text-sm mx-40 w-56'>
                <li className='mb-2 '>ABOUT US</li>
                <li>Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur, Indonesia - 65145</li>
            </ul>
        </div>
        <div>
            <ul className='font-semibold text-sm'>
                <li className='mb-2 '>CONTACT US</li>
                <li>Telp. 0341-577911</li>
                <li>Fax (0341) 577-911</li>
                <li>filkom@ub.ac.id</li>
            </ul>
        </div>
      </div>
      {/* garis */}
      <div className='h-[1px] w-[90%] bg-potih mx-auto mt-16'>

      </div>
      {/* sosmed footer */}
      <div className='w-screen flex justify-center'>
        <ul className='w-72 flex text-center justify-center pt-8'>
            <li className='w-10 mx-4'><a href="https://filkom.ub.ac.id/" target='_blank'><img src={Web} alt="" /></a></li>
            <li className='w-10 mx-4'><a href="https://www.facebook.com/filkombrawijaya/" target='_blank'><img src={Facebook} alt="" /></a></li>
            <li className='w-10 mx-4'><a href="https://www.linkedin.com/company/filkombrawijaya/?originalSubdomain=id" target='_blank'><img src={Linkedin} alt="" /></a></li>
            <li className='w-10 mx-4'><a href="https://www.instagram.com/filkomub/" target='_blank'><img src={Instagram} alt=""/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default footer
