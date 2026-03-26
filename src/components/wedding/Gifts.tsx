import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import giftIcon from "@/assets/gift-icon.png";

const Gifts = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-24 px-6 bg-cream-dark">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy/60 text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Wedding registry
      </motion.p>

      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={giftIcon} alt="Gift" className="w-16 h-16 opacity-70" />
      </motion.div>

      <motion.h2
        className="font-display text-4xl text-burgundy text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Gifts
      </motion.h2>

      <motion.p
        className="font-body text-lg text-burgundy/80 text-center max-w-md mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Your presence is the best gift we could receive. However, if you wish to contribute to our new life together, you can do so via bank transfer.
      </motion.p>

      <motion.p
        className="font-body text-xl italic text-burgundy/60 text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        With all our love
      </motion.p>

      <div className="flex justify-center">
        <motion.button
          className="font-sans-wedding text-xs tracking-[0.2em] uppercase border border-burgundy/40 text-burgundy px-8 py-3 rounded-sm hover:bg-burgundy hover:text-cream transition-colors duration-300"
          onClick={() => setShowDetails(!showDetails)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Bank details
        </motion.button>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="max-w-sm mx-auto mt-8 text-center space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
              Account Holder: Sam & Sofia
            </p>
            <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
              IBAN: ES00 0000 0000 0000 0000 0000
            </p>
            <p className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60">
              Reference: Sam & Sofia Wedding
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gifts;
