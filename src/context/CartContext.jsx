import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

