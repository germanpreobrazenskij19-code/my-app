import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.round(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-bold text-espresso">
        {count}
        {suffix}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full opacity-20 hidden sm:block">
              <div
                className="w-full h-full rounded-2xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #8D6E63 1.5px, transparent 1.5px)",
                  backgroundSize: "18px 18px",
                }}
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=700&fit=crop"
                alt="Интерьер кофейни"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-accent text-espresso rounded-2xl p-6 shadow-xl hidden sm:block animate-pulse-glow">
              <p className="font-display text-4xl font-bold">7+</p>
              <p className="text-sm font-medium">лет с вами</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
              О нас
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-6 leading-tight">
              Кофе — наша <span className="text-coffee italic">страсть</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:text-espresso first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                «Аромат» — это не просто кофейня, это место, где каждый
                почувствует себя как дома. Мы открылись в 2018 году с простой
                идеей: делать лучший кофе в городе.
              </p>
              <p>
                Мы закупаем зёрна напрямую у фермеров из Бразилии, Эфиопии и
                Колумбии, обжариваем их в нашем цеху и готовим каждую чашку с
                любовью и вниманием к деталям.
              </p>
              <p>
                Наши бариста проходят обучение у чемпионов России по латте-арту,
                а наш шеф-кондитер создаёт десерты, которые идеально дополняют
                вкус кофе.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              <div>
                <AnimatedCounter target={15} suffix="+" />
                <p className="text-text-muted text-sm">сортов зерна</p>
              </div>
              <div>
                <AnimatedCounter target={3} suffix="k+" />
                <p className="text-text-muted text-sm">гостей в месяц</p>
              </div>
              <div>
                <AnimatedCounter target={4} suffix=".9" />
                <p className="text-text-muted text-sm">рейтинг</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}