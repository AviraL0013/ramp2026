import Link from "next/link";

interface Crumb { label: string; href: string; }
interface PageHeroProps { title: string; breadcrumbs?: Crumb[]; subtitle?: string; }

export default function PageHero({ title, breadcrumbs, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] flex items-end pb-10 overflow-hidden"
      style={{ paddingTop: "100px", minHeight: "220px" }}
    >
      {/* Light grid overlay */}
      <div className="absolute inset-0 grid-bg-light opacity-20" />
      {/* Blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-4 flex-wrap font-medium">
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
          </nav>
        )}

        <h1 className="font-display font-extrabold text-white leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
          {title}
        </h1>
        {subtitle && <p className="text-white/70 mt-2 text-sm max-w-xl">{subtitle}</p>}
        <div className="mt-5 w-14 h-1 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
