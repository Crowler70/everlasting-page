import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attending) {
      toast({
        title: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you!",
      description: "Your RSVP has been received.",
    });
  };

  return (
    <section className="py-24 px-6 bg-cream-dark">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy/60 text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        This form is fully customizable to your needs
      </motion.p>

      <motion.h2
        className="font-display text-4xl text-burgundy text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Confirm your attendance
      </motion.h2>

      <motion.form
        className="max-w-md mx-auto space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy placeholder:text-burgundy/30 focus:outline-none focus:border-burgundy/50 transition-colors"
          />
        </div>

        <div>
          <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
            Email (optional)
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy placeholder:text-burgundy/30 focus:outline-none focus:border-burgundy/50 transition-colors"
          />
        </div>

        <div>
          <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
            Will you attend? *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attending: "yes" })}
              className={`px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
                formData.attending === "yes"
                  ? "bg-burgundy text-cream border-burgundy"
                  : "bg-cream border-burgundy/20 text-burgundy hover:border-burgundy/40"
              }`}
            >
              Yes, I'll be there!
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, attending: "no" })}
              className={`px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
                formData.attending === "no"
                  ? "bg-burgundy text-cream border-burgundy"
                  : "bg-cream border-burgundy/20 text-burgundy hover:border-burgundy/40"
              }`}
            >
              No, I can't make it
            </button>
          </div>
        </div>

        <div>
          <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
            Message for the couple (optional)
          </label>
          <textarea
            placeholder="Write us a few words..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy placeholder:text-burgundy/30 focus:outline-none focus:border-burgundy/50 transition-colors resize-none"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-burgundy/80 text-cream font-sans-wedding text-xs tracking-[0.2em] uppercase py-4 rounded-sm hover:bg-burgundy transition-colors duration-300"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          ✈ Confirm
        </motion.button>
      </motion.form>
    </section>
  );
};

export default RSVPForm;
