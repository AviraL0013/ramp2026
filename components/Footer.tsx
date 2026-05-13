"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const quickLinks = [
  { label: "About RAMP", href: "/about/overview" },
  { label: "Call for Papers", href: "/authors/call-for-papers" },
  { label: "Registration", href: "/attend/registration" },
  { label: "Speakers", href: "/program/speakers" },
  { label: "Venue", href: "/attend/venue" },
  { label: "Contact", href: "/about/contact" },
];

const ieeeLinks = [
  { label: "IEEE AP-S", href: "https://ieeeaps.org/" },
  { label: "IEEE MTT-S", href: "https://mtt.org/" },
  { label: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
];

const contactGroups = [
  {
    title: "Host",
    name: "ABV-IIITM Gwalior",
    email: "ramp2027@iiitm.ac.in",
  },
  {
    title: "Manager",
    name: "Elisyan India",
    email: "mapcon2026@ieeemapcon.org",
  }
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      style={{
        backgroundColor: "#060714",
        color: "#94a3b8",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Background Cinematic Effects */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ 
          position: "absolute", 
          bottom: "-2%", 
          left: "50%", 
          transform: "translateX(-50%)", 
          width: "60vw", 
          height: "20vw", 
          background: "radial-gradient(circle, rgba(108,59,245,0.04) 0%, transparent 70%)", 
          filter: "blur(80px)" 
        }} />
      </div>

      {/* Top CTA Bar (Ultra Compact) */}
      <div 
        style={{ 
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "24px 0"
        }}
      >
        <div className="container-center">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                Ready to Join <span className="gradient-text">RAMP 2027?</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Link
                href="/attend/registration"
                style={{
                  backgroundColor: "#6c3bf5",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: "12px",
                  transition: "all 0.3s ease"
                }}
                className="hover:scale-105"
              >
                Register
              </Link>
              <Link
                href="/authors/call-for-papers"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                className="hover:bg-white/5"
              >
                Submission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (Ultra Compact) */}
      <div className="container-center" style={{ padding: "40px 0", position: "relative", zIndex: 10 }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
            gap: "32px" 
          }}
        >
          {/* Column 1: Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ 
              backgroundColor: "#ffffff", 
              width: "fit-content", 
              padding: "6px 12px", 
              borderRadius: "8px"
            }}>
              <Image src="/logo.jpeg" alt="RAMP 2027" width={100} height={25} style={{ height: "25px", width: "auto" }} />
            </div>
            <p style={{ fontSize: "12px", lineHeight: 1.5, color: "#64748b", fontWeight: 500 }}>
              Global platform for RF and Photonics innovation.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    transition: "all 0.3s ease"
                  }}
                  className="hover:bg-[#6c3bf5]"
                >
                  <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.2em", marginBottom: "16px" }}>Nav</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: "12px", fontWeight: 500, color: "#64748b", textDecoration: "none" }}
                  className="hover:text-[#6c3bf5]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: IEEE */}
          <div>
            <h3 style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.2em", marginBottom: "16px" }}>IEEE</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {ieeeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", fontWeight: 500, color: "#64748b", textDecoration: "none" }}
                  className="hover:text-[#00b4d8]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", color: "#ffffff", letterSpacing: "0.2em", marginBottom: "16px" }}>Contact</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactGroups.map((group) => (
                <div key={group.title} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "8px", fontWeight: 900, color: "#6c3bf5", textTransform: "uppercase" }}>{group.title}</span>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#ffffff" }}>{group.name}</p>
                  <a href={`mailto:${group.email}`} style={{ fontSize: "11px", color: "#64748b", textDecoration: "none" }} className="hover:text-white">{group.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HALF-WRITTEN RAMP (Subtler) */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "-3vw", 
          right: "-3vw", 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "14vw", 
          fontWeight: 900, 
          color: "rgba(255,255,255,0.015)", 
          pointerEvents: "none",
          lineHeight: 0.8,
          letterSpacing: "-0.05em",
          zIndex: 1,
          whiteSpace: "nowrap"
        }}
      >
        RAMP
      </div>

      {/* Bottom Bar (Ultra Compact) */}
      <div 
        style={{ 
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "16px 0",
          backgroundColor: "rgba(0,0,0,0.2)",
          position: "relative",
          zIndex: 10
        }}
      >
        <div className="container-center">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
            <p style={{ fontSize: "10px", color: "#475569", fontWeight: 600 }}>
              © {new Date().getFullYear()} IEEE RAMP.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {["Privacy", "Terms", "Refunds"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "10px", color: "#475569", textDecoration: "none", fontWeight: 600 }} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
            {/* Removed the 'Built for Excellence' part as requested from the screenshot */}
          </div>
        </div>
      </div>
    </footer>
  );
}
