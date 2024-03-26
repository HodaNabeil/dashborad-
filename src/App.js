import { Route, Routes } from "react-router-dom";
import Home from "./pages/website/Home";
import Register from "./pages/website/auth/Register";
import Login from "./pages/website/auth/Login";
import Dashbord from "./pages/Dashborad/Dashbord";
import Updateuser from "./pages/Dashborad/users/Updateuser";
import Createuser from "./pages/Dashborad/users/Createuser";
import Users from "./pages/Dashborad/users/Users";
import RequireAuth from "./pages/website/auth/RequireAuth";





function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />

          <Route path="/login"  element={<Login/>}/>


        {/*  */}
        <Route element={<RequireAuth/>}>
        
          <Route path="/dashboard" element={<Dashbord/>} >
              <Route path="users" element={<Users/>} />
              <Route path="users/:id" element={<Updateuser/>} />
              <Route path="users/create" element={<Createuser/>} />
            </Route>
        </Route>
        
        </Routes>
    
      
    </div>
  );
}

export default App;
 