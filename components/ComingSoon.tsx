export default function ComingSoon({ title }: { title?: string }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 shadow-lg p-10 text-center relative overflow-hidden">
        {/* Soft blobs */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-100 opacity-60 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-100 opacity-60 pointer-events-none" />

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6c3bf5] to-[#00b4d8] flex items-center justify-center shadow-lg shadow-purple-200">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
        </div>

        <h2 className="font-display font-bold text-2xl text-slate-900 mb-3">
          {title ?? "Content Coming Soon"}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-7">
          This section is currently being prepared. Please check back shortly — we're working hard to bring you the full details.
        </p>

        <div className="flex items-center gap-3 mb-7">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">RAMP 2027</span>
          <div className="flex-1 h-px bg-slate-200" />
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
      </div>
    </div>
  );
}
