"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

/* ─────────────────────── NAV DATA ─────────────────────── */
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/overview",
    children: [
      { label: "RAMP Overview", href: "/about/overview" },
      { label: "Patrons", href: "/about/patrons" },
      { label: "Organizing Committee", href: "/about/organizing-committee" },
      { label: "International Advisory Committee", href: "/about/iac" },
      { label: "IEEE Advisory Council", href: "/about/ieee-advisory-council" },
      { label: "IEEE Presidents", href: "/about/ieee-presidents" },
      {
        label: "Past Editions",
        href: "#",
        isParent: true,
        children: [
          { label: "2025 Edition – Kochi", href: "/about/past-editions/2025" },
          { label: "2024 Edition – Hyderabad", href: "/about/past-editions/2024" },
        ],
      },
      { label: "Contact", href: "/about/contact" },
    ],
  },
  {
    label: "Program",
    href: "/program/technical",
    children: [
      { label: "Technical Programs", href: "/program/technical" },
      { label: "Invited Speakers", href: "/program/speakers" },
    ],
  },
  {
    label: "Authors",
    href: "/authors/call-for-papers",
    children: [
      { label: "Call for Papers", href: "/authors/call-for-papers" },
      { label: "Call for Special Sessions", href: "/authors/call-for-special-sessions" },
    ],
  },
  { label: "Students", href: "/students" },
  { label: "Travel Grants", href: "/travel-grants" },
  {
    label: "Attend",
    href: "/attend/registration",
    children: [
      { label: "Registration", href: "/attend/registration" },
      { label: "Visa Information", href: "/attend/visa" },
      { label: "Venue", href: "/attend/venue" },
      { label: "Explore the City", href: "/attend/explore" },
    ],
  },
  {
    label: "Sponsorship & Exhibition",
    href: "/sponsorship/opportunities",
    children: [
      { label: "Opportunities", href: "/sponsorship/opportunities" },
    ],
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);
  const logoRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      {/* ── LOGO ROW ── */}
      <div
        ref={logoRowRef}
        style={{
          backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
          borderBottom: isDark ? "1px solid var(--border)" : "1px solid #f1f5f9",
        }}
      >
        <div className="container-center py-4 flex items-center justify-center">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.jpeg"
              alt="RAMP 2027"
              width={500}
              height={140}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* ── STICKY NAV BAR (Desktop) ── */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 hidden md:flex transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(11, 12, 29, 0.92)" : "#0d0f24",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: "1px solid rgba(108, 59, 245, 0.12)",
        }}
      >
        <div
          className="w-full flex items-center justify-between"
          style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 2rem" }}
        >
          {/* ── NAV LINKS (centred) ── */}
          <nav className="flex-1 flex items-center justify-center">
            {navItems.map((item) =>
              item.children ? (
                /* ─ dropdown trigger ─ */
                <div key={item.label} className="relative group nav-dropdown-parent">
                  <button className="nav-link flex items-center gap-1">
                    {item.label}
                    <svg
                      className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* ─ dropdown panel ─ */}
                  <div className="nav-dropdown">
                    {item.children.map((child) =>
                      "isParent" in child && child.isParent && child.children ? (
                        /* ── flyout sub-menu ── */
                        <div key={child.label} className="relative group/sub nav-dropdown-parent">
                          <button className="nav-dropdown-item flex items-center justify-between gap-2 w-full">
                            {child.label}
                            <svg
                              className="w-3 h-3 opacity-40 group-hover/sub:opacity-100 transition-opacity shrink-0"
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div className="nav-dropdown nav-dropdown-flyout">
                            {child.children.map((sub) => (
                              <Link key={sub.label} href={sub.href} className="nav-dropdown-item">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.label}
                          href={"href" in child ? child.href : "#"}
                          className="nav-dropdown-item"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ── RIGHT SIDE ── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#a78bfa" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)"; }}
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Register CTA */}
            <Link
              href="/attend/registration"
              className="nav-cta"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* ── MOBILE STICKY BAR ── */}
      <header
        className={`sticky top-0 z-50 md:hidden transition-all duration-300`}
        style={{
          backgroundColor: scrolled ? "rgba(11, 12, 29, 0.92)" : "#0d0f24",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: "1px solid rgba(108, 59, 245, 0.12)",
        }}
      >
        <div
          className="flex items-center justify-between py-3"
          style={{ maxWidth: "1600px", margin: "0 auto", padding: "0.75rem 1.25rem" }}
        >
          <Link href="/">
            <Image src="/logo.jpeg" alt="RAMP 2027" width={140} height={40} className="h-9 w-auto brightness-110" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#a78bfa" }}
            >
              {isDark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
              aria-label="Open menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[320px] max-w-[90vw] flex flex-col transition-transform duration-350 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "#0d0f24",
            borderLeft: "1px solid rgba(108, 59, 245, 0.14)",
          }}
        >
          <div className="p-5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <Image src="/logo.jpeg" alt="RAMP 2027" width={160} height={48} className="h-9 w-auto brightness-110" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#64748b" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-xl transition-all"
                      style={{
                        color: mobileExpanded === item.label ? "#a78bfa" : "#94a3b8",
                        backgroundColor: mobileExpanded === item.label ? "rgba(108,59,245,0.08)" : "transparent",
                      }}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        style={{ opacity: 0.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-3 mt-0.5 mb-1 space-y-0.5 border-l ml-4" style={{ borderColor: "rgba(108,59,245,0.25)" }}>
                        {item.children.map((child) =>
                          "isParent" in child && child.isParent && child.children ? (
                            <div key={child.label}>
                              <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6c3bf5" }}>
                                {child.label}
                              </p>
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2 text-sm rounded-lg transition-all"
                                  style={{ color: "#64748b" }}
                                  onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={child.label}
                              href={"href" in child ? child.href : "#"}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm rounded-lg transition-all"
                              style={{ color: "#64748b" }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-semibold rounded-xl transition-all"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.backgroundColor = "rgba(108,59,245,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.backgroundColor = "transparent"; }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <Link
              href="/attend/registration"
              onClick={() => setMobileOpen(false)}
              className="nav-cta w-full justify-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
