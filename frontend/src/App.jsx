import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import useScrollEffect from "./assets/hooks/useScrollEffect";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Infrastructure from "./pages/infrastructure/Infrastructure";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Contact from "./pages/contact/Contact";

import SplashScreen from "./assets/components/SplashScreen";

const App = () => {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "") || "home";
    const pageName = hash.split("?")[0];
    const validPages = [
      "home",
      "about",
      "services",
      "infrastructure",
      "products",
      "product-detail",
      "contact",
    ];
    return validPages.includes(pageName) ? pageName : "home";
  };

  const initialPageRef = useRef(getPageFromHash());

  const [activePage, setActivePage] = useState(initialPageRef.current);
  const [showSplash, setShowSplash] = useState(true);

  // ✅ Force scroll effect to re-run once splash ends
  const scrollEffectKey = showSplash ? "__splash__" : activePage;
  useScrollEffect(scrollEffectKey);

  // ✅ Scroll to top on page change (after splash)
  useEffect(() => {
    if (!showSplash) window.scrollTo(0, 0);
  }, [activePage, showSplash]);

  // Listen to URL hash changes
  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const pages = {
    home: <Home />,
    about: <About />,
    services: <Services />,
    infrastructure: <Infrastructure />,
    products: <Products />,
    "product-detail": <ProductDetail />,
    contact: <Contact />,
  };

  return (
    <div>
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            setActivePage(initialPageRef.current);

            if (!window.location.hash) {
              window.location.hash = `#${initialPageRef.current}`;
            }
          }}
        />
      )}

      <Navbar onChangePage={setActivePage} activePage={activePage} />
      {pages[activePage]}
      <Footer />
    </div>
  );
};

export default App;
