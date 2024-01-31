import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All products')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://js2-ecommerce-api.vercel.app/api/products')
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    };

    fetchProducts()
  }, []);

  const categoryColors = {
    'dammsugare': 'bg-red-200',
    'mobiltelefoner': 'bg-blue-200',
    'laptop': 'bg-green-200',
    'TV': 'bg-green-200',
  }

  const categories = ['All products', ...new Set(products.map((product) => product.category))]

  const filteredProducts = selectedCategory === 'All products'
    ? products
    : products.filter((product) => product.category === selectedCategory)

  return (
    <div>
    <div>
<select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

    </div>
    <div className='flex flex-wrap justify-center m-7'>
      
      {filteredProducts.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <div className='h-80 w-64 border rounded-md m-2 p-2 flex flex-col justify-between cursor-pointer hover:bg-gray-100'>
            <img className='' src={product.images[0]} alt={product.name} />
            <h3 className='font-bold'>{product.name}</h3>
            <p className='mt-2'>{product.price} kr</p>
            <div className='mt-2 flex items-center'>
              <div className={`w-1 h-4 mr-1 ${categoryColors[product.category]}`}></div>
              <p className='text-xs'>{product.category.toUpperCase()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}


// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// export const Products = () => {
//    const [products, setProducts] = useState([])
   

//    useEffect(() => { 
//     const fetchProducts = async () =>{
//         try{
//         const response = await fetch ('https://js2-ecommerce-api.vercel.app/api/products')
//         if (!response.ok) {
//             throw new Error('Something went wrong')
//         }
//         const data = await response.json()
//         setProducts(data)
//         }
//         catch (error) {
//             console.error ("Faild to fetch products:", error)
//         }
//     }
        
//     fetchProducts()
//     }, [])

//     const categoryColors = {
//         'dammsugare': 'bg-red-200',
//         'mobiltelefoner': 'bg-blue-200',
//         'laptop': 'bg-green-200',
//         'TV': 'bg-green-200',
//       };
      

//   return (
   
//    <div className='flex flex-wrap justify-center m-7'>
//         {
//             products.map(product =>(
//                 <Link to={`/product/${product._id}`} key={product._id}>
//                 <div className='h-80 w-64 border rounded-md m-2 p-2 flex  flex-col justify-between cursor-pointer hover:bg-gray-100'
//                  key={product._id}>
//                     <img className='' src={product.images[0]} alt={product.name} />
//                     <h3 className='font-bold'>{product.name}</h3>
//                     <p className='mt-2'>{product.price} kr</p>
                    
                 
//                 <div className='mt-2 flex items-center'>
//                 <div className={`w-1 h-4 mr-1 ${categoryColors[product.category]}`}></div>
//                 <p className='text-xs'>{product.category.toUpperCase()}</p>
//           </div>
//                 </div>
//                 </Link>
//             ))}
        
//     </div>
//     )}
