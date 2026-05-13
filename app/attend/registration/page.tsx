"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const registrationRows = [
  { cat: "IEEE Student Member", early: "₹3,000", regular: "₹4,000", late: "₹5,000" },
  { cat: "IEEE Member", early: "₹6,000", regular: "₹8,000", late: "₹10,000" },
  { cat: "Non-IEEE Member (Student)", early: "₹4,000", regular: "₹5,000", late: "₹6,000" },
  { cat: "Non-IEEE Member", early: "₹8,000", regular: "₹10,000", late: "₹12,000" },
  { cat: "Foreign Participant", early: "$150", regular: "$200", late: "$250" },
  { cat: "Industry / Corporate", early: "₹12,000", regular: "₹15,000", late: "₹18,000" },
];

export default function RegistrationPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <PageHero
        title="Registration"
        breadcrumbs={[
          { label: "Attend", href: "/attend/registration" },
          { label: "Registration", href: "/attend/registration" },
        ]}
        subtitle="Register for RAMP 2027 – January 26–27, 2027, ABV-IIITM Gwalior."
      />

      <section className="section-py" style={{ backgroundColor: isDark ? "var(--bg)" : "#ffffff" }}>
        <div className="container-center">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="section-label mx-auto mb-2"
              style={{
                backgroundColor: isDark ? "rgba(108,59,245,0.15)" : "#f3f0ff",
                color: "#6c3bf5",
                border: isDark ? "1px solid rgba(108,59,245,0.35)" : "1px solid #ddd6fe",
              }}
            >
              Registration Categories
            </div>
            <h2
              className="font-extrabold text-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: isDark ? "var(--text-base)" : "#0f172a" }}
            >
              Registration <span className="gradient-text">Fee Structure</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
              All fees in INR (Indian Rupees). Foreign participant fees in USD.
            </p>
          </div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-2xl mb-10"
            style={{ border: isDark ? "1px solid var(--border)" : "1px solid #e2e8f0", boxShadow: "var(--shadow-card)" }}
          >
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#6c3bf5] to-[#00b4d8] text-white">
                  <th className="px-6 py-4 text-left font-bold">Category</th>
                  <th className="px-6 py-4 text-center font-bold">Early Bird</th>
                  <th className="px-6 py-4 text-center font-bold">Regular</th>
                  <th className="px-6 py-4 text-center font-bold">Late / On-site</th>
                </tr>
              </thead>
              <tbody>
                {registrationRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0
                        ? isDark ? "var(--bg-card)" : "#ffffff"
                        : isDark ? "rgba(255,255,255,0.02)" : "#f8fafc",
                      borderTop: isDark ? "1px solid var(--border)" : "1px solid #f1f5f9",
                    }}
                  >
                    <td className="px-6 py-4 font-semibold" style={{ color: isDark ? "var(--text-base)" : "#334155" }}>
                      {row.cat}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-green-500">{row.early}</td>
                    <td className="px-6 py-4 text-center font-bold text-[#6c3bf5]">{row.regular}</td>
                    <td className="px-6 py-4 text-center font-semibold" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>
                      {row.late}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
          >
            {[
              {
                icon: "📋",
                title: "What's Included",
                points: [
                  "Conference proceedings (IEEE Xplore)",
                  "All technical sessions access",
                  "Conference kit and materials",
                  "Lunch and refreshments (both days)",
                  "Certificate of participation",
                ],
                color: "#6c3bf5",
              },
              {
                icon: "📅",
                title: "Important Deadlines",
                points: [
                  "Early-Bird registration: December 15, 2026",
                  "Regular registration: January 10, 2027",
                  "Late/On-site: January 26, 2027",
                  "Each accepted paper requires at least one full registration",
                  "Each registration covers one paper",
                ],
                color: "#f59e0b",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: isDark ? "var(--bg-card)" : "#ffffff",
                  border: isDark ? `1px solid ${item.color}35` : `1px solid ${item.color}25`,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold" style={{ color: isDark ? "var(--text-base)" : "#0f172a" }}>
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: isDark ? "var(--text-muted)" : "#64748b" }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <div className="text-center">
            <a href="mailto:ramp2027registrations@iiitm.ac.in" className="btn-accent !px-10 !py-4 !text-base">
              Register / Enquire via Email
            </a>
            <p className="text-xs mt-4" style={{ color: isDark ? "var(--text-faint)" : "#94a3b8" }}>
              Online registration portal opening soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
