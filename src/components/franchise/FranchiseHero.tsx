import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FranchiseHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1600&h=900&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/55 to-espresso/85" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-amber-accent font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Франшиза
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Откройте свой{" "}
          <span className="text-amber-accent italic">Аромат</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Присоединяйтесь к сети успешных кофеен. Проверенная бизнес-модель,
          полное сопровождение и сильный бренд.
        </motion.p>
        <motion.a
          href="#franchise-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-2 bg-amber-accent hover:bg-amber-light text-espresso px-8 py-3.5 rounded-full font-semibold transition-colors text-lg"
        >
          Оставить заявку
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}