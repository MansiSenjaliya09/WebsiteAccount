import React from "react";
import "../OurProcess/OurProcess.css";
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png'

const OurProcess = () => {
  return (
    <section className="process">
      <h1>Our Process</h1>
      <div className="steps">
        <div className="step">
          <img src={p1} alt="process1" />
        </div>
        <div className="step">
          <img src={p2} alt="process2" />
        </div>
        <div className="step">
          <img src={p3} alt="process3" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
