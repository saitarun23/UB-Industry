import React, { useState, useEffect, useRef, useCallback } from "react";
import assets from "../../assets/images";
import "../../styles/hero.css";

const slides = [
  {
    type: "text",
    bg: null,
    headline: ["Welcome to the World of", "Branding"],
    sub: "Serving industries across India and worldwide",
    cta: [
      { label: "Explore Services", href: "#services", primary: true },
      { label: "Our Products", href: "#products", primary: false },
    ],
  },
  {
    type: "image",
    bg: assets.product1,
    headline: ["Rolls"],
  },
  {
    type: "image",
    bg: assets.product2,
    headline: ["Bakery &",  "Snack Packs"],
  },
  {
    type: "image",
    bg: assets.product3,
    headline: ["Medicine", "Packing"],
  },
  {
    type: "image",
    bg: assets.product4,
    headline: ["Sea Food", "Packing"],
  },
  {
    type: "image",
    bg: assets.product5,
    headline: ["Dairy", "Packing"],
  },
  {
    type: "image",
    bg: assets.product6,
    headline: ["Oil Packing"],
  },
  {
    type: "image",
    bg: assets.product7,
    headline: ["W - Cut", "D- Cut Bags"],
  },
  {
    type: "image",
    bg: assets.product8,
    headline: ["Powdered", "Packing"],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback(
    (idx, dir = 1) => {
      setPrev(current);
      setCurrent(idx);
      setAnimKey((k) => k + 1);
    },
    [current]
  );

  const next = useCallback(() => goTo((current + 1) % total, 1), [current, total, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + total) % total, -1), [current, total, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, 3500);
    return () => clearTimeout(timerRef.current);
  }, [current, next]);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev_();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev_]);

  const slide = slides[current];
  const isText = slide.type === "text";

  return (
    <section
      className="ubp-hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      aria-label="Hero Slideshow"
    >
      {/* ── BACKGROUND LAYERS ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`ubp-bg ${i === current ? "ubp-bg--active" : ""} ${i === prev ? "ubp-bg--prev" : ""}`}
          style={
            s.bg
              ? {
                  backgroundImage: `url(${s.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  transform: `scale(1.06) translate(${mouse.x * -8}px, ${mouse.y * -6}px)`,
                }
              : {
                  background: "radial-gradient(ellipse 80% 80% at 50% 40%, #1a1a2e 0%, #0d0d0d 60%, #000 100%)",
                  transform: `scale(1.02) translate(${mouse.x * -3}px, ${mouse.y * -2}px)`,
                }
          }
        >
          {s.bg && <div className="ubp-scrim" />}
          <div className="ubp-grain" />
        </div>
      ))}

      {/* ── DECORATIVE RINGS (text slide only) ── */}
      {isText && (
        <div className="ubp-deco" aria-hidden="true">
          <div className="ubp-deco__circle ubp-deco__circle--1" />
          <div className="ubp-deco__circle ubp-deco__circle--2" />
          <div className="ubp-deco__line ubp-deco__line--v1" />
          <div className="ubp-deco__line ubp-deco__line--v2" />
          <div className="ubp-deco__line ubp-deco__line--h" />
        </div>
      )}

      {/* ── CONTENT ── */}
      <div
        className={`ubp-content ${isText ? "ubp-content--centered" : "ubp-content--image"}`}
        key={animKey}
      >
        <h1 className="ubp-headline">
          {slide.headline.map((line, i) => (
            <span
              key={i}
              className="ubp-headline__row"
              style={{ animationDelay: `${0.1 + i * 0.12}s` }}
            >
              {i === slide.headline.length - 1 && isText ? (
                <em className="ubp-headline__em">{line}</em>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {isText && <p className="ubp-sub">{slide.sub}</p>}

        {isText && (
          <div className="ubp-cta-row">
            {slide.cta.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className={`ubp-cta ${c.primary ? "ubp-cta--primary" : "ubp-cta--ghost"}`}
                style={{ animationDelay: `${0.55 + i * 0.1}s` }}
              >
                {c.label}
                {c.primary && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ── SLIDE COUNTER ── */}
      {/* <div className="ubp-counter" aria-hidden="true">
        <span className="ubp-counter__current">{String(current + 1).padStart(2, "0")}</span>
        <div className="ubp-counter__track">
          <div className="ubp-counter__fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
        <span className="ubp-counter__total">{String(total).padStart(2, "0")}</span>
      </div> */}

      {/* ── NAV ARROWS ── */}
      <button className="ubp-nav ubp-nav--prev" onClick={prev_} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="ubp-nav ubp-nav--next" onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── DOT PAGINATION ── */}
      <div className="ubp-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`ubp-dot ${i === current ? "ubp-dot--active" : ""}`}
            onClick={() => goTo(i, i > current ? 1 : -1)}
          />
        ))}
      </div>
    </section>
  );
}