import { Link } from "react-router-dom"

import "./headerDashbord.css"
function HeaderDashbord() {
  return (
    <div className="header-dashbord">
       <div >
        Store
       </div>
       <Link  className="btn" to="/">
        go to website
       </Link>
    </div>
  )
}

export default HeaderDashbord
