import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919574735141?text=${text}`, "_blank");
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-luxury text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">Reach Out</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Contact Us</h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Form */}
            <AnimateOnScroll>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Fill in the form below and we'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+91 xxxxxxxxxxx"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 font-body text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300 tracking-wide"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            </AnimateOnScroll>

            {/* Contact Info */}
            <AnimateOnScroll animation="animate-slide-in-right">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Visit our showroom or reach out through any channel below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Our Showroom</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">Rajkot, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Phone</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">+91 95747 35141</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Email</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">info@dhbangles.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Business Hours</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">Mon – Sat: 10:00 AM – 8:00 PM</p>
                    <p className="font-body text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 bg-secondary rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Quick Inquiry?</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Message us directly on WhatsApp for the fastest response.
                </p>
                <a
                  href="https://wa.me/919574735141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-sm hover:bg-gold-dark transition-colors duration-300"
                >
                  <i className="fab fa-whatsapp text-lg" />
                  Chat on WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
