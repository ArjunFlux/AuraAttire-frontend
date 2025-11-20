import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
    const[showTHeMenu,setShowTheMenu] = useState(false);
    function ShowTHeMenu(){
        setShowTheMenu(prev => !prev);
    }
    const navigate = useNavigate();
  return (
    <div className='md:flex md:justify-between md:items-center md:px-25 w-full h-[15vh]'>
        <Link to={`/`}><p className='md:text-5xl text-[50px] py-5 px-5 w-fit' class="Heading1">AuraAttire<span className='text-pink-400'> .</span></p></Link>
        <div className='md:flex md:gap-10 list-none md:border-1 ml-[-20px] md:border-gray-400 md:px-12 md:py-4 md:rounded-2xl hidden font-semibold'>
             {/* note that the navlink will only be used if we use BrowserRouter and import navlink form the react-router-dom 
             and there is the class named active in the navlink which showes which navlink is currently active */}
            <NavLink to="/">
                <p className='cursor-pointer'>Home</p>
                <hr className='w-2/4 ml-2 hidden'/>
            </NavLink>
            <NavLink to="/collection">
                <p className='cursor-pointer'>Collection</p>
                <hr className='w-2/4 ml-2 hidden'/>
            </NavLink>
            <NavLink to="/about">
                <p className='cursor-pointer'>About</p>
                <hr className='w-2/4 ml-2 hidden'/>
            </NavLink>
            <NavLink to="/contact">
                <p className='cursor-pointer'>Contact</p>
                <hr className='w-2/4 ml-2 hidden'/>
            </NavLink>
            <button className='border-1 border-gray-400 text-[13px] px-2 py-1 rounded-3xl'>Admin Panel</button>
        </div>
        {/* mobile View */}
        <div className='md:hidden'>
            <IoReorderThreeOutline size={50} className='float-right mt-[-75px] mr-10 text-black' onClick={ShowTHeMenu}/>
        </div>
        {showTHeMenu && (<div className='md:flex md:gap-10 list-none md:mt-[-40px] md:border-1 md:border-gray-400 md:px-12 md:py-4 md:rounded-2xl border-1 w-fit px-10 py-3 leading-10 float-end mr-[50px]  rounded-2xl'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Collection</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <button className='border-1 border-gray-400 text-[13px] md:px-2 md:py-1 px-3 ml-[-10px] rounded-3xl'>Admin Panel</button>
        </div>)}
        <div className='md:flex md:gap-7 hidden w-fit'>
            <CiSearch size={27} className=' cursor-pointer'  onClick={()=>navigate (`/search`)}/>
            <div className='group relative'>
                <Link to={`/login`}><CgProfile size={27}  className=' cursor-pointer'/></Link>
                {/* <div className='h-[120px] w-[200px] group-hover:block right-0 hidden absolute text-center z-10 leading-10'>
                    <div className='bg-white border-1 text-gray-500 rounded-2xl'>
                        <NavLink to="/profile">
                            <p className='hover:text-black cursor-pointer'>My Profile</p>
                        </NavLink>
                        <NavLink to="/orders">
                            <p className='hover:text-black cursor-pointer'>My Orders</p>
                        </NavLink>
                        <NavLink to="/logout">
                            <p className='hover:text-black cursor-pointer'>Logout</p>
                        </NavLink>
                    </div>
                </div> */}
            </div>
            <NavLink to="/wishlist">
                <CiShoppingCart size={27}  className=' cursor-pointer'/>

            </NavLink>
        </div>
    </div>
  )
}
export default NavBar
