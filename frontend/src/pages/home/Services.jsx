import React from "react";
import "../../styles/services.css";
import assets from "../../assets/images";

const services = [
  {
    title: "Printing",
    desc:
      "Working with a vertically integrated flexible packaging printer you receive responsive print schedules to help you increase your speed-to-market and meet tight deadlines.",
    image: assets.printing,
  },
  {
    title: "Lamination",
    desc:
      "Expertise to assist you with your flexible packaging questions and unparalleled quality which works to maximize your brand’s visual impact.",
    image: assets.lamination,
  },
  {
    title: "Slitting",
    desc:
      "Highly efficient web guided slitting machine with camera track sensors and high-speed auto tension control.",
    image: assets.sliting,
  },
  {
    title: "Pouching",
    desc:
      "We guide customers in all stages starting from initial design till the finish of the product.",
    image: assets.pouching,
  },
];

export default function Services() {
  return (
    <section className="services-section scroll-effect">
      <div className="services-heading scroll-effect">
        <span>Our Services</span>
        <h2>We collaborate with brands of every scale, delivering excellence without volume constraints.</h2>
        </div>

      <div className="services-grid scroll-effect">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            
            <div className="service-img">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>

            <div className="read-more">
              <span>Explore More →</span>
              <div className="readmore-bg"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
