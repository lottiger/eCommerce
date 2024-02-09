import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Si4Chan } from "react-icons/si"
import { MdOutlineShoppingBag } from "react-icons/md"
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'



export const Navbar = () => {
  const { token, logout } = useContext(AuthContext)
  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className='bg-blue-950 text-white flex justify-between p-8 border-b border-slate-500'>
      <Link to = '/'><Si4Chan color='white' size={40}/></Link>
      <ul className='flex gap-4'>
        <li><NavLink to= '/' className=''> Home </NavLink></li>
        <li><NavLink to= '/contact' className=''>Contact</NavLink></li>
        {token ? (
          <li onClick={logout}><NavLink to= '/' className=''>Logout</NavLink></li>
        ) : (
          <li><NavLink to= '/auth/login'>Login</NavLink></li>
        )}
        <li className='relative'>
        <NavLink to= '/cart'>
          <MdOutlineShoppingBag color='white' size={30} />
         {totalQuantity > 0 && <span className='absolute top-2 left-1 text-white text-xs w-5 h-5 flex items-center justify-center'>{totalQuantity}</span>}
        </NavLink>
      </li>
      </ul>
    </nav>
  )
}

