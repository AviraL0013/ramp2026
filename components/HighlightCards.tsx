"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const highlights = [
  { icon: "🏛️", color: "#6c3bf5", title: "Government Participation", desc: "Active participation from ministries of the Government of India." },
  { icon: "🎤", color: "#00b4d8", title: "Keynote & Plenary Talks", desc: "World-renowned academics, industry leaders and research pioneers." },
  { icon: "💡", color: "#f59e0b", title: "Expert Invited Talks", desc: "Globally reputed experts on cutting-edge RF and photonics topics." },
  { icon: "📊", color: "#10b981", title: "Technical Sessions", desc: "Focused sessions on emerging areas, panels, and workshops." },
  { icon: "🏭", color: "#ef4444", title: "Industry Exhibitions", desc: "Showcasing key product launches and innovations in RF & microwave." },
  { icon: "🗂️", color: "#3b82f6", title: "80+ Exhibition Booths", desc: "Industry booths featuring the latest in antenna and photonics technology." },
  { icon: "📚", color: "#8b5cf6", title: "International Book Stalls", desc: "Esteemed publishers with live reading library corners." },
];

export default function HighlightCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="section-py"
      style={{ backgroundColor: isDark ? "var(--bg)" : "#ffffff" }}
    >
      <div className="container-center">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="section-label mx-auto"
              style={{
                backgroundColor: isDark ? "rgba(0,180,216,0.12)" : "#e0f8ff",
                color: "#00b4d8",
                border: isDark ? "1px solid rgba(0,180,216,0.3)" : "1px solid #b3ecff",
              }}
            >
              Conference Highlights
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-extrabold mt-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: isDark ? "var(--text-base)" : "#0f172a",
            }}
          >
            What Makes <span className="gradient-text">RAMP 2027</span> Special
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-xl mx-auto"
            style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
          >
            A comprehensive 2-day event designed for researchers, engineers, and industry professionals.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl group cursor-default relative overflow-hidden"
              style={{
                backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${item.color}${isDark ? "22" : "14"}`,
                  border: `1.5px solid ${item.color}${isDark ? "40" : "28"}`,
                }}
              >
                {item.icon}
              </div>

              <h3
                className="text-base font-bold mb-2"
                style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
              >
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
