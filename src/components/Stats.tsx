"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

const STATS = [
  { value: 10, suffix: "K+", label: "Users", icon: Icons.Users },
  { value: 99.99, suffix: "%", label: "Uptime", icon: Icons.Shield, decimals: 2 },
  { value: 50, suffix: "M+", label: "API Requests", icon: Icons.Zap },
  { value: 120, suffix: "+", label: "Countries", icon: Icons.Globe },
];

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;

          function animate(t: number) {
            if (!startTime) startTime = t;
            const progress = Math.min((t - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * end).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return { count, ref };
}

function StatItem({
  value,
  suffix,
  label,
  icon: Icon,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  decimals?: number;
}) {
  const { count, ref } = useCountUp(value, 2200, decimals);

  return (
    <div ref={ref} className="group text-center">
      <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        <Icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1.5 text-sm text-muted/80 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-purple-glow/5 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/[0.08]"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04), rgba(6,182,212,0.02))",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Animated gradient border (Agus Collection style) */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              padding: "1px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.4), rgba(6,182,212,0.3))",
              backgroundSize: "200% 200%",
              animation: "gradient-xy 4s ease infinite",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          {/* Inner content */}
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
