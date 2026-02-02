import React, { useEffect, useState } from "react";
import assets from "../images";
import "../../styles/splashscreen.css";

const SplashScreen = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeInLogo, setFadeInLogo] = useState(false);
  const [showCompanyName, setShowCompanyName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [blurring, setBlurring] = useState(false);

  const services = [
    {
      title: "PRINT",
      image: assets.printing,
      description: "High-Quality Printing"
    },
    {
      title: "LAMINATE",
      image: assets.lamination,
      description: "Premium Lamination"
    },
    {
      title: "PACK",
      image: assets.pouching,
      description: "Expert Packaging"
    }
  ];

  useEffect(() => {
    // Prevent scrolling during splash screen
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Animation timeline - Phase 1: Logo and Company Info
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
      setTimeout(() => setFadeInLogo(true), 50);
    }, 300);

    const companyNameTimer = setTimeout(() => {
      setShowCompanyName(true);
    }, 1200);

    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1800);

    // Phase 2: Show Services (start showing first service)
    const servicesTimer = setTimeout(() => {
      setShowServices(true);
      setActiveServiceIndex(0);
    }, 3500);

    // Transition through services one by one
    const service1Timer = setTimeout(() => {
      setActiveServiceIndex(1);
    }, 5000); // Show LAMINATE at 5s

    const service2Timer = setTimeout(() => {
      setActiveServiceIndex(2);
    }, 6500); // Show PACK at 6.5s

    // Start blur and transition to main site
    const blurTimer = setTimeout(() => {
      setBlurring(true);
    }, 8000);

    const finishTimer = setTimeout(() => {
      document.body.style.overflow = "auto";
      onFinish?.();
    }, 9000);

    // Cleanup
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(companyNameTimer);
      clearTimeout(taglineTimer);
      clearTimeout(servicesTimer);
      clearTimeout(service1Timer);
      clearTimeout(service2Timer);
      clearTimeout(blurTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${blurring ? "blurring" : ""}`}>
      {/* Phase 1: Company Introduction */}
      <div className={`splash-container ${showServices ? "fade-out-container" : ""}`}>
        {/* Logo */}
        {showLogo && (
          <div className={`logo-container ${fadeInLogo ? "fade-in" : ""}`}>
            <img
              src={assets.logo}
              alt="Urmila Bhupathiraju Industries Logo"
              className="company-logo"
            />
          </div>
        )}

        {/* Company Name */}
        <div className={`company-name ${showCompanyName ? "slide-up" : ""}`}>
          <div className="name-line">Urmila Bhupathiraju</div>
          <div className="name-line emphasis">Industries</div>
        </div>

        {/* Main Tagline */}
        <div className={`tagline ${showTagline ? "fade-in-text" : ""}`}>
          Flexible Roto Print & Pack
        </div>

        {/* Decorative Element */}
        <div className={`decorative-line ${showTagline ? "expand" : ""}`}></div>
      </div>

      {/* Phase 2: Services Showcase - Full Screen Transitions */}
      {showServices && (
        <div className="splash-services-fullscreen">
          {services.map((service, index) => (
            <div
              key={index}
              className={`splash-service-slide ${
                index === activeServiceIndex ? "active" : ""
              } ${index < activeServiceIndex ? "exited" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${service.image})`,
              }}
            >
              <div className="splash-service-content">
                <h2 className="splash-service-title">{service.title}</h2>
                <div className="splash-service-divider"></div>
                <p className="splash-service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplashScreen;