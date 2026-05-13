"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

import { Users, Store, Globe2, Trophy } from "lucide-react";

const stats = [
  { 
    icon: <Users size={20} />, 
    value: 1500, 
    suffix: "+", 
    label: "Expected Delegates", 
    sub: "From across the globe", 
    color: "#6c3bf5",
    gradient: "linear-gradient(135deg, #6c3bf5, #8b5cf6)"
  },
  { 
    icon: <Store size={20} />, 
    value: 80, 
    suffix: "+", 
    label: "Exhibition Booths", 
    sub: "Industry & academia", 
    color: "#00b4d8",
    gradient: "linear-gradient(135deg, #00b4d8, #22d3ee)"
  },
  { 
    icon: <Globe2 size={20} />, 
    value: 25, 
    suffix: "+", 
    label: "Countries", 
    sub: "International reach", 
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)"
  },
  { 
    icon: <Trophy size={20} />, 
    value: 4, 
    suffix: "", 
    label: "Past Editions", 
    sub: "Proven excellence", 
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)"
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 3500; // Slower count up
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function CounterBar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#03040b",
        padding: "60px 0",
        backgroundImage: isDark
          ? "linear-gradient(rgba(108,59,245,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,59,245,0.05) 1px, transparent 1px)"
          : "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      {/* Light Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(108,59,245,0.2) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} 
      />

      {/* Particles — Same as Hero */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            top: `${15 + ((i * 13) % 70)}%`,
            left: `${5 + ((i * 17) % 90)}%`,
            backgroundColor: i % 2 === 0 ? "#6c3bf5" : "#00b4d8",
            boxShadow: "0 0 10px currentColor",
            animationDuration: `${10 + (i % 5) * 2}s`,
            animationDelay: `${(i * 0.3) % 4}s`,
            opacity: 0.2 + (i % 3) * 0.1,
          }}
        />
      ))}

      {/* Dynamic Background Accents */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-[#6c3bf5]/10 rounded-full blur-[140px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-[#00b4d8]/10 rounded-full blur-[140px] pointer-events-none opacity-40 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container-center relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: "60px", width: "100%" }}>
          <div 
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-6"
            style={{ 
              backgroundColor: "rgba(245,158,11,0.06)", 
                border: "1px solid rgba(245,158,11,0.25)"
            }}
          >
            <span 
              style={{ 
                fontSize: "11px", 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.25em", 
                color: "#f59e0b" ,
                padding: "10px 20px",
              }}
            >
              By The Numbers
            </span>
          </div>
          <h2
            className="text-white font-extrabold w-full text-center"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
              lineHeight: 1.1,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.02em",
              marginTop:"12px"
            }}
          >
            RAMP 2027 <span className="gradient-text">At a Glance</span>
          </h2>
          <p 
            className="mx-auto text-center"
            style={{ 
              marginTop: "20px", 
              color: "#94a3b8", 
              fontSize: "1.1rem", 
              fontWeight: 500,
              maxWidth: "600px",
              lineHeight: 1.6
            }}
          >
            Two days. Four disciplines. One premier IEEE event.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "24px",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Card Hover Background Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}20 0%, transparent 100%)`,
                }}
              />
              <div
                className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-full pointer-events-none"
              />

              {/* Content — Centered */}
              <div className="relative z-10 text-center">
                <div
                  className="font-extrabold tracking-tighter"
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: 1,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "white",
                    marginBottom: "12px"
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p 
                  style={{ 
                    fontSize: "1.125rem", 
                    fontWeight: 700, 
                    color: "white", 
                    marginBottom: "6px",
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {stat.label}
                </p>
                <p 
                  style={{ 
                    fontSize: "0.8125rem", 
                    fontWeight: 500, 
                    color: "#94a3b8",
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metadata Bar */}
        <div 
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ 
            marginTop: "40px", 
            paddingTop: "30px", 
            borderTop: "1px solid rgba(255,255,255,0.05)" 
          }}
        >
          {[
            { icon: "📅", text: "January 26–27, 2027" },
            { icon: "📍", text: "ABV-IIITM Gwalior" },
            { icon: "🛡️", text: "IEEE MTT-S & AP-S Sponsored" },
            { icon: "🌍", text: "International Delegates" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              <span style={{ fontSize: "1rem", opacity: 0.6 }} className="group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <span 
                style={{ 
                  fontSize: "11px", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em", 
                  color: "#94a3b8" 
                }}
                className="group-hover:text-white transition-colors"
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
