import { motion, AnimatePresence } from "framer-motion";
import curtainImage from "@/assets/curtain-closed.jpg";

interface CurtainHeroProps {
  isOpen: boolean;
  onOpen: () => void;
}

const CurtainHero = ({ isOpen, onOpen }: CurtainHeroProps) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={onOpen}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* Left curtain */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
            exit={{ x: "-105%", skewY: -2 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              x: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
              skewY: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <div
              className="w-[200%] h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${curtainImage})` }}
            />
          </motion.div>

          {/* Right curtain */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
            exit={{ x: "105%", skewY: 2 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              x: { type: "spring", stiffness: 60, damping: 18, mass: 1.2 },
              skewY: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <div
              className="w-[200%] h-full bg-cover bg-center -translate-x-1/2"
              style={{ backgroundImage: `url(${curtainImage})` }}
            />
          </motion.div>

          {/* Tap text */}
          <motion.p
            className="relative z-10 text-cream font-sans-wedding text-sm tracking-[0.3em] uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to continue
          </motion.p>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default CurtainHero;
