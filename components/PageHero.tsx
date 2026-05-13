"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface Crumb { label: string; href: string; }
interface PageHeroProps {
  title: string;
  breadcrumbs?: Crumb[];
  subtitle?: string;
}

export default function PageHero({ title, breadcrumbs, subtitle }: PageHeroProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="relative overflow-hidden flex items-end pb-10"
      style={{
        paddingTop: "100px",
        minHeight: "220px",
        background: isDark
          ? "linear-gradient(135deg, #1a0a3d 0%, #0a1a2e 60%, #0d1f1a 100%)"
          : "linear-gradient(135deg, #6c3bf5 0%, #4f1fd4 50%, #00b4d8 100%)",
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-light opacity-10" />

      {/* Glow blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-10 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)" }}
      />

      <div className="container-center relative z-10 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-xs text-white/60 mb-4 flex-wrap font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/90">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold text-white leading-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 mt-2 text-sm max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3.5rem" }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-5 h-1 rounded-full bg-white/40"
        />
      </div>
    </section>
  );
}
