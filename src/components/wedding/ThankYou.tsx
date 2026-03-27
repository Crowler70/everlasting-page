import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section className="py-12 px-6 bg-cream flex items-center justify-center">
      <motion.div
        className="relative max-w-sm mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Decorative border card */}
        <div className="bg-burgundy rounded-sm p-1">
          <div className="bg-cream rounded-sm p-10 md:p-14" style={{
            clipPath: "polygon(0% 5%, 2% 0%, 5% 3%, 8% 0%, 11% 3%, 14% 0%, 17% 3%, 20% 0%, 23% 3%, 26% 0%, 29% 3%, 32% 0%, 35% 3%, 38% 0%, 41% 3%, 44% 0%, 47% 3%, 50% 0%, 53% 3%, 56% 0%, 59% 3%, 62% 0%, 65% 3%, 68% 0%, 71% 3%, 74% 0%, 77% 3%, 80% 0%, 83% 3%, 86% 0%, 89% 3%, 92% 0%, 95% 3%, 98% 0%, 100% 5%, 100% 95%, 98% 100%, 95% 97%, 92% 100%, 89% 97%, 86% 100%, 83% 97%, 80% 100%, 77% 97%, 74% 100%, 71% 97%, 68% 100%, 65% 97%, 62% 100%, 59% 97%, 56% 100%, 53% 97%, 50% 100%, 47% 97%, 44% 100%, 41% 97%, 38% 100%, 35% 97%, 32% 100%, 29% 97%, 26% 100%, 23% 97%, 20% 100%, 17% 97%, 14% 100%, 11% 97%, 8% 100%, 5% 97%, 2% 100%, 0% 95%)"
          }}>
            <h2 className="font-display text-3xl md:text-4xl text-burgundy mb-4">
              Thank You
            </h2>
            <p className="font-body text-base text-burgundy/70 mb-6">
              For joining us on this special day. Your presence is the best gift we could receive.
            </p>
            <p className="font-display text-2xl text-burgundy">
              Grace & Thomas
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThankYou;
