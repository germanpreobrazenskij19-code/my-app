import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function FloatingBean({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ delay }}
      className={`absolute ${className}`}
    >
      <div className="animate-float-slow">
        <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
          <ellipse cx="20" cy="28" rx="16" ry="24" fill="#8D6E63" />
          <path d="M20 4 C20 4, 18 28, 20 52" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&h=900&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />

      <FloatingBean className="top-[15%] left-[8%] hidden lg:block" delay={1.5} />
      <FloatingBean className="top-[25%] right-[10%] hidden lg:block" delay={2.0} />
      <FloatingBean className="bottom-[20%] left-[12%] hidden lg:block" delay={2.5} />
      <FloatingBean className="top-[60%] right-[6%] hidden lg:block" delay={1.8} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-amber-accent font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Specialty Coffee
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Каждая чашка —{" "}
          <span className="text-shimmer italic">история</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Свежая обжарка, уютная атмосфера и лучший кофе в городе.
          Приходите за вдохновением.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="relative bg-amber-accent hover:bg-amber-light text-espresso px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl hover:shadow-amber-accent/30"
          >
            Посмотреть меню
          </a>
          <a
            href="#contact"
            className="border-2 border-cream/40 hover:border-cream text-cream px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:bg-cream/10"
          >
            Забронировать столик
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-cream transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}