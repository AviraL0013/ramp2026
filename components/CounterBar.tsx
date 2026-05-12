// "use client";

// import { useEffect, useRef, useState } from "react";

// const stats = [
//   { icon: "👥", value: 1500, suffix: "+", label: "Expected Delegates", color: "#6c3bf5", bg: "#f3f0ff" },
//   { icon: "🏢", value: 80, suffix: "+", label: "Exhibition Booths", color: "#00b4d8", bg: "#e0f8ff" },
//   { icon: "🌏", value: 5, suffix: "+", label: "Countries", color: "#f59e0b", bg: "#fef9e7" },
//   { icon: "🏆", value: 4, suffix: "", label: "Past Editions", color: "#10b981", bg: "#ecfdf5" },
// ];

// function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started.current) {
//           started.current = true;
//           const duration = 1800;
//           const startTime = performance.now();
//           const animate = (now: number) => {
//             const elapsed = now - startTime;
//             const progress = Math.min(elapsed / duration, 1);
//             const eased = 1 - Math.pow(1 - progress, 3);
//             setCount(Math.round(eased * value));
//             if (progress < 1) requestAnimationFrame(animate);
//           };
//           requestAnimationFrame(animate);
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [value]);

//   return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
// }

// export default function CounterBar() {
//   return (
//     <section className="py-16 bg-gradient-to-r from-[#6c3bf5] via-[#5a2fd4] to-[#00b4d8]">
//       <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="bg-white/15 backdrop-blur-sm rounded-2xl p-7 border border-white/20 text-center group hover:bg-white/25 transition-all duration-300"
//             >
//               <div className="text-4xl mb-3">{stat.icon}</div>
//               <div className="text-4xl lg:text-5xl font-extrabold text-white font-display mb-1">
//                 <AnimatedCounter value={stat.value} suffix={stat.suffix} />
//               </div>
//               <p className="text-white/80 text-sm font-semibold">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
