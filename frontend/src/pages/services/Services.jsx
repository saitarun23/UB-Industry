import { Sprout, Milk, Layers, Droplet, HeartPulse,} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import FoodPacketIcon from "../../assets/components/icons/FoodPacketIcon";

// import assets from "../../assets/images";
import "../../styles/services.css";

const packagingSolutions = [
  {
    title: "Food Packaging",
    desc:
      "Solutions suitable for nitrogen flushing, good moisture and oxygen barrier with matt, gloss and metallic finishes.",
    Icon: FoodPacketIcon,
    variant: "food",
  },
  {
    title: "Agriculture Packaging",
    desc:
      "Structures tailored for agricultural products with reliable barrier and mechanical strength for rural distribution.",
    Icon: Sprout,
    variant: "agri",
  },
  {
    title: "Milk Products Packaging",
    desc:
      "Laminates and pouches for milk and dairy products, maintaining hygiene, freshness and reliable distribution.",
    Icon: Milk,
    variant: "beverage",
  },
  {
    title: "Industrial Packaging",
    desc:
      "High-performance industrial laminates engineered for demanding environments and heavy products.",
    Icon: Layers,
    variant: "industrial",
  },
  {
    title: "Liquid Packaging",
    desc:
      "Leak-proof laminates and pouches for edible oils, cleaners and other liquid products.",
    Icon: Droplet,
    variant: "liquid",
  },
  {
    title: "Healthcare Packaging",
    desc:
      "Packaging suitable for pharma and healthcare products with high hygiene and protection needs.",
    Icon: HeartPulse,
    variant: "health",
  },
];

