import React, { useState } from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
function SearchFilter() {
  const navigate = useNavigate();
  const [store , setStore] = useState(products);
  const [data, setData] = useState("");
  const getData = (e)=> {
    console.log(e.target.value);
    setData(e.target.value);
  }
  let filterStore = store.filter((curvalue)=>{
    return curvalue.NameOfProduct.toLowerCase().includes(data);
  })
  return (
    <div className="h-[300vh]">
      <hr className="w-[80vw] ml-[10%] text-gray-300" />
      <input type="search" placeholder="Search Here : " className="border-1 border-gray-300 ml-[30%] mt-10 px-3 rounded-xl w-[40%] h-[5vh]" onChange={getData}/>

      <div className="flex justify-center items-center mt-15 gap-10">
        <div className="w-[20%] h-[100vh]">
          <p className="text-xl">FILTERS</p>
          <div className="flex-col mt-5 ">
            <div className="border-1 border-gray-300 h-[20vh] rounded-2xl">
              <p className="font-semibold pl-5 pt-2">CATEGORIES</p>
              <div className="px-5 text-gray-500">
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Men</label>
                <br />
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Women</label>
                <br />
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Kids</label>
              </div>
            </div>
            <div className="border-1 border-gray-300 h-[20vh] mt-10 rounded-2xl">
              <p className="font-semibold pl-5 pt-2">TYPE</p>
              <div className="px-5 text-gray-500">
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Topwear</label>
                <br />
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Bottomwear</label>
                <br />
                <input type="radio" className="mt-5 " />
                <label className="ml-3">Winterwear</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100vh]">
          <div className="flex items-center px-5">
            <p className="text-2xl font-semibold">
              ALL <span className="text-gray-500">COLLECTION</span>
            </p>
            <hr className="w-[5%] ml-2" />
          </div>
          <div className="grid grid-cols-3 ml-10">
            {filterStore.map((i) => (
              <div key={i.id}>
                <div
                  className="h-[35vh] w-[15vw] bg-white rounded-2xl transform hover:scale-90 transition duration-300 cursor-pointer mt-10"
                  onClick={() => navigate(`/collection/${i.id}`)} 
                >
                  <img
                    src={i.PhotoOfTheProduct}
                    className="w-[75%] ml-[15%] rounded-xl"
                  />
                  <p className="text-[13px] text-center mt-5">
                    {i.NameOfProduct}
                  </p>
                  <p className="text-[13px] text-center">
                    Price : {i.PriceOfTHeProduct}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter
