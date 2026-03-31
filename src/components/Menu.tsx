import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, categories } from "@/data/menu";
import type { MenuItem } from "@/data/menu";

const popularIds = [2, 4, 9, 12];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const isPopular = popularIds.includes(item.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="overflow-hidden h-48 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <span className="text-cream font-display text-lg font-semibold tracking-wide">
            {item.name}
          </span>
        </div>
        {isPopular && (
          <div className="absolute top-3 right-3 bg-amber-accent text-espresso text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-glow">
            Хит
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-semibold text-espresso group-hover:text-coffee transition-colors">
            {item.name}
          </h3>
          <span className="text-amber-accent font-bold text-lg whitespace-nowrap ml-3">
            {item.price} ₽
          </span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("coffee");

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Наше меню
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Выберите свой вкус
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-full p-1.5 flex flex-wrap justify-center gap-1.5 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-espresso text-cream shadow-lg shadow-espresso/20"
                    : "text-coffee hover:bg-espresso/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}