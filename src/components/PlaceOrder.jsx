
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const PlaceOrder = () => {
    const {cart, clearCart} = useCart()
    const {token} = useAuth()
    const [orderPlaced, setOrderPlaced] = useState(false) //flytta upp i cartpage och skicka ner som props
    const [orderId, setOrderId] = useState(null) // New state variable for order id

    const confirmedOrder = async () => {
        try {
            if (!Array.isArray(cart)) {
                console.error('Cart is not an array');
                return;
            }

            const products = cart.map(product => ({
                productId: product.product._id,
                quantity: product.quantity,
                price: product.price,
            }))

            const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                   ...(token &&{ Authorization: `Bearer ${token}`}), //KOLLA UPP OM NÖDVÄNDIG!!
                },
                body: JSON.stringify({ products }),
            })

            if (response.ok) {
                const data = await response.json();
                setOrderId(data.order._id) // Save the order id
                console.log('Order placed successfully', data)
                clearCart()
                setOrderPlaced(true)
            } else {
                console.error('Failed to place order');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }



   
  return (
    <div className=''>
         {orderPlaced 
         
         ? (
           <>
             <p>Thank you for your purchase</p>
             <p>Your order id is: {orderId}</p>
             {token && <Link to="/private"  >Order History</Link>}
           </>
         ) : (
            <div className='bg-pink-200'>
             
           <button className='w-full text-center block bg-blue-950 text-white px-4 py-3 rounded p-8 mt-4 mb-4 hover:bg-blue-900 transition-colors' onClick={confirmedOrder}>Place Order</button>
           </div>
         )}
    </div>
  )
}
