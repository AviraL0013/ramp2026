"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

export default function WelcomeSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const surface = isDark
    ? { bg: "rgba(108,59,245,0.07)", border: "1px solid rgba(108,59,245,0.22)" }
    : { bg: "#f5f3ff",              border: "1px solid #ddd6fe" };

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ 
        backgroundColor: isDark ? "var(--bg)" : "#ffffff",
        minHeight: "90vh",
        backgroundImage: isDark
          ? "radial-gradient(circle at 2px 2px, rgba(108,59,245,0.03) 1px, transparent 0)"
          : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "80px 80px"
      }}
    >
      {/* Background Particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${5 + (i % 3) * 2}px`,
            height: `${5 + (i % 3) * 2}px`,
            top: `${10 + ((i * 17) % 80)}%`,
            left: `${5 + ((i * 23) % 90)}%`,
            backgroundColor: i % 2 === 0 ? "#6c3bf5" : "#00b4d8",
            boxShadow: "0 0 10px currentColor",
            animationDuration: `${20 + (i % 5) * 5}s`,
            animationDelay: `${(i * 0.8) % 8}s`,
            opacity: isDark ? 0.02 : 0.01, 
          }}
        />
      ))}

      <div className="container-center">
        {/* ── narrow column ── */}
        <div className="mx-auto text-center">

          {/* Label */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45 }}
          >
            <div
              className="section-label mx-auto"
              style={{
                backgroundColor: isDark ? "rgba(108,59,245,0.14)" : "#f3f0ff",
                color: "#6c3bf5",
                border: surface.border,
              }}
            >
              About the Conference
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: 0.08 }}
            className="font-extrabold leading-tight mt-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              color: isDark ? "var(--text-base)" : "#0f172a",
              marginBottom: "2.5rem"
            }}
          >
            IEEE International Conference on{" "}
            <span className="gradient-text">
              RF, Antenna, Microwave &amp; Photonics
            </span>
          </motion.h2>

          {/* Paragraphs */}
          {[
            <>
              RAMP 2027 provides a premier international platform for researchers,
              academicians, scientists, industry professionals, and students to present
              and discuss the latest advancements in{" "}
              <strong style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                RF, Microwave, Antenna, Electromagnetics, Photonics, THz, and Quantum Technologies
              </strong>.
            </>,
            <>
              The conference brings together experts from academia, research laboratories,
              startups, and industries to exchange innovative ideas, showcase emerging
              technologies, and foster interdisciplinary collaborations in advanced
              communication and sensing systems.
            </>,
            <>
              RAMP 2027 particularly emphasises cutting-edge developments in{" "}
              <span style={{ fontWeight: 600, color: "#6c3bf5" }}>5G/6G and beyond</span>,
              intelligent wireless systems, integrated photonics, THz communication,
              quantum communication &amp; sensing, and AI-enabled RF and photonic technologies.
            </>,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.14 + i * 0.09 }}
              className="leading-relaxed mt-4"
              style={{
                fontSize: "0.9375rem",
                color: isDark ? "var(--text-muted)" : "#64748b",
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* ── Info pills (Date + Venue — Hero Style) ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ marginTop: "4rem" }}
          >
            {/* Date box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                backgroundColor: isDark ? "rgba(108,59,245,0.07)" : "#fafafa",
                border: isDark ? "1px solid rgba(108,59,245,0.22)" : "1px solid #e2e8f0",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: isDark ? "rgba(108,59,245,0.18)" : "#ede9fe",
                }}
              >
                <svg style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="#6c3bf5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6c3bf5", marginBottom: "0.125rem" }}>Date</p>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: isDark ? "var(--text-base)" : "#0f172a" }}>January 26–27, 2027</p>
              </div>
            </div>

            {/* Divider dot */}
            <div
              className="w-1.5 h-1.5 rounded-full hidden sm:block"
              style={{ backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#cbd5e1" }}
            />

            {/* Venue box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                backgroundColor: isDark ? "rgba(245,158,11,0.06)" : "#fafafa",
                border: isDark ? "1px solid rgba(245,158,11,0.2)" : "1px solid #e2e8f0",
                boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backgroundColor: isDark ? "rgba(245,158,11,0.15)" : "#fef9c3",
                }}
              >
                <svg style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f59e0b", marginBottom: "0.125rem" }}>Venue</p>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: isDark ? "var(--text-base)" : "#0f172a" }}>ABV-IIITM Gwalior, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}