import React from "react";
import "../../styles/homeproducts.css";
import assets from "../../assets/images";
import { FiLink, FiSearch } from "react-icons/fi";

const homeproducts = [
  {
    title: "General Purpose Packings",
    image: assets.product1,
  },
  {
    title: "Food & FMCG Packaging",
    image: assets.product2,
  },
  {
    title: "Personal Care Packaging",
    image: assets.product3,
  },
  {
    title: "Household Products",
    image: assets.product4,
  },
];

export default function HomeProducts() {
  return (
    <section className="homeproducts-section scroll-effect">
      {/* HEADING */}
      <div className="homeproducts-heading scroll-effect">
        <span>Products</span>
        <h2>
          We specialize in the production of high-quality flexible packaging
          solutions across industries.
        </h2>
      </div>

      {/* GRID */}
      <div className="homeproducts-grid scroll-effect">
        {homeproducts.map((item, index) => (
          <div className="homeproduct-card" key={index}>
            <img src={item.image} alt={item.title} />

            {/* HOVER OVERLAY */}
            <div className="homeproduct-overlay">
              <p className="homeproductoverlay-sub">Stationery</p>
              <h3>{item.title}</h3>

              <div className="homeproductoverlay-icons">
                <span>
                  <FiLink />
                </span>
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
