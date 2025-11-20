import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { handleError, handlesuccess } from '../../pages/utli';
function FooterPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gi97mhs', 'template_gvewqv9', form.current, {
        publicKey: 'WgDvkUPNQQ8SLq_rZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handlesuccess("Coupon has been send successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          handleError("Failed to send the coupon")
        },
      );
  };
  return (
    <div className='h-[70vh] w-full'>
      <div className='text-center mt-10'>
        <p className='text-2xl font-semibold'>Subscribe now & get 20% off</p>
        <p className='mt-3'>Please enter your email id and get flat <span className='text-pink-800'>15%</span> off on your first 3 orders</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
          <div className='text-center mt-10'>
            <input type='email' placeholder='Enter Your Email Id' className='border-1 border-gray-500 w-[30%] px-3 py-2' required/><button className='border-1 px-8 py-2 ml-5 bg-black text-white cursor-pointer' type='submit'>Submit</button>
          </div>
      </form>
      <div className='mt-25 flex justify-center items-center ml-25'>
        <div className='w-[30vw] h-[27vh] mt-10'>
          <p className='text-5xl py-1 px-10 w-fit mt-10' class="Heading1">AuraAttire<span className='text-pink-400'> .</span></p>
          <p className='text-[13px] mt-3 text-gray-500'>Aura Attire is a clothing brand focused on fashion that promotes self-expression and individuality.They emphasize bold designs, high quality, and a blend of contemporary trends with timeless elegance.The brand also highlights a commitment to authenticity, inclusivity, sustainability, and ethical craftsmanship.</p>
        </div>
        <div className='w-[30vw] h-[27vh] mt-10'>
          <p className='font-semibold text-2xl ml-60'>COMPANY</p>
          <p className='mt-5 ml-60 text-gray-500'>Home</p>
          <p className=' ml-60 text-gray-500'>About Us</p>
          <p className=' ml-60 text-gray-500'>Delivery</p>
          <p className=' ml-60 text-gray-500'>Privacy policy</p>
        </div>
        <div className='w-[30vw] h-[27vh] mt-10'>
          <p className='font-semibold text-2xl ml-30'>Get In Touch</p>
          <p className='ml-30 mt-5 text-gray-500'>Tel : (+91) 8766340585<br/>Email: upadhyayparth3010@gmail.com<br/></p>
        </div>
      </div>
      <div>
        <hr className='text-gray-300'/>
        <p className='text-center mt-5 font-light'>Copyright 2025@ Parth Upadhyay - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default FooterPage
