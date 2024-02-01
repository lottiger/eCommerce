import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Si4Chan } from "react-icons/si";
import { MdOutlineShoppingBag } from "react-icons/md";

import { AuthContext } from '../context/AuthContext'; // Uppdaterad import-sats
// import { CartContext } from '../context/CartContext';

// const {totalQuantity} = useContext(CartContext)
export const Navbar = () => {
  const { token, logout } = useContext(AuthContext); // Använd AuthContext



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
          {/* {totalQuantity > 0 && 
            <div className="absolute right-0 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full z-10">
              <p className="text-xs">{totalQuantity}</p>
            </div>
          } */}
        </NavLink>
      </li>
      </ul>
    </nav>
  );
};

// import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import { TiShoppingCart } from "react-icons/ti";

// export const Navbar = () => {
//   return (
//     <nav className='bg-blue-500 flex justify-between p-8'>
//         <Link to = '/'><h1> Logo </h1></Link>
//         <ul className='flex gap-4'>
//             <li><NavLink to= '/' className=''> Home </NavLink></li>
//             {/* <li><NavLink to= "product/:id" className=''> produktdetalj </NavLink></li> */}
//             {/* <li className=''>Category</li> */}
//             <li> <NavLink to= '/contact'className=''>Contact</NavLink></li>
//             <li> <NavLink to= '/auth/login' className=''>Login</NavLink></li>

//             <li> <NavLink to= '/cart'><TiShoppingCart color='white' size={32} /></NavLink></li>
//         </ul>

//     </nav>
//   )
// }


