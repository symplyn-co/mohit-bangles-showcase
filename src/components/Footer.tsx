import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-logo font-heading text-2xl font-bold mb-4">
              DH <span className="text-primary">Bangles</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Crafting timeless elegance in gold since generations. Every bangle tells a story of tradition, artistry, and love.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-300 text-lg">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-300 text-lg">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-300 text-lg">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors duration-300 text-lg">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "Categories", to: "/categories" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 font-body text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1" />
                <span>Rajkot, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary" />
                <span>+91 95747 35141</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary" />
                <span>info@dhbangles.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} DH Bangles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
