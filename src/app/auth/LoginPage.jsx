import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import { Card } from "../../components/FormCard"



function LoginPage() {
  return (
    <>
      <Card>
     <LoginForm/>
    
    <p className="mt-3">Not a member yet? <Link className="text-blue-800 underline" to="/auth/register">Register here!</Link></p>
    
    </Card>
    </>
  )
}

export default LoginPage