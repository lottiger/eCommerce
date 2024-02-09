import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { TbBrandYoutubeFilled } from "react-icons/tb"

export const Footer = () => {
  return (
    <div className='bg-blue-950 border-t h-32 border-slate-500 text-white flex flex-col sm:flex-row items-center justify-between p-3 px-9'>
  <p>© 2024 E-commerce</p>
  <p>Integritetspolicy</p>
  <p>Cookiepolicy</p>
  <div className='text-xl flex gap-3 cursor-pointer'>
    <FaFacebookSquare />
    <FaInstagram />
    <TbBrandYoutubeFilled />
  </div>
</div>
    
  )
}
