import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, Instagram, MessageCircle, Check } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  date: string;
  guests: string;
}

function FloatingInput({
  label,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="relative group">
      <label className="block text-sm font-medium text-espresso mb-1.5 group-focus-within:text-amber-accent transition-colors">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border border-coffee/20 rounded-xl text-espresso placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-accent/50 focus:border-amber-accent transition-all duration-300 hover:border-coffee/40"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 group">
      <div className="w-12 h-12 bg-amber-accent/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-accent/25 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-amber-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-espresso mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    guests: "2",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", date: "", guests: "2" });
  };

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Контакты
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso">
            Забронируйте столик
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <FloatingInput
              label="Ваше имя"
              type="text"
              required
              value={form.name}
              onChange={(v) => update("name", v)}
              placeholder="Александр"
            />
            <FloatingInput
              label="Телефон"
              type="tel"
              required
              value={form.phone}
              onChange={(v) => update("phone", v)}
              placeholder="+7 (999) 123-45-67"
            />
            <div className="grid grid-cols-2 gap-4">
              <FloatingInput
                label="Дата"
                type="date"
                required
                value={form.date}
                onChange={(v) => update("date", v)}
              />
              <div className="group">
                <label className="block text-sm font-medium text-espresso mb-1.5 group-focus-within:text-amber-accent transition-colors">
                  Гостей
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-coffee/20 rounded-xl text-espresso focus:outline-none focus:ring-2 focus:ring-amber-accent/50 focus:border-amber-accent transition-all duration-300 hover:border-coffee/40"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-accent to-amber-light hover:from-amber-light hover:to-amber-accent text-espresso py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 text-lg hover:shadow-lg hover:shadow-amber-accent/25 hover:scale-[1.02]"
            >
              {submitted ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Заявка отправлена!
                </motion.span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Забронировать
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactItem icon={MapPin} title="Адрес">
              <p className="text-text-muted">
                г. Москва, ул. Арбат, д. 24, стр. 1
              </p>
            </ContactItem>

            <ContactItem icon={Phone} title="Телефон">
              <p className="text-text-muted">+7 (495) 123-45-67</p>
            </ContactItem>

            <ContactItem icon={Clock} title="Часы работы">
              <p className="text-text-muted">Пн–Пт: 7:00 – 22:00</p>
              <p className="text-text-muted">Сб–Вс: 8:00 – 23:00</p>
            </ContactItem>

            <div className="flex gap-3 pt-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Send, label: "Telegram" },
                { icon: MessageCircle, label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-11 h-11 bg-espresso hover:bg-coffee rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-espresso/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-cream" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}