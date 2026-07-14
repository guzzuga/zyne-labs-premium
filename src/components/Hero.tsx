"use client";

import { motion } from "framer-motion";
import LiveTerminal from "./LiveTerminal";
import { useTilt } from "@/hooks/useTilt";
import { Icons } from "./Icons";

const WA = "https://wa.me/6287874722632";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* ── BENTO GRID ── */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr_auto] lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto]">

          {/* ── Row 1: Badge + Heading (span 8) + Terminal top (span 4) ── */}

          {/* Main content cell */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 lg:col-span-8 flex flex-col justify-center"
          >
            {/* Premium Badge */}
            <div className="group relative inline-flex w-fit mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-purple-glow/20 to-cyan/30 blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="glass-strong relative inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs text-muted border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                </span>
                <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                  AI studio from Mojokerto
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="text-[clamp(2.8rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              <span className="block bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                We build AI
              </span>
              <br />
              <span className="gradient-text block mt-2 bg-gradient-to-r from-white via-primary to-cyan bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(99,102,241,0.3)]">
                that actually ships.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted/90 md:text-lg">
              Kami bantu bisnis bikin aplikasi AI, sistem otomatis, dan integrasi
              yang beneran jalan di produksi — bukan cuma demo yang bagus pas presentasi.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={WA}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary bg-[length:200%_100%] animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Start Your Project
                  <Icons.ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              <a
                href="#works"
                className="btn-secondary group inline-flex items-center justify-center gap-2 px-8 py-4 text-base rounded-xl"
              >
                <Icons.Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                View Our Work
              </a>
            </div>
          </motion.div>

          {/* Terminal cell (right side, row span 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-4 lg:col-span-4 md:row-span-2 relative perspective-1000"
          >
            <LiveTerminalShell />
          </motion.div>

          {/* ── Row 2: Trust + Stats (span 8) ── */}

          {/* Trust signals cell */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 lg:col-span-8 flex flex-col justify-end pb-4"
          >
            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex -space-x-3">
                {["#6366F1", "#8B5CF6", "#06B6D4", "#22C55E"].map((color, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-[#050816] flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "S", "B", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted/70 mt-1">
                  <span className="text-white font-semibold">25+</span> clients trust us worldwide
                </p>
              </div>
            </div>

            {/* Stats row — bento style */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "25+", label: "Clients", sub: "Worldwide", gradient: "from-primary/20 to-primary/5" },
                { value: "50+", label: "Projects", sub: "Delivered", gradient: "from-purple-glow/20 to-purple-glow/5" },
                { value: "4.9", label: "Rating", sub: "Average", gradient: "from-cyan/20 to-cyan/5" },
              ].map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, sub, gradient }: { value: string; label: string; sub: string; gradient: string }) {
  const tiltRef = useTilt(4);

  return (
    <div ref={tiltRef} className="tilt-card">
      <div className={`tilt-card-inner relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b ${gradient} p-5 transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]`}>
        <div className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="mt-1 text-sm font-medium text-white/90">{label}</div>
        <div className="mt-0.5 text-xs text-muted/60">{sub}</div>
      </div>
    </div>
  );
}

function LiveTerminalShell() {
  return (
    <div className="group relative h-full">
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/12 via-purple-glow/8 to-cyan/8 opacity-40 blur-3xl animate-pulse-slow" />

      {/* Terminal shell */}
      <div className="glass-strong relative h-full overflow-hidden rounded-3xl md:rounded-[32px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_60%)]" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between border-b border-white/[0.08] px-5 py-2.5 bg-gradient-to-r from-white/[0.02] to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_12px_rgba(234,179,8,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
            </div>
            <span className="ml-3 text-[10px] text-muted/50 font-mono tracking-wide">
              zyne.code — live terminal
            </span>
          </div>
        </div>

        {/* Live terminal area */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: 0 }}>
          <LiveTerminal />
        </div>

        {/* Bottom bar */}
        <div className="relative flex items-center justify-between border-t border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-transparent px-4 py-2.5 md:px-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
            <span className="text-[10px] text-muted/60 font-mono">running</span>
          </div>
          <span className="text-[10px] text-muted/40 font-mono">utf-8</span>
        </div>
      </div>
    </div>
  );
}