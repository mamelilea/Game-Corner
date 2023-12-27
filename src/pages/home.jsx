import React from "react";
import abstrak from "../assets/home/Abstrak.png";
import abstrak2 from "../assets/home/Abstrak2.png"
import satu from "../assets/home/1.png"
import dua from '../assets/home/2.png'
import tiga from '../assets/home/3.png'
import ps from "../assets/home/ps4.png";
import ps4mobile from "../assets/home/ps4-mobile.png";
import Navbar from "../Component/navbar";
import About from "./about";
import Facility from "./facility";
import Footer from "../Component/footer";

const home = () => {
  return (
    <div className="">
    <Navbar></Navbar>
      <div className="mt-28 bg-abu w-screen lg:flex lg:flex-row flex flex-col justify-around lg:h-[51rem] h-[44rem]">
        <div className="mt-16 w-[50%]">
          <img src={abstrak} alt="" className="absolute lg:-left-[18rem] lg:w-[62.5rem] lg:h-[45rem] hidden lg:block" />
          <img src={abstrak2} alt="" className="absolute lg:hidden w-[20.2rem] h-[25.8rem] top-[5.6rem] "/>
          <div className="lg:left-20 left-[3.25rem] lg:top-[19.5rem] top-[8.5rem] absolute">
            <h1 className="font-beyonders text-[#F7F7F7] lg:text-[4rem] text-[1.5rem] mb-4">WELCOME</h1>
            <h2 className="font-beyonders text-[#F7F7F7] lg:text-[2.25rem] text-[1rem] mb-4">
              TO FILKOM'S</h2>
            <h2 className="font-beyonders text-[#F7F7F7] lg:text-[2.25rem] text-[1rem] mb-5">
              GAME CORNER</h2>
            <p className="text-[#F7F7F7] lg:text-base text-[0.6rem] font-semibold lg:w-[28rem] w-[13.25rem] text-justify lg:h-[7rem] h-[4.1rem]">
              Fasilitas yang dirancang khusus untuk mahasiswa Fakultas Ilmu
              Komputer, Universitas Brawijaya! Hasil kolaborasi dengan Bank Rakyat
              Indonesia (BRI) pada tanggal 6 September 2023.
            </p>
            <button className="lg:mt-0 mt-5 lg:w-72 w-36 lg:h-16 h-9 rounded-full bg-[#F1FFF9] font-bold lg:text-2xl text-[0.8rem] text-[#393E46] hover:bg-abu hover:text-potih">
              <a href="/#about">Discover More!</a>
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={satu} alt="" className="absolute mt-14  right-[16.5rem] hidden lg:block"/>
          <img src={satu} alt="" className="w-[5rem] absolute top-[30rem]  right-[8rem] lg:hidden"/>
          <img src={dua} alt="" className="absolute mt-[20rem] right-[30rem] hidden lg:block"/>
          <img src={dua} alt="" className="absolute top-[37rem] right-[14rem] w-6"/>
          <img src={tiga} alt="" className="absolute lg:w-52 w-[4rem] lg:mt-[36rem] lg:top-28 top-[45rem] lg:right-[30rem] right-[13rem]"/>
          <img src={ps} alt="" className="absolute lg:-right-[23.7rem] lg:w-[60rem] lg:h-[50rem] lg:mt-[2rem] lg:top-26 hidden lg:block" />
          {/* versi mobile */}
          <div className="h-[24.3rem] w-[27rem] top-[27rem] absolute -right-[0rem] overflow-hidden">
          <img src={ps4mobile} alt="" className=" relative   lg:hidden  -right-[11.27rem]" />
          </div>
        </div>

      </div>
      <About></About>
      <Facility></Facility>
      <Footer></Footer>
      </div>

  );
};

export default home;


