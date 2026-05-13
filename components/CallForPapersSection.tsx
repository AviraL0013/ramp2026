"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const topics = [
  "Antenna Design & Arrays", "RF Circuits & Systems", "Microwave Engineering",
  "Photonic Integrated Circuits", "5G/6G Technologies", "Millimetre Wave Devices",
  "Terahertz Communication", "Quantum Sensing", "Biomedical Electromagnetics",
  "AI-Driven RF Systems", "MIMO & Beamforming", "Energy Harvesting",
  "Electromagnetic Compatibility", "Computational Electromagnetics", "Smart Antennas",
  "Optical Fibre Communication", "Radar Systems", "Satellite Communication",
  "Wearable Electronics", "Software-Defined Radio",
];

const topicColors = [
  "#6c3bf5", "#00b4d8", "#f59e0b", "#10b981", "#ef4444",
  "#8b5cf6", "#3b82f6", "#ec4899", "#14b8a6", "#f97316",
];

export default function CallForPapersSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ backgroundColor: isDark ? "var(--bg-muted)" : "#f8fafc" }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,59,245,0.06) 0%, transparent 70%)", transform: "translate(-40%, -40%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)", transform: "translate(30%, 30%)" }}
      />

      <div className="container-center relative z-10">
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
                backgroundColor: isDark ? "rgba(108,59,245,0.15)" : "#f3f0ff",
                color: "#6c3bf5",
                border: isDark ? "1px solid rgba(108,59,245,0.35)" : "1px solid #ddd6fe",
              }}
            >
              📄 Call for Papers
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
            Submit Your <span className="gradient-text">Research</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-2xl mx-auto"
            style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
          >
            We invite original, unpublished research papers on all aspects of
            RF, Antenna, Microwave, and Photonic technologies. Papers accepted
            and presented will be submitted for inclusion in IEEE Xplore.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Topics */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold mb-6"
              style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}
            >
              Topics of Interest
            </motion.h3>
            <div className="flex flex-wrap gap-2.5">
              {topics.map((topic, i) => {
                const color = topicColors[i % topicColors.length];
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="text-xs font-semibold px-3.5 py-2 rounded-full cursor-default transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: `${color}${isDark ? "22" : "14"}`,
                      color: color,
                      border: `1px solid ${color}${isDark ? "45" : "30"}`,
                    }}
                  >
                    {topic}
                  </motion.span>
                );
              })}
            </div>
          </div>

          {/* Right — Submission Info */}
          <div className="space-y-5">
            {[
              {
                icon: "📝",
                title: "Full Paper Submission",
                desc: "Submit original research papers (4–6 pages) in IEEE two-column format via the submission portal.",
                badge: "Oct 31, 2026",
                badgeColor: "#6c3bf5",
              },
              {
                icon: "🎯",
                title: "Special Sessions",
                desc: "Propose focused special sessions on emerging topics in RF, microwave, and photonics.",
                badge: "Oct 15, 2026",
                badgeColor: "#00b4d8",
              },
              {
                icon: "📚",
                title: "IEEE Xplore Publication",
                desc: "All accepted and presented papers will be submitted for indexing in IEEE Xplore digital library.",
                badge: "IEEE Indexed",
                badgeColor: "#10b981",
              },
              {
                icon: "🏅",
                title: "Best Paper Awards",
                desc: "Outstanding papers will be recognized with Best Paper Awards across different tracks.",
                badge: "Cash Prizes",
                badgeColor: "#f59e0b",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl"
                style={{
                  backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                  border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h4 className="font-bold text-sm" style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                      {item.title}
                    </h4>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0"
                      style={{ backgroundColor: `${item.badgeColor}18`, color: item.badgeColor, border: `1px solid ${item.badgeColor}35` }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/authors/call-for-papers" className="btn-accent">
                Submit Paper →
              </Link>
              <Link href="/authors/call-for-special-sessions" className="btn-outline">
                Propose Session
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
