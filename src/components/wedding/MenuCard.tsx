import { motion } from "framer-motion";
import dinnerIllustration from "@/assets/dinner-illustration.png";

const menuItems = [
  {
    title: "Cocktail Hour",
    main: "Artisan Appetizers",
    detail: "Bruschetta, cheese boards & seasonal crudités",
  },
  {
    title: "First Course",
    main: "Caesar Salad",
    detail: "with house-made croutons and parmesan",
  },
  {
    title: "Main Course",
    main: "Filet Mignon",
    detail: "with red wine reduction and seasonal vegetables",
  },
  {
    title: "Dessert",
    main: "Wedding Cake",
    detail: "with fresh berry compote and vanilla cream",
  },
];

const MenuCard = () => {
  return (
    <section className="py-12 px-6 bg-cream-dark">
      <motion.div
        className="max-w-md mx-auto relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Ornate border using SVG */}
        <div className="relative border-2 border-burgundy/40 rounded-sm p-8 md:p-12">
          {/* Corner ornaments */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-burgundy rounded-tl-sm" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-burgundy rounded-tr-sm" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-burgundy rounded-bl-sm" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-burgundy rounded-br-sm" />

          {/* Wavy top border decoration */}
          <svg className="absolute -top-4 left-1/2 -translate-x-1/2 w-24" viewBox="0 0 100 20" fill="none">
            <path d="M0 15 Q 12.5 0 25 15 Q 37.5 30 50 15 Q 62.5 0 75 15 Q 87.5 30 100 15" stroke="hsl(var(--burgundy))" strokeWidth="1.5" fill="none" opacity="0.4"/>
          </svg>

          <div className="space-y-6 text-center">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <h3 className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-base text-burgundy">{item.main}</p>
                <p className="font-body text-sm italic text-burgundy/60">{item.detail}</p>
              </motion.div>
            ))}

            <motion.p
              className="font-display text-xl text-burgundy pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Premium Wine Selection
            </motion.p>
          </div>

          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src={dinnerIllustration}
              alt="Dinner table"
              className="w-48 opacity-60"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuCard;
