import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All products')

  useEffect(() => {
    const fetchProducts = async () => {
      
      try {
        const response = await fetch('http://localhost:4000/api/products/')
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }

    fetchProducts()
  }, [])

  const categoryColors = {
    'dammsugare': 'bg-red-600',
    'mobiltelefoner': 'bg-purple-600',
    'laptop': 'bg-green-600',
    'TV': 'bg-yellow-600',
  }

  const categories = ['All products', ...new Set(products.map((product) => product.category))]

  const filteredProducts = selectedCategory === 'All products'
    ? products
    : products.filter((product) => product.category === selectedCategory)

  return (
    <div className='bg-blue-950'>
    <div className=' flex justify-center'>
<select className='w-1/2 mt-8 bg-blue-950 text-white cursor-pointer' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option  key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

    </div>
    <div className='flex flex-wrap justify-center m-8 gap-8'>
      
      {filteredProducts.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <div className='h-72 w-64 rounded-md p-3 flex flex-col justify-between cursor-pointer bg-white hover:scale-105 transition-transform'>
            <img className='' src={product.images[0]} alt={product.name} />
            <h3 className='font-bold'>{product.name}</h3>
            <p className='font-bold'>{product.price} :-</p>
            <div className='mt-2 flex items-center'>
              <div className={`w-1 h-4 mr-1 ${categoryColors[product.category]}`}></div>
              <p className='text-xs font-semibold'>{product.category.toUpperCase()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}


