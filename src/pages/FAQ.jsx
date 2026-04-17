import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const faqData = [
  {
    category: "Booking & Payments",
    icon: "💳",
    questions: [
      {
        q: "How do I book a tour package?",
        a: "Booking is simple! Browse our packages, select your preferred tour, choose dates, and click 'Book Now'. You can pay online via credit/debit card, UPI, or net banking. A confirmation email will be sent instantly.",
      },
      {
        q: "Is my payment secure?",
        a: "Yes, absolutely. We use 256-bit SSL encryption and trusted payment gateways like Razorpay and PayU. Your card details are never stored on our servers.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes! For packages above ₹25,000, we offer EMI options via credit card and select buy-now-pay-later partners. Contact our team to know more.",
      },
      {
        q: "Do you offer group discounts?",
        a: "We offer attractive discounts for groups of 10 or more travelers. Get in touch with our group booking team for a customized quote.",
      },
    ],
  },
  {
    category: "Cancellation & Refunds",
    icon: "🔄",
    questions: [
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made 30+ days before departure receive a full refund. 15–29 days: 75% refund. 7–14 days: 50% refund. Less than 7 days: no refund. Some special packages may have different policies.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed within 7–10 business days after cancellation approval. The amount is credited back to your original payment method.",
      },
      {
        q: "Can I reschedule instead of cancelling?",
        a: "Yes! You can reschedule your tour up to 15 days before departure at no extra charge (subject to availability). Rescheduling within 15 days may incur a fee.",
      },
    ],
  },
  {
    category: "Travel & Itinerary",
    icon: "✈️",
    questions: [
      {
        q: "Are flights included in the package?",
        a: "It depends on the package. Packages marked 'With Flights' include return airfare. Others cover only land arrangements. Always check the inclusions section before booking.",
      },
      {
        q: "Can I customize my itinerary?",
        a: "Absolutely! We specialize in tailor-made travel. Share your preferences — destinations, budget, duration — and our experts will craft a personalized itinerary just for you.",
      },
      {
        q: "What documents do I need for international travel?",
        a: "You need a valid passport (6 months validity), visa (we assist with applications), travel insurance, and booking confirmations. Specific requirements vary by destination.",
      },
      {
        q: "Do you provide visa assistance?",
        a: "Yes! We offer complete visa assistance for most countries including document checklist, form filling, appointment booking, and submission guidance.",
      },
    ],
  },
  {
    category: "Accommodation & Meals",
    icon: "🏨",
    questions: [
      {
        q: "What type of hotels do you use?",
        a: "We partner with 3-star, 4-star, and 5-star hotels depending on the package. All properties are personally vetted for cleanliness, safety, and comfort.",
      },
      {
        q: "Are meals included?",
        a: "Most packages include daily breakfast. Some include half-board (breakfast + dinner) or all-inclusive meals. Check the 'Inclusions' tab on each package page for details.",
      },
      {
        q: "Can I request special dietary meals?",
        a: "Yes! We accommodate vegetarian, vegan, Jain, gluten-free, and other dietary requirements. Please mention your preference while booking.",
      },
    ],
  },
  {
    category: "Support & Safety",
    icon: "🛡️",
    questions: [
      {
        q: "Is travel insurance mandatory?",
        a: "We strongly recommend travel insurance for all trips. It is mandatory for some international packages. We can help you purchase the right policy.",
      },
      {
        q: "Do you have 24/7 customer support?",
        a: "Yes! Our support team is available 24/7 via phone, WhatsApp, and email. During your trip, a dedicated travel manager is just one call away.",
      },
      {
        q: "What happens if there's an emergency during the trip?",
        a: "Our on-ground team and 24/7 helpline are always ready. We coordinate with local authorities, hospitals, and embassies if needed to ensure your safety.",
      },
    ],
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(0,0,0,0.07)" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span
          className="text-base font-semibold pr-4 transition-colors duration-200"
          style={{ color: isOpen ? "#6366f1" : "#1e293b" }}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-light"
          style={{
            background: isOpen
              ? "linear-gradient(135deg,#6366f1,#a855f7)"
              : "#e2e8f0",
          }}
        >
          <span style={{ color: isOpen ? "white" : "#64748b", fontSize: "18px", lineHeight: 1 }}>+</span>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-5 px-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter based on search
  const filteredFaqs = searchQuery.trim()
    ? faqData
        .map((cat) => ({
          ...cat,
          questions: cat.questions.filter(
            (item) =>
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.questions.length > 0)
    : [faqData[activeCategory]];

  return (
    <>
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        }}
      >
        {/* Orbs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 60}px`,
              height: `${150 + i * 60}px`,
              background: i % 2 === 0 ? "#6366f1" : "#a855f7",
              opacity: 0.12,
              top: `${[20, 60, 10][i]}%`,
              left: `${[5, 75, 45][i]}%`,
              filter: "blur(50px)",
            }}
            animate={{ scale: [1, 1.15, 1], y: [0, -15, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(99,102,241,0.2)",
              color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            Help Center
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#818cf8,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Everything you need to know about our travel packages, bookings, and services.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg mx-auto relative"
          >
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl text-white text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          {!searchQuery && (
            /* Category Tabs */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {faqData.map((cat, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setActiveCategory(i);
                    setOpenIndex(null);
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={
                    activeCategory === i
                      ? {
                          background: "linear-gradient(135deg,#6366f1,#a855f7)",
                          color: "white",
                          boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                        }
                      : {
                          background: "white",
                          color: "#64748b",
                          border: "1px solid #e2e8f0",
                        }
                  }
                >
                  <span>{cat.icon}</span>
                  {cat.category}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Search Result Label */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 text-center"
            >
              <p className="text-slate-500 text-sm">
                Showing results for{" "}
                <span className="font-semibold text-indigo-600">"{searchQuery}"</span>
              </p>
            </motion.div>
          )}

          {/* FAQ Cards */}
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((cat, catIdx) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  {searchQuery && (
                    <div className="flex items-center gap-2 mb-4">
                      <span>{cat.icon}</span>
                      <h3 className="text-base font-bold text-slate-700">{cat.category}</h3>
                    </div>
                  )}
                  <div
                    className="bg-white rounded-2xl px-6"
                    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
                  >
                    {cat.questions.map((item, qIdx) => {
                      const uniqueKey = `${catIdx}-${qIdx}`;
                      return (
                        <FAQItem
                          key={uniqueKey}
                          question={item.q}
                          answer={item.a}
                          isOpen={openIndex === uniqueKey}
                          onClick={() => handleToggle(uniqueKey)}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
                <p className="text-slate-400 text-sm">
                  Try a different keyword or{" "}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-indigo-500 underline"
                  >
                    browse all categories
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl p-10 text-center text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
            }}
          >
            <div className="relative z-10">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-indigo-100 mb-6 text-sm max-w-md mx-auto">
                Can't find what you're looking for? Our friendly team is available 24/7 to help you plan your perfect trip.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 rounded-full bg-white font-semibold text-sm"
                  style={{ color: "#6366f1" }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="https://wa.me/919876543210"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 rounded-full font-semibold text-sm text-white"
                  style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
                >
                  WhatsApp Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQ;