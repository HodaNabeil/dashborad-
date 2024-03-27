import { Link, Outlet } from "react-router-dom"


import "../Dashborad/dashboard.css"

function Sidebar() {

  return (


      <div className="dashbord">

        <div className="btn-user" >
        <Link to="/dashboard/users" >Users</Link>
        <Link to="/dashboard/users/create" >Create new</Link>
        </div>
        <div className="container-users" >
          <Outlet/>
        </div>
  
    </div>
  )
}

export default Sidebar
