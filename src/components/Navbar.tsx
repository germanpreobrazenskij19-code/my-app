import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "О нас", type: "anchor" as const },
  { href: "#menu", label: "Меню", type: "anchor" as const },
  { href: "#testimonials", label: "Отзывы", type: "anchor" as const },
  { href: "#contact", label: "Контакты", type: "anchor" as const },
  { href: "/franchise", label: "Франшиза", type: "route" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/80 backdrop-blur-xl shadow-2xl shadow-espresso/20 border-b border-coffee-light/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Coffee className="w-7 h-7 text-amber-accent group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-amber-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold text-cream tracking-wide">
              Аромат
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-cream/80 hover:text-amber-accent transition-colors text-sm font-medium tracking-wide group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-accent rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHome ? link.href : "/" + link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className="relative text-cream/80 hover:text-amber-accent transition-colors text-sm font-medium tracking-wide group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-accent rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
            <a
              href={isHome ? "#contact" : "/#contact"}
              className="relative bg-amber-accent hover:bg-amber-light text-espresso px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-accent/25"
            >
              Забронировать
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2 hover:bg-cream/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, y: 0, backdropFilter: "blur(20px)" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-espresso/90 backdrop-blur-xl border-t border-coffee-light/10 shadow-2xl"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.type === "route" ? (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-cream/80 hover:text-amber-accent hover:bg-cream/5 transition-all py-3 px-3 rounded-xl text-lg"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={isHome ? link.href : "/" + link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="block text-cream/80 hover:text-amber-accent hover:bg-cream/5 transition-all py-3 px-3 rounded-xl text-lg"
                  >
                    {link.label}
                  </a>
                )}
              </motion.div>
            ))}
            <motion.a
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block bg-amber-accent text-espresso text-center px-5 py-3.5 rounded-full font-semibold mt-3"
            >
              Забронировать
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}