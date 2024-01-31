import React from 'react'
import { Hero } from '../../components/Hero'
import { Products } from '../../components/Products'
// import { useAuth } from '../../context/AuthContext'


function HomePage() {
  // const {token} = useAuth()
  // console.log(token)
  return (
    <div>
     <Hero />
     <Products />
    </div>
  )
}

export default HomePage