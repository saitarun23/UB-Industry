import { useState, useMemo } from "react";
import assets from "../../assets/images";
import "../../styles/product.css";

const FOOD_CATEGORIES = [
  {
    id: "snacks-chips",
    title: "Snacks & Chips",
    image: assets.chips,
  },
  {
    id: "biscuits",
    title: "Biscuits",
    image: assets.biscuits,
  },
  {
    id: "dairy-products",
    title: "Dairy Products",
    image: assets.dairy,
  },
  {
    id: "oil-products",
    title: "Oil Products",
    image: assets.oil,
  },
  {
    id: "powdered-products",
    title: "Powdered Products",
    image: assets.powdered,
  },
  {
    id: "tea-coffee",
    title: "Tea & Coffee",
    image: assets.coffee,
  },
  {
    id: "vaccum-packaging",
    title: "Vaccum Packaging",
    image: assets.vaccum,
  },
  {
    id: "beverages",
    title: "Beverages",
    image: assets.beverges,
  },
  {
    id: "seafood",
    title: "Seafood",
    image: assets.seafood,
  },
  {
    id: "lidding-films",
    title: "Lidding Films",
    image: assets.lid,
  },
];

const NON_FOOD_CATEGORIES = [
  {
    id: "detergent",
    title: "Detergent",
    image: assets.detergents,
  },
  {
    id: "fertilizer",
    title: "Fertilizers",
    image: assets.chemical,
  },
  {
    id: "agro-chemicals",
    title: "Agro Chemicals",
    image: assets.agriculture,
  },
  {
    id: "health-care",
    title: "Health Care",
    image: assets.healthcare,
  },
  {
    id: "e-commerce",
    title: "E-commerce Packaging",
    image: assets.ecommerce,
  },
  {
    id: "shrink-films",
    title: "Shrink Films",
    image: assets.shrink,
  },
  {
    id: "body-care",
    title: "Body Care",
    image: assets.bodycare,
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("food");
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => (activeTab === "food" ? FOOD_CATEGORIES : NON_FOOD_CATEGORIES),
    [activeTab]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter((item) =>
      item.title.toLowerCase().includes(q)
    );
  }, [categories, query]);

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

      {/* BODY */}
      <section className="product-body">
        {/* Search bar */}
        <form
          className="product-search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Type a keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {/* Tabs */}
        <div className="product-tabs">
          <button
            type="button"
            className={`product-tab ${
              activeTab === "food" ? "active" : ""
            }`}
            onClick={() => setActiveTab("food")}
          >
            FOOD
          </button>
          <button
            type="button"
            className={`product-tab ${
              activeTab === "non-food" ? "active" : ""
            }`}
            onClick={() => setActiveTab("non-food")}
          >
            NON FOOD
          </button>
        </div>

        {/* Grid */}
        <div className="product-grid">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="product-card"
              onClick={() => window.location.hash = `#product-detail?item=${item.id}`}
            >
              <div className="product-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="product-card-title">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

