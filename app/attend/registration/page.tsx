import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Registration" };

export default function RegistrationPage() {
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

      {/* Registration fee table */}
      <section className="section-py bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="section-label bg-purple-50 text-[#6c3bf5] border border-purple-100 mx-auto w-fit mb-2">
              Registration Categories
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900">
              Registration <span className="gradient-text">Fee Structure</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              All fees in INR (Indian Rupees). Foreign participant fees in USD.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#6c3bf5] to-[#00b4d8] text-white">
                  <th className="px-6 py-4 text-left font-bold text-sm">Category</th>
                  <th className="px-6 py-4 text-center font-bold text-sm">Early Bird</th>
                  <th className="px-6 py-4 text-center font-bold text-sm">Regular</th>
                  <th className="px-6 py-4 text-center font-bold text-sm">Late / On-site</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { cat: "IEEE Student Member", early: "₹3,000", regular: "₹4,000", late: "₹5,000" },
                  { cat: "IEEE Member", early: "₹6,000", regular: "₹8,000", late: "₹10,000" },
                  { cat: "Non-IEEE Member (Student)", early: "₹4,000", regular: "₹5,000", late: "₹6,000" },
                  { cat: "Non-IEEE Member", early: "₹8,000", regular: "₹10,000", late: "₹12,000" },
                  { cat: "Foreign Participant", early: "$150", regular: "$200", late: "$250" },
                  { cat: "Industry / Corporate", early: "₹12,000", regular: "₹15,000", late: "₹18,000" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-6 py-4 font-semibold text-slate-700">{row.cat}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-bold">{row.early}</td>
                    <td className="px-6 py-4 text-center text-[#6c3bf5] font-bold">{row.regular}</td>
                    <td className="px-6 py-4 text-center text-slate-500 font-semibold">{row.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
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
                bg: "#f3f0ff",
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
                bg: "#fef9e7",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6"
                style={{ borderColor: `${item.color}30`, background: item.bg }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="mailto:ramp2027registrations@iiitm.ac.in"
              className="btn-accent !px-10 !py-4 !text-base"
            >
              Register / Enquire via Email
            </a>
            <p className="text-slate-400 text-xs mt-4">Online registration portal opening soon.</p>
          </div>
        </div>
      </section>
    </>
  );
}
