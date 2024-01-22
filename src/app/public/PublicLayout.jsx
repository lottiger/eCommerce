import {Outlet} from "react-router-dom"
import { Navbar } from "../../components/Navbar"

function PublicLayout() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <Outlet />
    </div>
  )
}

export default PublicLayout