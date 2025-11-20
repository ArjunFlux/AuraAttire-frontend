import React from "react";
import { useCart } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";
import { toast } from "react-toastify";
import { handleError, handlesuccess } from "./utli";
function AddtoCart() {
  const { cartItems, removeFromCart } = useCart();
  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };
  return (
    <div className="h-fit w-full">
      <div className="flex items-center justify-center px-5">
        <p className="text-3xl font-semibold">
          YOUR <span className="text-gray-500">CART</span>
        </p>
        <hr className="w-[5%] ml-2 border-2" />
      </div>
      <div className="text-center mt-3">
        <p className="ml-[-30px] text-3xl mt-10">
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is{" "}
              <span className="text-red-500 font-serif italic">Empty</span>
            </div>
          ) : (
            <p>
              Length of the Cart is :
              <span className="text-red-500">{cartItems.length}</span>
            </p>
          )}
        </p>
      </div>
      <div className="grid grid-cols-1 ml-[10%]">
        {cartItems.map((i) => (
          <div
            key={i.id}
            className="mt-10 flex justify-between items-center border-1 border-gray-300 rounded-xl mr-[10%]"
          >
            <div className="w-fit h-[20vh] px-10">
              <img
                src={i.PhotoOfTheProduct}
                alt="Photo of the Product"
                className="h-[15vh] rounded-2xl mt-4"
              />
              <p className="font-semibold ml-35 mt-[-100px] text-gray-500">
                {i.NameOfProduct}
              </p>
              <p className="ml-35 mt-5 font-bold">
                Price : {i.PriceOfTHeProduct}
              </p>
            </div>
            <div>
              <MdDelete
                size={40}
                className="cursor-pointer hover:text-red-500 transition"
                onClick={() => {
                    handleDelete(i.id);
                    handlesuccess(`${i.NameOfProduct} removed from cart!`);
                }}
              />
              <Link to={`/buynow`}>
                <button className="border-1 px-5 py-2 mr-10 mt-3 bg-black text-white cursor-pointer">
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddtoCart;
