import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2,5 млн ₽", label: "Сумма инвестиций" },
  { value: "14 мес.", label: "Срок окупаемости" },
  { value: "1,2 млн ₽", label: "Средняя выручка / мес." },
  { value: "5%", label: "Роялти" },
];

export default function FranchiseNumbers() {
  return (
    <section className="py-20 sm:py-28 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Цифры
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Финансовая модель
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-coffee/30 backdrop-blur-sm border border-coffee-light/20 rounded-2xl p-8 text-center"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-amber-accent mb-2">
                {s.value}
              </p>
              <p className="text-cream/60 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}