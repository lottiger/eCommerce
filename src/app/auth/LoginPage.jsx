import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import { Card } from "../../components/FormCard"
import { Navbar } from "../../components/Navbar"


function LoginPage() {
  return (
    <>
    
   
    <div className=''>
      
      <Card>
     <LoginForm/>
    
    <p className="mt-3">Not a member yet? <Link className="text-blue-800 underline" to="/auth/register">Register here!</Link></p>
    
    </Card>
    </div>
    </>
  )
}

export default LoginPage