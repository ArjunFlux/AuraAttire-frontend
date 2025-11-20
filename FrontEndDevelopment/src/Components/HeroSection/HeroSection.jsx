import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handlesuccess } from "../../pages/utli";

function HeroSection() {
  const [loggedInUser,setLoggedInUser] = useState('');
  const naviagte = useNavigate()
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  },[])
  const  handleClick = (e) =>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setTimeout(()=>{
      handlesuccess("Logout Successfull...")
      naviagte('/login')
    },1000);
  }
  return (
    <>
      {loggedInUser ? (
        <div className="flex justify-center gap-10 items-center px-5 py-3">
          <h1 className="text-center text-2xl">Welcome User <span className="text-red-500 font-serif italic">{loggedInUser}</span></h1>
          <button onClick={handleClick} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer">Logout</button>
        </div>
      ) : null}
      <div className="h-[50vh] w-[85vw] border-1 left-[7.5%] mt-5 top-[20%] relative flex overflow-hidden">
        <div className="h-full w-1/2 flex flex-col justify-center items-center text-center">
          <hr className="w-[90px] ml-[-300px] border-2" />
          <p className="mt-[-15px] text-2xl">OUR BESTSELLERS</p>
          <p className="font-serif italic text-5xl mt-3 ml-[-50px]">
            Latest Arrival
          </p>
          <p className="text-xl ml-[-250px] mt-3 font-semibold">Shop Now</p>
          <hr className="w-[90px] ml-[-20px] mt-[-10px] border-2" />
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center items-center text-center">
          <img
            src="/image.png"
            alt="photo of a model"
            className="w-[100%] mr-[-10px]"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
