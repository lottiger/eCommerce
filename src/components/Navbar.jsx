import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Si4Chan } from "react-icons/si"
import { MdOutlineShoppingBag } from "react-icons/md"

import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const { token, logout } = useContext(AuthContext)

  return (
    <nav className='bg-blue-950 text-white flex justify-between p-8'>
      <Link to = '/'><Si4Chan color='lightblue' size={40}/></Link>
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
        </NavLink>
      </li>
      </ul>
    </nav>
  )
}

