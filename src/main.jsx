import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Router'
import AuthContextProvider from './context/AuthContext'
import CartContextProvider from './context/CartContext'
import {UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
    </CartContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
