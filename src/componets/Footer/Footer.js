
import React from 'react';
import '../../componets/Footer/Footer.css'; 
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="tagline">Tagline will go here. Lorem ipsum d oler sit amet...</p>
          <a href="mailto:user@email.com" className="email">user@email.com</a>
        </div>
        <div className='footer-main'>
        <div className="footer-middle">
          <p className="address-title">Address</p>
          <p>101 Office No,</p>
          <p>Road name,</p>
          <p>India</p>
        </div>
        <div className="footer-right">
          <p className="contacts-title">Contacts</p>
          <a href="mailto:user@email.com">user@email.com</a>
          <p>(276) 341-7900</p>
        </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo} alt="Logo" className="footer-logo" /> 
        <nav className="footer-nav">
          <a href="#about-us">About</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact-us">Contact</a>
          <a href="#services">Services</a>
        </nav>
        <p className="copyright">© 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
