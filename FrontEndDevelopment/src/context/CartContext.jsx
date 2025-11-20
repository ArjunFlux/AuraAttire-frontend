import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [ cartItems, setcartItems ] = useState([]);
  const addtocart = (product)=>{
    setcartItems([...cartItems , product]);
  }
  const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(i => i.id !== itemId);
        setcartItems(updatedCartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, setcartItems,addtocart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = ()=> useContext(CartContext)
