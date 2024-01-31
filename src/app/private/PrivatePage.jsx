import React, {useState, useEffect} from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function PrivatePage() {
  const {token} = useAuth()
  const [orders, setOrders] = useState([])
 
  const fetchOrders = async () => {
    try{
      const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
        headers: {
          'content-type': 'application/json',
          ...(token && {Authorization: `Bearer ${token}`}),
        },
      })
      const data = await response.json()
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error('Unexpected response:', data);
        setOrders([]); // set orders to an empty array if data is not an array
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    }
  }

  const [orderId, setOrderId] = useState(''); // state for the order ID input

const fetchOrder = async () => {
  try {
    const response = await fetch(`https://js2-ecommerce-api.vercel.app/api/orders/${orderId}`, {
      headers: {
        'content-type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
    const data = await response.json();
    setOrders([data]); // set orders to an array containing only the fetched order
  } catch (error) {
    console.error('Failed to fetch order:', error);
  }
}
 
  return (
    <div>
      <p>Hello Dear Member</p>
      <Link to='/'>Lets go shopping right away!</Link>
      <h2>Orderhistorik</h2>
      <button onClick={fetchOrders}>Get order history</button>
      <input value={orderId} onChange={e => setOrderId(e.target.value)} placeholder="Order ID" />
      <button onClick={fetchOrder}>Get order</button>
      <button onClick={()=> setOrders ([])}> Hide order history</button>
      {orders.map(order => (
        <div key={order._id}>
          <h3>Order {order._id}</h3>
          <p>Orderdatum: {order.createdAt}</p>
          {order.products.map(product => (
            <div key={product._id}>
              <h4>Produkt: {product.product.name}</h4>
              <p>Antal: {product.quantity}</p>
              <p>Pris: {product.product.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PrivatePage

// import React, {useState, useEffect} from 'react'
// import { useAuth } from '../../context/AuthContext'

// function PrivatePage() {
//   const {token} = useAuth()
//   const [orders, setOrders] = useState([])
 
//  useEffect(() => {
//   const fetchOrders = async () => {
//     try{
//       const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders',{
//         headers: {
//           'content-type': 'application/json',
//           ...(token && {Authorization: `Bearer ${token}`}),

//         },
//       })
//       const data = await response.json()
//         if (Array.isArray(data)) {
//           setOrders(data);
//         } else {
//           console.error('Unexpected response:', data);
//           setOrders([]); // set orders to an empty array if data is not an array
//         }
//       } catch (error) {
//         console.error('Failed to fetch orders:', error)
//       }
//     }


//  fetchOrders()
// }, [token])
 
//  return (
//   <div>
//   <h2>Orderhistorik</h2>
//   {orders.map(order => (
//     <div key={order._id}>
//       <h3>Order {order._id}</h3>
//       <p>Orderdatum: {order.createdAt}</p>
//       {order.products.map(product => (
//         <div key={product._id}>
//           <h4>Produkt: {product.product.name}</h4>
//           {/* <img src={product.images [0]} alt="" /> */}
//           <p>Antal: {product.quantity}</p>
//           <p>Pris: {product.product.price}</p>
//         </div>
//       ))}
//     </div>
//   ))}
// </div>
// )
// }

// export default PrivatePage