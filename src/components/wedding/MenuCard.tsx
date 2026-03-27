import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat, Cake } from "lucide-react";

const menuItems = [
  {
    title: "First Course",
    icon: UtensilsCrossed,
    main: "Caesar Salad",
    detail: "with house-made croutons and parmesan",
  },
  {
    title: "Main Course",
    icon: ChefHat,
    main: "Filet Mignon",
    detail: "with red wine reduction and seasonal vegetables",
  },
  {
    title: "Dessert",
    icon: Cake,
    main: "Wedding Cake",
    detail: "with fresh berry compote and vanilla cream",
  },
];

const MenuCard = () => {
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

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            Menu
          </h2>
          
          {/* Subtitle */}
          <p className="font-sans-wedding text-xs tracking-[0.25em] uppercase text-burgundy/60 mt-2">
            Our Wedding Menu
          </p>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Menu Content - Open Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Menu Items - Shifted to middle */}
          <div className="max-w-md mx-auto pl-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                {/* Course row */}
                <div className="flex items-center gap-4 py-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/5 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-burgundy" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-sans-wedding text-[10px] tracking-[0.25em] uppercase text-burgundy/60 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-display text-lg text-burgundy leading-tight">
                      {item.main}
                    </p>
                    <p className="font-body text-sm italic text-burgundy/60 mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Gold divider between courses (except last) */}
                {index < menuItems.length - 1 && (
                  <div className="flex items-center gap-2 pb-2 ml-14">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MenuCard;
