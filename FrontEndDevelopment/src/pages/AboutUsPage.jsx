import React from 'react'

function AboutUsPage() {
  return (
    <div className=' h-[130vh]'>
        <hr className='w-[80vw] ml-[10%] text-gray-300'/>
        <div className='flex justify-center items-center mt-10'>
            <p className='text-3xl '>ABOUT <span className='text-gray-500'>US</span></p>
            <hr className='w-[5%] ml-2 border-2'/>
        </div>
        <div className='flex justify-center mt-10'>
            <div>
                <img src='/AboutUsPhoto.png' alt='Photo of our Product' className='h-[90%]'/>
            </div>
            <div className=' w-[40%] px-4 text-gray-700'>
                <p className='mt-10'>AuraAttire was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p className='mt-10'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <p className='font-bold mt-10'>Our Mission</p>
                <p className='mt-10'>Our mission at AuraAttire is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>
        <div>
            <div className='flex justify-start ml-35 mt-10 items-center'>
                <p className='text-2xl '>ABOUT <span className='text-gray-500'>US</span></p>
                <hr className='w-[5%] ml-2 border-2'/>
            </div>
            <div className='flex justify-center items-center gap-5 px-10 ml-25  text-start'>
                <div className='border-1 border-gray-300 px-10 py-15 mt-10'>
                    <p className='font-bold'>Quality Assurance:</p>
                    <p className='mt-5 text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border-1 px-10 border-gray-300 py-15 mt-10'>
                    <p className='font-bold'>Convenience:</p>
                    <p className='mt-5 text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className='border-1 px-10 border-gray-300 py-15 mt-10'>
                    <p className='font-bold'>Exceptional Customer Service:</p>
                    <p className='mt-5 text-gray-500'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage
