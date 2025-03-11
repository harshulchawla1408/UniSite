import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className="footer-icon" /> Punjabi University, Patiala</p>
          <p><FaPhone className="footer-icon" /> +91-9780383937</p>
          <p><FaEnvelope className="footer-icon" /> placement@pbiuni.edu.in</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/punjabiuniversity.placement/"><FaFacebook className="social-icon" /></a>
            <a href="https://x.com/pbiunipatiala?lang=en"><FaTwitter className="social-icon" /></a>
            <a href="https://www.linkedin.com/in/placement-cell-punjabi-university-81a5b763/"><FaLinkedin className="social-icon" /></a>
            <a href="https://www.instagram.com/placement_cell_pupatiala/"><FaInstagram className="social-icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Punjabi University Placement Cell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;