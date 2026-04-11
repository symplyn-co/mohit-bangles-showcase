import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const tabs = ["All", "Bridal", "Fancy", "Daily Wear"];

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-luxury text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Collection</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">All Products</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 md:py-16">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-body text-sm font-medium px-6 py-2.5 rounded-sm transition-all duration-300 tracking-wide ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product, i) => (
  <div
    key={product.id}
    className="animate-fade-up"
    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
  >
    <ProductCard product={product} />
  </div>
))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-muted-foreground py-20">
              No products found in this category.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
