import React, { useState, useEffect, useRef } from "react";
import assets from "../../assets/images";
import "../../styles/hero.css";

import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

const slides = [
  {
    type: "text",
    headline: ["Welcome to the World of", "Branding"],
    sub: "Serving industries across India and worldwide",
    showParticles: true,
  },
  {
    type: "image",
    bg: assets.product1,
    headline: ["Rolls"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product2,
    headline: ["Bakery &", "Snack Packs"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product3,
    headline: ["Medicine", "Packing"],
    showParticles: false,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

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
    const timer = setTimeout(next, 5000);
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

  /* THREE JS PARTICLES - Only for first slide */
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 1000;
      posArray[i + 1] = (Math.random() - 0.5) * 1000;
      posArray[i + 2] = (Math.random() - 0.5) * 500;
      scaleArray[i / 3] = Math.random();
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scaleArray, 1)
    );

    // Particle shader material for more dynamic effects
    const particlesMaterial = new THREE.PointsMaterial({
      size: 3,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add ambient particles with different colors
    const particlesGeometry2 = new THREE.BufferGeometry();
    const posArray2 = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000 * 3; i += 3) {
      posArray2[i] = (Math.random() - 0.5) * 800;
      posArray2[i + 1] = (Math.random() - 0.5) * 800;
      posArray2[i + 2] = (Math.random() - 0.5) * 400;
    }

    particlesGeometry2.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray2, 3)
    );

    const particlesMaterial2 = new THREE.PointsMaterial({
      size: 1.5,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh2 = new THREE.Points(
      particlesGeometry2,
      particlesMaterial2
    );
    scene.add(particlesMesh2);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse following
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Animate particles with wave effect
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = targetY * 0.3;
      particlesMesh.position.x = targetX * 50;

      particlesMesh2.rotation.y = -elapsedTime * 0.03;
      particlesMesh2.rotation.x = targetY * 0.2;

      // Pulsating effect
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const y = positions[i3 + 1];
        positions[i3 + 1] = y + Math.sin(elapsedTime + i) * 0.1;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particlesGeometry2.dispose();
      particlesMaterial2.dispose();
    };
  }, []);

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
      
      {/* THREE BACKGROUND - Only visible on first slide */}
      <canvas 
        ref={canvasRef} 
        className={`hero-canvas ${slide.showParticles ? 'visible' : 'hidden'}`}
      />

      {/* ANIMATED GRADIENT OVERLAY for first slide */}
      {slide.showParticles && <div className="hero-gradient-overlay" />}

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

      {/* ENHANCED DOTS with progress animation */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <motion.span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goToSlide(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {i === current && (
              <motion.span
                className="dot-progress"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </motion.span>
        ))}
      </div>

      {/* SLIDE COUNTER */}
      <div className="hero-counter">
        <span className="current-slide">0{current + 1}</span>
        <span className="slide-divider">/</span>
        <span className="total-slides">0{total}</span>
      </div>

    </section>
  );
}