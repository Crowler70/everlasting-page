import { motion } from "framer-motion";
import { Car, Home, Bus } from "lucide-react";

const Transport = () => {
  return (
    <section className="py-12 px-6 bg-cream overflow-hidden">
      <motion.div
        className="max-w-lg mx-auto"
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

          {/* Subtitle */}
          <p className="font-sans-wedding text-xs tracking-[0.25em] uppercase text-burgundy/60 mb-2">
            How to get there
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            Transport
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Transport Content - Open Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="font-body text-lg text-burgundy/80 text-center max-w-md mx-auto mb-10">
              We have arranged shuttle service from the hotel district so you can enjoy the celebration without worries.
            </p>
          </motion.div>

          {/* Transport Cards - No Card Container */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Departure */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy/5 flex items-center justify-center mx-auto mb-3">
                <Car className="w-7 h-7 text-burgundy" strokeWidth={1.5} />
              </div>
              <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 mb-2">
                Shuttle departure
              </p>
              <p className="font-display text-lg text-burgundy">Napa Valley Hotel District</p>
              <p className="font-display text-2xl text-burgundy mt-1">4:00 PM</p>
            </div>

            {/* Divider */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <Bus className="w-5 h-5 text-gold" />
                <div className="h-px w-10 bg-gradient-to-l from-transparent via-gold to-transparent" />
              </div>
            </div>

            {/* Return */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy/5 flex items-center justify-center mx-auto mb-3">
                <Home className="w-7 h-7 text-burgundy" strokeWidth={1.5} />
              </div>
              <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 mb-2">
                Return to hotels
              </p>
              <p className="font-display text-2xl text-burgundy">10:00 PM</p>
            </div>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-gold/40" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-transparent" />
          </motion.div>

          {/* Note */}
          <motion.p
            className="font-body text-sm italic text-burgundy/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Please indicate in your RSVP if you need transport
          </motion.p>

          {/* Bottom flourish */}
          <motion.div
            className="flex items-center justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
            <svg className="w-4 h-4 text-gold/50 mx-2" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Transport;
