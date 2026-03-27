import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const VENUE_ADDRESS = "Vinterra Estate, 2000 Silverado Trail, Napa, California 94558";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(VENUE_ADDRESS)}`;
const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.2345678901234!2d-122.298!3d38.312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8080abcd12345678%3A0xabcdef1234567890!2sVinterra%20Estate!5e0!3m2!1sen!2sus!4v1234567890`;

const Location = () => {
  return (
    <section className="py-12 px-6 bg-cream-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="subtle-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20M0 20L20 40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-burgundy" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subtle-pattern)" />
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
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
            Find your way
          </p>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            Location
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Map Card - Floating Effect */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-burgundy/5 via-transparent to-burgundy/5 rounded-2xl" />
          <div className="absolute inset-0 border border-burgundy/10 rounded-2xl" />
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-burgundy/30 rounded-tl-2xl z-10" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-burgundy/30 rounded-tr-2xl z-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-burgundy/30 rounded-bl-2xl z-10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-burgundy/30 rounded-br-2xl z-10" />
            
            <div className="aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/6]">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
                className="rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Venue Info & Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <p className="font-display text-2xl text-burgundy">
              Vinterra Estate
            </p>
          </div>
          <p className="font-sans-wedding text-sm tracking-[0.15em] uppercase text-burgundy/60 mb-6">
            2000 Silverado Trail · Napa, California
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              className="font-sans-wedding text-xs tracking-[0.2em] uppercase bg-burgundy text-cream hover:bg-burgundy-light px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom flourish */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
          <div className="w-2 h-2 rotate-45 bg-gold/50" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
