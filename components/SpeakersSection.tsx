"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const speakers = [
  {
    name: "Prof. David Smith",
    role: "Duke University, USA",
    topic: "Metamaterials & Electromagnetic Cloaking",
    area: "Electromagnetics",
    color: "#6c3bf5",
    initials: "DS",
  },
  {
    name: "Dr. Anjali Mehta",
    role: "IISc Bangalore, India",
    topic: "Terahertz Communication Systems",
    area: "THz Tech",
    color: "#00b4d8",
    initials: "AM",
  },
  {
    name: "Prof. James Carter",
    role: "MIT, USA",
    topic: "AI-Driven Antenna Design",
    area: "AI & Antennas",
    color: "#f59e0b",
    initials: "JC",
  },
  {
    name: "Dr. Priya Rajan",
    role: "TIFR Mumbai, India",
    topic: "Quantum Sensing & RF Techniques",
    area: "Quantum Tech",
    color: "#10b981",
    initials: "PR",
  },
  {
    name: "Prof. Chen Wei",
    role: "Tsinghua University, China",
    topic: "5G/6G Millimetre Wave Arrays",
    area: "5G/6G",
    color: "#ef4444",
    initials: "CW",
  },
  {
    name: "Dr. Fatima Al-Hassan",
    role: "KAUST, Saudi Arabia",
    topic: "Photonic Integrated Circuits",
    area: "Photonics",
    color: "#8b5cf6",
    initials: "FA",
  },
];

export default function SpeakersSection() {
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
                backgroundColor: isDark ? "rgba(0,180,216,0.12)" : "#e0f8ff",
                color: "#00b4d8",
                border: isDark ? "1px solid rgba(0,180,216,0.3)" : "1px solid #b3ecff",
              }}
            >
              ✦ Invited Speakers
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
            World-Class <span className="gradient-text">Keynote Speakers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-xl mx-auto"
            style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
          >
            Hear from pioneering researchers and industry leaders shaping the future
            of RF, Antenna, Microwave, and Photonic technologies.
          </motion.p>
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative overflow-hidden rounded-2xl p-6 group cursor-default"
              style={{
                backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: speaker.color }}
              />

              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold shrink-0"
                  style={{ backgroundColor: speaker.color }}
                >
                  {speaker.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}
                  >
                    {speaker.name}
                  </h3>
                  <p
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}
                  >
                    {speaker.role}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                  style={{
                    backgroundColor: `${speaker.color}18`,
                    color: speaker.color,
                    border: `1px solid ${speaker.color}35`,
                  }}
                >
                  {speaker.area}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: isDark ? "var(--text-muted)" : "#475569" }}
                >
                  {speaker.topic}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${speaker.color}, transparent)` }}
              />
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
          <p className="text-sm mb-4" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
            More speakers to be announced soon
          </p>
          <a href="/program/speakers" className="btn-outline">
            View All Speakers →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
