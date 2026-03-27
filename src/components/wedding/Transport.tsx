import { motion } from "framer-motion";

const Transport = () => {
  return (
    <section className="py-12 px-6 bg-cream">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy/60 text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        How to get there
      </motion.p>

      <motion.h2
        className="font-display text-4xl text-burgundy text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Transport
      </motion.h2>

      <motion.p
        className="font-body text-lg text-burgundy/80 text-center max-w-md mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We have arranged shuttle service from the hotel district so you can enjoy the celebration without worries.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="text-center">
          <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-2">
            Shuttle departure
          </p>
          <p className="font-display text-xl text-burgundy">Napa Valley Hotel District</p>
          <p className="font-display text-2xl text-burgundy mt-1">4:00 PM</p>
        </div>

        <div className="w-px h-12 bg-burgundy/20 hidden md:block" />

        <div className="text-center">
          <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-2">
            Return to hotels
          </p>
          <p className="font-display text-2xl text-burgundy">10:00 PM</p>
        </div>
      </motion.div>

      <motion.p
        className="font-body text-sm italic text-burgundy/50 text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Please indicate in your RSVP if you need transport
      </motion.p>
    </section>
  );
};

export default Transport;
