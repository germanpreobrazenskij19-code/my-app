import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна Петрова",
    role: "Дизайнер",
    text: "Лучший кофе в городе! Прихожу сюда каждое утро уже два года. Атмосфера невероятная, а латте-арт — настоящее произведение искусства.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Дмитрий Козлов",
    role: "Разработчик",
    text: "Идеальное место для работы. Быстрый Wi-Fi, вкусный кофе и никто не торопит. Овсянка с ягодами — просто бомба!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Мария Сидорова",
    role: "Фотограф",
    text: "Обожаю их сезонное меню! Тыквенный латте осенью и лавандовый раф летом. Всегда что-то новое и вкусное.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Алексей Иванов",
    role: "Предприниматель",
    text: "Провожу здесь деловые встречи. Отличная кухня, стильный интерьер и внимательный персонал. Рекомендую тирамису!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-accent text-amber-accent" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Отзывы
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Что говорят гости
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group border border-transparent hover:border-amber-accent/20"
            >
              <div className="absolute -top-2 -left-1 text-amber-accent/10 font-display text-7xl font-bold leading-none select-none group-hover:text-amber-accent/20 transition-colors">
                «
              </div>
              <div className="relative">
                <Stars count={t.rating} />
                <p className="text-text-muted text-sm leading-relaxed mt-4 mb-6">
                  «{t.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-amber-accent/30 ring-offset-2 ring-offset-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-espresso text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}