import React, { useEffect, useState } from "react";
import assets from "../images";
import "../../styles/splashscreen.css";

const SplashScreen = ({ onFinish }) => {
  const [logoState, setLogoState]       = useState("hidden"); // hidden → burst → stable
  const [showTitle, setShowTitle]       = useState(false);
  const [showTagline, setShowTagline]   = useState(false);
  const [showDecor, setShowDecor]       = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [introHide, setIntroHide]       = useState(false);
  const [activeIdx, setActiveIdx]       = useState(0);
  const [blurring, setBlurring]         = useState(false);

  const services = [
    { title: "PRINT",    image: assets.land1 },
    { title: "LAMINATE", image: assets.land2 },
    { title: "PACK",     image: assets.land3 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // ── Phase 1: Logo appears (clean pop, no glow) ──
    const t1 = setTimeout(() => setLogoState("burst"),  400);
    const t2 = setTimeout(() => setLogoState("stable"), 750);

    // ── Phase 2: Brand name slides up as ONE block ──
    const t3 = setTimeout(() => setShowTitle(true),   1200);

    // ── Phase 3: Tagline + gold line ──
    const t4 = setTimeout(() => setShowTagline(true), 2000);
    const t5 = setTimeout(() => setShowDecor(true),   2300);

    // ── Hold so user can read (~2 seconds of reading time) ──

    // ── Phase 4: Services full-screen ──
    const t6 = setTimeout(() => {
      setIntroHide(true);
      setShowServices(true);
      setActiveIdx(0);
    }, 4500);

    const t7 = setTimeout(() => setActiveIdx(1), 6200);
    const t8 = setTimeout(() => setActiveIdx(2), 7900);

    // ── Phase 5: Blur-out exit ──
    const t9  = setTimeout(() => setBlurring(true), 9700);
    const t10 = setTimeout(() => {
      document.body.style.overflow = "auto";
      onFinish?.();
    }, 10700);

    return () => {
      [t1,t2,t3,t4,t5,t6,t7,t8,t9,t10].forEach(clearTimeout);
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${blurring ? "splash-exit" : ""}`}>

      {/* ── Phase 1–3: Company Introduction ── */}
      <div className={`splash-intro ${introHide ? "intro-hide" : ""}`}>

        {/* Logo — clean fade+pop, no glow ring */}
        <div className={`splash-logo-wrap logo-${logoState}`}>
          <img
            src={assets.logo}
            alt="Urmila Bhupathiraju Industries"
            className="splash-logo-img"
          />
          <div className="logo-ring" />
        </div>

        {/* Brand name — whole line reveals at once */}
        <div className={`splash-title ${showTitle ? "title-in" : ""}`}>
          <span className="title-word w1">Urmila </span>
          <span className="title-word w2">Bhupathiraju </span>
          <span className="title-word w3">Industries</span>
        </div>

        {/* Tagline */}
        <div className={`splash-tagline ${showTagline ? "tagline-in" : ""}`}>
          Flexible Roto Print &amp; Pack
        </div>

        {/* Gold separator */}
        <div className={`splash-decor ${showDecor ? "decor-expand" : ""}`} />
      </div>

      {/* ── Phase 4: Full-Screen Services ── */}
      {showServices && (
        <div className="splash-services">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`svc-slide ${i === activeIdx ? "svc-active" : ""} ${i < activeIdx ? "svc-done" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%), url(${svc.image})`,
              }}
            >
              <div className="svc-inner">
                <span className="svc-index">0{i + 1}</span>
                <h2 className="svc-title">{svc.title}</h2>
                <div className="svc-bar" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SplashScreen;