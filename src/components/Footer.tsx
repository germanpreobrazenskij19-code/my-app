import React from "react";
import { Coffee, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { href: "#about", label: "О нас", type: "anchor" as const },
  { href: "#menu", label: "Меню", type: "anchor" as const },
  { href: "#testimonials", label: "Отзывы", type: "anchor" as const },
  { href: "#contact", label: "Контакты", type: "anchor" as const },
  { href: "/franchise", label: "Франшиза", type: "route" as const },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso pt-0 pb-12 overflow-hidden">
      <svg
        className="w-full h-12 sm:h-16 -mb-1"
        viewBox="0 0 1440 64"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z"
          fill="#3E2723"
        />
      </svg>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#8D6E63 1px, transparent 1px), linear-gradient(90deg, #8D6E63 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Coffee className="w-6 h-6 text-amber-accent group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-amber-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display text-xl font-bold text-cream">
              Аромат
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-cream/60 hover:text-amber-accent transition-all duration-300 text-sm hover:scale-105"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/60 hover:text-amber-accent transition-all duration-300 text-sm hover:scale-105"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>

        <div className="border-t border-coffee/30 mt-8 pt-8 text-center">
          <p className="text-cream/40 text-sm flex items-center justify-center gap-1">
            © 2025 Аромат. Сделано с{" "}
            <Heart className="w-3.5 h-3.5 fill-amber-accent text-amber-accent animate-heartbeat" />{" "}
            и отличным кофе
          </p>
        </div>
      </div>
    </footer>
  );
}