import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./app/public/RootLayout"
import PublicLayout from "./app/public/PublicLayout"
import HomePage from "./app/public/HomePage"
import AuthLayout from "./app/auth/AuthLayout"
import LoginPage from "./app/auth/LoginPage"
import RegisterPage from "./app/auth/RegisterPage"
import PrivateLayout from "./app/private/PrivateLayout"
import PrivatePage from "./app/private/PrivatePage"
import ProductDetailPage from "./app/public/ProductDetailPage"
import ContactPage from "./app/public/ContactPage"
import CartPage from "./app/public/CartPage"
import CheckoutPage from "./app/public/CheckoutPage"


export const router = createBrowserRouter(
  
  [
  {
    path: "/",
    element: (
     
      <RootLayout />
   
    
    ),
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: "product/:id",
            element: <ProductDetailPage />
          },
          {
            path: "contact",
            element: <ContactPage />  
          },
          {
            path: "cart",
            element: <CartPage /> 
          },
          {
            path: "checkout",
            element: <CheckoutPage />
          }
        ]
      },



      {
        path: "auth",
        element: 
        
        <AuthLayout />
        ,
        children: [
          {
            path: "login",
            element: <LoginPage />
          },
          {
            path: "register",
            element: <RegisterPage />
          }
        ]
      },



      {
        path: "private",
        element:
          <PrivateLayout />
           ,
        children: [
          {
            index: true,
            element: <PrivatePage />
          }
        ]
      }
    ]
  }
])