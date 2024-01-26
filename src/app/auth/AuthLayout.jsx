import { Outlet } from "react-router-dom"



function AuthLayout() {
  return (
   <>
   <div className="flex justify-center text-center items-center h-screen">
 <Outlet />
 </div>
   </>
  )
}

export default AuthLayout