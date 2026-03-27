import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const ThankYou = () => {
  return (
    <section className="py-12 px-6 bg-cream overflow-hidden">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Thank You Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative card with wavy edges */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Outer burgundy border */}
            <div className="bg-burgundy rounded-sm p-[3px]">
              {/* Inner content with wavy clip */}
              <div 
                className="bg-cream relative overflow-hidden px-8 py-12 md:px-12 md:py-14"
                style={{
                  clipPath: "polygon(0% 3%, 3% 0%, 7% 2%, 12% 0%, 17% 2%, 22% 0%, 27% 2%, 32% 0%, 37% 2%, 42% 0%, 47% 2%, 52% 0%, 57% 2%, 62% 0%, 67% 2%, 72% 0%, 77% 2%, 82% 0%, 87% 2%, 92% 0%, 97% 2%, 100% 3%, 100% 97%, 97% 100%, 92% 98%, 87% 100%, 82% 98%, 77% 100%, 72% 98%, 67% 100%, 62% 98%, 57% 100%, 52% 98%, 47% 100%, 42% 98%, 37% 100%, 32% 98%, 27% 100%, 22% 98%, 17% 100%, 12% 98%, 7% 100%, 3% 98%, 0% 100%, 0% 97%)"
                }}
              >
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />

                {/* Content */}
                <div className="text-center">
                  {/* Heart icon */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <Heart className="w-12 h-12 text-gold relative z-10" fill="currentColor" strokeWidth={1} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className="font-display text-4xl md:text-5xl text-burgundy mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Thank You
                  </motion.h2>

                  {/* Gold divider */}
                  <motion.div
                    className="flex items-center justify-center gap-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <Sparkles className="w-4 h-4 text-gold" />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent via-gold to-transparent" />
                  </motion.div>

                  {/* Message */}
                  <motion.p
                    className="font-body text-lg text-burgundy/80 max-w-xs mx-auto mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    For joining us on this special day. Your presence is the best gift we could receive.
                  </motion.p>

                  {/* Names */}
                  <motion.p
                    className="font-display text-2xl md:text-3xl text-burgundy"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Grace & Thomas
                  </motion.p>
                </div>

                {/* Bottom flourish */}
                <motion.div
                  className="flex items-center justify-center mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/30" />
                  <svg className="w-4 h-4 text-gold/50 mx-2" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/30" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThankYou;
