
import React, { useState, useEffect } from 'react'
import { categoryTags } from './CatagoryTags'
import { Link } from 'react-router-dom'

export const Products = () => {
   const [products, setProducts] = useState([])
   

   useEffect(() => { 
    const fetchProducts = async () =>{
        try{
        const response = await fetch ('https://js2-ecommerce-api.vercel.app/api/products')
        if (!response.ok) {
            throw new Error('Something went wrong')
        }
        const data = await response.json()
        setProducts(data)
        }
        catch (error) {
            console.error ("Faild to fetch products:", error)
        }
    }
    fetchProducts()
    }, [])



  return (
   
   <div className='flex flex-wrap justify-center m-7'>
        {
            products.map(product =>(
                <Link to={`/product/${product._id}`} key={product._id}>
                <div className='h-80 w-64 border rounded-md m-2 p-2 flex  flex-col justify-between cursor-pointer hover:bg-gray-100'
                 key={product._id}>
                    <img className='' src={product.images[0]} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className='mt-2'>{product.price} kr</p>
                    
                 
                <div className='mt-2 flex items-center'>
                
                </div>
                </div>
                </Link>
            ))}
        
    </div>
    )}
