import React, { useState, useEffect } from "react";
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

const App = () => {
  // Get initial page from URL hash (/#about, /#services, etc.)
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "") || "home";
    // Extract the page name (before the ? if present)
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

  const [activePage, setActivePage] = useState(getPageFromHash);

  // Re-run scroll effect when page changes
  useScrollEffect(activePage);

  // Listen to URL hash changes (back/forward, manual typing)
  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };

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
      <Navbar onChangePage={setActivePage} activePage={activePage} />
      {pages[activePage]}
      <Footer />
    </div>
  );
};

export default App;
