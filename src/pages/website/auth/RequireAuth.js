import { useContext } from "react";
import {  UserContext } from "../../../context/context";
import { Navigate, Outlet} from "react-router-dom";

function RequireAuth() {
  const user = useContext(UserContext);

  console.log(user)

  return  UserContext.auth.dateDetails ?(
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
}

export default RequireAuth;
