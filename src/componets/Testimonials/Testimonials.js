import React from 'react';
import '../Testimonials/Testimonials.css';
import prologo from '../../assets/women-logo.jpg'

const testimonialsData = [
  {
    name: "Josh Brollins",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    name: "Josh Brollins",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  }
];

function Testimonials() {
  return (

    <div className="testimonials"  id='case-studies'>
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="testimonial-quote">“</div>
            <div className="testimonial-co ent">
              <img src={prologo} alt="Profile" className="testimonial-img" />
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
              </div>
            </div>
            <div className="testimonial-quote-right">”</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
