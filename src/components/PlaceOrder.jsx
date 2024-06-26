
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const PlaceOrder = () => {
    const {cart, clearCart} = useCart()
    const {token} = useAuth()
    const [orderPlaced, setOrderPlaced] = useState(false) 
    const [orderId, setOrderId] = useState(null) 

    const confirmedOrder = async () => {
        try {
            if (!Array.isArray(cart)) {
                console.error('Cart is not an array')
                return;
            }

            const products = cart.map(product => ({
                productId: product.product._id,
                quantity: product.quantity,
                price: product.price,
            }))

            const response = await fetch('http://localhost:4000/api/order/',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                   ...(token &&{ Authorization: `Bearer ${token}`}), 
                },
                body: JSON.stringify({ products }),
            })

            if (response.ok) {
                const data = await response.json();
                setOrderId(data._id) 
                console.log('Order placed successfully', data)
                clearCart()
                setOrderPlaced(true)
            } else {
                console.error('Failed to place order')
            }
        }   catch (error) {
            console.error('An error occurred:', error)
        }
    }

  return (
    <div className='text-center'>
         {orderPlaced 
         
         ? (
           <>
           <div className='border shadow-md mt-20 rounded p-1 min-h-56 flex items-center justify-center'>
             <p className='text-[40px]'>Thank you for your purchase!</p>
             </div>
             <p className='mt-20 mb-5 text-sm'>Order number: {orderId}</p>
             {token && <Link className='bg-blue-950 text-white rounded p-1 mr-1 mb-10 hover:bg-blue-900'
             to="/private">View order History</Link>}
           </>
         ) : ( 
           <button className='w-full text-center block bg-blue-950 text-white p-2 rounded  mt-4 mb-4 hover:bg-blue-900 transition-colors'
           onClick={confirmedOrder}>Place Order</button>
         )}
         
    </div>
  )
}
