import { useContext} from 'react';
import { CartContext } from '../../context/CartContext';


function CartPage() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className='mt-10'>
      <h2 className='mb-10 text-center text-xl'>Your Cart</h2>
      {cart.map((product, id) => (
        <div className=' h-52 w-auto border flex ml-10 mr-10' key={id}>
          <div className='mr-10'>
            <img className='h-48 w-auto object-cover 'src={product.images[0]} alt={product.name} />
            </div>
          <div className='flex flex-col justify-center'>
          <h2>{product.name}</h2>
          <p>{product.price} kr</p>
          <button onClick={() => addToCart(product)}>Add more</button>
            <button onClick={() => removeFromCart(product._id)}>Remove</button>

        </div>
        </div>
        
      ))}
    </div>
  );
}

export default CartPage;

