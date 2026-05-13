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
      className="section-py"
      style={{ backgroundColor: isDark ? "var(--bg)" : "#ffffff" }}
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
              📍 Conference Venue
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
            ABV-IIITM <span className="gradient-text">Gwalior</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 font-bold text-lg"
            style={{ color: "#00b4d8" }}
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
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {venueImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                style={{
                  aspectRatio: "4/3",
                  border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                  {img.alt}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p
              className="leading-relaxed"
              style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
            >
              Established in 1997,{" "}
              <strong style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>ABV-IIITM Gwalior</strong>{" "}
              is an Institute of National Importance dedicated to excellence in Information Technology,
              Management, Electronics, Communication Engineering, and interdisciplinary research.
              Located amidst the scenic surroundings of the historic{" "}
              <em className="not-italic font-semibold" style={{ color: "#f59e0b" }}>Gwalior Fort</em>,
              the campus spans over 160 acres and provides a vibrant academic and research environment.
            </p>

            {/* Info tiles */}
            <div className="grid grid-cols-2 gap-3">
              {tiles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{
                    backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                    border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                      {item.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="relative h-32 rounded-xl overflow-hidden"
              style={{ border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0" }}
            >
              <Image
                src="https://placehold.co/600x150/f8fafc/94a3b8?text=ABV-IIITM+Gwalior+Campus+Map"
                alt="Venue Map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
                style={{ backgroundColor: isDark ? "rgba(13,15,20,0.6)" : "rgba(255,255,255,0.6)" }}
              >
                <a
                  href="https://maps.google.com/?q=ABV-IIITM+Gwalior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !text-xs !py-2 !px-5"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
