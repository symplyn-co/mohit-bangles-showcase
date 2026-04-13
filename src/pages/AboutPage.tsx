import aboutCraft from "@/assets/about-craft.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  { icon: "fas fa-gem", title: "Premium Quality", desc: "Carefully crafted bangles with high-quality materials for lasting durability and finish." },
  { icon: "fas fa-hand-sparkles", title: "Expert Craftsmanship", desc: "Each piece is designed and finished by skilled artisans with years of experience." },
  { icon: "fas fa-heart", title: "Made with Care", desc: "Every bangle reflects attention to detail and dedication in every step of creation." },
  { icon: "fas fa-award", title: "Trusted Heritage", desc: "A name trusted by customers for quality and consistency over the years." },
];

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-luxury text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Who We Are</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">About DH Bangles</h1>
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
  <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Story</p>
  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">A Legacy of Craftsmanship</h2>
  <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
  <p className="font-body text-sm text-muted-foreground leading-relaxed">
    Nestled in the vibrant city of Rajkot, Gujarat — renowned as one of India's premier hubs for bangle manufacturing — DH Bangles has been dedicated to fine craftsmanship for generations.
  </p>
  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
    What began as a humble workshop has grown into a trusted name known for quality, creativity, and attention to detail. Our artisans combine traditional techniques with modern designs to create bangles that suit every style and occasion.
  </p>
  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
    Every piece is carefully crafted and inspected to ensure durability, comfort, and finish — so you receive products that truly stand out.
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
              { number: "10+", label: "Years of Experience" },
              { number: "500+", label: "Happy Customers" },
              { number: "100+", label: "Unique Designs" },
              { number: "100%", label: "Premium Finish" },
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
