import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "About", href: "/about/overview" },
          { label: "Contact", href: "/about/contact" },
        ]}
        subtitle="Reach out to the RAMP 2027 organising team at ABV-IIITM Gwalior."
      />
      <section className="section-py bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {[
              {
                title: "Conference Host",
                name: "ABV-IIITM Gwalior",
                detail: "Gwalior, Madhya Pradesh, India",
                email: "ramp2027@iiitm.ac.in",
                color: "from-primary/10 to-primary/5",
                border: "border-purple-200",
                accent: "#6c3bf5",
              },
              {
                title: "Conference Secretariat",
                name: "RAMP 2027 Organising Committee",
                detail: "ABV-IIITM Gwalior",
                email: "ramp2027secretariat@iiitm.ac.in",
                phone: "+91 751 244 9700",
                color: "from-cyan-50 to-cyan-50/30",
                border: "border-cyan-200",
                accent: "#00b4d8",
              },
              {
                title: "Registration Queries",
                name: "Registration Desk",
                detail: "RAMP 2027",
                email: "ramp2027registrations@iiitm.ac.in",
                phone: "+91 98765 43210",
                color: "from-amber-50 to-amber-50/30",
                border: "border-amber-200",
                accent: "#f59e0b",
              },
              {
                title: "Paper Submissions",
                name: "Technical Programme Committee",
                detail: "RAMP 2027",
                email: "ramp2027papers@iiitm.ac.in",
                color: "from-green-50 to-green-50/30",
                border: "border-green-200",
                accent: "#10b981",
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`bg-gradient-to-br ${c.color} rounded-2xl p-6 border ${c.border}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {c.title}
                </p>
                <p className="font-bold text-slate-800 mb-0.5">{c.name}</p>
                <p className="text-slate-500 text-xs mb-3">{c.detail}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-sm font-semibold hover:underline block"
                  style={{ color: c.accent }}
                >
                  {c.email}
                </a>
                {c.phone && (
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="text-slate-400 text-sm hover:text-slate-700 mt-1 block"
                  >
                    {c.phone}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Address block */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Mailing Address</p>
            <p className="text-slate-700 font-semibold">RAMP 2027 Organising Committee</p>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              ABV-Indian Institute of Information Technology &amp; Management (ABV-IIITM)<br />
              Morena Link Road, Gwalior – 474015<br />
              Madhya Pradesh, India
            </p>
          </div>

          <ComingSoon title="Contact Form Coming Soon" />
        </div>
      </section>
    </>
  );
}
