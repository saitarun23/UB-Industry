import assets from "../../assets/images";
import "../../styles/product.css";

export default function Products() {
  return (
    <main className="product-page" id="products">
      {/* HERO */}
      <header className="product-hero">
        <div className="product-hero-bg">
          <img src={assets.productHero} alt="Team at work" />
        </div>
        <div className="product-hero-overlay" />
        <div className="product-hero-content">
          <h1 className="product-hero-title">Our Products</h1>
        </div>
      </header>
    </main>
  );
} 
      