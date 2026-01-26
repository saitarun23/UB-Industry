import React from "react";
import { ArrowRight } from "lucide-react";
import "../../styles/homeservices.css";
import assets from "../../assets/images";

const homeservices = [
  {
    title: "Printing",
    desc:
      "Working with a vertically integrated flexible packaging printer you receive responsive print schedules to help you increase your speed-to-market and meet tight deadlines.",
    image: assets.printing,
    stats: { label: "Multi-color", value: "Precision" }
  },
  {
    title: "Lamination",
    desc:
      "Expertise to assist you with your flexible packaging questions and unparalleled quality which works to maximize your brand's visual impact.",
    image: assets.lamination,
    stats: { label: "Barrier", value: "Protection" }
  },
  {
    title: "Slitting",
    desc:
      "Highly efficient web guided slitting machine with camera track sensors and high-speed auto tension control.",
    image: assets.sliting,
    stats: { label: "High-speed", value: "Accuracy" }
  },
  {
    title: "Pouching",
    desc:
      "We guide customers in all stages starting from initial design till the finish of the product.",
    image: assets.pouching,
    stats: { label: "Custom", value: "Solutions" }
  },
];

export default function HomeServices() {
  return (
    <section className="homeservices-section scroll-effect">
      <div className="homeservices-container">
        {/* HEADING */}
        <div className="homeservices-heading scroll-effect">
          <div className="heading-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Our Services</span>
          </div>
          <h2 className="heading-title">
            We collaborate with brands of every scale, delivering excellence without volume constraints.
          </h2>
          <p className="heading-subtitle">
            Comprehensive flexible packaging solutions from printing to finished product
          </p>
        </div>

        {/* GRID */}
        <div className="homeservices-grid scroll-effect">
          {homeservices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="homeservice-card" key={index}>
                {/* IMAGE WITH OVERLAY */}
                <div className="homeservice-img-wrapper">
                  <div className="homeservice-img">
                    <img src={service.image} alt={service.title} />
                    <div className="img-overlay"></div>
                  </div>
                  
                  {/* STATS BADGE */}
                  <div className="service-stats">
                    <span className="stats-label">{service.stats.label}</span>
                    <span className="stats-value">{service.stats.value}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="homeservice-content">
                  <div className="content-header">
                    <h3>{service.title}</h3>
                    <div className="title-underline"></div>
                  </div>
                  <p>{service.desc}</p>
                </div>

                {/* READ MORE BUTTON */}
                <div 
                  className="read-more" 
                  onClick={() => {
                    window.location.hash = "#services";
                  }}
                >
                  <span className="read-more-text">Explore More</span>
                  <ArrowRight className="read-more-icon" />
                  <div className="readmore-bg"></div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}