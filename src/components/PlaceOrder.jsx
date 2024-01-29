
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import React, { useState } from 'react'


export const PlaceOrder = () => {
    const {cart, clearCart} = useCart()
    const {token} = useAuth()
    const [orderPlaced, setOrderPlaced] = useState(false)

    const PlaceOrder = async () => {
        try {
            if (!Array.isArray(cart)) {
                console.error('Cart is not an array');
                return;
            }

            const products = cart.map(product => ({
                productId: product.product._id,
                quantity: product.quantity,
            }))

            const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ products }),
            })

            if (response.ok) {
                console.log('Order placed successfully');
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
      <button onClick={PlaceOrder}>Place Order</button>
      {orderPlaced && <p>Thank you for your purchase</p>}
    </div>
  )
}



// export const PlaceOrder = () => {
//     const {cart, clearCart} = useCart
//     const {token} = useAuth()

//     const PlaceOrder = async () => {
//         try {
//             const products = cart.map(product => ({
//                 productId: product.product._id,
//                 quantity: product.quantity,
//                 }))

//         const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//                 products
                
//             }),
//         })

//         if (response.ok) {
//             clearCart()
//         }
//         else {
//             console.error ('Faild to place order')
//         }
//     } catch (error) {
//         console.error('Something went wrong', error)
//     }
//     }

//   return (
//     <div>
//       <button onClick={PlaceOrder}>Place Order</button>
//     </div>
//   )
// }
