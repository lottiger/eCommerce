// import { useContext} from 'react';
import { useCart} from '../../context/CartContext';


export const CartPage = () => {
  const { cart, addToCart, removeOneFromCart, totalPrice, totalQuantity, removeItem } = useCart()

  // const removeOneFromCart = () => {
  //   // dispatch(removeOne(item.product._id))
  //   removeOne(item.product._id)
  // }

  // const addOneToCart = () => {
  //   // dispatch(addToCart(item.product))
  //   addToCart(item.product)
  // }

  // const deleteProduct = () => {
  //   // dispatch(removeItem(item.product._id))
  //   removeItem(item.product._id)
  // }




  return (
    <div className='mt-10'>
      <h2 className='mb-10 text-center text-xl'>Your Cart</h2>
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
      <div>
        <button>Continue to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
