import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"



function PrivateLayout() {
  return (
    <div>
      
      <Navbar/>
      <Outlet/>
      
      
      </div>
  )
}

export default PrivateLayout