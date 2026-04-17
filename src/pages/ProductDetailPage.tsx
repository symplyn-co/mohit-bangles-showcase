import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="pt-20 md:pt-24">
        <div className="container-luxury py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/products" className="inline-flex items-center gap-2 mt-6 text-primary font-body text-sm font-medium">
            <i className="fas fa-arrow-left text-xs" /> Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-luxury">
          <nav className="font-body text-xs text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <AnimateOnScroll>
              <div className="rounded-lg overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-right">
              <div className="flex flex-col justify-center">
                <span className="font-body text-xs font-medium text-primary uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
                <p className="font-body text-xs text-muted-foreground mt-2">Code: {product.code}</p>
                <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="bg-secondary rounded-lg p-6 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="fas fa-gem text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Premium Quality Finish</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <i className="fas fa-certificate text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Durable Plating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fas fa-hand-sparkles text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Handcrafted Designs</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    target="_blank"
                    href={`https://wa.me/917600234489?text=${encodeURIComponent(
  `Hi, I'm interested in:\n${product.name} (${product.code})\nhttps://dh-bangles.symplyn.in/products/${product.id}`
)}`}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
                  >
                    <i className="fab fa-whatsapp" />
                    Inquire Now
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wide"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-luxury">
            <AnimateOnScroll className="text-center mb-12">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">You May Also Like</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Related Products</h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <AnimateOnScroll key={p.id}>
                  <ProductCard product={p} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetailPage;
