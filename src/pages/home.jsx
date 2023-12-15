import React from "react";
import abstrak from "../assets/home/Abstrak.png";
import satu from "../assets/home/1.png"
import dua from '../assets/home/2.png'
import tiga from '../assets/home/3.png'
import ps from "../assets/home/ps4.png";
import Navbar from "../Component/navbar";
import About from "./about";
import Facility from "./facility";
import Footer from "../Component/footer";

const home = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="mt-28 bg-abu w-screen flex justify-around h-[51rem] overflow-hidden">
        <div className="mt-16 w-[50%]">
          <img src={abstrak} alt="" className="absolute -left-[18rem] w-[62.5rem] h-[45rem]" />
          <div className="left-20 top-[19.5rem] absolute">
            <h1 className="font-beyonders text-[#F7F7F7] text-[4rem] mb-4">WELCOME</h1>
            <h2 className="font-beyonders text-[#F7F7F7] text-[2.25rem] mb-4">
              TO FILKOM'S</h2>
            <h2 className="font-beyonders text-[#F7F7F7] text-[2.25rem] mb-5">
              GAME CORNER</h2>
            <p className="text-[#F7F7F7] text-base font-semibold w-[28rem] h-[7rem]">
              Fasilitas yang dirancang khusus untuk mahasiswa Fakultas Ilmu
              Komputer, Universitas Brawijaya! Hasil kolaborasi dengan Bank Rakyat
              Indonesia (BRI) pada tanggal 6 September 2023.
            </p>
            <button className="w-72 h-16 rounded-full bg-[#F1FFF9] font-bold text-2xl text-[#393E46] hover:bg-abu hover:text-potih">
              Discover More!
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={satu} alt="" className="absolute mt-14 right-[16.5rem]"/>
          <img src={dua} alt="" className="absolute mt-[20rem] right-[30rem]"/>
          <img src={tiga} alt="" className="absolute mt-[36rem] right-[30rem]"/>
          <img src={ps} alt="" className="absolute -right-[23.7rem] w-[60rem] h-[50rem] mt-[2rem]" />
        </div>

      </div>
      <About></About>
      <Facility></Facility>
      <Footer></Footer>
    </>
  );
};

export default home;


