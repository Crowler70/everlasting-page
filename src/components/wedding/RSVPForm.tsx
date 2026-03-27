import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "",
    dietary: "",
    menu: "",
    song: "",
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
    <section className="py-12 px-6 bg-cream-dark">
      <motion.p
        className="font-sans-wedding text-xs tracking-[0.3em] uppercase text-burgundy/60 text-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        We hope you can join us
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

        {formData.attending === "yes" && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy focus:outline-none focus:border-burgundy/50 transition-colors"
                >
                  <option value="">Select number of guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div className="mt-6">
                <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
                  Menu Choice
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Beef", "Chicken", "Vegetarian", "Vegan"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, menu: option })}
                      className={`px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
                        formData.menu === option
                          ? "bg-burgundy text-cream border-burgundy"
                          : "bg-cream border-burgundy/20 text-burgundy hover:border-burgundy/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
                  Dietary Restrictions / Allergies
                </label>
                <input
                  type="text"
                  placeholder="Please let us know if you have any dietary restrictions"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy placeholder:text-burgundy/30 focus:outline-none focus:border-burgundy/50 transition-colors"
                />
              </div>

              <div className="mt-6">
                <label className="font-sans-wedding text-[10px] tracking-[0.2em] uppercase text-burgundy/60 block mb-2">
                  Song Request
                </label>
                <input
                  type="text"
                  placeholder="What song would you like to hear?"
                  value={formData.song}
                  onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                  className="w-full bg-cream border border-burgundy/20 rounded-sm px-4 py-3 font-body text-burgundy placeholder:text-burgundy/30 focus:outline-none focus:border-burgundy/50 transition-colors"
                />
              </div>
            </motion.div>
          </>
        )}

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

        {formData.attending === "yes" && (
          <motion.div
            className="p-4 bg-burgundy/5 border border-burgundy/10 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-sans-wedding text-[10px] tracking-[0.15em] uppercase text-burgundy/60 text-center">
              Recommended Hotel
            </p>
            <p className="font-display text-lg text-burgundy text-center mt-2">
              Napa Valley Marriott
            </p>
            <p className="font-body text-sm text-burgundy/70 text-center">
              3485 Broadway, Napa, CA 94558
            </p>
            <p className="font-body text-xs italic text-burgundy/50 text-center mt-2">
              Shuttle service available from this location
            </p>
          </motion.div>
        )}

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
