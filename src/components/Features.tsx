import React from "react";
import { motion } from "framer-motion";
import { Bean, Flame, Sofa, Wifi } from "lucide-react";

const features = [
  {
    icon: Bean,
    title: "Зерно из Бразилии",
    description:
      "Прямые поставки от фермеров. Только спешелти-зерно высшего качества.",
  },
  {
    icon: Flame,
    title: "Своя обжарка",
    description:
      "Обжариваем зерно каждую неделю в собственном цеху для максимальной свежести.",
  },
  {
    icon: Sofa,
    title: "Уютная атмосфера",
    description:
      "Мягкие кресла, приглушённый свет и спокойная музыка для вашего комфорта.",
  },
  {
    icon: Wifi,
    title: "Бесплатный Wi-Fi",
    description:
      "Высокоскоростной интернет и розетки у каждого столика для продуктивной работы.",
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFB300 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Почему мы
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Наши преимущества
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-coffee/30 backdrop-blur-sm border border-coffee-light/20 rounded-2xl p-7 text-center hover:bg-coffee/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-accent/10 hover:border-amber-accent/30"
            >
              <div className="w-14 h-14 bg-amber-accent/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-accent/30 group-hover:scale-110 transition-all duration-300">
                <feat.icon className="w-7 h-7 text-amber-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-accent/40 to-transparent mx-auto mb-5" />
              <h3 className="font-display text-lg font-semibold text-cream mb-3">
                {feat.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}