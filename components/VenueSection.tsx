import Image from "next/image";

const venueImages = [
  { src: "https://placehold.co/600x400/f3f0ff/6c3bf5?text=Main+Hall", alt: "Main Conference Hall" },
  { src: "https://placehold.co/600x400/e0f8ff/00b4d8?text=Exhibition+Area", alt: "Exhibition Area" },
  { src: "https://placehold.co/600x400/fef9e7/f59e0b?text=Auditorium", alt: "Auditorium" },
  { src: "https://placehold.co/600x400/ecfdf5/10b981?text=ABV-IIITM+Campus", alt: "ABV-IIITM Gwalior Campus" },
];

export default function VenueSection() {
  return (
    <section className="section-py bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — 2×2 image grid */}
          <div className="grid grid-cols-2 gap-3">
            {venueImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-slate-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">{img.alt}</p>
              </div>
            ))}
          </div>

          {/* Right — Text */}
          <div className="space-y-6">
            <div className="section-label bg-amber-50 text-amber-600 border border-amber-100">
              Conference Venue
            </div>

            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                ABV-IIITM Gwalior
              </h2>
              <p className="text-[#00b4d8] font-bold text-lg mt-1">Gwalior, Madhya Pradesh, India</p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Established in 1997, <strong className="text-slate-800">ABV-IIITM Gwalior</strong> is an
              Institute of National Importance dedicated to excellence in Information Technology,
              Management, Electronics, Communication Engineering, and interdisciplinary research.
              Located amidst the scenic surroundings of the historic{" "}
              <em className="not-italic font-semibold text-amber-600">Gwalior Fort</em>, the campus spans
              over 160 acres and provides a vibrant academic and research environment.
            </p>

            {/* Info tiles */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "✈️", label: "Gwalior Airport", sub: "Connected to major cities" },
                { icon: "🚆", label: "Gwalior Railway Station", sub: "Well connected pan-India" },
                { icon: "🏨", label: "Partner Hotels", sub: "Special conference rates" },
                { icon: "🏰", label: "Gwalior Fort", sub: "UNESCO-listed heritage site" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-700 leading-tight">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="https://placehold.co/600x150/f8fafc/94a3b8?text=ABV-IIITM+Gwalior+Campus+Map"
                alt="Venue Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                <a
                  href="https://maps.google.com/?q=ABV-IIITM+Gwalior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !text-xs !py-2 !px-5"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
