import React from "react";
import { useNavigate } from "react-router-dom";
function FirstPage() {
  const data = [
    {
      id: 1,
      NameOfProduct: "Kid Tapered Slim Fit Trouser",
      PriceOfTHeProduct: "₹1,034",
      PhotoOfTheProduct: "/Photo1.png",
    },
    {
      id: 2,
      NameOfProduct: "Men Rounded Neck Pure Cotten T-Shirt",
      PriceOfTHeProduct: "₹1,064",
      PhotoOfTheProduct: "/Photo2.png",
    },
    {
      id: 3,
      NameOfProduct: "Boy Rounded Neck Pure Cotten T-Shirt",
      PriceOfTHeProduct: "₹1,060",
      PhotoOfTheProduct: "/Photo3.png",
    },
    {
      id: 4,
      NameOfProduct: "Women Zip-Front Relaxed Fit Jacket",
      PriceOfTHeProduct: "₹1,074",
      PhotoOfTheProduct: "/Photo4.png",
    },
    {
      id: 5,
      NameOfProduct: "Men Tapered Fit Flat-Front Trousers",
      PriceOfTHeProduct: "₹1,058",
      PhotoOfTheProduct: "/Photo5.png",
    },
    {
      id: 6,
      NameOfProduct: "Girls Round Neck Cotten Top",
      PriceOfTHeProduct: "₹1,056",
      PhotoOfTheProduct: "/Photo6.png",
    },
    {
      id: 7,
      NameOfProduct: "Women Zip-Front Relaxed Fit Jacket",
      PriceOfTHeProduct: "₹1,058",
      PhotoOfTheProduct: "/Photo7.png",
    },
    {
      id: 8,
      NameOfProduct: "Men Printed Plain Cotten Shirt",
      PriceOfTHeProduct: "₹1,052",
      PhotoOfTheProduct: "/Photo8.png",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="h-[95vh] w-[85vw] ml-26.5 ">
      <div className="text-center mt-15">
        <p class="Heading2" className="text-3xl">
          LATEST <span className="text-gray-400">COLLECTIONS</span>
        </p>
        <hr className="w-[10%] border-2 ml-[63%] mt-[-20px]" />
        <p className="mt-5">Check out our latest collection...</p>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {data.map((d) => (
          <div key={d.id}>
            <div
              className="h-[35vh] w-[20vw] bg-white rounded-2xl transform hover:scale-90 transition duration-300 cursor-pointer"
              onClick={() => navigate(`/product/${d.id}`)}
            >
              <img
                src={d.PhotoOfTheProduct}
                className="w-[75%] ml-[15%] rounded-xl"
              />
              <p className="text-[15px] text-center mt-1 px-7">
                {d.NameOfProduct}
              </p>
              <p className="text-[15px] text-center font-bold">
                Price : {d.PriceOfTHeProduct}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstPage;
