import React from "react";
import assets from "../../assets/images"; // make sure these images exist
import "../../styles/infrastructure.css";

const sections = [
  {
    id: 1,
    title: "Rotogravure Printing",
    bullets: [
      "7 Rotomec presses from Italy",
      "Printing up to 9 colours",
      "Auto registration control",
      "On-line video & defect detection",
      "Printing width up to 1200 mm",
    ],
    img: assets.infraRotogravure || assets.infra1, // use your own keys
  },
  {
    id: 2,
    title: "CI Flexo Printing",
    bullets: [
      "3 printing machines from F&K Germany",
      "Options up to 10 colours",
      "Defect detection system",
      "Widths up to 1250 mm",
      "Speeds up to 600 m/min",
    ],
    img: assets.infraFlexo || assets.infra2,
  },
  {
    id: 3,
    title: "Adhesive Lamination",
    bullets: [
      "10 lamination machines",
      "Solvent & solvent-free options",
      "Up to 1320 mm web width",
      "Optimised for high-barrier laminates",
    ],
    img: assets.infraLamination || assets.infra3,
  },
  {
    id: 4,
    title: "Polyethylene Film",
    bullets: [
      "11 blown film lines",
      "Up to 9-layer structures",
      "Capacity over 3000 MT per month",
      "Thickness range 18–280 microns",
    ],
    img: assets.infraPolyFilm || assets.infra4,
  },
  {
    id: 5,
    title: "Cylinder Engraving",
    bullets: [
      "In-house cylinder engraving facility",
      "15000 cylinders per annum",
      "Ready for future capacity expansion",
      "Tight process control for consistency",
    ],
    img: assets.infraCylinder || assets.infra5,
  },
];

export default function Infrastructure() {
  return (
    <main className="infra-page">
      {/* HERO */}
      <header className="infra-hero">
        <div className="infra-hero-bg">
          {/* Use a wide infrastructure shot here */}
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

      {/* SECTIONS */}
      <section className="infra-main">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`infra-block ${
              index % 2 === 1 ? "infra-block--reverse" : ""
            }`}
          >
            <div className="infra-image-wrap scroll-effect">
              <div className="infra-image-card">
                <img
                  src={section.img}
                  alt={section.title}
                  className="infra-image"
                />
              </div>
            </div>

            <div className="infra-text">
              <h2 className="infra-section-title">{section.title}</h2>
              <ul className="infra-list">
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
