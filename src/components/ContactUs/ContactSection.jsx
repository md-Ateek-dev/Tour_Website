import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputFields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: "👤" },
    { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: "✉️" },
    { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", icon: "📞" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Animated background orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            background: i % 2 === 0 ? "#6366f1" : "#a855f7",
            top: `${[10, 60, 20, 70][i]}%`,
            left: `${[5, 70, 40, 20][i]}%`,
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.3)" }}
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Plan Your{" "}
            <span style={{ background: "linear-gradient(90deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Dream Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill in your details and our travel experts will craft the perfect itinerary for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: "📍", title: "Our Office", desc: "123 Travel Street, Mumbai, India" },
              { icon: "📱", title: "Call Us", desc: "+91 98765 43210" },
              { icon: "🕐", title: "Working Hours", desc: "Mon–Sat: 9:00 AM – 7:00 PM" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
              >
                <div
                  className="text-xl w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.2)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-2">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-3">
                {["f", "in", "tw", "ig"].map((s, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 rounded-3xl p-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-4"
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Input Fields */}
                {inputFields.map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      {field.label}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">
                        {field.icon}
                      </span>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.id)}
                        onBlur={() => setFocused("")}
                        placeholder={field.placeholder}
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-300"
                        style={{
                          background: focused === field.id ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.06)",
                          border: focused === field.id ? "1px solid rgba(99,102,241,0.6)" : "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell us about your dream destination..."
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-500 outline-none transition-all duration-300 resize-none"
                    style={{
                      background: focused === "message" ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.06)",
                      border: focused === "message" ? "1px solid rgba(99,102,241,0.6)" : "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)" }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Consultation
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;