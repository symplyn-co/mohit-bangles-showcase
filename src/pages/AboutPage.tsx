import aboutCraft from "@/assets/about-craft.jpg";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  { icon: "fas fa-gem", title: "Premium Quality", desc: "Only the finest 22K and 24K gold, BIS hallmarked for your assurance." },
  { icon: "fas fa-hand-sparkles", title: "Master Craftsmanship", desc: "Each piece is handcrafted by artisans with decades of experience." },
  { icon: "fas fa-heart", title: "Made with Love", desc: "Every bangle carries the passion and dedication of our craftsmen." },
  { icon: "fas fa-award", title: "Trusted Heritage", desc: "A legacy of excellence trusted by families for generations." },
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
            <AnimateOnScroll animation="animate-slide-in-right">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Story</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">A Legacy of Golden Excellence</h2>
              <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Nestled in the vibrant city of Rajkot, Gujarat — renowned as one of India's premier jewellery hubs — DH Bangles has been at the forefront of bangle craftsmanship for generations.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                What began as a humble workshop has grown into a trusted name synonymous with quality, artistry, and innovation. Our master artisans blend age-old techniques with modern sensibilities to create pieces that are as unique as the women who wear them.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                Every bangle that leaves our workshop undergoes rigorous quality checks, ensuring that you receive nothing short of perfection. We take immense pride in our BIS hallmarked gold and our commitment to ethical sourcing.
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
