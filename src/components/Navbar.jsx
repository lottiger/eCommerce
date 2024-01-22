// import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-8'>
        <Link to = '/'><h1> Logo </h1></Link>
        <ul className='flex gap-4'>
            <li><NavLink to= '/' className=''> Home </NavLink></li>
            <li><NavLink to= "product/:id" className=''> produktdetalj </NavLink></li>
            <li className=''>Category</li>
            <li> <NavLink to= '/contact'className=''>Contact</NavLink></li>
            <li> <NavLink to= "/auth/login" className=''>Login</NavLink></li>

            <li> <NavLink to= '/shoppingcart' className=''>Cart</NavLink></li>
        </ul>

    </nav>
  )
}
