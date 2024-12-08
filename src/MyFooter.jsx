import React from 'react';
import './Footer.css';
import {FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaChevronUp, FaChevronDown } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5>About Us</h5>
        <p>Information about us.</p>
      </div>
      <div className="footer-section">
        <h5>Social Links</h5>
        <ul>
          <li><a href="https://www.instagram.com/pratik.dhote.104/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://www.facebook.com/pratik.dhote.104/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Contact Us</h5>
        <p>123 Main St, Anytown, USA</p>
        <p>Email: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
