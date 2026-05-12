import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About RAMP 2027", href: "/about/overview" },
  { label: "Call for Papers", href: "/authors/call-for-papers" },
  { label: "Registration", href: "/attend/registration" },
  { label: "Invited Speakers", href: "/program/speakers" },
  { label: "Venue", href: "/attend/venue" },
  { label: "Sponsorship", href: "/sponsorship/opportunities" },
  { label: "Travel Grants", href: "/travel-grants" },
  { label: "Contact", href: "/about/contact" },
];

const ieeeLinks = [
  { label: "IEEE AP-S", href: "https://ieeeaps.org/" },
  { label: "IEEE MTT-S", href: "https://mtt.org/" },
  { label: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
  { label: "IEEE Benefits", href: "https://www.ieee.org/membership/benefits/" },
  { label: "IEEE Learning Network", href: "https://iln.ieee.org/public/TrainingCatalog.aspx" },
  { label: "IEEE Collabratec", href: "https://ieee-collabratec.ieee.org/" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 */}
          <div className="space-y-5">
            <div className="bg-white inline-block rounded-xl p-2">
              <Image src="/logo.jpeg" alt="RAMP 2027" width={180} height={50} className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              IEEE RAMP 2027 — Conference on RF, Antenna, Microwave &amp; Photonics.<br />
              Hosted by ABV-IIITM Gwalior, Madhya Pradesh, India.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                { label: "LinkedIn", icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#6c3bf5] flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-[#00b4d8] transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Connect with IEEE</h3>
            <ul className="space-y-2.5">
              {ieeeLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 group-hover:bg-[#00b4d8] transition-colors shrink-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact Us</h3>
            <div className="space-y-5 text-sm">
              {[
                {
                  title: "Conference Host",
                  name: "ABV-IIITM Gwalior, India",
                  email: "ramp2027@iiitm.ac.in",
                },
                {
                  title: "Conference Manager",
                  name: "Elisyan India Pvt. Ltd.",
                  email: "mapcon2026@ieeemapcon.org",
                  phone: "+91 973 993 7911",
                },
                {
                  title: "Registrations",
                  name: "Conference Secretariat",
                  email: "ramp2027registrations@iiitm.ac.in",
                  phone: "+91 98765 43210",
                },
              ].map((c) => (
                <div key={c.title}>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{c.title}</p>
                  <p className="text-slate-300 font-medium text-xs mb-0.5">{c.name}</p>
                  <a href={`mailto:${c.email}`} className="text-[#00b4d8] hover:text-white text-xs transition-colors block">{c.email}</a>
                  {c.phone && <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-slate-400 hover:text-white text-xs transition-colors">{c.phone}</a>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800 py-5">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} RAMP 2027 – IEEE MTT-S &amp; AP-S. All rights reserved.</p>
          <div className="flex gap-5">
            {["Cancellation & Refund Policy", "Terms & Conditions", "Privacy Policy"].map((l) => (
              <a key={l} href="#" className="hover:text-slate-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
