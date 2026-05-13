"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ComingSoon({ title }: { title?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-4 py-24"
      style={{ backgroundColor: isDark ? "var(--bg)" : "#f8fafc" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-md w-full rounded-3xl p-10 text-center relative overflow-hidden"
        style={{
          backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
          border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0",
          boxShadow: isDark ? "0 8px 40px rgba(0,0,0,0.3)" : "0 8px 40px rgba(108,59,245,0.08)",
        }}
      >
        {/* Soft blobs */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-40"
          style={{ backgroundColor: isDark ? "rgba(108,59,245,0.2)" : "#ede9fe" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full pointer-events-none opacity-40"
          style={{ backgroundColor: isDark ? "rgba(0,180,216,0.15)" : "#e0f8ff" }}
        />

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] flex items-center justify-center shadow-lg shadow-purple-500/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
        </div>

        <h2
          className="font-extrabold text-2xl mb-3"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: isDark ? "var(--text-base)" : "#0f172a",
          }}
        >
          {title ?? "Content Coming Soon"}
        </h2>

        <p
          className="text-sm leading-relaxed mb-7"
          style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}
        >
          This section is currently being prepared. Please check back shortly — we&apos;re working hard to bring you the full details.
        </p>

        <div className="flex items-center gap-3 mb-7">
          <div className="flex-1 h-px" style={{ backgroundColor: isDark ? "var(--border)" : "#e2e8f0" }} />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}
          >
            RAMP 2027
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: isDark ? "var(--border)" : "#e2e8f0" }} />
        </div>

        <a
          href="mailto:info.ieeemapcon2026@gmail.com"
          className="btn-outline w-full justify-center text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get Notified by Email
        </a>
      </motion.div>
    </div>
  );
}
