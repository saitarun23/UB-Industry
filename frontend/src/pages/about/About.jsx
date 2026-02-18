import React from "react";
import { FaBox, FaCheck, FaBolt, FaBullseye } from "react-icons/fa6";
import assets from "../../assets/images";
import "../../styles/about.css";

const JOURNEY = [
  {
    id: "01",
    label: "01",
    title: "The Vision Begins",
    desc: "Founded in 2025, Urmila BhupathiRaju Industries was born from a passion to bring quality packaging solutions to businesses of all sizes across the region.",
  },
  {
    id: "02",
    label: "02",
    title: "Building the Foundation",
    desc: "We invested in the best machinery, sourced high-grade materials, and assembled a skilled team dedicated to excellence.",
  },
  {
    id: "03",
    label: "03",
    title: "Earning Customer Trust",
    desc: "Within our first months, we built strong relationships with clients by consistently delivering quality work on time.",
  },
  {
    id: "04",
    label: "04",
    title: "Expanding Our Reach",
    desc: "Our client base grew steadily—serving businesses from small startups to large-scale enterprises across the region.",
  },
  {
    id: "05",
    label: "05",
    title: "The Road Ahead",
    desc: "Today, we look ahead with confidence. Our goal is to keep innovating and being the most reliable packaging partner.",
  },
];

/*
  SVG canvas  : 1200 × 1200
  Center      : (600, 600)
  Orbit radius: 420px
  Image radius: 185px
  Card radius : 145px

  5 cards at 72° intervals starting from -90° (top):
    0: -90°  → (600, 180)
    1: -18°  → (999, 430)
    2:  54°  → (847, 940)  -- corrected
    3: 126°  → (353, 940)  -- corrected
    4: 198°  → (201, 430)
*/
const SVG_C = 600;
const ORBIT_R = 420;
const IMG_R = 185;
const CARD_R = 120;

const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);
const CARDS = angles.map((a) => ({
  cx: Math.round(SVG_C + ORBIT_R * Math.cos(a)),
  cy: Math.round(SVG_C + ORBIT_R * Math.sin(a)),
}));

function linePoints(card) {
  const dx = card.cx - SVG_C;
  const dy = card.cy - SVG_C;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / dist;
  const uy = dy / dist;
  return {
    x1: SVG_C + ux * IMG_R,
    y1: SVG_C + uy * IMG_R,
    x2: card.cx - ux * CARD_R,
    y2: card.cy - uy * CARD_R,
  };
}

