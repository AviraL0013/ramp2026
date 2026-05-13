"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const dates = [
  { label: "Abstract Submission Opens", month: "SEP", day: "01", date: "Sep 1, 2026", state: "normal" },
  { label: "Special Session Proposals", month: "OCT", day: "15", date: "Oct 15, 2026", state: "normal" },
  { label: "Full Paper Submission Deadline", month: "OCT", day: "31", date: "Oct 31, 2026", state: "upcoming" },
  { label: "Notification of Acceptance", month: "NOV", day: "30", date: "Nov 30, 2026", state: "normal" },
  { label: "Camera-Ready Submission", month: "DEC", day: "20", date: "Dec 20, 2026", state: "normal" },
  { label: "Early-Bird Registration", month: "DEC", day: "15", date: "Dec 15, 2026", state: "normal" },
  { label: "Conference Dates", month: "JAN", day: "26", date: "Jan 26–27, 2027", state: "conference" },
];

export default function ImportantDates() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundColor: "#060714",
        minHeight: "80vh",
        width: "100%",
        padding: "80px 20px",
        backgroundImage: isDark
          ? "radial-gradient(circle at 2px 2px, rgba(108,59,245,0.04) 1px, transparent 0)"
          : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0)",
        backgroundSize: "60px 60px"
      }}
    >
      {/* Background Particles */}
      {[...Array(12)].map((_, i) => (
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
            animationDuration: `${15 + (i % 5) * 4}s`,
            animationDelay: `${(i * 0.7) % 6}s`,
            opacity: 0.04,
          }}
        />
      ))}

      <div className="container-center">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: "rgba(245,158,11,0.06)", 
                border: "1px solid rgba(245,158,11,0.25)",
                gap: "0.75rem"
              }}
            >
          
              <span style={{ 
                fontSize: "11px", 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.2em", 
                padding:"10px 20px",
                color: "#f59e0b" 
              }}>
                Mark Your Calendar
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
            Important <span className="gradient-text">Dates</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-sm"
            style={{ color: isDark ? "var(--text-faint)" : "#94a3b8",marginTop:"1rem" }}
          >
            All deadlines at 23:59 AoE · Dates subject to change
          </motion.p>
        </div>

        {/* Timeline — horizontal scroll on small, grid on large */}
        <div className="overflow-x-auto pb-4">
          <div className="relative min-w-[700px] lg:min-w-0">
            {/* Connecting line */}
            <div
              className="absolute z-0"
              style={{
                top: "26px",
                left: "26px",
                right: "26px",
                height: "2px",
                background: "linear-gradient(90deg, #6c3bf5, #00b4d8, #f59e0b)",
                opacity: 0.25,
              }}
            />

            <div className="grid grid-cols-7 gap-3 relative z-10">
              {dates.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col items-center gap-3"
                >
                  {/* Circle */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center border-2 shrink-0 transition-all duration-500 hover:scale-110 ${
                      item.state === "upcoming" ? "timeline-dot-active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        item.state === "upcoming"
                          ? "#6c3bf5"
                          : item.state === "conference"
                          ? "#f59e0b"
                          : "rgba(255,255,255,0.05)",
                      borderColor:
                        item.state === "upcoming"
                          ? "#6c3bf5"
                          : item.state === "conference"
                          ? "#f59e0b"
                          : "rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      boxShadow:
                        item.state === "upcoming"
                          ? "0 0 20px rgba(108,59,245,0.3)"
                          : item.state === "conference"
                          ? "0 0 20px rgba(245,158,11,0.3)"
                          : "none",
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    <span className="text-[8px] font-extrabold uppercase leading-tight tracking-widest opacity-80">
                      {item.month}
                    </span>
                    <span className="text-base font-extrabold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.day}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="w-full rounded-2xl px-4 py-5 border text-center transition-all duration-300 group"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(12px)",
                      marginTop: "0.5rem",
                      padding:"14px 6px"
                    }}
                  >
                    <p
                      className="text-xs font-extrabold leading-snug mb-2"
                      style={{
                        color:
                          item.state === "upcoming"
                            ? "#c4b5fd"
                            : item.state === "conference"
                            ? "#fbbf24"
                              : "#94a3b8",
                        marginBottom:"6px",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.date}
                    </p>
                    {item.state === "upcoming" && (
                      <span className="inline-block mt-1.5 text-[9px] font-bold bg-[#6c3bf5] text-white px-2 py-0.5 rounded-full uppercase tracking-wider" style={{padding:"4px 6px", marginTop:"6px"}}>
                        Upcoming
                      </span>
                    )}
                    {item.state === "conference" && (
                      <span className="inline-block mt-1.5 text-[9px] font-bold bg-[#f59e0b] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Conference
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
