import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface FranchiseFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  budget: string;
  message: string;
}

const budgetOptions = [
  "до 2 млн ₽",
  "2–3 млн ₽",
  "3–5 млн ₽",
  "более 5 млн ₽",
];

export default function FranchiseForm() {
  const [form, setForm] = useState<FranchiseFormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", email: "", city: "", budget: "", message: "" });
  };

  const update = (field: keyof FranchiseFormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full px-4 py-3 bg-white border border-coffee/20 rounded-xl text-espresso placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-accent/50 focus:border-amber-accent transition-all";

  return (
    <section id="franchise-form" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Заявка
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Станьте партнёром
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto">
            Заполните форму, и мы свяжемся с вами в течение 24 часов, чтобы обсудить детали.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-espresso mb-1.5">
                Имя
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Александр"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-espresso mb-1.5">
                Телефон
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+7 (999) 123-45-67"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-espresso mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="alex@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-espresso mb-1.5">
                Город
              </label>
              <input
                type="text"
                required
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Москва"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-espresso mb-1.5">
              Бюджет
            </label>
            <select
              required
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>
                Выберите бюджет
              </option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-espresso mb-1.5">
              Сообщение
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Расскажите о себе и вашем опыте (необязательно)"
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-accent hover:bg-amber-light text-espresso py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors text-lg"
          >
            {submitted ? (
              "Заявка отправлена!"
            ) : (
              <>
                <Send className="w-5 h-5" />
                Отправить заявку
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}