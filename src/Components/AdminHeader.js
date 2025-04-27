// import './style.css';
// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { userContext } from "../App";

// function AdminHeader() {
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
//           {udata && udata.usertype === 'admin' && (
//             <span className="welcome-user-attractive">Welcome, Admin</span>
//           )}
//         </div>
//         <div className="header-main">
//           <div className="logo-section">
//             <img src="../images/logo1.png" alt="University Logo" className="logo logo1" />
//           </div>
//           <nav className="main-nav">
//             <button className="mobile-menu" aria-label="Toggle Menu">
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//             <ul className="nav-links">
//               <li><Link to="/home">Home</Link></li>
//               <li><Link to="/admin">Admin</Link></li>
//               <li><Link to="/filter">Filter</Link></li>
//               <li>{
//                 udata && udata.usertype === 'admin' ? (
//                   <>
//                     <li><button onClick={onlogout} className="logout-btn anim-btn">Logout</button></li>
//                   </>
//                 ) : (
//                   <li><Link to="/login" className="login-btn anim-btn">Login</Link></li>
//                 )
//               }</li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default AdminHeader;
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

  const headerStyle = {
    background: 'linear-gradient(90deg, #003366 0%, #0055aa 100%)',
    color: 'white',
    padding: '12px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    height: '50px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 👈 Added white translucent background
    padding: '6px', // 👈 Added padding to give space
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: '500',
    position: 'relative',
    padding: '6px 12px',
    borderRadius: '8px',
    transition: 'background 0.3s, transform 0.2s',
  };

  const buttonStyle = {
    background: 'white',
    color: '#003366',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s, color 0.3s, transform 0.2s',
  };

  const welcomeTextStyle = {
    fontSize: '15px',
    fontWeight: '600',
    marginLeft: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '6px 12px',
    borderRadius: '20px',
    letterSpacing: '0.5px',
  };

  return (
    <header>
      {/* Navigation */}
      <div style={headerStyle}>
        {/* Left - Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="../images/logo1.png" alt="University Logo" style={logoStyle} />
          {/* Show Welcome only if logged in */}
          {udata && udata.usertype === 'admin' && (
            <div style={welcomeTextStyle}>
              Welcome, Admin
            </div>
          )}
        </div>

        {/* Right - Navigation Links */}
        <nav style={navStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/admin" style={linkStyle}>Admin</Link>
          <Link to="/filter" style={linkStyle}>Filter</Link>

          {udata && udata.usertype === 'admin' ? (
            <button onClick={onlogout} style={buttonStyle}>Logout</button>
          ) : (
            <Link to="/login">
              <button style={buttonStyle}>Login</button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default AdminHeader;

