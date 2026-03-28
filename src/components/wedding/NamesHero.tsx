import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import elegantBackground from "@/assets/backgroundless_elegant_hero.svg";

const NamesHero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-cream relative overflow-hidden">
      <img
        src={elegantBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.35em] uppercase text-burgundy mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        You are cordially invited to celebrate the wedding of
      </motion.p>

      <motion.h1
        className="font-display text-6xl md:text-8xl text-burgundy font-normal"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Jobair
      </motion.h1>

      <motion.span
        className="font-body text-3xl md:text-4xl text-burgundy italic my-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &
      </motion.span>

      <motion.h1
        className="font-display text-6xl md:text-8xl text-burgundy font-normal"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Muntaka
      </motion.h1>

      <motion.p
        className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/70 mt-20 max-w-md text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        We would like to invite you to celebrate with us the most special day of
        our lives. It would be an honor to have you present at this important
        moment.
      </motion.p>

      {/* Scroll down indicator */}
      <motion.div
        className="mt-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.p className="font-sans-wedding text-xs tracking-[0.25em] uppercase text-burgundy/50">
          Scroll down
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-burgundy/40" />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default NamesHero;
