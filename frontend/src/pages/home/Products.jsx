import React from "react";
import "../../styles/products.css";
import assets from "../../assets/images";
import { FiLink, FiSearch } from "react-icons/fi";

const products = [
  {
    title: "General Purpose Packings",
    image: assets.products1,
  },
  {
    title: "Food & FMCG Packaging",
    image: assets.products2,
  },
  {
    title: "Personal Care Packaging",
    image: assets.products3,
  },
  {
    title: "Household Products",
    image: assets.products4,
  },
];

export default function Products() {
  return (
    <section className="products-section scroll-effect">
      {/* HEADING */}
      <div className="products-heading scroll-effect">
        <span>Products</span>
        <h2>
          We specialize in the production of high-quality flexible packaging
          solutions across industries.
        </h2>
      </div>

      {/* GRID */}
      <div className="products-grid scroll-effect">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} />

            {/* HOVER OVERLAY */}
            <div className="product-overlay">
              <p className="overlay-sub">Stationery</p>
              <h3>{item.title}</h3>

              <div className="overlay-icons">
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
