"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const tiers = [
  {
    name: "Platinum",
    color: "#6c3bf5",
    bg: "#f3f0ff",
    darkBg: "rgba(108,59,245,0.1)",
    sponsors: ["Sponsor A", "Sponsor B"],
  },
  {
    name: "Gold",
    color: "#f59e0b",
    bg: "#fef9e7",
    darkBg: "rgba(245,158,11,0.1)",
    sponsors: ["Sponsor C", "Sponsor D", "Sponsor E"],
  },
  {
    name: "Silver",
    color: "#64748b",
    bg: "#f1f5f9",
    darkBg: "rgba(100,116,139,0.1)",
    sponsors: ["Sponsor F", "Sponsor G", "Sponsor H", "Sponsor I"],
  },
];

// Duplicate for infinite marquee
const marqueeBrands = [
  "IEEE", "ABV-IIITM", "DRDO", "ISRO", "Keysight", "Rohde & Schwarz",
  "Analog Devices", "Texas Instruments", "Qualcomm", "Samsung Research",
  "Ericsson", "Nokia Bell Labs",
];

export default function SponsorsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ 
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        padding: "120px 0",
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "60px 60px"
      }}
    >

      <div className="container-center">
        {/* Header */}
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
                backgroundColor: "rgba(245,158,11,0.1)", 
                border: "1px solid rgba(245,158,11,0.2)"
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.25em", color: "#f59e0b" }}>
                🤝 Partners & Sponsors
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#0f172a] font-extrabold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Proudly <span className="gradient-text">Supported By</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: "#64748b", fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            RAMP 2027 is supported by leading academic institutions, research
            organizations, and industry leaders in the field of RF and photonics.
          </motion.p>
        </div>

        {/* Marquee logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mb-20 py-8"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track flex gap-12 whitespace-nowrap animate-marquee">
            {[...marqueeBrands, ...marqueeBrands].map((brand, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-10 py-4 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  color: "#475569",
                  minWidth: "180px",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: "#ffffff",
                border: `1px solid ${tier.color}25`,
                boxShadow: `0 15px 40px -10px ${tier.color}15`,
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center text-3xl shadow-inner"
                  style={{ backgroundColor: tier.bg, color: tier.color }}
                >
                  {tier.name === "Platinum" ? "💎" : tier.name === "Gold" ? "🥇" : "🥈"}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg" style={{ color: tier.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tier.name} Sponsor
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Primary Partner</p>
                </div>
              </div>
              <div className="space-y-3">
                {tier.sponsors.map((s, j) => (
                  <div
                    key={j}
                    className="h-14 rounded-2xl flex items-center justify-center text-base font-bold shadow-sm"
                    style={{
                      backgroundColor: "#fafafa",
                      border: `1px dashed ${tier.color}35`,
                      color: "#475569",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
            Interested in sponsoring RAMP 2027?
          </p>
          <a href="/sponsorship/opportunities" className="btn-accent">
            Become a Sponsor →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
