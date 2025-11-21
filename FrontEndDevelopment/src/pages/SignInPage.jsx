import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleError, handlesuccess } from "./utli";

function SignInPage() {
  const [loginInfo, setloginInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate= useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setloginInfo(copyLoginInfo);
  }; 
  const handlelogin = async (e) => {
    e.preventDefault();
    const {name,email,password} = loginInfo;
    if(!name || !email || !password){
      return handleError("Error while SignUp...");
    }
    try{
      const url = "https://auraattire-backend.onrender.com/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const {success,message,jwtTok,name,error} = result;
      if(success){
        handlesuccess(`Sign Up Sccussfully User : ${loginInfo.name}`);
        localStorage.setItem('token',jwtTok);
        localStorage.setItem('loggedInUser',name);
        setTimeout(()=>{
          navigate('/login')
        },1000)
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }
    }catch(err){
      handleError(err);
    }
  };
  return (
    <div className="h-[60vh]">
      <hr className="w-[70%] ml-[15%] text-gray-300" />
      <div className="flex items-center justify-center mt-30">
        <p className="text-3xl font-serif">Sign Account</p>
        <hr className="w-[5%] ml-2 border-2" />
      </div>
      <form onSubmit={handlelogin}>
        <div className="text-center mt-5">
          <input
            onChange={handlechange}
            type="name"
            name="name"
            placeholder="Enter the Username here : "
            className="border-1 border-gray-400 w-[30%] px-3 h-[6vh]"
            value={loginInfo.name}
          />
          <br />
          <input
            onChange={handlechange}
            type="email"
            name="email"
            placeholder="Enter the EmailId here : "
            className="border-1 border-gray-400 w-[30%] px-3 h-[6vh] mt-5"
            value={loginInfo.email}
          />
          <br />
          <input
            onChange={handlechange}
            type="password"
            name="password"
            placeholder="Enter the password here : "
            className="border-1 border-gray-400 w-[30%] px-3 h-[6vh] mt-5"
            value={loginInfo.password}
          />
        </div>
        <div className="flex justify-center gap-60 mt-3 text-[13px]">
          <p className="cursor-pointer text-gray-600">Forget Your Password ?</p>
          <Link to={`/login`}>
            <p className="cursor-pointer text-gray-600">Login Here</p>
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="border-1 px-5 py-2 bg-black text-white cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
