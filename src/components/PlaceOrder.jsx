


// import { useCart } from '../context/CartContext'
// import { useAuth } from '../context/AuthContext'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


// export const PlaceOrder = () => {
//     const {cart, clearCart} = useCart()
//     const {token} = useAuth()
//     console.log(token)
//     const [orderPlaced, setOrderPlaced] = useState(false)

//     const PlaceOrder = async () => {
//         try {
//             if (!Array.isArray(cart)) {
//                 console.error('Cart is not an array');
//                 return;
//             }

//             const products = cart.map(product => ({
//                 productId: product.product._id,
//                 quantity: product.quantity,
//                 price: product.price,
//             }))
// console.log(token)
//             const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json',
//                    ...(token &&{ Authorization: `Bearer ${token}`}),
//                 },
//                 body: JSON.stringify({ products }),
//             })

//             if (response.ok) {
//                 const order = await response.json();
//                 console.log('Order placed successfully', order)
//                 clearCart()
//                 setOrderPlaced(true)
//             } else {
//                 console.error('Failed to place order');
//             }
//         } catch (error) {
//             console.error('An error occurred:', error);
//         }
//     }

//   return (
//     <div>
//          {orderPlaced && <p>Thank you for your purchase</p>}
//          {!orderPlaced ? (
//       <button onClick={PlaceOrder}>Place Order</button>
//     ) : (
//       token && <Link to="/private">Order History</Link>
//     )}
   
//     </div>
//   )
// }


import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const PlaceOrder = () => {
    const {cart, clearCart} = useCart()
    const {token} = useAuth()
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [orderId, setOrderId] = useState(null) // New state variable for order id

    const PlaceOrder = async () => {
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
                   ...(token &&{ Authorization: `Bearer ${token}`}),
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
    <div>
         {orderPlaced 
         
         ? (
           <>
             <p>Thank you for your purchase</p>
             <p>Your order id is: {orderId}</p>
             {token && <Link to="/private">Order History</Link>}
           </>
         ) : (
            <>
             
           <button onClick={PlaceOrder}>Place Order</button>
           </>
         )}
    </div>
  )
}
