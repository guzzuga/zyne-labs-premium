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
    <div ref={ref} className="text-center">
      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="text-3xl font-bold tracking-tight md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-3xl border-primary/10 p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05), rgba(6,182,212,0.03))",
          }}
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
