"use client";

import { motion } from "framer-motion";
import LiveTerminal from "./LiveTerminal";
import { Icons } from "./Icons";

const WA = "https://wa.me/6285729753619";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 md:pt-36">
      {/* Dark overlay - Mobile: lighter | Desktop: darker for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/40 to-[#050816]/80 md:from-[#050816]/70 md:via-[#050816]/50 md:to-[#050816]/80 z-[1]" />

      {/* Premium ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-primary/8 via-purple-glow/6 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-cyan/6 via-primary/4 to-transparent blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <div>
            {/* Premium Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group relative inline-flex"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-purple-glow/20 to-cyan/30 blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="glass-strong relative inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs text-muted border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                </span>
                <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                  Premium AI Engineering Studio
                </span>
              </div>
            </motion.div>

            {/* Heading - Enhanced */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 text-[clamp(2.8rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              <span className="block bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Build Premium AI.
              </span>
              <br />
              <span className="gradient-text block mt-2 bg-gradient-to-r from-white via-primary to-cyan bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(99,102,241,0.3)]">
                Ship with Confidence.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-xl text-base leading-relaxed text-muted/90 md:text-lg"
            >
              We build premium AI-powered applications, intelligent systems, and
              automation solutions for forward-thinking businesses. From concept
              to deployment.
            </motion.p>

            {/* CTAs - Enhanced */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
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
            </motion.div>

            {/* Stats - Enhanced */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10"
            >
              {[
                { value: "25+", label: "Clients Worldwide", sub: "Trusted partners" },
                { value: "50+", label: "Projects Delivered", sub: "100% success" },
                { value: "4.9", label: "Client Rating", sub: "Outstanding" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan transition-all duration-500">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-white/90">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-muted/60">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: ZyneCode Product Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative perspective-1000"
          >
            <LiveTerminalShell />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LiveTerminalShell() {
  return (
    <div className="group relative">
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/12 via-purple-glow/8 to-cyan/8 opacity-40 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-primary/8 via-transparent to-cyan/8 opacity-20 blur-2xl" />

      {/* Terminal shell */}
      <div className="glass-strong relative overflow-hidden rounded-3xl md:rounded-[32px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
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
        <div className="relative aspect-square overflow-hidden">
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