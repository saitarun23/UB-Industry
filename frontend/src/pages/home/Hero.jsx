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
  {
    type: "image",
    bg: assets.product4,
    headline: ["Sea Food", "Packaging"],
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
    bg: assets.product6,
    headline: ["Oil", "Packaging"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product7,
    headline: ["W-Cut & D-Cut", "Bags"],
    showParticles: false,
  },
  {
    type: "image",
    bg: assets.product8,
    headline: ["Powdered", "Packs"],
    showParticles: false,
  }
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

    // Create 3D industrial gears and mechanical parts
    const gearsGroup = new THREE.Group();
    const gears = [];
    
    // Metallic material for gears
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.8,
      roughness: 0.2,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.1,
    });

    // Helper function to create a gear
    const createGear = (radius, teeth, depth, x, y, z, rotationSpeed) => {
      const group = new THREE.Group();
      
      // Main gear disk
      const gearGeometry = new THREE.CylinderGeometry(radius, radius, depth, 32);
      const gear = new THREE.Mesh(gearGeometry, metalMaterial);
      group.add(gear);

      // Teeth on gear
      const toothGeometry = new THREE.BoxGeometry(
        radius * 0.3,
        radius * 0.4,
        depth * 1.2
      );
      
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const tooth = new THREE.Mesh(toothGeometry, metalMaterial);
        
        const toothX = Math.cos(angle) * (radius + radius * 0.2);
        const toothZ = Math.sin(angle) * (radius + radius * 0.2);
        
        tooth.position.set(toothX, 0, toothZ);
        tooth.rotation.y = angle;
        group.add(tooth);
      }

      // Center hub
      const hubGeometry = new THREE.CylinderGeometry(radius * 0.3, radius * 0.3, depth * 1.5, 32);
      const hub = new THREE.Mesh(hubGeometry, accentMaterial);
      group.add(hub);

      group.position.set(x, y, z);
      group.userData = {
        rotationSpeed: rotationSpeed,
        axis: new THREE.Vector3(0, 1, 0),
      };

      gearsGroup.add(group);
      gears.push(group);
      
      return group;
    };

    // Create multiple gears at different positions
    createGear(50, 12, 15, -120, 100, 0, 0.005);
    createGear(35, 9, 12, 50, 80, -80, -0.008);
    createGear(45, 11, 14, 0, -100, 60, 0.006);
    createGear(40, 10, 13, -80, -60, -100, -0.007);
    createGear(30, 8, 10, 100, -80, 50, 0.009);
    createGear(55, 13, 16, 60, 120, -60, -0.004);

    scene.add(gearsGroup);

    // Enhanced lighting for metallic effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(300, 400, 300);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 0.8, 1200);
    pointLight1.position.set(-400, 0, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x87ceeb, 0.5, 1200);
    pointLight2.position.set(400, 0, 0);
    scene.add(pointLight2);

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

      // Animate gears group
      gearsGroup.rotation.y = elapsedTime * 0.03;
      gearsGroup.rotation.x = targetY * 0.2;
      gearsGroup.position.x = targetX * 50;

      // Animate individual gears
      gears.forEach((gear) => {
        gear.rotation.y += gear.userData.rotationSpeed;
        gear.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;
      });

      // Update lights to follow interaction
      pointLight1.position.x = -400 + targetX * 200;
      pointLight2.position.x = 400 - targetX * 200;
      directionalLight.position.y = 400 + targetY * 150;

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
      
      // Cleanup gears and materials
      gears.forEach((gear) => {
        gear.children.forEach((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      });
      
      // Cleanup materials
      metalMaterial.dispose();
      accentMaterial.dispose();
      
      renderer.dispose();
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
      {/* <div className="hero-dots">
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
      </div> */}

      {/* SLIDE COUNTER */}
      <div className="hero-counter">
        <span className="current-slide">0{current + 1}</span>
        <span className="slide-divider">/</span>
        <span className="total-slides">0{total}</span>
      </div>

    </section>
  );
}