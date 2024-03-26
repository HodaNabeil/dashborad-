
import { useContext } from "react";
import { User } from "../../context/context";
import Sidebar from "./Sidebar"
import HeaderDashbord from "./headerdashborad/HeaderDashbord"


function Dashbord() {

  return (
    <div>
      <HeaderDashbord/>
      <Sidebar/>
    </div>
  )
}

export default Dashbord
