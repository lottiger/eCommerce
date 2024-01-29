// import { useContext} from 'react';

import { PlaceOrder } from '../../components/PlaceOrder';
import { useCart} from '../../context/CartContext';
import { Link } from 'react-router-dom';


export const CartPage = ({isCheckoutPage}) => {
  const { cart, addToCart, removeOneFromCart, totalPrice, totalQuantity, removeItem } = useCart()

  
  
  return (
    <div className='mt-10'>
      {/* <h2 className='mb-10 text-center text-xl'>Your Cart</h2> */}
      {cart.map((item, index) => (
        <div className='h-52 w-auto border flex ml-10 mr-10' key={index}>
          <div className='mr-10'>
            <img className='h-48 w-auto object-cover' src={item.product.images[0]} alt={item.product.name} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2>{item.product.name}</h2>
            <p className="text-sm">{item.quantity} x {item.product.price}</p>
            <p>{item.product.price} kr</p>
            <p>Total: {item.product.price * item.quantity} kr</p>
            <button onClick={() => addToCart(item.product)}>Add more</button>
            <button onClick={() => removeOneFromCart(item.product._id)}>Remove</button>
            <button onClick={() => removeItem(item.product._id)}>Delete</button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total Price: {totalPrice} kr</h2>
      </div>
     
      {isCheckoutPage ? (
        <div>
          {/* <button className='bg-pink-300'>Place Order</button> */}
          <PlaceOrder />
        </div>
      ) : (
        <Link to="/checkout" className="">Continue to Checkout</Link>
      )}
    </div>
  )
}

export default CartPage;





// import { useCart } from '../../context/CartContext';
// import { Link } from 'react-router-dom';

// export const CartPage = ({ isCheckoutPage }) => {
//   const { cart, addToCart, removeOneFromCart, totalPrice, totalQuantity, removeItem } = useCart();

//   return (
//     <div className='mt-10'>
//       <h2 className='mb-10 text-center text-xl'>Your Cart</h2>
//       {cart.map((item, index) => (
//         <div className='h-52 w-auto border flex ml-10 mr-10' key={index}>
//           <div className='mr-10'>
//             <img className='h-48 w-auto object-cover' src={item.product.images[0]} alt={item.product.name} />
//           </div>
//           <div className='flex flex-col justify-center'>
//             <h2>{item.product.name}</h2>
//             <p className="text-sm">{item.quantity} x {item.product.price}</p>
//             <p>{item.product.price} kr</p>
//             <p>Total: {item.product.price * item.quantity} kr</p>
//             <button onClick={() => addToCart(item.product)}>Add more</button>
//             <button onClick={() => removeOneFromCart(item.product._id)}>Remove</button>
//             <button onClick={() => removeItem(item.product._id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//       <div>
//         <h2>Total Price: {totalPrice} kr</h2>
//       </div>
//       <div>
//         <button>Continue to Checkout</button>
//       </div>
//     </div> 

//     {isCheckoutPage ? (
//       <div>
//         ckdsjks
//       </div>
//     ) : (
//       <Link to="/checkout" className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Checkout</Link>
//     )}
 
// );
    

// export default CartPage;




// // import { useContext} from 'react';
// import { useCart} from '../../context/CartContext';
// import { Link } from 'react-router-dom';


// export const CartPage = ({isCheckoutPage}) => {
//   const { cart, addToCart, removeOneFromCart, totalPrice, totalQuantity, removeItem } = useCart()

  
  
//   return (
//     <div className='mt-10'>
//       <h2 className='mb-10 text-center text-xl'>Your Cart</h2>
//       {cart.map((item, index) => (
//         <div className='h-52 w-auto border flex ml-10 mr-10' key={index}>
//           <div className='mr-10'>
//             <img className='h-48 w-auto object-cover' src={item.product.images[0]} alt={item.product.name} />
//           </div>
//   <div className='flex flex-col justify-center'>
//   <h2>{item.product.name}</h2>
//   <p className="text-sm">{item.quantity} x {item.product.price}</p>
//   <p>{item.product.price} kr</p>
//   <p>Total: {item.product.price * item.quantity} kr</p>
//   <button onClick={() => addToCart(item.product)}>Add more</button>
//   <button onClick={() => removeOneFromCart(item.product._id)}>Remove</button>
//   <button onClick={() => removeItem(item.product._id)}>Delete</button>
// </div>
// </div>
// ))}
// <div>
// <h2>Total Price: {totalPrice} kr</h2>
// </div>
// <div>
// <button>Continue to Checkout</button>
// </div>
// </div> // Close the div here

// {
// isCheckoutPage
// ?(
// <div>
// ckdsjks
// </div>
// )
// : <Link to="/checkout" className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Checkout</Link>
// }
// ) // Close the return statement here
// } // Close the component here

// export default CartPage;


  // return (
//     <div className='mt-10'>
//       <h2 className='mb-10 text-center text-xl'>Your Cart</h2>
//       {cart.map((item, index) => (
//         <div className='h-52 w-auto border flex ml-10 mr-10' key={index}>
//           <div className='mr-10'>
//             <img className='h-48 w-auto object-cover' src={item.product.images[0]} alt={item.product.name} />
//           </div>
//           <div className='flex flex-col justify-center'>
//             <h2>{item.product.name}</h2>
//             <p className="text-sm">{item.quantity} x {item.product.price}</p>
//             <p>{item.product.price} kr</p>
//             <p>Total: {item.product.price * item.quantity} kr</p>
//             <button onClick={() => addToCart(item.product)}>Add more</button>
//             <button onClick={() => removeOneFromCart(item.product._id)}>Remove</button>
//             <button onClick={() => removeItem(item.product._id)}>Delete</button>
//           </div>
//           </div>
//       ))}
//       <div>
//         <h2>Total Price: {totalPrice} kr</h2>
//       </div>
//       <div>
//         <button>Continue to Checkout</button>
//       </div>
   

//     {
//       isCheckoutPage
//       ?(
        
//         <div>
//         ckdsjks
//         </div>
        
//       )
//       : <Link to="/checkout" className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Checkout</Link>

//     }
//   )
// }

// export default CartPage
