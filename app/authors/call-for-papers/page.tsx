"use client";

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const tracks = [
  "TR:01 — RF & Microwave Circuits and Systems",
  "TR:02 — Antenna Systems & Propagation",
  "TR:03 — Photonics and THz Technologies",
  "TR:04 — RF & Microwave Technologies for 5G/6G and Beyond",
  "TR:05 — RF Energy Harvesting and Wireless Power Transfer",
  "TR:06 — Electromagnetics for Biomedical and Health Applications",
  "TR:07 — Microwave & Photonics Measurement Techniques",
  "TR:08 — Emerging Technologies and Applications",
  "TR:09 — Quantum Technologies (Communication, Sensing, Material)",
];

const keyDates = [
  { label: "Submission Opens", date: "Sep 1, 2026", hot: false, conf: false },
  { label: "Paper Submission Deadline", date: "Oct 31, 2026", hot: true, conf: false },
  { label: "Notification of Acceptance", date: "Nov 30, 2026", hot: false, conf: false },
  { label: "Camera-Ready Submission", date: "Dec 20, 2026", hot: false, conf: false },
  { label: "Conference Dates", date: "Jan 26–27, 2027", hot: false, conf: true },
];

const guidelines = [
  "Papers must be written in English and follow the IEEE conference paper format.",
  "Standard papers: 4–6 pages (including references). Extra pages chargeable.",
  "Submit via the EDAS/CMT portal (link to be announced).",
  "All submissions must be original and not under review elsewhere.",
  "Double-blind review — remove author information before submission.",
  "At least one author of each accepted paper must register and present.",
];

export default function CallForPapersPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <PageHero
        title="Call for Papers"
        breadcrumbs={[
          { label: "Authors", href: "/authors/call-for-papers" },
          { label: "Call for Papers", href: "/authors/call-for-papers" },
        ]}
        subtitle="Submit your original research to RAMP 2027 — IEEE International Conference on RF, Antenna, Microwave and Photonics."
      />

      <section className="section-py" style={{ backgroundColor: isDark ? "var(--bg)" : "#ffffff" }}>
        <div className="container-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Invitation */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="section-label mb-4"
                  style={{
                    backgroundColor: isDark ? "rgba(108,59,245,0.15)" : "#f3f0ff",
                    color: "#6c3bf5",
                    border: isDark ? "1px solid rgba(108,59,245,0.35)" : "1px solid #ddd6fe",
                  }}
                >
                  Invitation to Authors
                </div>
                <h2
                  className="font-extrabold text-3xl mb-5 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: isDark ? "var(--text-base)" : "#0f172a" }}
                >
                  Submit Your <span className="gradient-text">Original Research</span>
                </h2>
                <div className="space-y-4 leading-relaxed" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
                  <p>
                    Researchers and practitioners from across the globe are invited to submit original
                    research contributions, innovative applications, industrial case studies, and
                    experimental demonstrations in the emerging domains of RF, Microwave, Antenna, and
                    Photonics technologies.
                  </p>
                  <p>
                    All submitted papers will undergo a rigorous{" "}
                    <strong style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>double-blind peer review</strong>{" "}
                    process. Accepted and presented papers will be submitted for inclusion in the{" "}
                    <strong style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>IEEE Xplore Digital Library</strong>.
                  </p>
                </div>
              </motion.div>

              {/* Conference Tracks */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3
                  className="font-bold text-xl mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: isDark ? "var(--text-base)" : "#0f172a" }}
                >
                  Conference Tracks
                </h3>
                <div className="space-y-2">
                  {tracks.map((track, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl px-5 py-3.5 transition-all duration-200"
                      style={{
                        backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                        border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = isDark ? "rgba(108,59,245,0.5)" : "#c4b5fd"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = isDark ? "var(--border)" : "#e2e8f0"; }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-extrabold"
                        style={{ background: "linear-gradient(135deg,#6c3bf5,#00b4d8)" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: isDark ? "var(--text-muted)" : "#475569" }}>
                        {track}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Submission guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: isDark ? "var(--bg-card)" : "#f8fafc",
                  border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                }}
              >
                <h3 className="font-bold mb-4" style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                  Submission Guidelines
                </h3>
                <ul className="space-y-3">
                  {guidelines.map((g, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
                      <svg className="w-4 h-4 text-[#6c3bf5] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {g}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right: sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-5"
            >
              {/* Key dates */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: isDark ? "1px solid rgba(108,59,245,0.35)" : "1px solid #ddd6fe" }}
              >
                <div className="bg-gradient-to-r from-[#6c3bf5] to-[#00b4d8] px-5 py-4">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider">Key Dates</h3>
                </div>
                <div style={{ backgroundColor: isDark ? "var(--bg-card)" : "#ffffff" }}>
                  {keyDates.map((d, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 flex items-center justify-between gap-4"
                      style={{ borderTop: i > 0 ? (isDark ? "1px solid var(--border)" : "1px solid #f1f5f9") : "none" }}
                    >
                      <p
                        className="text-xs font-semibold"
                        style={{ color: d.hot ? "#6c3bf5" : isDark ? "var(--text-muted)" : "#64748b" }}
                      >
                        {d.label}
                      </p>
                      <span
                        className="text-xs font-bold whitespace-nowrap px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: d.hot
                            ? isDark ? "rgba(108,59,245,0.2)" : "#f3f0ff"
                            : d.conf
                            ? isDark ? "rgba(245,158,11,0.15)" : "#fef9e7"
                            : "transparent",
                          color: d.hot ? "#6c3bf5" : d.conf ? "#f59e0b" : isDark ? "var(--text-faint)" : "#94a3b8",
                        }}
                      >
                        {d.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="bg-gradient-to-br from-[#6c3bf5] to-[#4f1fd4] rounded-2xl p-6 text-white text-center">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Ready to Submit?</p>
                <p className="font-bold text-lg mb-4">Paper Submission Portal</p>
                <a
                  href="mailto:ramp2027papers@iiitm.ac.in"
                  className="inline-flex items-center gap-2 bg-white text-[#6c3bf5] font-bold text-sm px-5 py-3 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  Submit via Email
                </a>
                <p className="text-purple-200 text-xs mt-3">Online portal link — coming soon</p>
              </div>

              {/* Contact */}
              <div
                className="rounded-2xl p-5"
                style={{
                  backgroundColor: isDark ? "var(--bg-card)" : "#f8fafc",
                  border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>
                  Paper Queries
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                  Technical Programme Committee
                </p>
                <a href="mailto:ramp2027papers@iiitm.ac.in" className="text-[#6c3bf5] text-sm hover:underline">
                  ramp2027papers@iiitm.ac.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
