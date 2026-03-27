import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2027-09-10T16:00:00");

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
    <section className="py-12 px-6 bg-cream">
      <motion.h2
        className="font-display text-4xl md:text-5xl text-burgundy text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Countdown
      </motion.h2>

      <div className="flex justify-center gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-burgundy/30 flex items-center justify-center">
              <span className="font-display text-2xl md:text-3xl text-burgundy">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <span className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 mt-2">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center font-body text-lg italic text-burgundy/60 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        until the big day
      </motion.p>
    </section>
  );
};

export default Countdown;
