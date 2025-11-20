import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Link } from "react-router-dom";
export let totalCostReduced;
function BuyNowPage() {
  const { cartItems } = useCart();
  const ShippingTax = 20;
  const subtotal = cartItems.reduce((total, product) => {
    const raw = product?.PriceOfTHeProduct ?? "";
    const priceValue = String(raw).replace(/[^0-9.]/g, "");
    const priceNumber = parseFloat(priceValue) || 0;
    return total + priceNumber;
  }, 0);

  totalCostReduced = subtotal + ShippingTax;
  return (
    <div>
      <hr className="w-[70%] ml-[15%] text-gray-300" />
      <div className="h-fit py-10">
        <div className="flex items-center justify-center">
          <p className="text-2xl font-semibold">
            Product <span className="text-gray-400">Details</span>
          </p>
          <hr className="w-[8%] ml-2 border-2" />
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 ml-[2%] mt-10">
            {cartItems.map((i) => (
              <div>
                <div className="border-1 border-gray-300 h-[17vh] w-[60vw] pr-10 ml-10 mr-10 mt-5 rounded-xl">
                  <img
                    src={i.PhotoOfTheProduct}
                    alt="Photo of the product"
                    className="h-[80%] rounded-2xl ml-5 mt-2"
                  />
                  <p className="mt-[-90px] ml-40 font-semibold text-gray-500">
                    {i.NameOfProduct}
                  </p>
                  <p className="mt-5 ml-40">Price : {i.PriceOfTHeProduct}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-fit float-end mr-20 h-fit border-1 border-gray-300 px-5 shadow-amber-300  mt-15 py-5 leading-8 rounded-xl">
            {cartItems.map((i) => (
              <div>
                <p className="text-[14px]">
                  {i.NameOfProduct} = {i.PriceOfTHeProduct}
                </p>
              </div>
            ))}
            <p>The Shipping Tax : ₹{ShippingTax}</p>
            <p className="mr-5 font-semibold">
              Total Price Of the Product is : ₹{totalCostReduced}
            </p>
            <Link to={`/payment`}>
              <button className="border-1 px-5 bg-black text-white font-serif italic py-1 mt-5 cursor-pointer">
                Proceed To Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-[70%] ml-[15%] mt-[20%] text-gray-300" />
    </div>
  );
}
export default BuyNowPage;
