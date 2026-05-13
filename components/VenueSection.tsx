"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const venueImages = [
  { src: "https://placehold.co/600x400/f3f0ff/6c3bf5?text=Main+Hall", alt: "Main Conference Hall" },
  { src: "https://placehold.co/600x400/e0f8ff/00b4d8?text=Exhibition+Area", alt: "Exhibition Area" },
  { src: "https://placehold.co/600x400/fef9e7/f59e0b?text=Auditorium", alt: "Auditorium" },
  { src: "https://placehold.co/600x400/ecfdf5/10b981?text=ABV-IIITM+Campus", alt: "ABV-IIITM Gwalior Campus" },
];

const tiles = [
  { icon: "✈️", label: "Gwalior Airport", sub: "Connected to major cities" },
  { icon: "🚆", label: "Gwalior Railway Station", sub: "Well connected pan-India" },
  { icon: "🏨", label: "Partner Hotels", sub: "Special conference rates" },
  { icon: "🏰", label: "Gwalior Fort", sub: "UNESCO-listed heritage site" },
];

export default function VenueSection() {
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
                backgroundColor: "rgba(245,158,11,0.12)", 
                border: "1px solid rgba(245,158,11,0.25)"
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.25em", color: "#fbbf24" }}>
                📍 Conference Venue
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
            ABV-IIITM <span className="gradient-text">Gwalior</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 font-bold text-xl"
            style={{ color: "#00b4d8", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Gwalior, Madhya Pradesh, India
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — 2×2 image grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {venueImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[2rem] transition-all duration-500 hover:scale-[1.03] group shadow-2xl"
                style={{
                  aspectRatio: "1/1",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060714] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-white opacity-80 mb-1">
                    Venue Location
                  </p>
                  <p className="text-sm font-bold text-white leading-tight">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p
              className="leading-relaxed text-lg"
              style={{ color: "#94a3b8", lineHeight: 1.7 }}
            >
              Established in 1997,{" "}
              <strong className="text-white">ABV-IIITM Gwalior</strong>{" "}
              is an Institute of National Importance dedicated to excellence in Information Technology,
              Management, Electronics, and interdisciplinary research.
              Spanning over <span className="text-[#f59e0b] font-bold">160 acres</span>, the campus
              provides a vibrant academic environment amidst historic scenic surroundings.
            </p>

            {/* Info tiles */}
            <div className="grid grid-cols-2 gap-4">
              {tiles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-[2rem] transition-all duration-300 hover:bg-white/5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-extrabold text-white uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs font-medium text-slate-400">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className="relative h-40 rounded-[2rem] overflow-hidden group shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Image
                src="https://placehold.co/600x150/060714/1e293b?text=ABV-IIITM+Gwalior+Campus+Map"
                alt="Venue Map"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-0">
                <a
                  href="https://maps.google.com/?q=ABV-IIITM+Gwalior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 border border-white/20 hover:bg-white hover:text-black shadow-xl"
                >
                  View Location ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
