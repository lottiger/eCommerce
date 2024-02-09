import React from 'react'
import { Hero } from '../../components/Hero'
import { Products } from '../../components/Products'
import { Footer } from '../../components/Footer'



function HomePage() {

  return (
    <div className='bg-blue-950'>
     {/* <Hero /> */}
     <Products />
     <Footer />
    </div>
  )
}

export default HomePage