import React from 'react'

function ContactPage() {
  return (
    <div className='h-[75vh]'>
      <hr className='w-[80vw] ml-[10%] text-gray-300'/>
      <div className='flex justify-center items-center mt-5'>
        <p className='text-3xl '>CONTACT <span className='text-gray-500'>US</span></p><hr className='w-[5%] border-2 ml-2'/>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='w-[40vw] h-[60vh]'>
            <img src='/ContactPhoto.png' alt='Photo of the telephone' className='w-[85%] ml-[10%]'/>
        </div>
        <div className='w-[25vw] h-[60vh] text-gray-500'>
            <p className='ml-5 mt-15 text-2xl text-gray-700 font-semibold'>Parth Upadhyay</p>
            <p className='text-[15px] ml-5 mt-4'>Jaypee University Of Information & Technology</p>
            <p className='text-[15px] ml-5 mt-1'>Waknaghat, Himachal Pradesh , India</p>
            <p className='ml-5 mt-12'>Tel : (+91) 8766340585</p>
            <p className='ml-5'>Email : 231030319@juitsolan.in</p>
            <p className='ml-5 mt-8 text-xl text-gray-700 font-semibold'>Careers at AuraAttire.</p>
            <p className='ml-5 mt-5'>Learn more about our teams and job openings.</p>
            <button className='border-1 ml-5 mt-8 px-8 py-3 bg-black text-white'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}
export default ContactPage
