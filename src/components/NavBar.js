import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

/* activePage  | changePage-call-back */
function NavBar() {
  const location = useLocation();

  return (

    <div className="header">
      <div className="row">
        <div className="col-12">
        <nav className="navbar">
              <div className="nav-item">
                <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                  Home
                </Link>
              </div>  
              <div className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                  Portfolio
                </Link>
              </div>         
              <div className="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                  Contact
                </Link>
              </div>                  
          </nav>
          <hr></hr>
        </div>
      </div>
    </div>

  );
}

export default NavBar;