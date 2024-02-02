import { Outlet, useNavigate } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"



function PrivateLayout() {

  const {token} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!token) {
      navigate('/auth/login')
    }
  },[token])

  return (
    <div>
      
      <Navbar/>
      <Outlet/>
      
      
      </div>
  )
}

export default PrivateLayout