"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/overview",
    children: [
      { label: "MAPCON Overview", href: "/about/overview" },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── ROW 1: Top info bar ── */}
      <div className="bg-[#6c3bf5] text-white text-xs py-2.5 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-medium tracking-wide">
          <span className="flex items-center gap-1.5">
            <span>📅</span>
            <span>January 26–27, 2027</span>
          </span>
          <span className="text-purple-300">|</span>
          <span className="flex items-center gap-1.5">
            <span>📍</span>
            <span>ABV-IIITM Gwalior, Madhya Pradesh, India</span>
          </span>
          <span className="text-purple-300">|</span>
          <a
            href="mailto:info.ieeemapcon2026@gmail.com"
            className="hover:text-purple-200 underline underline-offset-2 transition-colors"
          >
            info.ieeemapcon2026@gmail.com
          </a>
        </div>
      </div>

      {/* ── ROW 2: Logo row ── */}
<div className="bg-white border-b border-slate-100">
  <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-5 flex flex-col items-center justify-center">
    
    {/* Logo */}
    <Link href="/" className="shrink-0">
      <Image
        src="/logo.jpeg"
        alt="RAMP 2027"
        width={500}
        height={140}
        className="h-28 w-auto object-contain"
        priority
      />
    </Link>

  </div>
</div>

{/* ── ROW 3: Navigation bar (sticky) ── */}
<header
  className={`sticky top-0 z-50 hidden md:block transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-md shadow-slate-200/70 border-b border-slate-100"
      : "bg-white border-b border-slate-200"
  }`}
>
  <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

    <div className="grid grid-cols-[1fr_auto] items-center">

      {/* Center Navigation */}
      <div className="flex justify-center">
        <nav className="flex items-center justify-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative dropdown-parent group"
              >
                <button className="flex items-center gap-1.5 px-2 py-5 text-[16px] font-semibold text-slate-700 hover:text-[#6c3bf5] transition-colors whitespace-nowrap">
                  {item.label}

                  <svg
                    className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-200 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="dropdown-menu absolute top-full left-0 mt-0 w-60 bg-white border border-slate-200 rounded-b-xl rounded-tr-xl shadow-xl shadow-slate-200/60 py-2 z-50">
                  {item.children.map((child) =>
                    "isParent" in child &&
                    child.isParent &&
                    child.children ? (
                      <div
                        key={child.label}
                        className="relative dropdown-parent group/sub"
                      >
                        <button className="w-full flex items-center justify-between gap-2 px-5 py-2.5 text-sm text-slate-600 hover:text-[#6c3bf5] hover:bg-purple-50 transition-colors font-medium">
                          {child.label}

                          <svg
                            className="w-3.5 h-3.5 opacity-40 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        <div className="dropdown-menu absolute top-0 left-full ml-0.5 w-52 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                          {child.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-2.5 text-sm text-slate-600 hover:text-[#6c3bf5] hover:bg-purple-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={child.label}
                        href={"href" in child ? child.href : "#"}
                        className="block px-5 py-2.5 text-sm text-slate-600 hover:text-[#6c3bf5] hover:bg-purple-50 transition-colors font-medium"
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-2 py-5 text-[16px] font-semibold text-slate-700 hover:text-[#6c3bf5] transition-colors whitespace-nowrap block"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Register Button */}
      <div className="flex justify-end">
        <Link
          href="/attend/registration"
          className="btn-accent !py-3 !px-8 text-sm rounded-full"
        >
          Register Now
        </Link>
      </div>

    </div>
  </div>
</header>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <Image src="/logo.jpeg" alt="RAMP 2027" width={160} height={48} className="h-10 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:text-[#6c3bf5] hover:bg-purple-50 rounded-xl transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform text-slate-400 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-3 space-y-0.5 mt-1">
                        {item.children.map((child) =>
                          "isParent" in child && child.isParent && child.children ? (
                            <div key={child.label}>
                              <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                {child.label}
                              </p>
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2 text-sm text-slate-500 hover:text-[#6c3bf5] hover:bg-purple-50 rounded-lg transition-colors"
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
                              className="block px-4 py-2 text-sm text-slate-600 hover:text-[#6c3bf5] hover:bg-purple-50 rounded-lg transition-colors font-medium"
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
                    className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-[#6c3bf5] hover:bg-purple-50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-5 border-t border-slate-100">
            <Link
              href="/attend/registration"
              onClick={() => setMobileOpen(false)}
              className="btn-accent w-full justify-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
