import React, { useState } from "react";
import { FaCog, FaPalette, FaLink, FaFilm, FaBox, FaIndustry, FaRuler, FaBullseye } from "react-icons/fa";
import assets from "../../assets/images";
import "../../styles/infrastructure.css";

const sections = [
  {
    id: 1,
    title: "Rotogravure Printing",
    icon: FaCog, // Good - mechanical printing process
    specs: [
      { label: "Equipment", value: "7 Rotomec presses from Italy" },
      { label: "Color Capability", value: "Up to 9 colours" },
      { label: "Control System", value: "Auto registration control" },
      { label: "Quality", value: "On-line video & defect detection" },
      { label: "Max Width", value: "1200 mm" },
    ],
    description: "Advanced rotogravure technology for premium packaging solutions",
    img: assets.infra1,
  },
  {
    id: 2,
    title: "CI Flexo Printing",
    icon: FaPalette, // Good - printing/color process
    specs: [
      { label: "Machines", value: "3 machines from F&K Germany" },
      { label: "Color Options", value: "Up to 10 colours" },
      { label: "Detection", value: "Defect detection system" },
      { label: "Width Range", value: "Up to 1250 mm" },
      { label: "Speed", value: "600 m/min" },
    ],
    description: "High-speed flexographic printing for diverse substrates",
    img: assets.infra2,
  },
  {
    id: 3,
    title: "Adhesive Lamination",
    icon: FaLink, // Good - bonding/linking layers
    specs: [
      { label: "Lamination Lines", value: "10 machines" },
      { label: "Technology", value: "Solvent & solvent-free options" },
      { label: "Web Width", value: "Up to 1320 mm" },
      { label: "Specialization", value: "High-barrier laminates" },
      { label: "Capacity", value: "High-volume production" },
    ],
    description: "Multi-layer adhesive bonding for enhanced barrier properties",
    img: assets.infra3,
  },
  {
    id: 4,
    title: "Extrusion lamination",
    icon: FaFilm, // Good - film production
    specs: [
      { label: "Film Lines", value: "11 blown film lines" },
      { label: "Layer Structure", value: "Up to 9-layer structures" },
      { label: "Monthly Capacity", value: "3000+ MT" },
      { label: "Thickness Range", value: "18–280 microns" },
      { label: "Production", value: "Multi-layer complexity" },
    ],
    description: "Custom polyethylene film production with advanced layering",
    img: assets.infra4,
  },
  {
    id: 5,
    title: "Pouching",
    icon: FaBox, // Better - represents packaging/pouches
    specs: [
      { label: "Facility", value: "In-house engraving capability" },
      { label: "Annual Output", value: "15000 cylinders per annum" },
      { label: "Expansion", value: "Ready for future capacity" },
      { label: "Process Control", value: "Tight consistency standards" },
      { label: "Quality", value: "Premium precision engraving" },
    ],
    description: "Precision cylinder engraving for rotogravure applications",
    img: assets.infra5,
  },
  {
    id: 6,
    title: "Polyethylene Extrusion",
    icon: FaIndustry, // Better - industrial manufacturing process
    specs: [
      { label: "Lines", value: "Multiple high-output lines" },
      { label: "Material", value: "LDPE, LLDPE, HDPE blends" },
      { label: "Layer Options", value: "Up to 7-layer structures" },
      { label: "Capacity", value: "High-volume PE film production" },
      { label: "Applications", value: "Packaging, lamination, industrial films" },
    ],
    description: "Advanced polyethylene extrusion for durable and versatile packaging films.",
    img: assets.infra6,
  },
  {
    id: 7,
    title: "CI Plate Making",
    icon: FaRuler, // Better - precision manufacturing/measurement
    specs: [
      { label: "Technology", value: "Digital photopolymer plate making" },
      { label: "Resolution", value: "Up to 5080 DPI" },
      { label: "Plate Types", value: "Solvent & thermal plates" },
      { label: "Precision", value: "High-accuracy dot reproduction" },
      { label: "Support", value: "Optimized for CI Flexo printing" },
    ],
    description: "High-precision photopolymer plate making that enhances CI Flexo print quality.",
    img: assets.infra7,
  },
  {
    id: 8,
    title: "Cylinder Engraving",
    icon: FaBullseye, // Good - precision/accuracy in engraving
    specs: [
      { label: "Engraving Units", value: "State-of-the-art electronic engraving" },
      { label: "Capacity", value: "15000+ cylinders annually" },
      { label: "Accuracy", value: "High-precision micro-cell engraving" },
      { label: "Consistency", value: "Auto-controlled engraving systems" },
      { label: "Quality", value: "Premium rotogravure cylinders" },
    ],
    description: "Electronic cylinder engraving for superior rotogravure print clarity and consistency.",
    img: assets.infra8,
  },
];

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSection = sections[activeTab];

  return (
    <main className="infra-page">
      {/* HERO */}
      <header className="infra-hero">
        <div className="infra-hero-bg">
          <img
            src={assets.infraHero || assets.infraRotogravure || assets.infra1}
            alt="Infrastructure overview"
          />
        </div>
        <div className="infra-hero-overlay" />
        <div className="infra-hero-content">
          <p className="infra-hero-kicker">Infrastructure</p>
          <h1 className="infra-hero-title">
            Precision equipment for every print run.
          </h1>
          <p className="infra-hero-subtitle">
            A future-ready plant with high-speed presses, laminators and film
            lines to support demanding packaging projects.
          </p>
        </div>
      </header>

      {/* ADVANCED TAB-BASED SECTION */}
      <section className="infra-main">
        {/* NAVIGATION TABS */}
        <div className="infra-tabs-container">
          <div className="infra-tabs-header">
            <h2 className="infra-tabs-title">Equipment & Capabilities</h2>
            <div className="infra-tabs-count">
              {activeTab + 1} / {sections.length}
            </div>
          </div>

          <div className="infra-tabs-nav">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  className={`infra-tab-btn ${index === activeTab ? "infra-tab-btn--active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="infra-tab-icon">
                    <IconComponent />
                  </span>
                  <span className="infra-tab-label">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT DISPLAY */}
        <div className="infra-content-wrapper">
          <div className="infra-content-left">
            <div className="infra-image-card">
              <img
                src={activeSection.img}
                alt={activeSection.title}
                className="infra-image"
              />
            </div>
          </div>

          <div className="infra-content-right">
            <div className="infra-spec-header">
              <h3 className="infra-spec-title">{activeSection.title}</h3>
              <p className="infra-spec-description">{activeSection.description}</p>
            </div>

            <div className="infra-specs-grid">
              {activeSection.specs.map((spec, index) => (
                <div key={index} className="infra-spec-item">
                  <div className="infra-spec-label">{spec.label}</div>
                  <div className="infra-spec-value">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="infra-cta">
        <div className="infra-cta-inner">
          <p className="infra-cta-kicker">Let&apos;s talk infrastructure</p>
          <h2 className="infra-cta-title">
            Ready for your next high-volume print or packaging project.
          </h2>
          <p className="infra-cta-text">
            From artwork to finished roll, our lines are built to deliver
            consistent quality, fast turnarounds, and strong brand presence on
            shelf.
          </p>
        </div>
      </section>
    </main>
  );
}
