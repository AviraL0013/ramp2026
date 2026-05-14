"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const venueImages = [
  { src: "https://placehold.co/800x600/f3f0ff/6c3bf5?text=Main+Hall", alt: "Main Conference Hall" },
  { src: "https://placehold.co/800x600/e0f8ff/00b4d8?text=Exhibition+Area", alt: "Exhibition Area" },
  { src: "https://placehold.co/800x600/fef9e7/f59e0b?text=Auditorium", alt: "Auditorium" },
  { src: "https://placehold.co/800x600/ecfdf5/10b981?text=ABV-IIITM+Campus", alt: "ABV-IIITM Gwalior Campus" },
];

const tiles = [
  { color: "#6c3bf5", label: "Gwalior Airport", sub: "Direct Flights from Mumbai, Delhi, Bangalore" },
  { color: "#00b4d8", label: "Railway Station", sub: "Major Rail Hub - Superfast Connectivity" },
  { color: "#f59e0b", label: "Partner Hotels", sub: "Elite Accommodation with Special Rates" },
  { color: "#10b981", label: "Gwalior Fort", sub: "UNESCO-listed UNESCO World Heritage site" },
];

export default function VenueSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: isDark ? "#060714" : "#ffffff",
        minHeight: "100vh",
        width: "100%",
        padding: "120px 0",
        display: "flex",
        alignItems: "center",
        backgroundImage: isDark 
          ? "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)"
          : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "80px 80px"
      }}
    >
      {/* Cinematic Background Particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
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
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: isDark ? 0.05 : 0.03,
            }}
          />
        ))}
        <div style={{ position: "absolute", top: "10%", right: "10%", width: "40vw", height: "40vw", backgroundColor: "rgba(108,59,245,0.03)", borderRadius: "100%", filter: "blur(120px)", animation: "pulse 10s infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "10%", width: "50vw", height: "50vw", backgroundColor: "rgba(0,180,216,0.03)", borderRadius: "100%", filter: "blur(150px)", animation: "pulse 12s infinite" }} />
      </div>

      <div className="container-center" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        {/* Header Section */}
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center", 
            marginBottom: "80px" 
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                backgroundColor: isDark ? "rgba(108,59,245,0.12)" : "#f3f0ff",
                color: "#6c3bf5",
                border: isDark ? "1px solid rgba(108,59,245,0.3)" : "1px solid #ddd6fe",
                padding: "8px 24px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "24px",
                display: "inline-block"
              }}
            >
              The Venue
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 900,
              color: isDark ? "#ffffff" : "#0f172a",
              marginBottom: "12px"
            }}
          >
            ABV-IIITM <span className="gradient-text">Gwalior</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              color: "#6c3bf5", 
              fontSize: "1.25rem", 
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.02em"
            }}
          >
            Madhya Pradesh, India
          </motion.p>
        </div>

        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "80px",
            alignItems: "center"
          }}
        >
          {/* Left Gallery */}
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {venueImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: isDark ? "0 25px 50px -12px rgba(0,0,0,0.5)" : "0 25px 50px -12px rgba(0,0,0,0.08)",
                  border: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
                  marginTop: i % 2 === 1 ? "40px" : "0",
                  transform: `rotate(${i % 2 === 0 ? '-1deg' : '1deg'})`
                }}
                className="group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div style={{ position: "absolute", inset: 0, background: isDark ? "linear-gradient(to top, rgba(15,23,42,0.6), transparent 50%)" : "linear-gradient(to top, rgba(15,23,42,0.4), transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                  <p style={{ color: "#ffffff", fontSize: "12px", fontWeight: 700, lineHeight: 1.2 }}>{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Info Cards (Awards Style) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                style={{ 
                  fontFamily: "'Space Grotesk', sans-serif", 
                  fontSize: "1.75rem", 
                  fontWeight: 800, 
                  color: isDark ? "#ffffff" : "#0f172a",
                  marginBottom: "24px"
                }}
              >
                A Legacy of <span style={{ color: "#6c3bf5" }}>Excellence.</span>
              </h3>
              <p
                style={{ 
                  color: isDark ? "#94a3b8" : "#64748b", 
                  fontSize: "1.125rem", 
                  lineHeight: 1.7, 
                  fontWeight: 500 
                }}
              >
                Established in 1997, <strong style={{ color: isDark ? "#ffffff" : "#0f172a" }}>ABV-IIITM Gwalior</strong> is an Institute of National Importance dedicated to the future of Technology and Management.
              </p>
            </motion.div>

            {/* Info Grid */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                gap: "20px" 
              }}
            >
              {tiles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "#ffffff",
                    border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
                    borderRadius: "24px",
                    padding: "32px 24px",
                    boxShadow: isDark ? "0 10px 25px -5px rgba(0,0,0,0.5)" : "0 10px 25px -5px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  className="group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Effect: INTENSE Color Filling Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                    style={{
                      background: isDark 
                        ? `linear-gradient(135deg, ${item.color}25 0%, ${item.color}05 100%)`
                        : `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)`,
                    }}
                  />
                  
                  {/* Effect: Glass Shimmer sweep */}
                  <div
  className={`absolute -inset-1 bg-gradient-to-r from-transparent ${
    isDark ? "via-white/10" : "via-white/60"
  } to-transparent blur-xl`}
/>

                  <div style={{ position: "relative", zIndex: 10 }}>
                    {/* Expanding Accent Line */}
                    <div 
                      className="transition-all duration-500 group-hover:w-full"
                      style={{ 
                        backgroundColor: item.color,
                        width: "32px",
                        height: "5px",
                        marginBottom: "20px",
                        boxShadow: `0 0 10px ${item.color}40`
                      }}
                    />
                    <p 
                      className="transition-colors duration-500"
                      style={{ 
                        fontSize: "12px", 
                        fontWeight: 900, 
                        textTransform: "uppercase", 
                        color: isDark ? "#ffffff" : "#0f172a", 
                        letterSpacing: "0.15em", 
                        marginBottom: "8px" 
                      }}
                    >
                      {item.label}
                    </p>
                    <p 
                      style={{ 
                        fontSize: "14px", 
                        fontWeight: 500, 
                        color: isDark ? "#94a3b8" : "#64748b", 
                        lineHeight: 1.5 
                      }}
                      className="transition-colors duration-500"
                    >
                      {item.sub}
                    </p>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Location CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://maps.google.com/?q=ABV-IIITM+Gwalior"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#0f172a",
                  color: "#ffffff",
                  padding: "24px 32px",
                  borderRadius: "24px",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
                  boxShadow: isDark ? "0 20px 40px -10px rgba(0,0,0,0.3)" : "0 20px 40px -10px rgba(15,23,42,0.2)"
                }}
                className="group hover:bg-[#6c3bf5] hover:scale-[1.01] hover:shadow-3xl"
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.6 }}>Direct Directions</span>
                  <span style={{ fontSize: "1.125rem", fontWeight: 800 }}>Explore ABV-IIITM on Maps</span>
                </div>
                <div 
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    backgroundColor: "rgba(255,255,255,0.1)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    fontSize: "20px",
                    transition: "transform 0.5s ease"
                  }}
                  className="group-hover:rotate-45"
                >
                  ↗
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
