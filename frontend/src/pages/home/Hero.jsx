import React, { useState, useEffect, useRef } from "react";
import assets from "../../assets/images";
import "../../styles/hero.css";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const slides = [
  {
    type: "image",
    bg: assets.product1,
    headline: ["Rolls"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product8,
    headline: ["Wheat", "Spices", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product6,
    headline: ["Oil", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product4,
    headline: ["Sea Food", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product2,
    headline: ["Bakery &", "Confectionery"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product5,
    headline: ["Dairy", "Products"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product3,
    headline: ["Pharma", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product7,
    headline: ["W-Cut & D-Cut", "Bags"],
    showParticles: false,
  },
  
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const heroRef = useRef(null);

  const total = slides.length;

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setTimeout(next, 2500);
    return () => clearTimeout(timer);
  }, [current]);

  /* GSAP TEXT ANIMATION */
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".hero-line",
      { 
        y: 100, 
        opacity: 0,
        rotationX: -90,
        transformOrigin: "center top"
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        stagger: 0.15, 
        duration: 1.2,
        ease: "power3.out"
      }
    );

    if (slides[current].sub) {
      tl.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, [current]);



  const slide = slides[current];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="hero" ref={heroRef}>
      
      {/* IMAGE BACKGROUND with smooth transitions and hover effect */}
      <AnimatePresence mode="wait">
        {slide.bg && (
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="hero-bg-wrapper"
          >
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT with slide animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="hero-content"
        >
          <h1 className="hero-title">
            {slide.headline.map((line, i) => (
              <span key={i} className="hero-line">
                {line}
              </span>
            ))}
          </h1>

          {slide.sub && <p className="hero-sub">{slide.sub}</p>}
        </motion.div>
      </AnimatePresence>

      {/* ENHANCED NAV BUTTONS */}
      <motion.button
        className="hero-nav prev"
        onClick={prev}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      <motion.button
        className="hero-nav next"
        onClick={next}
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* SLIDE COUNTER */}
      <div className="hero-counter">
        <span className="current-slide">0{current + 1}</span>
        <span className="slide-divider">/</span>
        <span className="total-slides">0{total}</span>
      </div>

    </section>
  );
}