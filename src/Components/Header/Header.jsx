import { Link } from "react-router-dom";

import "./header.css";

function Header() {

  return (
    <header className="header">
      <h3 className="logo">Home</h3>
      <nav>
        <ul className="nav-links">
      
  
          <li >
            <Link  className="btn" to="/register">Register</Link>
          </li>
          <li >
            <Link  className="btn" to="/login">Login</Link>
          </li>
          <li >
            <Link  className="btn" to="/dashboard">Dashborad</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
