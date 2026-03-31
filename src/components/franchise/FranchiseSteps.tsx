import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Заявка",
    description: "Заполните форму на сайте или позвоните нам. Мы свяжемся с вами в течение 24 часов.",
  },
  {
    number: 2,
    title: "Встреча",
    description: "Проведём онлайн- или личную встречу, ответим на вопросы и покажем финансовую модель.",
  },
  {
    number: 3,
    title: "Договор",
    description: "Подписание договора франшизы, выбор локации и согласование дизайн-проекта.",
  },
  {
    number: 4,
    title: "Обучение",
    description: "Двухнедельное обучение вашей команды в действующей кофейне сети «Аромат».",
  },
  {
    number: 5,
    title: "Открытие",
    description: "Торжественное открытие с маркетинговой поддержкой и сопровождением на старте.",
  },
];

export default function FranchiseSteps() {
  return (
    <section className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Процесс
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Как открыть франшизу
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-coffee/20 sm:left-8" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex gap-5 sm:gap-7"
              >
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-amber-accent rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="font-display text-lg sm:text-2xl font-bold text-espresso">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-xl font-semibold text-espresso mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}