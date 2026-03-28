import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: 1,
    gluten: false,
    lactose: false,
    vegetarian: false,
    vegan: false,
    nuts: false,
    seafood: false,
    otherAllergy: "",
    transport: "",
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

  const toggleDietary = (field: keyof typeof formData) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  return (
    <section id="rsvp" className="py-16 px-6" style={{ backgroundColor: "rgb(250, 248, 245)" }}>
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            We hope you can join us
          </p>
          
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-burgundy">
            Confirm your attendance
          </h2>

          {/* Gold line with diamond */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold mx-2" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Info banner */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full mx-auto w-fit"
          style={{
            backgroundColor: "rgba(92, 32, 24, 0.08)",
            border: "1px solid rgba(92, 32, 24, 0.15)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "rgb(92, 32, 24)", opacity: 0.7 }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span className="font-body text-xs tracking-wide" style={{ color: "rgba(92, 32, 24, 0.8)" }}>
            This form is fully customizable to your needs
          </span>
        </motion.div>

        <motion.form
          className="rounded-2xl p-6 md:p-8 space-y-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(92, 32, 24, 0.1)",
          }}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value="" />
          </div>

          <div>
            <label
              className="font-body text-xs tracking-widest uppercase mb-2 block"
              style={{ color: "rgb(92, 32, 24)" }}
              htmlFor="name"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex h-10 w-full border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
              style={{ color: "rgb(92, 32, 24)" }}
            />
          </div>

          <div>
            <label
              className="font-body text-xs tracking-widest uppercase mb-2 block"
              style={{ color: "rgb(92, 32, 24)" }}
              htmlFor="email"
            >
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex h-10 w-full border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
              style={{ color: "rgb(92, 32, 24)" }}
            />
          </div>

          <div>
            <label
              className="font-body text-xs tracking-widest uppercase mb-3 block"
              style={{ color: "rgb(92, 32, 24)" }}
            >
              Will you attend? *
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "yes" })}
                className="flex-1 py-3 px-4 rounded-xl font-body text-sm transition-all shadow-md"
                style={{
                  backgroundColor: formData.attending === "yes" ? "rgb(92, 32, 24)" : "rgb(92, 32, 24)",
                  color: formData.attending === "yes" ? "rgb(250, 248, 245)" : "rgb(250, 248, 245)",
                  border: "1px solid rgb(92, 32, 24)",
                }}
              >
                Yes, I'll be there!
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "no" })}
                className="flex-1 py-3 px-4 rounded-xl font-body text-sm transition-all hover:shadow-sm"
                style={{
                  backgroundColor: formData.attending === "no" ? "rgb(92, 32, 24)" : "rgba(255, 255, 255, 0.8)",
                  color: formData.attending === "no" ? "rgb(250, 248, 245)" : "rgb(92, 32, 24)",
                  border: "1px solid rgba(92, 32, 24, 0.2)",
                }}
              >
                No, I can't make it
              </button>
            </div>
          </div>

          <div>
            <label
              className="font-body text-xs tracking-widest uppercase mb-2 block"
              style={{ color: "rgb(92, 32, 24)" }}
              htmlFor="guests"
            >
              How many guests in total?
            </label>
            <input
              type="number"
              id="guests"
              min={1}
              max={10}
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
              className="flex h-10 border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-24 bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
              style={{ color: "rgb(92, 32, 24)" }}
            />
          </div>

          {formData.attending === "yes" && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "rgb(92, 32, 24)", opacity: 0.7 }}
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <label
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "rgb(92, 32, 24)" }}
                >
                  Your dietary requirements
                </label>
              </div>
              <p className="text-sm font-body" style={{ color: "rgba(92, 32, 24, 0.7)" }}>
                Please let us know of any allergies or dietary restrictions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "gluten", label: "Gluten-free / Celiac" },
                  { id: "lactose", label: "Lactose-free" },
                  { id: "vegetarian", label: "Vegetarian" },
                  { id: "vegan", label: "Vegan" },
                  { id: "nuts", label: "Nut allergy" },
                  { id: "seafood", label: "Seafood allergy" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={Boolean(formData[item.id as keyof typeof formData])}
                      onClick={() => toggleDietary(item.id as keyof typeof formData)}
                      className="peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-[#5C2018] data-[state=checked]:bg-[#5C2018] data-[state=checked]:border-[#5C2018]"
                      style={{
                        backgroundColor: formData[item.id as keyof typeof formData] ? "rgb(92, 32, 24)" : "transparent",
                        borderColor: "rgba(92, 32, 24, 0.3)",
                      }}
                    >
                      {formData[item.id as keyof typeof formData] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </button>
                    <label
                      className="text-sm cursor-pointer font-body"
                      style={{ color: "rgb(92, 32, 24)" }}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
                <div>
                  <label
                    className="text-xs font-body"
                    style={{ color: "rgba(92, 32, 24, 0.7)" }}
                    htmlFor="other-allergy"
                  >
                    Other:
                  </label>
                  <input
                    type="text"
                    id="other-allergy"
                    placeholder="E.g., egg allergy"
                    value={formData.otherAllergy}
                    onChange={(e) => setFormData({ ...formData, otherAllergy: e.target.value })}
                    className="flex h-10 w-full border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
                    style={{ color: "rgb(92, 32, 24)" }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {formData.attending === "yes" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "rgb(92, 32, 24)", opacity: 0.7 }}
                >
                  <path d="M8 6v6"></path>
                  <path d="M15 6v6"></path>
                  <path d="M2 12h19.6"></path>
                  <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>
                  <circle cx="7" cy="18" r="2"></circle>
                  <path d="M9 18h5"></path>
                  <circle cx="16" cy="18" r="2"></circle>
                </svg>
                <label
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "rgb(92, 32, 24)" }}
                >
                  Transport
                </label>
              </div>
              <p className="text-sm font-body" style={{ color: "rgba(92, 32, 24, 0.7)" }}>
                Do you need bus transport to the venue?
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, transport: "yes" })}
                  className="flex-1 py-2 px-4 rounded-xl font-body text-sm transition-all"
                  style={{
                    backgroundColor: formData.transport === "yes" ? "rgb(92, 32, 24)" : "rgba(255, 255, 255, 0.8)",
                    color: formData.transport === "yes" ? "rgb(250, 248, 245)" : "rgb(92, 32, 24)",
                    border: "1px solid rgba(92, 32, 24, 0.2)",
                  }}
                >
                  Yes, I need transport
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, transport: "no" })}
                  className="flex-1 py-2 px-4 rounded-xl font-body text-sm transition-all"
                  style={{
                    backgroundColor: formData.transport === "no" ? "rgb(92, 32, 24)" : "rgba(255, 255, 255, 0.8)",
                    color: formData.transport === "no" ? "rgb(250, 248, 245)" : "rgb(92, 32, 24)",
                    border: "1px solid rgba(92, 32, 24, 0.2)",
                  }}
                >
                  No, I'll get there on my own
                </button>
              </div>
            </motion.div>
          )}

          {formData.attending === "yes" && (
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "rgb(92, 32, 24)", opacity: 0.7 }}
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <label
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "rgb(92, 32, 24)" }}
                >
                  Song request
                </label>
              </div>
              <p className="text-sm font-body" style={{ color: "rgba(92, 32, 24, 0.7)" }}>
                What song would you love to hear at our wedding?
              </p>
              <input
                type="text"
                placeholder="Artist - Song name"
                value={formData.song}
                onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                className="flex h-10 w-full border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
                style={{ color: "rgb(92, 32, 24)" }}
              />
            </motion.div>
          )}

          <div>
            <label
              className="font-body text-xs tracking-widest uppercase mb-2 block"
              style={{ color: "rgb(92, 32, 24)" }}
              htmlFor="message"
            >
              Message for the couple (optional)
            </label>
            <textarea
              id="message"
              placeholder="Write us a few words..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="flex min-h-[80px] w-full border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/80 border-[rgba(92,32,24,0.2)] focus:border-[#5C2018] rounded-xl"
              style={{ color: "rgb(92, 32, 24)" }}
            />
          </div>

          <motion.button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full gap-2 font-body text-sm tracking-wide rounded-xl py-6"
            style={{ backgroundColor: "rgb(92, 32, 24)", color: "rgb(250, 248, 245)" }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            Confirm
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default RSVPForm;