function wrapText(text, maxLen) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (test.length <= maxLen) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function About() {
  return (
    <main className="about-page" id="about">

      {/* HERO */}
      <header className="about-hero">
        <div className="about-hero-bg">
          <img src={assets.aboutHero} alt="Team at work" />
        </div>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </header>

      {/* WELCOME */}
      <section className="about-welcome">
        <div className="about-welcome-content">
          <h2 className="about-welcome-title">Welcome to Urmila Bhupathiraju Industries</h2>
          <p className="about-welcome-subtitle">Excellence in Flexible Printing &amp; Packaging Solutions Since Day One</p>
        </div>
      </section>

      <section className="about-main">

        {/* WHO WE ARE */}
        <section className="about-company-section">
          <div className="about-company-content">
            <div className="about-company-header">
              <h2 className="about-section-title">Who We Are</h2>
              <div className="about-title-underline"></div>
            </div>
            <div className="about-company-grid">
              <div className="about-company-image-container">
                <div className="about-company-image-wrap">
                  <img src={assets.aboutwe} alt="Manufacturing facility" className="about-company-image" />
                </div>
              </div>
              <div className="about-company-text">
                <p className="about-intro-text">
                  <strong>Urmila Bhupathiraju Industries</strong> is a flexible printing and packaging company
                  based in Visakhapatnam, India. With a strong foundation in high-quality flexible materials,
                  we are committed to delivering reliable, high-performance printing solutions.
                </p>
                <div className="about-features-grid">
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBox /></div>
                    <h4>Advanced Infrastructure</h4>
                    <p>Equipped with cutting-edge presses, laminators and finishing lines to handle complex multilayer structures.</p>
                  </div>
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaCheck /></div>
                    <h4>Quality Assurance</h4>
                    <p>Strict hygiene, safety and compliance protocols ensure consistent performance and brand presentation.</p>
                  </div>
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBolt /></div>
                    <h4>On-Time Delivery</h4>
                    <p>Wide substrate mix and print volume capacity with guaranteed consistency and timely supply.</p>
                  </div>
                  <div className="about-feature-item">
                    <div className="feature-icon"><FaBullseye /></div>
                    <h4>Technical Excellence</h4>
                    <p>Every reel follows rigorous quality control to ensure functional performance meets expectations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR */}
        <section className="about-director-section">
          <div className="about-director-container">
            <div className="about-director-header">
              <h2 className="about-section-title">Leadership</h2>
              <div className="about-title-underline"></div>
            </div>
            <div className="about-director-content">
              <div className="about-director-left">
                <div className="about-director-avatar-wrap">
                  <img src={assets.aboutDirector} alt="Managing Director" className="about-director-avatar" />
                  <div className="avatar-ring"></div>
                </div>
                <h3 className="about-director-name">Urmila Bhupathiraju</h3>
                <p className="about-director-role">Managing Director</p>
              </div>
              <div className="about-director-right">
                <div className="director-quote">
                  <span className="quote-mark">"</span>
                  <p>Excellence is not just a goal—it's our standard. Every print, every package, every delivery reflects our commitment to perfection.</p>
                </div>
                <div className="director-bio">
                  <p>Under the leadership of Urmila Bhupathiraju, the company has emerged as a powerhouse of innovation in the flexible printing industry. Her tenure has been marked by a transition toward smarter manufacturing and a relentless pursuit of perfection.</p>
                  <p>Urmila's approach is deeply rooted in hands-on experience. She is known for her involvement in the technical aspects of the production floor, ensuring that the precision of every print run aligns with the client's brand identity.</p>
                  <p>Customer satisfaction is the primary compass by which Urmila steers the organization. Her consultative service model focuses on understanding shelf-life and durability needs, resulting in industry-leading client retention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="about-history-section">
          <div className="about-history-container">
            <div className="about-history-header">
              <h2 className="about-section-title">Our Journey</h2>
              <div className="about-title-underline"></div>
              <p className="about-history-intro">
                 From the beginning, our focus has been simple understand what
                 each customer truly needs, and build packaging that supports
                 their business for the long term.
              </p>
            </div>

            {/* SVG ORBITAL — shows on ALL screen sizes, scales via viewBox */}
            <div className="journey-svg-wrapper">
              <svg
                className="journey-svg"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="cardGrad" cx="38%" cy="28%" r="68%">
                    <stop offset="0%" stopColor="#303030" />
                    <stop offset="100%" stopColor="#151515" />
                  </radialGradient>

                  <clipPath id="imgClip">
                    <circle cx={SVG_C} cy={SVG_C} r={IMG_R} />
                  </clipPath>

                  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Spin + glow keyframes inside SVG */}
                <style>{`
                  .orbit-spin { animation: orbitSpin 80s linear infinite; transform-origin: 600px 600px; }
                  .glow-ring   { }
                  @keyframes orbitSpin  { to { transform: rotate(360deg); } }
                `}</style>

                {/* Outer dashed orbit ring */}
                <circle
                  className="orbit-spin"
                  cx={SVG_C} cy={SVG_C} r={ORBIT_R + 30}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                  strokeDasharray="10 14"
                />

                {/* Inner orbit ring */}
                {/* <circle
                  cx={SVG_C} cy={SVG_C} r={ORBIT_R - 30}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                /> */}

                {/* Connector lines + endpoint dots */}
                {CARDS.map((card, i) => {
                  const p = linePoints(card);
                  const midX = (p.x1 + p.x2) / 2;
                  const midY = (p.y1 + p.y2) / 2;
                  return (
                    <g key={`conn-${i}`}>
                      {/* Glow blur line */}
                      <line
                        x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2}
                        stroke="rgba(255,255,255,0.07)"
                        strokeWidth="7"
                      />
                      {/* Dashed connector */}
                      <line
                        x1={p.x1} y1={p.y1} x2={p.x2} y2={p.y2}
                        stroke="rgba(255,255,255,0.32)"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                      />
                      {/* Endpoint dots */}
                      <circle cx={p.x1} cy={p.y1} r="7" fill="rgba(255,255,255,0.65)" />
                      <circle cx={p.x2} cy={p.y2} r="7" fill="rgba(255,255,255,0.65)" />
                      {/* Mid dot */}
                      <circle cx={midX} cy={midY} r="4" fill="rgba(255,255,255,0.3)" />
                    </g>
                  );
                })}

                {/* Center image */}
                <image
                  href={assets.aboutjourney}
                  x={SVG_C - IMG_R} y={SVG_C - IMG_R}
                  width={IMG_R * 2} height={IMG_R * 2}
                  clipPath="url(#imgClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Center image border */}
                <circle
                  cx={SVG_C} cy={SVG_C} r={IMG_R}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2.5"
                />

                {/* Journey cards */}
                {CARDS.map((card, i) => {
                  const item = JOURNEY[i];
                  const titleLines = wrapText(item.title, 18);
                  const descLines  = wrapText(item.desc, 27);

                  const stepY      = card.cy - CARD_R + 38;
                  const sepY       = stepY + 18;
                  const titleStartY = sepY + 24;
                  const descStartY  = titleStartY + titleLines.length * 22 + 10;

                  return (
                    <g key={`card-${i}`}>
                      {/* Drop shadow */}
                      <circle
                        cx={card.cx + 4} cy={card.cy + 6}
                        r={CARD_R}
                        fill="rgba(0,0,0,0.6)"
                      />
                      {/* Card body */}
                      <circle
                        cx={card.cx} cy={card.cy}
                        r={CARD_R}
                        fill="url(#cardGrad)"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="2.5"
                      />
                      {/* Top shine arc */}
                      <path
                        d={`M ${card.cx - CARD_R * 0.62} ${card.cy - CARD_R * 0.72}
                            A ${CARD_R} ${CARD_R} 0 0 1
                            ${card.cx + CARD_R * 0.62} ${card.cy - CARD_R * 0.72}`}
                        fill="none"
                        stroke="rgba(255,255,255,0.09)"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />

                      {/* STEP label */}
                      <text
                        x={card.cx} y={stepY}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.38)"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                        letterSpacing="3"
                      >
                        {`STEP ${item.label}`}
                      </text>

                      {/* Separator */}
                      <line
                        x1={card.cx - 32} y1={sepY}
                        x2={card.cx + 32} y2={sepY}
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="1"
                      />

                      {/* Title */}
                      {titleLines.map((line, li) => (
                        <text
                          key={`t-${li}`}
                          x={card.cx}
                          y={titleStartY + li * 22}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="16"
                          fontWeight="700"
                          fontFamily="system-ui, sans-serif"
                        >
                          {line}
                        </text>
                      ))}

                      {/* Description */}
                      {descLines.map((line, li) => (
                        <text
                          key={`d-${li}`}
                          x={card.cx}
                          y={descStartY + li * 17}
                          textAnchor="middle"
                          fill="#bbbbbb"
                          fontSize="12"
                          fontFamily="system-ui, sans-serif"
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  );
                })}
              </svg>
            </div>

          </div>
        </section>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">About Us</h2>
          <p className="about-cta-text">Get in touch to learn how we can support your flexible packaging needs.</p>
        </div>
      </section>

    </main>
  );
}