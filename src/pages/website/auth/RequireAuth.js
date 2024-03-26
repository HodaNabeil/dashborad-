import { useContext } from "react";
import { User } from "../../../context/context";
import { Navigate, Outlet} from "react-router-dom";

function RequireAuth() {
  const user = useContext(User);

  return  user.auth.dateDetails ?(
    <Outlet />

  ) : (
    <Navigate to={"/login"} />
  );
}

export default RequireAuth;
