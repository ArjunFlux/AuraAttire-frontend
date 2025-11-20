import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleError, handlesuccess } from "./utli";

function LoginPage() {
  const [signupInfo, setsignupInfo] = useState({
    email: "",
    password: "",
  });
  const navigate= useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...signupInfo };
    copyLoginInfo[name] = value;
    setsignupInfo(copyLoginInfo);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const {email,password} = signupInfo;
    if(!email || !password){
      return handleError("Error while Login...");
    }
    try{
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const {success,message,error,name,jwtTok} = result;
      if(success){
        localStorage.setItem('token', jwtTok);
        localStorage.setItem('loggedInUser', name);
        handlesuccess(`Login Sccussfully User : ${name}`);
        setTimeout(()=>{
          navigate('/')
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
        <p className="text-3xl font-serif">Login Account</p>
        <hr className="w-[5%] ml-2 border-2" />
      </div>
      <form onSubmit={handlesubmit}>
        <div className="text-center mt-5">
          <input
            onChange={handlechange}
            type="email"
            name="email"
            placeholder="Enter the EmailId here : "
            className="border-1 border-gray-400 w-[30%] px-3 h-[6vh] mt-5"
            value={signupInfo.email}
          />
          <br />
          <input
            onChange={handlechange}
            type="password"
            name="password"
            placeholder="Enter the password here : "
            className="border-1 border-gray-400 w-[30%] px-3 h-[6vh] mt-5"
            value={signupInfo.password}
          />
        </div>
        <div className="flex justify-center gap-50 mt-3 text-[13px]">
          <p className="cursor-pointer text-gray-600">Forget Your Password ?</p>
          <Link to={`/SignIn`}>
            <p className="cursor-pointer text-gray-600">Create Account</p>
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="border-1 px-5 py-2 bg-black text-white cursor-pointer"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
