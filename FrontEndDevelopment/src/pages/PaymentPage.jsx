import React from "react";
import { useCart } from "../context/CartContext";
import { totalCostReduced } from './BuyNowPage';
import { handleError, handlesuccess } from "./utli";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function PaymentPage() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const promiseprice = 139;

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      PhoneNumber: e.target.phonenumber.value,
      Pincode: e.target.pincode.value,
      Locality: e.target.locality.value,
      Address: e.target.address.value,
      City: e.target.City.value,
      State: e.target.state.value,
      cartItems,
      totalCost: totalCostReduced,
      promisePrice: promiseprice
    };
    try {
      await axios.post("http://localhost:8080/address/save", formData);
      handlesuccess("Order placed successfully!");
      setTimeout(() => navigate("/collection"), 2000);
    } catch (err) {
      handleError("Failed in saving the user detail, Please check the console for more information");
      console.error(err);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-2xl font-semibold">
          Product <span className="text-gray-400">Details</span>
        </p>
        <hr className="w-[8%] ml-2 border-2" />
      </div>
      <div className="flex gap-10">
        <form className="border-1 border-gray-400 h-fit w-fit ml-[8%] mt-10 px-10" onSubmit={onSubmit}>
          <p className="ml-5 mt-5 text-white px-5 py-2 bg-blue-500">
            ADD A NEW ADDRESS
          </p>
          <div className="grid grid-cols-2 px-5 py-10 gap-5 text-gray-700">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter Your Name here : "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter Your 10 digit Phone Number here : "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
            <input
              type="tel"
              name="pincode"
              id="pincode"
              placeholder="Enter Your Pincode  here : "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
            <input
              type="name"
              name="locality"
              id="locality"
              placeholder="Enter Your Locality here : "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
            <textarea
              className=" w-full border-1 border-gray-400 col-span-2 px-2"
              placeholder="Enter Your Address Here : "
              cols={80}
              rows={5}
              required
              name="address"
              id="address"
            ></textarea>
            <input
              type="name"
              name="City"
              id="City"
              placeholder="City/District/Town "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
            <input
              type="name"
              name="state"
              id="state"
              placeholder="Enter the State : "
              className="border-1 border-gray-400 w-[23vw] h-[5vh] px-2"
              required
            />
          </div>
          <div className="grid grid-cols-1 ">
            <p className="text-[13px] ml-6 text-gray-400">Address Type</p>
            <div className="flex text-[13px] text-gray-600 gap-3 ml-5 mt-2">
              <input type="radio" />
              <label>Home (All day delivery)</label>
              <input type="radio" />
              <label>Work (Delivery between 10AM - 5PM)</label>
            </div>
            <div className="mt-5 ml-5 mb-5">
              <button className="border-1 border-black px-5 py-2 bg-orange-500 text-white cursor-pointer" type="submit"
              >
                Save & Deliver
              </button>
            </div>
          </div>
        </form>
        <div>
          <div className="border-1 h-[40vh] w-[25vw] mt-10">
            <div>
              <p className="text-2xl px-5 py-5  font-semibold">Price Details</p>
              <hr className="w-[80%] ml-[10%] text-gray-400 border-dotted"/>
                <div className="grid grid-cols-1 mt-5 text-gray-600">
                  <p className="text-[18px] px-5 ">
                    Price of ({cartItems.length})  <span className="float-end mr-5">₹{totalCostReduced}</span>
                  </p>
                  <p className="text-[18px] px-5 mt-5">Protect Promise Fee  <span className="float-end mr-5">₹{promiseprice}</span></p>
                  <hr className="w-[80%] ml-[10%] mt-5 text-gray-400 border-dotted"/>
                  <p className="text-[18px] px-5 mt-5">Total Payable  <span className="float-end mr-5">₹{totalCostReduced + promiseprice}</span></p>
                  <hr className="w-[80%] ml-[10%] mt-5 text-gray-400 border-dotted"/>
                  <p className="text-green-700 text-[18px] ml-3 mt-5 px-1">Your Total Saving on this order is ₹{totalCostReduced/2}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentPage;
