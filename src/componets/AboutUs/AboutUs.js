import React from 'react';
import "../AboutUs/AboutUs.css"
import aboutLogo from "../../assets/about-logo.png"

function AboutUs() {
  return (
    <div className="about-us" id='about-us'>
      <div className='main'>
      <h2>About us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy...</p>
      <button className="about-button">Learn More</button>
      </div>
      <img src={aboutLogo} alt="logo-name" height="500px" width="900px" className="aboutlogo"/>
    </div>
  );
}

export default AboutUs;
