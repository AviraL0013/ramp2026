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
      className="section-py"
      style={{ backgroundColor: isDark ? "var(--bg-muted)" : "#f8fafc" }}
    >
      <div className="container-center">
        {/* Header */}
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
                backgroundColor: isDark ? "rgba(245,158,11,0.12)" : "#fef9e7",
                color: "#f59e0b",
                border: isDark ? "1px solid rgba(245,158,11,0.3)" : "1px solid #fde68a",
              }}
            >
              🤝 Partners & Sponsors
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
            Proudly <span className="gradient-text">Supported By</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-xl mx-auto"
            style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
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
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden mb-14"
          style={{
            borderTop: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
            borderBottom: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
            padding: "1.5rem 0",
          }}
        >
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: isDark ? "linear-gradient(90deg, var(--bg-muted), transparent)" : "linear-gradient(90deg, #f8fafc, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: isDark ? "linear-gradient(-90deg, var(--bg-muted), transparent)" : "linear-gradient(-90deg, #f8fafc, transparent)" }}
          />

          <div
            className="marquee-track flex gap-10 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...marqueeBrands, ...marqueeBrands].map((brand, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full text-sm font-bold"
                style={{
                  backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                  border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                  color: isDark ? "var(--text-muted)" : "#475569",
                  minWidth: "140px",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                border: isDark ? `1px solid ${tier.color}35` : `1px solid ${tier.color}28`,
                boxShadow: `0 4px 24px ${tier.color}14`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: isDark ? tier.darkBg : tier.bg, color: tier.color }}
                >
                  {tier.name === "Platinum" ? "💎" : tier.name === "Gold" ? "🥇" : "🥈"}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: tier.color }}>{tier.name} Sponsors</h3>
                  <p className="text-xs" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>Primary partners</p>
                </div>
              </div>
              <div className="space-y-2">
                {tier.sponsors.map((s, j) => (
                  <div
                    key={j}
                    className="h-12 rounded-xl flex items-center justify-center text-sm font-semibold"
                    style={{
                      backgroundColor: isDark ? tier.darkBg : tier.bg,
                      border: isDark ? `1px dashed ${tier.color}40` : `1px dashed ${tier.color}35`,
                      color: isDark ? "var(--text-faint)" : "#94a3b8",
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
