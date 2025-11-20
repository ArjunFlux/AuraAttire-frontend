import React from 'react'
import { BestProduct } from '../../data/products'; 
import { useNavigate } from 'react-router-dom';
import { MdCurrencyExchange } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomerServiceFill } from "react-icons/ri";
function BestSellerPage() {
  const navigate = useNavigate();
  return (
    <div className='h-[100vh] w-full'>
      <div className='mt-10 flex items-center justify-center'>
        <p class="Heading2" className="text-3xl">
          BEST <span className="text-gray-400">SELLERS</span>
        </p>
        <hr className='w-[8%] ml-5 border-2'/>
      </div>
      <p className='text-center mt-3'>These are the product which has been main eye catching for our beloved customers</p>
      <div className='flex justify-center gap-10'>
        {BestProduct.map(i =>(
          <div key={i.id} className='transform hover:scale-90 transition duration-300 cursor-pointer w-[20%] h-[50vh] mt-15' onClick={() => navigate(`/Bestproduct/${i.id}`)}>
            <img src={i.PhotoOfTheProduct} alt='Photo of the Product' className='hover:rounded-2xl transition duration-300'/>
            <p className='mt-3 text-center'>{i.NameOfProduct}</p>
            <p className='text-center'>Price : <span className='mt-2 font-bold'>{i.PriceOfTHeProduct}</span></p>
          </div>
        ))} 
      </div>
      {/* THis is the icons side */}
      <div className='flex justify-center'>
          <div className='w-[30%] text-center'>
              <MdCurrencyExchange size={50} className='mt-20 ml-[43%]'/>
              <p className='font-bold mt-3'>Easy Exchange Policy</p>
              <p className='text-gray-500'>We offer hassle free exchange policy</p>
          </div>
          <div className='w-[30%] text-center'>
              <VscWorkspaceTrusted size={50} className='mt-20 ml-[43%]'/>
              <p className='font-bold mt-3'>7 Days Return Policy</p>
              <p className='text-gray-500'>We provide 7 days free return policy</p>
          </div>
          <div className='w-[30%] text-center'>
              <RiCustomerServiceFill size={50} className='mt-20 ml-[43%]'/>
              <p className='font-bold mt-3'>Best customer support</p>
              <p className='text-gray-500'>we provide 24/7 customer support</p>
          </div>
      </div>
    </div>
  )
}

export default BestSellerPage
