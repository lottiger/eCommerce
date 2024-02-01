// import { useContext} from 'react';

import { PlaceOrder } from '../../components/PlaceOrder';
import { useCart} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const CartPage = ({isCheckoutPage}) => {
  const { cart, addToCart, removeOneFromCart, totalPrice, totalQuantity, removeItem } = useCart()
 
  
  
  return (

    
    <div className='mt-10'>
      
     
      {cart.length === 0 
      ? (
      <p>Your cart is empty</p>
    ) : (
      cart.map((item, index) => (
        <div className='h-52 w-auto border flex ml-10 mr-10' key={index}>
          <div className='mr-10'>
            <img className='h-48 w-auto object-cover' src={item.product.images[0]} alt={item.product.name} />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold'>{item.product.name}</h2>
            <p className="text-xs font-semibold mt-2">{item.quantity} x {item.product.price}:-</p>
            {/* <p>{item.product.price} kr</p> */}
            {/* <p>Total: {item.product.price * item.quantity} :-</p> */}
            <div className='flex mt-7'>
            <button className='text-blue-950 hover:text-blue-900' onClick={() => addToCart(item.product)}><FaPlusSquare size={27}/></button>
            <button className='text-blue-950 hover:text-blue-900' onClick={() => removeOneFromCart(item.product._id)}><FaMinusSquare size={27} /></button>
            <button className='text-blue-950 hover:text-red-700 ml-7' onClick={() => removeItem(item.product._id)}><FaTrashAlt size={25} /></button>
            </div>         
          </div>
        </div>
      ))
    )}
      <div className='ml-10 mr-10'>

        <p className='font-bold mt-2'>Total Price: {totalPrice} :-</p>
      
     
      {isCheckoutPage ? (
        <div>
          {/* <button className='bg-pink-300'>Place Order</button> */}
          <PlaceOrder />
        </div>
      ) : (
        cart.length > 0 && <Link to="/checkout" className=' block text-center bg-blue-950 text-white px-4 py-3 rounded p-8 mt-4 mb-4 hover:bg-blue-900 transition-colors'>Continue to Checkout</Link>
      )}
    
    </div>
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
