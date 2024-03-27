import { useContext } from "react";
import { UserContext } from "../../../context/Usecontext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const user = useContext(UserContext);

  const location =useLocation()


  return Object.keys(user.auth).length > 0 ? (
    <Outlet />
  ) : (
    <Navigate  state={{from:location}} replace to={"/login"} />
  );
}

export default RequireAuth;
