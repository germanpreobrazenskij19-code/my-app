import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Bean, Megaphone, TrendingUp, Monitor } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Узнаваемый бренд",
    description:
      "Сильный бренд «Аромат» с лояльной аудиторией и высокой узнаваемостью в городах присутствия.",
  },
  {
    icon: GraduationCap,
    title: "Полное обучение",
    description:
      "Двухнедельное обучение команды: от бариста-мастерства до управления кофейней и работы с клиентами.",
  },
  {
    icon: Bean,
    title: "Поставки зерна",
    description:
      "Централизованные закупки спешелти-зерна напрямую у фермеров по выгодным ценам для всей сети.",
  },
  {
    icon: Megaphone,
    title: "Маркетинг",
    description:
      "Готовые маркетинговые материалы, SMM-поддержка и участие в федеральных рекламных кампаниях.",
  },
  {
    icon: TrendingUp,
    title: "Быстрая окупаемость",
    description:
      "Средний срок окупаемости — 14 месяцев благодаря отлаженным процессам и высокой маржинальности.",
  },
  {
    icon: Monitor,
    title: "IT-система",
    description:
      "Собственная CRM, система учёта, мобильное приложение для лояльности и аналитическая панель.",
  },
];

export default function FranchiseBenefits() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Преимущества
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Почему «Аромат»
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-amber-accent/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-accent/25 transition-colors">
                <b.icon className="w-7 h-7 text-amber-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-espresso mb-2">
                {b.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}