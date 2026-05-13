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
      className="relative overflow-hidden flex items-center"
      style={{ 
        backgroundColor: "#060714",
        minHeight: "100vh",
        width: "100%",
        padding: "120px 0",
        backgroundImage: isDark
          ? "radial-gradient(circle at 2px 2px, rgba(108,59,245,0.05) 1px, transparent 0)"
          : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "60px 60px"
      }}
    >
      {/* Background Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            top: `${5 + ((i * 13) % 90)}%`,
            left: `${2 + ((i * 19) % 95)}%`,
            backgroundColor: i % 2 === 0 ? "#6c3bf5" : "#00b4d8",
            boxShadow: "0 0 10px currentColor",
            animationDuration: `${15 + (i % 5) * 4}s`,
            animationDelay: `${(i * 0.4) % 6}s`,
            opacity: 0.04,
          }}
        />
      ))}

      <div className="container-center">
        {/* Heading */}
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center px-6 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: "rgba(0,180,216,0.12)", 
                border: "1px solid rgba(0,180,216,0.25)"
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.25em", color: "#99f6e4" }}>
                Conference Highlights
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-extrabold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            What Makes <span className="gradient-text">RAMP 2027</span> Special
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            A comprehensive 2-day event designed for researchers, engineers, and industry professionals.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  boxShadow: `0 8px 20px -4px ${item.color}50`
                }}
              >
                {item.icon}
              </div>

              <h3
                className="text-xl font-extrabold mb-4 text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at bottom left, ${item.color}15, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
