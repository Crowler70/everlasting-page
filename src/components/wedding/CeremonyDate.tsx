import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { WEDDING_DATE, WEDDING_DATE_DISPLAY } from "@/config/wedding";

const events = [
  { time: "4:00 PM", title: "Baraat Arrival", detail: "Groom's procession" },
  { time: "5:00 PM", title: "Wedding Ceremony", detail: "Exchange of vows" },
  { time: "6:30 PM", title: "Cocktail Hour", detail: "Drinks & canapés" },
  { time: "7:30 PM", title: "Reception Dinner", detail: "Feast & celebration" },
  { time: "9:00 PM", title: "Dance & Party", detail: "Music & merriment" },
];

const CeremonyDate = ({ onReveal }: { onReveal?: () => void }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    onReveal?.();
  };

  return (
    <section className="py-20 px-6 bg-cream relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="reveal-button"
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative top flourish */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
              <Sparkles className="w-5 h-5 text-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
            </motion.div>

            <motion.p
              className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The big day awaits
            </motion.p>

            {/* Elegant Round Button */}
            <motion.button
              onClick={handleReveal}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Outer glow ring */}
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Main button */}
              <div className="relative w-64 h-64 rounded-full bg-cream border-2 border-burgundy/20 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                {/* Inner gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 via-transparent to-gold/10" />
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-full" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-full" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-full" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-full" />
                
                {/* Pulsing ring */}
                <motion.span
                  className="absolute inset-2 rounded-full border border-gold/30"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center px-4">
                  <Sparkles className="w-6 h-6 text-gold mb-2" />
                  <span className="font-display text-burgundy text-lg md:text-xl leading-tight text-center">
                    Click here to<br />reveal the date
                  </span>
                </div>
              </div>
            </motion.button>

            {/* Decorative bottom flourish */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <Heart className="w-4 h-4 text-gold/50" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="date-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg mx-auto"
          >
            {/* Header with decorative flourish */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Top flourish */}
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                <svg className="w-8 h-8 text-gold" viewBox="0 0 40 40" fill="none">
                  <path d="M20 2C20 2 8 8 8 18C8 25 13 30 20 35C27 30 32 25 32 18C32 8 20 2 20 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="20" cy="18" r="3" fill="currentColor" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
              </div>

              <h2 className="font-display text-4xl md:text-5xl text-burgundy">
                The Ceremony
              </h2>

              {/* Gold line with diamond */}
              <div className="flex items-center justify-center mt-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
                <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
              </div>
            </motion.div>

            {/* Date Display */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-xl text-burgundy-light mb-2">
                {WEDDING_DATE_DISPLAY.fullText}
              </p>
              <p className="font-display text-3xl md:text-4xl text-burgundy font-semibold">
                {WEDDING_DATE_DISPLAY.day} · {WEDDING_DATE_DISPLAY.month} · {WEDDING_DATE_DISPLAY.year}
              </p>
            </motion.div>

            {/* Timeline with cards */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Vertical line */}
              <div className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-gold/50" />

              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="flex items-start gap-5 mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                >
                  {/* Dot with glow */}
                  <div className="relative flex-shrink-0 w-[45px] flex justify-center pt-1">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 w-3 h-3 bg-gold/30 rounded-full blur-md"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <div className="w-3 h-3 rounded-full bg-burgundy border-2 border-cream" />
                    </div>
                  </div>

                  {/* Event card */}
                  <div className="flex-1 bg-white/50 rounded-lg px-4 py-3 border border-burgundy/10">
                    <span className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-gold block mb-1">
                      {event.time}
                    </span>
                    <h3 className="font-display text-burgundy text-base leading-tight">
                      {event.title}
                    </h3>
                    <p className="font-body text-burgundy/60 text-sm mt-0.5">
                      {event.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom flourish */}
            <motion.div
              className="flex items-center justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <svg className="w-4 h-4 text-gold/50 mx-2" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CeremonyDate;
