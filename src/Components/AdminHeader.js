import './style.css';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";

function AdminHeader() {
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
          {udata && udata.usertype === 'admin' && (
            <span className="welcome-user-attractive">Welcome, Admin</span>
          )}
        </div>
        <div className="header-main">
          <div className="logo-section">
            <img src="../images/logo1.png" alt="University Logo" className="logo logo1" />
          </div>
          <nav className="main-nav">
            <button className="mobile-menu" aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/filter">Filter</Link></li>
              <li>{
                udata && udata.usertype === 'admin' ? (
                  <>
                    <li><button onClick={onlogout} className="logout-btn anim-btn">Logout</button></li>
                  </>
                ) : (
                  <li><Link to="/login" className="login-btn anim-btn">Login</Link></li>
                )
              }</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