// Hero Component with Three.js and Different Text Animations
function ServicesHero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const sceneRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Different text configurations with varied styles
  const textConfigurations = [
    {
      type: "two-line-caps",
      line1: "Custom Made",
      line2: "Solutions",
      line1Color: "#ffffff",
      line2Color: "#ffffff",
    },
    {
      type: "two-line-mixed",
      line1: "Tailored Solutions",
      line2: "Packaging",
      line1Color: "#ffffff",
      line2Color: "#ffffff",
    },
    {
      type: "two-word-mixed",
      word1: "Perfect Fit",
      word2: "Brands",
      word1Color: "#ffffff",
      word2Color: "#ffffff",
    },
    {
      type: "two-word-mixed",
      word1: "Eco-Friendly",
      word2: "& Pure",
      word1Color: "#ffffff",
      word2Color: "#ffffff",
    },
  ];

  // Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textConfigurations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Three.js Background with Packaging-themed Particles
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

    // Create packaging-themed particles - BOX SHAPES (representing packages)
    const boxGroup = new THREE.Group();
    const boxCount = 150;

    for (let i = 0; i < boxCount; i++) {
      const size = Math.random() * 8 + 3;
      const geometry = new THREE.BoxGeometry(size, size, size);
      
      // Different packaging colors
      const colors = [
        0x14b8a6, // Teal (primary)
        0x22c55e, // Green (eco)
        0xf97316, // Orange (food)
        0x0ea5e9, // Blue (liquid)
        0x8b5cf6, // Purple (pharma)
      ];
      
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: Math.random() * 0.4 + 0.3,
        wireframe: Math.random() > 0.5, // Some solid, some wireframe
      });

      const box = new THREE.Mesh(geometry, material);
      
      box.position.x = (Math.random() - 0.5) * 900;
      box.position.y = (Math.random() - 0.5) * 900;
      box.position.z = (Math.random() - 0.5) * 400;
      
      box.rotation.x = Math.random() * Math.PI;
      box.rotation.y = Math.random() * Math.PI;
      
      box.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      };
      
      boxGroup.add(box);
    }
    scene.add(boxGroup);

    // Create CYLINDER PARTICLES (representing rolls/tubes)
    const cylinderGroup = new THREE.Group();
    const cylinderCount = 100;

    for (let i = 0; i < cylinderCount; i++) {
      const radius = Math.random() * 3 + 1;
      const height = Math.random() * 15 + 5;
      const geometry = new THREE.CylinderGeometry(radius, radius, height, 8);
      
      const material = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: Math.random() * 0.3 + 0.2,
        wireframe: true,
      });

      const cylinder = new THREE.Mesh(geometry, material);
      
      cylinder.position.x = (Math.random() - 0.5) * 800;
      cylinder.position.y = (Math.random() - 0.5) * 800;
      cylinder.position.z = (Math.random() - 0.5) * 350;
      
      cylinder.rotation.x = Math.random() * Math.PI;
      cylinder.rotation.z = Math.random() * Math.PI;
      
      cylinder.userData = {
        rotationSpeed: {
          y: (Math.random() - 0.5) * 0.03,
          z: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: Math.random() * 0.015 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      };
      
      cylinderGroup.add(cylinder);
    }
    scene.add(cylinderGroup);

    // Add RING PARTICLES (representing seals/caps)
    const ringGroup = new THREE.Group();
    const ringCount = 80;

    for (let i = 0; i < ringCount; i++) {
      const geometry = new THREE.TorusGeometry(
        Math.random() * 5 + 2, // radius
        Math.random() * 1 + 0.5, // tube
        8, // radial segments
        12 // tubular segments
      );
      
      const material = new THREE.MeshBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: Math.random() * 0.4 + 0.2,
      });

      const ring = new THREE.Mesh(geometry, material);
      
      ring.position.x = (Math.random() - 0.5) * 700;
      ring.position.y = (Math.random() - 0.5) * 700;
      ring.position.z = (Math.random() - 0.5) * 300;
      
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      
      ring.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.025,
          y: (Math.random() - 0.5) * 0.025,
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      };
      
      ringGroup.add(ring);
    }
    scene.add(ringGroup);

    // Add small ambient dot particles for depth
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 1000;
      posArray[i + 1] = (Math.random() - 0.5) * 1000;
      posArray[i + 2] = (Math.random() - 0.5) * 500;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2,
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

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

      // Animate boxes (packages)
      boxGroup.rotation.y = elapsedTime * 0.03;
      boxGroup.position.x = targetX * 40;
      boxGroup.position.y = targetY * 40;
      
      boxGroup.children.forEach((box) => {
        box.rotation.x += box.userData.rotationSpeed.x;
        box.rotation.y += box.userData.rotationSpeed.y;
        
        // Floating animation
        box.position.y += Math.sin(elapsedTime * box.userData.floatSpeed + box.userData.floatOffset) * 0.2;
      });

      // Animate cylinders (rolls)
      cylinderGroup.rotation.y = -elapsedTime * 0.02;
      cylinderGroup.position.x = targetX * 30;
      
      cylinderGroup.children.forEach((cylinder) => {
        cylinder.rotation.y += cylinder.userData.rotationSpeed.y;
        cylinder.rotation.z += cylinder.userData.rotationSpeed.z;
        
        // Floating animation
        cylinder.position.x += Math.sin(elapsedTime * cylinder.userData.floatSpeed + cylinder.userData.floatOffset) * 0.15;
      });

      // Animate rings (seals)
      ringGroup.rotation.x = targetY * 0.3;
      ringGroup.rotation.y = elapsedTime * 0.025;
      
      ringGroup.children.forEach((ring) => {
        ring.rotation.x += ring.userData.rotationSpeed.x;
        ring.rotation.y += ring.userData.rotationSpeed.y;
        
        // Pulsating scale
        const scale = 1 + Math.sin(elapsedTime * ring.userData.floatSpeed + ring.userData.floatOffset) * 0.1;
        ring.scale.set(scale, scale, scale);
      });

      // Animate ambient particles
      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.position.x = targetX * 20;

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
      
      // Dispose all geometries and materials
      boxGroup.children.forEach((box) => {
        box.geometry.dispose();
        box.material.dispose();
      });
      cylinderGroup.children.forEach((cylinder) => {
        cylinder.geometry.dispose();
        cylinder.material.dispose();
      });
      ringGroup.children.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  const currentConfig = textConfigurations[currentTextIndex];

  return (
    <header className="services-hero">
      <canvas ref={canvasRef} className="services-hero-canvas" />
      <div className="services-hero-overlay" />
      <div className="services-hero-content">
        <div className="services-hero-text-container">
          
          <AnimatePresence mode="wait">
            {currentConfig.type === "two-line-caps" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {currentConfig.type === "two-line-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-two-line"
              >
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line1Color }}
                  className="text-line-1"
                >
                  {currentConfig.line1}
                </motion.h1>
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.line2Color }}
                  className="text-line-2"
                >
                  {currentConfig.line2}
                </motion.h1>
              </motion.div>
            )}

            {currentConfig.type === "two-word-mixed" && (
              <motion.div
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-layout-inline"
              >
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: currentConfig.word1Color }}
                  className="text-word"
                >
                  {currentConfig.word1}
                </motion.span>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ color: currentConfig.word2Color }}
                  className="text-word"
                >
                  {currentConfig.word2}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default function Services() {
  return (
    <main className="services-page" id="services">
      {/* HERO */}
      <ServicesHero />

      {/* Rest of the component remains the same... */}
      <section className="services-main">
       
        {/* PACKAGING SOLUTIONS */}
        <section className="packaging-section">
          <div className="packaging-header">
            <h2 className="packaging-title scroll-effect">Packaging Solutions</h2>
            <p className="packaging-subtitle scroll-effect">
              Application-focused flexible packaging for different product
              categories.
            </p>
          </div>

          <div className="packaging-grid">  
            {packagingSolutions.map(({ title, desc, Icon, variant }) => (
              <div className="pack-card scroll-effect" key={title}>
                <div className={`pack-icon-circle pack-${variant}`}>
                  <Icon className="pack-icon" />
                </div>
                <h3 className="pack-card-title scroll-effect">{title}</h3>
                <p className="pack-card-text scroll-effect">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}