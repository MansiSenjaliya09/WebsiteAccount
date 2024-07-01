import React from "react";
import '../Services/Services.css';
import img1 from "../../assets/001-budgetservice2.png"
import img2 from "../../assets/002-searchservice1.png"
import img3 from "../../assets/003-revenueservice3.png"
import img4 from "../../assets/004-settingservice4.png"
import img5 from "../../assets/005-taxservice5.png"
import img6 from "../../assets/006-statisticsservice6.png"

const Services = () => {
  const servicesData = [
    {
      image: img1 ,
      title: "Audit & Account",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image:  img2,
      title: "Budget & Projections",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image:  img3,
      title: "Payroll & Bookkeeping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image:  img4,
      title: "Software Training & IT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image: img5 ,
      title: "Tax Planning & Returns",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      image:  img6,
      title: "Management Information",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <section id="services" className="services">
      <h1>Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
