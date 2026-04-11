import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import catFancy from "@/assets/cat-fancy.jpg";
import catDaily from "@/assets/cat-daily.jpg";
import aboutCraft from "@/assets/about-craft.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  const categoriesData = [
    { name: "Bridal Collection", image: catBridal, slug: "bridal", desc: "Timeless pieces for your special day" },
    { name: "Fancy Bangles", image: catFancy, slug: "fancy", desc: "Statement designs for festive occasions" },
    { name: "Daily Wear", image: catDaily, slug: "daily-wear", desc: "Elegant simplicity for everyday" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Premium gold bangles from DH Bangles"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="max-w-xl">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-up">
              Handcrafted Excellence
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-100">
              Timeless Gold, <br />
              <span className="text-primary italic">Crafted with Love</span>
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/80 mt-6 max-w-md leading-relaxed animate-fade-up animation-delay-200">
              Discover our exquisite collection of handcrafted gold bangles, where tradition meets contemporary elegance.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-up animation-delay-300">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
              >
                Explore Collection
                <i className="fas fa-arrow-right text-xs" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/10 transition-colors duration-300 tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimateOnScroll className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Collection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Featured Bangles</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, i) => (
  <div
    key={product.id}
    className="animate-fade-up"
    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
  >
    <ProductCard product={product} />
  </div>
))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wide"
            >
              View All Products
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimateOnScroll className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Browse By</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Shop Categories</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categoriesData.map((cat, i) => (
              <AnimateOnScroll key={cat.slug} delay={`animation-delay-${(i + 1) * 100}`}>
                <Link
                  to={`/categories?filter=${cat.slug}`}
                  className="group block relative rounded-lg overflow-hidden aspect-[3/4]"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground">{cat.name}</h3>
                    <p className="font-body text-sm text-primary-foreground/80 mt-1">{cat.desc}</p>
                    <span className="inline-flex items-center gap-2 font-body text-sm text-primary font-medium mt-3 group-hover:gap-3 transition-all duration-300">
                      Explore <i className="fas fa-arrow-right text-xs" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimateOnScroll>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={aboutCraft}
                  alt="Artisan crafting gold bangles"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Heritage</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Crafted by Hand, <br />Treasured Forever
              </h2>
              <div className="w-16 h-0.5 bg-primary mt-4 mb-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                At DH Bangles, we carry forward a legacy of masterful goldsmithing passed down through generations. Based in the heart of Rajkot, Gujarat — India's jewellery capital — our artisans pour their soul into every piece they create.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                From intricate filigree work to bold contemporary designs, each bangle is a testament to the perfect marriage of tradition and innovation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
              >
                Our Story
                <i className="fas fa-arrow-right text-xs" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-primary-foreground">
        <div className="container-luxury text-center">
          <AnimateOnScroll>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Get in Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">
              Looking for Something Special?
            </h2>
            <p className="font-body text-sm text-primary-foreground/70 mt-4 max-w-lg mx-auto leading-relaxed">
              We craft custom designs tailored to your vision. Reach out to us for bespoke bangles that are uniquely yours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
              >
                <i className="fab fa-whatsapp" />
                Inquire on WhatsApp
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-primary-foreground/10 transition-colors duration-300 tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
