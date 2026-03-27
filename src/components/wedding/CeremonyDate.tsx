import { motion } from "framer-motion";

const events = [
  { time: "4:00 PM", title: "Baraat Arrival", detail: "Groom's procession" },
  { time: "5:00 PM", title: "Wedding Ceremony", detail: "Exchange of vows" },
  { time: "6:30 PM", title: "Cocktail Hour", detail: "Drinks & canapés" },
  { time: "7:30 PM", title: "Reception Dinner", detail: "Feast & celebration" },
  { time: "9:00 PM", title: "Dance & Party", detail: "Music & merriment" },
];

const CeremonyDate = () => {
  return (
    <section className="py-20 px-6 bg-cream relative overflow-hidden">
      {/* Decorative top ornament */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <svg width="120" height="24" viewBox="0 0 120 24" className="text-burgundy opacity-40">
          <path d="M0 12 Q30 0 60 12 Q90 24 120 12" stroke="currentColor" fill="none" strokeWidth="1" />
          <circle cx="60" cy="12" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.h2
        className="font-display text-burgundy text-3xl md:text-4xl text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        The Ceremony
      </motion.h2>

      <motion.p
        className="font-body text-burgundy-light text-lg text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Saturday, the Twenty-First of June
      </motion.p>

      <motion.p
        className="font-body text-burgundy text-2xl md:text-3xl text-center font-semibold mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        21 · 06 · 2025
      </motion.p>

      {/* Timeline */}
      <div className="max-w-md mx-auto relative">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[22px] top-2 bottom-2 w-px bg-burgundy/20"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
        />

        {events.map((event, index) => (
          <motion.div
            key={event.title}
            className="flex items-start gap-5 mb-8 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
          >
            {/* Dot */}
            <div className="relative flex-shrink-0 w-[45px] flex justify-center pt-1">
              <div className="w-3 h-3 rounded-full bg-burgundy border-2 border-cream" />
            </div>

            <div className="flex-1">
              <span className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 block">
                {event.time}
              </span>
              <h3 className="font-display text-burgundy text-lg leading-tight">
                {event.title}
              </h3>
              <p className="font-body text-burgundy-light text-sm mt-0.5">
                {event.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom ornament */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <svg width="60" height="12" viewBox="0 0 60 12" className="text-burgundy">
          <path d="M0 6 Q15 0 30 6 Q45 12 60 6" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </motion.div>
    </section>
  );
};

export default CeremonyDate;
