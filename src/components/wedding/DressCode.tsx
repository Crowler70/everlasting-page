import { motion } from "framer-motion";
import dresscodeIllustration from "@/assets/dresscode-illustration.png";

const DressCode = () => {
  return (
    <section className="py-24 px-6 bg-cream">
      <motion.h2
        className="font-display text-4xl md:text-5xl text-burgundy text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Dress Code
      </motion.h2>

      <motion.div
        className="max-w-xs mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={dresscodeIllustration}
          alt="Dress Code Illustration"
          className="w-full max-w-[200px] mx-auto"
        />
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="font-body text-lg text-burgundy/80 max-w-md mx-auto mb-6">
          We invite you to dress elegantly and formally to celebrate this special day with us.
        </p>
        <p className="font-display text-2xl text-burgundy mb-2">Formal Attire</p>
        <p className="font-body text-sm italic text-burgundy/50">
          Please avoid wearing white
        </p>
      </motion.div>
    </section>
  );
};

export default DressCode;
