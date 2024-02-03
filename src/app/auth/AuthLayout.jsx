import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"



function AuthLayout() {
  return (
   <>
   <Navbar/>
   <div className="flex justify-center text-center items-center h-screen">
    <Outlet />
 </div>
   </>
  )
}

export default AuthLayout