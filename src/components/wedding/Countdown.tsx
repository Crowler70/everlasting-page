import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { WEDDING_DATE } from "@/config/wedding";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, min: 0, sec: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      min: Math.floor((diff / (1000 * 60)) % 60),
      sec: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.min, label: "Min" },
    { value: timeLeft.sec, label: "Sec" },
  ];

  return (
    <section className="py-12 px-6 bg-cream overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header with decorative flourish */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top flourish */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <svg className="w-8 h-8 text-gold" viewBox="0 0 40 40" fill="none">
              <path d="M20 2C20 2 8 8 8 18C8 25 13 30 20 35C27 30 32 25 32 18C32 8 20 2 20 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="18" r="3" fill="currentColor" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            The Countdown
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Countdown Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              {/* Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-burgundy/10 p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-center">
                  <span className="font-display text-3xl md:text-5xl text-burgundy">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gold" />
                    <span className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gold diamond accent below */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <div className="w-2 h-2 rotate-45 bg-gold" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center font-body text-lg italic text-burgundy/60 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          until the big day
        </motion.p>

        {/* Bottom flourish */}
        <motion.div
          className="flex items-center justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/30" />
          <svg className="w-4 h-4 text-gold/50 mx-2" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Countdown;
