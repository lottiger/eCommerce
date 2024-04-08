import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

function PrivatePage() {
  const {token} = useAuth()
  const [orders, setOrders] = useState([])
 
  const fetchOrders = async () => {
    try{
      const response = await fetch('http://localhost:4000/api/order/orders',{
        headers: {
          'content-type': 'application/json',
          ...(token && {Authorization: `Bearer ${token}`}),
        },
      })
      const data = await response.json()
      if (Array.isArray(data)) {
        setOrders(data)
      } else {
        console.error('Unexpected response:', data);
        setOrders([]) 
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    }
  }

  const [orderId, setOrderId] = useState('') 
  const fetchOrder = async () => {
  
    try {
    const response = await fetch(`http://localhost:4000/api/order/${orderId}`, {
      headers: {
        'content-type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
    const data = await response.json()
    setOrders([data])
    setOrderId('')
  } catch (error) {
    console.error('Failed to fetch order:', error)
  }
}
 
  return (
    <div className='text-center mt-10'>
      <p className='text-xl'>Hello Dear Member,</p>
      <Link to='/'>Lets go shopping right away!</Link>
      <p className='mt-20 mb-10'>Order History</p>
      <input className='border rounded mr-2 p-1' value={orderId} onChange={e => setOrderId(e.target.value)} placeholder="Order number" />
      <button className='bg-blue-950 text-white rounded p-1 mr-1 hover:bg-blue-900' onClick={fetchOrder}>Get order</button>
      <button className='bg-blue-950 text-white rounded p-1 mr-1 hover:bg-blue-900' onClick={fetchOrders}>Get all orders</button>
      <button className='bg-blue-950 text-white rounded p-1 mr-1 hover:bg-blue-900' onClick={()=> setOrders ([])}> Hide orders</button>
      {orders.map(order => (
        <div className='mt-5 text-sm' key={order._id}>
          <h3>Order {order._id}</h3>
          <p>Orderdatum: {order.createdAt}</p>
          {order.products.map(product => (
            <div key={product._id}>
              <h4 className='font-semibold'>{product.productId.name}</h4>
              <p>Antal: {product.quantity}</p>
              <p>Pris: {product.productId.price} :-</p>
            </div>
          ))}
          <p>Totalpris: {order.products.reduce((total, product) => total + product.productId.price * product.quantity, 0)} :-</p>
        </div>
      ))}
    </div>
  )
}

export default PrivatePage

