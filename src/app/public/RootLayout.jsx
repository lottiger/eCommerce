import { Outlet } from "react-router-dom"

// import AuthContextProvider from "../contexts/authContext"


function RootLayout() {

   return (
     <>
       {/* <AuthContextProvider> */}
        <Outlet />
        {/* <Navbar /> */}
      {/* </AuthContextProvider> */}
     </>
   )
}
export default RootLayout