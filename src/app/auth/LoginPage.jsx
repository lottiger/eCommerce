import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"
import { Card } from "../../components/FormCard"


function LoginPage() {
  return (
    <div className="">
      <Card>
     <LoginForm/>
    
    <p className="mt-3">Not a member yet? <Link className="text-blue-600 underline" to="/auth/register">Register here!</Link></p>
    
    </Card>
    </div>
  )
}

export default LoginPage