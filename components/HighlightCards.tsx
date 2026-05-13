"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const highlights = [
  { color: "#6c3bf5", title: "Government Participation", desc: "Active participation from ministries of the Government of India." },
  { color: "#00b4d8", title: "Keynote & Plenary Talks", desc: "World-renowned academics, industry leaders and research pioneers." },
  { color: "#f59e0b", title: "Expert Invited Talks", desc: "Globally reputed experts on cutting-edge RF and photonics topics." },
  { color: "#10b981", title: "Technical Sessions", desc: "Focused sessions on emerging areas, panels, and workshops." },
  { color: "#ef4444", title: "Industry Exhibitions", desc: "Showcasing key product launches and innovations in RF & microwave." },
  { color: "#3b82f6", title: "80+ Exhibition Booths", desc: "Industry booths featuring the latest in antenna and photonics technology." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

export default function HighlightCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: "#060714",
        minHeight: "100vh",
        width: "100%",
        padding: "100px 0",
        display: "flex",
        alignItems: "center",
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

      <div className="container-center" style={{ width: "100%", position: "relative", zIndex: 10 }}>
        {/* Heading Section */}
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center", 
            marginBottom: "50px" 
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="section-label"
              style={{
                backgroundColor: "rgba(0,180,216,0.12)",
                color: "#99f6e4",
                border: "1px solid rgba(0,180,216,0.25)",
                margin: "0 auto 20px",
                padding: "8px 24px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.4em"
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
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginTop: "20px",
              fontWeight: 800,
              color: "#ffffff"
            }}
          >
            What Makes <span className="gradient-text">RAMP 2027</span> Special
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              color: "#94a3b8", 
              fontSize: "1.125rem", 
              lineHeight: 1.6, 
              textAlign: "center", 
              maxWidth: "672px", 
              margin: "24px auto 0",
              display: "block"
            }}
          >
            A comprehensive 2-day event designed for researchers, engineers, and industry professionals.
          </motion.p>

          {/* Conference Details Pills */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.4 }}
            style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "16px",
              marginTop: "40px" 
            }}
          >
            {/* Date box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(108,59,245,0.12)",
                border: "1px solid rgba(108,59,245,0.3)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(108,59,245,0.25)" }}>
                <svg style={{ width: "18px", height: "18px" }} fill="none" viewBox="0 0 24 24" stroke="#6c3bf5" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "#a78bfa", marginBottom: "2px" }}>Dates</p>
                <p style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff" }}>Jan 26 – 27, 2027</p>
              </div>
            </div>

            {/* Venue box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.3)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(245,158,11,0.25)" }}>
                <svg style={{ width: "18px", height: "18px" }} fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "#fcd34d", marginBottom: "2px" }}>Location</p>
                <p style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff" }}>ABV-IIITM Gwalior</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid with explicit Style alignment */}
        <div 
          style={{ 
            display: "grid", 
            width: "100%", 
            marginTop: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "40px 32px",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                minHeight: "240px",
                position: "relative"
              }}
            >
              {/* Hover Fill Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                }}
              />
              
              {/* Glass Shimmer sweep */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-full pointer-events-none"
              />

              <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Expanding Accent Line */}
                <div 
                  className="transition-all duration-500 group-hover:w-16"
                  style={{ 
                    backgroundColor: item.color,
                    width: "32px", // w-8
                    height: "4px",
                    marginBottom: "24px"
                  }}
                />

                <h3
                  className="transition-all duration-500 group-hover:translate-x-1"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.25rem", // text-xl
                    fontWeight: 800,
                    marginBottom: "16px",
                    color: "#ffffff",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em"
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="transition-colors duration-500 group-hover:text-slate-200"
                  style={{ 
                    color: "#94a3b8", 
                    fontSize: "15px", 
                    fontWeight: 500, 
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>

                {/* Decorative Corner Glow */}
                <div
                  className="absolute bottom-[-10px] right-[-10px] w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${item.color}20, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
