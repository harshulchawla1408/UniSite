// import './style.css';
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { userContext } from "../App";
// // import { Link } from "react-router-dom";
// function Header() {
//   const { udata, setudata } = useContext(userContext);
//   const navigate = useNavigate();
//   function onlogout() {
//     setudata(null);
//     sessionStorage.clear();
//     navigate("/home");
//   }
//   return (
//     <header className="main-header">
//       <div className="header-container">
//         <div className="header-top">
//           <div className="welcome-user">
//             {udata === null ? (
//               <h4 className="welcome-guest">
//                 <b>
//                   <span>Welcome Guest</span>
//                 </b>
//               </h4>
//             ) : (
//               <h4 className="welcome-user">
//                 <b>
//                   <span>Welcome {udata.firstname}</span>
//                 </b>
//               </h4>
//             )}
//           </div>
//           <div className="admin-login">
//             <Link to="/adminlogin">Campus Admin Login</Link>
//           </div>
//         </div>
//         <div className="header-main">
//           <div className="logo-section">
//             <img src="../images/logo1.png" alt="University Logo" className="logo logo1" />
//             {/* <img src="../images/logo2.jpg" alt="University Logo" className="logo logo2" /> */}
//           </div>
//           <nav className="main-nav">
//             <button className="mobile-menu" aria-label="Toggle Menu">
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//             <ul className="nav-links">
//               <li><Link to="/home">Home</Link></li>
//               <li><Link to="/about">About us</Link></li>
//               <li><Link to="/resources">Resources</Link></li>
//               <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSdrYYf-KpGe4BOZ3RmpxM0FxDZUr4-Mv-auSTbT2ybMbrIMHw/viewform?usp=dialog">Form</Link></li>
//               <li><Link to="/admin">Admin</Link></li> {/* Add this line */}
//               <li><Link to="/filter">Filter</Link></li>
//               <li><Link to="/register">Students Registration</Link></li>
//               <li><Link to="/login">Students Login</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { useContext } from "react";
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

  // Common Styles
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const topBarStyle = {
    backgroundColor: "#003366",
    color: "#fff",
    fontSize: "14px",
    padding: "8px 0"
  };

  const navBarStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "10px 0"
  };

  const logoStyle = {
    height: "60px"
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    alignItems: "center"
  };

  const navLinkStyle = {
    color: "#003366",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    transition: "color 0.3s"
  };

  const navLinkHoverStyle = {
    color: "#0055cc"
  };

  const mobileMenuStyle = {
    display: "none" // Aapka project mein abhi simple version hai, toh hide kar diya
  };

  return (
    <header>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div style={containerStyle}>
          <div>
            {udata === null ? (
              <span>Welcome Guest</span>
            ) : (
              <span>Welcome {udata.firstname}</span>
            )}
          </div>
          <div>
            <Link to="/adminlogin" style={{ color: "#ffffff", textDecoration: "underline" }}>
              Campus Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <div style={containerStyle}>
          <div className="logo-section">
            <Link to="/home">
              <img src="../images/logo1.png" alt="University Logo" style={logoStyle} />
            </Link>
          </div>

          <nav>
            <ul style={navLinksStyle}>
              <li><Link to="/home" style={navLinkStyle}>Home</Link></li>
              <li><Link to="/about" style={navLinkStyle}>About Us</Link></li>
              <li><Link to="/resources" style={navLinkStyle}>Resources</Link></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdrYYf-KpGe4BOZ3RmpxM0FxDZUr4-Mv-auSTbT2ybMbrIMHw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Form</a></li>
              <li><Link to="/admin" style={navLinkStyle}>Admin</Link></li>
              <li><Link to="/filter" style={navLinkStyle}>Filter</Link></li>
              <li><Link to="/register" style={navLinkStyle}>Student Registration</Link></li>
              <li><Link to="/login" style={navLinkStyle}>Student Login</Link></li>
            </ul>
          </nav>

          <button style={mobileMenuStyle} aria-label="Toggle Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
