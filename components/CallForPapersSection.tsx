"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
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

const submissionSteps = [
  {
    title: "Full Paper",
    desc: "Present your original research findings. Accepted papers will be published in the conference proceedings and submitted for inclusion in IEEE Xplore, subject to meeting quality standards.",
    badge: "Deadline Oct 31",
    color: "#6c3bf5"
  },
  {
    title: "Special Sessions",
    desc: "Organize a session on a specific topic of interest. Proposals should include a brief description, list of potential speakers, and the significance of the session.",
    badge: "Deadline Oct 15",
    color: "#00b4d8"
  },
  {
    title: "IEEE Xplore",
    desc: "Maximize your research impact. All presented papers undergo a rigorous peer-review process and are indexed globally to ensure maximum visibility for your work.",
    badge: "Publication",
    color: "#10b981"
  },
];

export default function CallForPapersSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden"
      style={{ 
        padding: "70px 0",
        minHeight: "80vh",
        backgroundColor: isDark ? "var(--bg)" : "#ffffff",
        backgroundImage: isDark
          ? "radial-gradient(circle at 2px 2px, rgba(108,59,245,0.03) 1px, transparent 0)"
          : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "80px 80px"
      }}
    >
      {/* Cinematic Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "#6c3bf5" : "#00b4d8",
              boxShadow: "0 0 15px currentColor",
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: isDark ? 0.08 : 0.04,
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#6c3bf5]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#00b4d8]/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container-center relative z-10">
        {/* Header Section */}
        <div 
          className="flex flex-col items-center text-center"
          style={{ marginBottom: "20px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="section-label mx-auto"
              style={{
                backgroundColor: isDark ? "rgba(108,59,245,0.14)" : "#f3f0ff",
                color: "#6c3bf5",
                border: isDark ? "1px solid rgba(108,59,245,0.22)" : "1px solid #ddd6fe",
                padding: "6px 20px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Call For Papers
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-extrabold mt-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: isDark ? "var(--text-base)" : "#0f172a",
            }}
          >
            Submit Your <span className="gradient-text">Research.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl text-[#64748b] text-base font-medium"
            style={{ 
              lineHeight: 1.6,
              color: isDark ? "var(--text-muted)" : "#64748b"
            }}
          >
            Join a global community of innovators. We invite original research in RF, Microwave, and Photonic technologies.
          </motion.p>
        </div>

        {/* DARK NAVY Marquee Area with WHITE Font */}
        <div 
          className="relative overflow-hidden shadow-2xl"
          style={{ 
            marginBottom: "30px", 
            padding: "24px 0",
            backgroundColor: "#060714", // Dark Navy from Image
            marginLeft: "-100vw",
            marginRight: "-100vw",
            paddingLeft: "100vw",
            paddingRight: "100vw",
          }}
        >
          <div className="flex whitespace-nowrap">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center px-8"
            >
              {topics.map((topic, i) => (
                <span
                  key={i}
                  className="text-lg font-bold text-white opacity-95 hover:opacity-100 transition-opacity"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {topic}
                </span>
              ))}
            </motion.div>
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 items-center px-8"
            >
              {topics.map((topic, i) => (
                <span
                  key={`dup-${i}`}
                  className="text-lg font-bold text-white opacity-95 hover:opacity-100 transition-opacity"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {topic}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ display: "grid", width: "100%" }}
        >
          {submissionSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden transition-all duration-700 hover:-translate-y-2 cursor-default shadow-sm hover:shadow-xl"
              style={{
                backgroundColor: isDark ? "rgba(108,59,245,0.05)" : "rgba(255,255,255,0.7)",
                border: isDark ? "1px solid rgba(108,59,245,0.1)" : "1px solid rgba(0,0,0,0.06)",
                borderRadius: "24px",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background: isDark 
                    ? `linear-gradient(135deg, ${step.color}25 0%, transparent 100%)`
                    : `linear-gradient(135deg, ${step.color}10 0%, ${step.color}05 100%)`,
                }}
              />
              <div
                className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-full pointer-events-none"
              />
              <div className="relative z-10 flex flex-col items-center w-full">
                <span 
                  className="px-4 py-1.5 rounded-full mb-6 inline-block font-bold uppercase transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${step.color}15`, 
                    color: step.color,
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    border: `1px solid ${step.color}25`,
                    padding: "8px 12px",
                    marginBottom:"10px"
                  }}
                >
                  {step.badge}
                </span>
                <h3 
                  className="text-2xl font-bold tracking-tight mb-4 transition-colors duration-500" 
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: isDark ? "var(--text-base)" : "#0f172a",
                    marginBottom:"10px"
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm font-medium leading-relaxed mb-8 transition-colors duration-500"
                  style={{ 
                    maxWidth: "280px",
                    color: isDark ? "var(--text-muted)" : "#64748b",
                    marginBottom: "10px"
                  }}
                >
                  {step.desc}
                </p>
                <div 
                  className="w-full pt-6"
                  style={{ borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.03)" }}
                >
                
                </div>
              </div>
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: step.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className="text-center"
          style={{ marginTop: "50px" }}
        >
          <Link 
            href="/authors/call-for-papers" 
            className="inline-flex items-center gap-3 group transition-all duration-300"
            style={{
              backgroundColor: isDark ? "#6c3bf5" : "#0f172a",
              color: "white",
              padding: "18px 48px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 700,
              boxShadow: isDark ? "0 10px 30px rgba(108,59,245,0.3)" : "0 15px 40px rgba(15, 23, 42, 0.2)",
            }}
          >
            Submit Your Research
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
