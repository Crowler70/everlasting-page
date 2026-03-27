import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import venueIllustration from "@/assets/venue-illustration.png";

const Venue = () => {
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
            The celebration will take place at
          </p>
          
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            The Venue
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Venue Content - No Card, Open Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Venue Illustration */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={venueIllustration}
              alt="Venue Illustration"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <Building2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-2xl md:text-3xl text-burgundy">
                Vinterra Estate
              </h3>
            </div>
            <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-1">
              2000 Silverado Trail
            </p>
            <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-8">
              Napa, California
            </p>

            {/* Date */}
            <p className="font-display text-xl text-burgundy mb-2">September 10, 2027</p>
            <p className="font-body text-lg italic text-burgundy/60">
              Reception to Follow
            </p>
          </motion.div>

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

export default Venue;
