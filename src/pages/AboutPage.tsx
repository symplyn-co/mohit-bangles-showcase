import aboutCraft from "@/assets/about-craft.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  { icon: "fas fa-gem", title: "Wide Variety", desc: "Different types of brass and plastic bangles available in multiple designs and styles." },
  { icon: "fas fa-hand-sparkles", title: "Bulk Availability", desc: "Products available in bulk quantity, suitable for shops and resellers." },
  { icon: "fas fa-heart", title: "Affordable Pricing", desc: "Reasonable pricing to suit all types of customers and business needs." },
  { icon: "fas fa-award", title: "Trusted Shop", desc: "Known in Rajkot for variety, consistency, and reliable service." },
];

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-luxury text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Who We Are</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">About Mohit Bangles</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimateOnScroll>
              <div className="rounded-lg overflow-hidden">
                <img src={aboutCraft} alt="Our craftsman at work" loading="lazy" width={1200} height={800} className="w-full h-auto object-cover" />
              </div>
            </AnimateOnScroll>
           <AnimateOnScroll>
  <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Shop</p>

  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
    One Solution For All Bangles
  </h2>

  <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />

  <p className="font-body text-sm text-muted-foreground leading-relaxed">
    Mohit Bangles is based in Rajkot and offers a wide range of brass and plastic bangles in different designs and sizes.
  </p>

  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
    We provide options suitable for daily wear as well as bulk purchase for shops and resellers.
  </p>

  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
    Our focus is to give good variety, proper finishing, and affordable pricing for all customers.
  </p>
</AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-luxury">
          <AnimateOnScroll className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">What Defines Us</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Our Values</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} animation="animate-scale-in" delay={`animation-delay-${(i + 1) * 100}`}>
                <div className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <i className={`${v.icon} text-primary text-xl`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
  { number: "10+", label: "Years in Business" },
  { number: "500+", label: "Regular Customers" },
  { number: "100+", label: "Design Options" },
  { number: "100%", label: "Customer Satisfaction" },
].map((stat) => (
              <AnimateOnScroll key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
