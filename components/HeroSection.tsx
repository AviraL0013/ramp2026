"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.6 })
        .from(headingRef.current, { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(metaRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(btnsRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(creditRef.current, { y: 10, opacity: 0, duration: 0.4 }, "-=0.2");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative overflow-hidden grid-bg-light"
      style={{
        minHeight: "calc(100vh - 130px)",
        display: "flex",
        alignItems: "center",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        backgroundColor: isDark ? "#0b0c1d" : "#f8fafc",
      }}
    >
      {/* Background blobs */}
      <div
        className="float-orb absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,59,245,0.10) 0%, transparent 65%)" }}
      />
      <div
        className="float-orb-slow absolute bottom-0 -left-48 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 65%)" }}
      />
      <div
        className="float-orb absolute top-1/3 right-1/3 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
      />

      {/* Particles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${5 + (i % 4) * 3}px`,
            height: `${5 + (i % 4) * 3}px`,
            top: `${8 + ((i * 7) % 82)}%`,
            left: `${4 + ((i * 11) % 88)}%`,
            background:
              i % 3 === 0
                ? "rgba(108,59,245,0.3)"
                : i % 3 === 1
                ? "rgba(0,180,216,0.25)"
                : "rgba(245,158,11,0.22)",
            animationDuration: `${6 + (i % 4) * 2}s`,
            animationDelay: `${(i * 0.5) % 4}s`,
          }}
        />
      ))}

      {/* Hero Content */}
      <div
        className="relative z-10 w-full container-center py-4"
        style={{ paddingLeft: "5rem", paddingRight: "1.5rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Center Content — Text + Visual Stacked vertically or just centered */}
          <div className="flex flex-col items-center text-center mx-auto" style={{ gap: "1rem", maxWidth: "1000px" }}>
            {/* Badge */}
            <div
              ref={badgeRef}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: isDark ? "rgba(108,59,245,0.15)" : "#f3f0ff",
                border: isDark ? "1px solid rgba(108,59,245,0.4)" : "1px solid #ddd6fe",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#6c3bf5",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#6c3bf5",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                IEEE MTT-S &amp; AP-S Sponsored
              </span>
            </div>

            {/* Heading */}
            <div ref={headingRef}>
              <h1
                className="font-extrabold leading-[0.92]"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: isDark ? "#f1f5f9" : "#0f172a",
                }}
              >
                <span className="gradient-text">RAMP 2027</span>
              </h1>
              <p
                className="font-bold leading-snug"
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: isDark ? "var(--text-muted)" : "#334155",
                  marginTop: "0.5rem",
                }}
              >
                Conference on{" "}
                <span style={{ color: "#6c3bf5" }}>RF</span>,{" "}
                <span style={{ color: "#f59e0b" }}>Antenna</span>,{" "}
                <span style={{ color: "#00b4d8" }}>Microwave</span> and{" "}
                <span className="gradient-text-warm">Photonics</span>
              </p>
            </div>

            {/* Description */}
            <p
              ref={descRef}
              style={{ fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "38rem", color: isDark ? "var(--text-muted)" : "#64748b" }}
            >
              Uniting the world&apos;s brightest minds in electromagnetics, wireless systems,
              RF engineering, microwave innovation, and photonic technologies for two
              transformative days.
            </p>

            {/* Date + Venue in a single line */}
            <div ref={metaRef} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", width: "100%" }}>
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
                <div>
                  <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6c3bf5", marginBottom: "0.125rem" }}>Date</p>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: isDark ? "var(--text-base)" : "#0f172a" }}>January 26–27, 2027</p>
                </div>
              </div>

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
                <div>
                  <p style={{ fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#f59e0b", marginBottom: "0.125rem" }}>Venue</p>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: isDark ? "var(--text-base)" : "#0f172a" }}>ABV-IIITM Gwalior, India</p>
                </div>
              </div>
            </div>

            {/* Buttons Centered Row */}
            <div ref={btnsRef} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", width: "100%" }}>
              <Link href="/attend/registration" className="btn-accent" style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}>
                <svg style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Register Now
              </Link>
              <Link href="/authors/call-for-papers" className="btn-outline" style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}>
                <svg style={{ width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Submit Paper
              </Link>
            </div>

            <p ref={creditRef} className="text-sm font-medium" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>
              Organised by ABV-IIITM Gwalior · IEEE
            </p>
          </div>

          {/* Right — Animated Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div
                className="w-[420px] h-[420px] rounded-full flex items-center justify-center"
                style={{
                  background: isDark
                    ? "radial-gradient(circle at 40% 40%, rgba(108,59,245,0.25), rgba(0,180,216,0.12) 60%, transparent)"
                    : "radial-gradient(circle at 40% 40%, rgba(108,59,245,0.12), rgba(0,180,216,0.08) 60%, transparent)",
                  border: isDark ? "1px solid rgba(108,59,245,0.3)" : "1px solid rgba(108,59,245,0.15)",
                }}
              >
                {/* Inner ring */}
                <div
                  className="w-[300px] h-[300px] rounded-full flex items-center justify-center"
                  style={{
                    background: isDark
                      ? "radial-gradient(circle, rgba(108,59,245,0.3), rgba(0,180,216,0.15))"
                      : "radial-gradient(circle, rgba(108,59,245,0.15), rgba(0,180,216,0.08))",
                    border: isDark ? "1px solid rgba(108,59,245,0.4)" : "1px solid rgba(108,59,245,0.2)",
                  }}
                >
                  {/* Center orb */}
                  <div
                    className="w-[160px] h-[160px] rounded-full flex items-center justify-center shadow-2xl"
                    style={{ background: "linear-gradient(135deg, #6c3bf5, #00b4d8)" }}
                  >
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[
                { color: "#6c3bf5", top: "10%", left: "50%", size: 12 },
                { color: "#00b4d8", top: "50%", left: "5%", size: 10 },
                { color: "#f59e0b", top: "85%", left: "50%", size: 8 },
                { color: "#10b981", top: "50%", left: "90%", size: 10 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    backgroundColor: dot.color,
                    top: dot.top,
                    left: dot.left,
                    transform: "translate(-50%,-50%)",
                    boxShadow: `0 0 12px ${dot.color}`,
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}