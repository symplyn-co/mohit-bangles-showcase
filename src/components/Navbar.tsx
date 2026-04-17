import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
         <span
  className={`font-logo text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
    scrolled ? "text-[#2C2C2C]" : "text-[#cec9b9]"
  }`}
>
  Mohit<span className="text-primary"> Bangles</span>
</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
  location.pathname === link.to
    ? "text-primary"
    : scrolled
    ? "text-black"
    : "text-gray-400"
}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
  className={`md:hidden text-xl transition-colors duration-300 ${
    scrolled ? "text-[#2C2C2C]" : "text-[#cec9b9]"
  }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block font-body text-sm font-medium tracking-wide uppercase py-2 transition-colors duration-300 hover:text-primary ${
  location.pathname === link.to
    ? "text-primary"
    : "text-gray-400"
}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
