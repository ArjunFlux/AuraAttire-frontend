import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BestProduct } from '../data/products';
import { ImCrying } from "react-icons/im";
import { CartContext } from '../context/CartContext';
import {toast} from 'react-toastify'
function BestProductPage() {
    const {id}  = useParams();
    const Bestproduct = BestProduct.find(p => p.id === Number(id));
    if(!Bestproduct) return <div><p>Page Not Found</p></div>
  return (
    <div>
    <hr className='w-[80vw] ml-[10%] text-gray-300'/>
<div className='flex justify-center px-20'>
        <div className='h-[80vh] w-[50vw]'>
            <img src={Bestproduct.PhotoOfTheProduct} alt={Bestproduct.NameOfProduct} className='ml-[13%] w-[70%] mt-10 rounded-2xl'/>
        </div>
        <div className='h-[80vh] w-[50vw]'>
            <p className='mt-10 text-2xl ml-5 font-bold'>{Bestproduct.NameOfProduct}</p>
            <div className='flex items-center mt-[-5px]'>
                <img src='/ImageOfStar.png' alt='Rating of this product' className='w-[13%] ml-5'/>
                <p className='ml-5 mt-[-9px]'>(122)</p>
            </div>
            <p className='ml-5 text-4xl font-bold'>{Bestproduct.PriceOfTHeProduct}</p>
            <p className='px-10 ml-[-20px] mt-5 text-gray-500'>{Bestproduct.DescriptionOfTheProduct}</p>
            <div className='mt-10 ml-5'>
              <p className='text-xl font-bold'>Select Size</p>
              <div className='flex w-[8%] gap-5 mt-5'>
                <input type='checkbox'/><label>Small</label>
                <input type='checkbox'/><label>Medium</label>
                <input type='checkbox'/><label>Large</label>
                <input type='checkbox'/><label>Xl</label>
              </div>
              <button className='border-1 px-8 py-2 mt-8 bg-black text-white cursor-pointer' onClick={() => { 
  addtocart(product); 
  toast.success(`${product.NameOfProduct} added to cart!`, {
    position: 'bottom-right',
    autoClose: 2000,           
    hideProgressBar: false,
  }); 
}} >Add Cart</button>
              <hr className='w-[80%] mt-10 text-gray-400'/>
              <p className='text-gray-400 mt-5'>100% Original product.<br/>Cash on delivery is available on this product.<br/>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BestProductPage
