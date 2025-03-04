import './style.css';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";

function Header() {
  const { udata, setudata } = useContext(userContext);
  const navigate = useNavigate();
  function onlogout() {
    setudata(null);
    sessionStorage.clear();
    navigate("/home");
  }
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-top">
          <div className="welcome-user">
          {udata === null ? (
                <h4 className="welcome-guest">
                  <b>
                    <span>Welcome Guest</span>
                  </b>
                </h4>
              ) : (
                <h4 className="welcome-user">
                  <b>
                    <span>Welcome {udata.name}</span>
                  </b>
                </h4>
              )}
            </div>
          <div className="admin-login">
            <Link to="/adminlogin">Campus Admin Login</Link>
          </div>
        </div>
        <div className="header-main">
          <div className="logo-section">
            <img src="../images/logo2.jpg" alt="University Logo" className="logo logo1" />
            {/* <img src="../images/logo2.jpg" alt="University Logo" className="logo logo2" /> */}
          </div>
          <nav className="main-nav">
            <button className="mobile-menu" aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/placements">Placements</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/register">Students Registration</Link></li>
              <li><Link to="/login">Students Login</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;