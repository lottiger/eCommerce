import { createContext, useState, useContext } from 'react';

export const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)

if (!context) throw new Error("CartContext must be used within a CartProvider")

return context
}

const getTotalPrice = (cart) => {
  let total = 0
  cart.forEach(item =>{
    total += item.product.price * item.quantity
  })
  return total
  }

  const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach(item =>{
      total += item.quantity
    })
    return total
    }

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const totalQuantity = getTotalQuantity(cart)
  const totalPrice = getTotalPrice(cart)

  const addToCart = (product) => {
    const itemRef = cart.find(item => item.product._id === product._id)
  const newCart = [...cart]
  itemRef
  ? itemRef.quantity++
  : newCart.push({ product, quantity: 1 })
  setCart(newCart)
  }

  const removeOneFromCart = (productId) => {
    const itemRef = cart.find(item => item.product._id === productId)
    let newCart = [...cart]

    itemRef.quantity <= 1
    ? newCart = cart.filter(item => item.product._id !== productId)
    : itemRef.quantity--

    setCart(newCart)
  }

  const removeItem = (productId) => {
    setCart (oldCart => oldCart.filter(item => item.product._id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
    removeOneFromCart,
    removeItem,
    clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

