import { Link } from "react-router-dom";
import catBridal from "@/assets/cat-bridal.jpg";
import catFancy from "@/assets/cat-fancy.jpg";
import catDaily from "@/assets/cat-daily.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categoriesData = [
  {
    name: "Bridal Collection",
    slug: "bridal",
    image: catBridal,
    description: "Our bridal collection features opulent designs crafted for the most important day of your life. From intricate kundan work to classic gold patterns, each piece radiates grandeur and tradition.",
    count: 2,
  },
  {
    name: "Fancy Bangles",
    slug: "fancy",
    image: catFancy,
    description: "Make a statement with our fancy bangles collection. Featuring contemporary designs, meenakari work, and designer patterns that are perfect for festive occasions and celebrations.",
    count: 3,
  },
  {
    name: "Daily Wear",
    slug: "daily-wear",
    image: catDaily,
    description: "Elegant simplicity for everyday grace. Our daily wear collection offers lightweight, comfortable bangles with subtle designs that complement any outfit effortlessly.",
    count: 1,
  },
];

const CategoriesPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-luxury text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Browse</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Categories</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-20">
        <div className="container-luxury space-y-16 md:space-y-24">
          {categoriesData.map((cat, i) => (
            <AnimateOnScroll key={cat.slug}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-lg overflow-hidden aspect-[4/5]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      width={800}
                      height={1024}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-body text-xs font-medium text-primary uppercase tracking-widest">
                    {cat.count} {cat.count === 1 ? "Design" : "Designs"}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">{cat.name}</h2>
                  <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
                  >
                    View Collection
                    <i className="fas fa-arrow-right text-xs" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
