import React from "react";
import "../../componets/Header/Header.css";
import logo from "../../assets/logo.png"; 
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about-us">About Us</a>
          <a href="#blogs">Blogs</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#contact-us" className="contact-btn">
            Contact Us
          </a>
        </div>
      </nav>
      <div className='main-hero'>
      <div className="header-content">
        <h1>
          HOW MUCH <br /> COULD YOU SAVE?
        </h1>
        <p>
          Answer the questions below to get a fixed price <br /> quotation for
          us to take your accountancy hassles away <br /> from you.
        </p>
        <div className="Qans">
          <div className="question">
            Is your turnover expected to be more than £85k?
          </div>
          <div className="buttons">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
        <h2 className="note">Takes less than 30 seconds</h2>
      </div>
      </div>
    </header>
  );
};

export default Header;
