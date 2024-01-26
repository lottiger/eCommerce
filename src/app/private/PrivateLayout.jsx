import { Outlet } from "react-router-dom"


function PrivateLayout() {
  return (
    <div>
      <p>Grattis! Du är inloggad</p>
      <Outlet/>
      </div>
  )
}

export default PrivateLayout