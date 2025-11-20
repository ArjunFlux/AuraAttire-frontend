import React, { useState } from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
function Collection() {
  const navigate = useNavigate();
  return (
    <div className="h-[130vh]">
      <hr className="w-[80vw] ml-[10%] text-gray-300" />
      <div className="flex justify-start items-center mt-15 gap-10">
        <div className="w-[50%] h-[100vh]">
          <div className="flex items-center px-5">
            <p className="text-2xl font-semibold">
              ALL <span className="text-gray-500">COLLECTION</span>
            </p>
            <hr className="w-[5%] ml-2" />
          </div>
          <div className="grid grid-cols-7 gap-x-50">
            {products.map((i) => (
              <div key={i.id}>
                <div
                  className="h-[35vh] w-[15vw] bg-white rounded-2xl transform hover:scale-90 transition duration-300 cursor-pointer mt-10"
                  onClick={() => navigate(`/collection/${i.id}`)} 
                >
                  <img
                    src={i.PhotoOfTheProduct}
                    className="w-[75%] ml-[15%] rounded-xl"
                  />
                  <p className="text-[13px] text-center mt-5 px-10">
                    {i.NameOfProduct}
                  </p>
                  <p className="text-[15px] text-center font-bold">
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

export default Collection;
