import {Outlet} from "react-router-dom"
import { Navbar } from "../../components/Navbar"

function PublicLayout() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <Outlet />
    </>
  )
}

export default PublicLayout