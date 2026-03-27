import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart } from "lucide-react";

const Gifts = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-12 px-6 bg-cream-dark overflow-hidden">
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
            Wedding Registry
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            Gifts
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Gifts Content - Open Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Gift Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-burgundy/5 flex items-center justify-center">
                <Gift className="w-10 h-10 text-burgundy" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Heart className="w-3 h-3 text-gold" fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <Heart className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/50 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-body text-lg text-burgundy/80 max-w-md mx-auto mb-4">
              Your presence is the best gift we could receive. However, if you wish to contribute to our new life together, you can do so via bank transfer.
            </p>

            <p className="font-display text-xl italic text-burgundy mb-6">
              With all our love
            </p>

            {/* Bank Details Button */}
            <motion.button
              className="inline-flex items-center gap-2 font-sans-wedding text-xs tracking-[0.2em] uppercase bg-gradient-to-r from-burgundy to-burgundy/80 text-cream px-8 py-3 rounded-full hover:from-burgundy/90 hover:to-burgundy transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setShowDetails(!showDetails)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gift className="w-4 h-4" />
              Bank details
            </motion.button>
          </motion.div>

          {/* Expandable Bank Details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                className="max-w-sm mx-auto text-center space-y-3 pt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/30" />
                  <span className="font-sans-wedding text-[10px] tracking-[0.15em] uppercase text-gold">
                    Account Details
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/30" />
                </div>
                <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
                  Account Holder: Grace & Thomas
                </p>
                <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
                  Routing Number: XXXXXXXX
                </p>
                <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
                  Account Number: XXXXXXXXX
                </p>
                <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
                  Reference: Grace & Thomas Wedding
                </p>
              </motion.div>
            )}
          </AnimatePresence>

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

export default Gifts;
