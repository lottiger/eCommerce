import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext, useCart } from '../../context/CartContext'

function ProductDetailPage() {

  


  const { id } = useParams()

  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try{
        console.log(id)
      const response = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      setProduct(data)
      setLoading(false)

      } catch (error) {
        console.error ("Faild to fetch product:", error)
      }
    }
    fetchProduct()
  }, [])

  const handleClick = () => {
    addToCart(product)
  }

  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  if(!product) return null




  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + product.images.length) % product.images.length)
  }

  
  
  return (
    <div className='ml-28 mr-28 mt-10'>
    {product && (
      <div className='relative flex justify-center'>
        <img className=' h-96 w-auto object-cover' src={product.images[currentImageIndex]} alt={`Product ${currentImageIndex}`} />
        <button onClick={prevImage} className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2'>
          Prev
        </button>
        <button onClick={nextImage} className='absolute right-0 top-1/2 transform -translate-y-1/2  p-2'>
          Next
        </button>
      </div>
    )}
    <h2 className='font-bold mb-2 mt-2'>{product.name}</h2>
    <p className='text-sm mb-2'>{product.description}</p>
    <p className='text-sm'>{product.price} kr</p>
  
    <button className='bg-emerald-500 px-3 py-1 rounded mt-4 mb-4 hover:bg-emerald-600 transition-colors'
    onClick={handleClick}>Add to Cart</button>
  </div>
  )
}

export default ProductDetailPage