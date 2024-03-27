import { useContext } from "react";
import { UserContext } from "../../../context/context";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
  const user = useContext(UserContext);



  return Object.keys(user.auth).length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
}

export default RequireAuth;
