import { motion } from "framer-motion";
import venueIllustration from "@/assets/venue-illustration.png";

const Venue = () => {
  return (
    <section className="py-24 px-6 bg-cream">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.35em] uppercase text-burgundy/60 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        The celebration will take place at
      </motion.p>

      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={venueIllustration}
          alt="Venue Illustration"
          className="w-full max-w-md mx-auto"
        />
      </motion.div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-4">
          Villa Medicea di Artimino
        </h2>
        <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-1">
          Via di Papa Leone X, 28
        </p>
        <p className="font-sans-wedding text-xs tracking-[0.2em] uppercase text-burgundy/60 mb-6">
          Artimino, Florencia
        </p>
        <p className="font-body text-xl text-burgundy">September 10, 2027</p>
        <p className="font-body text-lg italic text-burgundy/60 mt-2">
          Reception to Follow
        </p>
      </motion.div>
    </section>
  );
};

export default Venue;
