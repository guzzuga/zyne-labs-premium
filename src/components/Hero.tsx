"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      {/* Animated GIF Background - Behind heading text */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]">
        {/* Mobile: larger, centered | Desktop: smaller, higher position */}
        <div className="absolute top-[15%] md:top-[10%] left-1/2 -translate-x-1/2 -translate-y-[20%] md:-translate-y-[10%] w-[80%] md:w-[55%] h-[80%] md:h-[55%] rounded-full animate-orb-rotate">
          <Image
            src="/fx/soon.gif"
            alt="Animated Orb"
            fill
            className="object-contain opacity-50 md:opacity-70"
            priority
            sizes="(max-width: 768px) 80vw, 55vw"
          />
        </div>
      </div>

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

          {/* RIGHT: Dashboard Preview - Enhanced */}
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
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="group relative">
      {/* Outer glow layers */}
      <div className="pointer-events-none absolute -inset-8 rounded-[32px] bg-gradient-to-br from-primary/15 via-purple-glow/10 to-cyan/10 opacity-30 blur-3xl transition duration-1000 group-hover:opacity-50 animate-pulse-slow" />
      <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-tr from-primary/10 via-transparent to-cyan/10 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700" />

      {/* Glass shell - Enhanced */}
      <div className="glass-strong relative overflow-hidden rounded-3xl md:rounded-[32px] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
        {/* Animated gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.08),transparent_50%)] animate-shimmer-slow" />
        
        {/* Scanning line effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-down" />
        </div>

        {/* Top bar - Enhanced */}
        <div className="relative flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5 bg-gradient-to-r from-white/[0.02] to-transparent">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_12px_rgba(234,179,8,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
            </div>
            <span className="ml-3 text-[11px] text-muted/60 font-mono">
              premium.zyne.dev
            </span>
          </div>
          <span className="mono flex items-center gap-2 text-[10px] text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
            </span>
            LIVE
          </span>
        </div>

        {/* Dashboard Content */}
        <div className="relative p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {/* AI CHAT - Real Data */}
            <DashboardWidget
              title="AI Chat"
              value="Active"
              icon={<Icons.MessageSquare className="h-4 w-4" />}
              color="from-primary/25 to-primary/8"
              borderColor="border-primary/25"
              glow="rgba(99,102,241,0.2)"
            >
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icons.Bot className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white/5 px-2.5 py-1.5">
                    <p className="text-[10px] text-muted/70">How can I help optimize your workflow?</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                  <div className="flex-1 rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1.5">
                    <p className="text-[10px] text-white/80">Automate my data processing pipeline</p>
                  </div>
                </div>
              </div>
            </DashboardWidget>

            {/* ANALYTICS - Real Data */}
            <DashboardWidget
              title="Analytics"
              value="+127%"
              icon={<Icons.BarChart3 className="h-4 w-4" />}
              color="from-purple-glow/25 to-purple-glow/8"
              borderColor="border-purple-glow/25"
              glow="rgba(139,92,246,0.2)"
            >
              <div className="mt-3">
                <div className="flex items-end gap-1.5 h-10">
                  {[25, 45, 35, 60, 50, 75, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-glow/50 to-purple-glow/20 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-y-110"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-muted/50">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </DashboardWidget>

            {/* API Requests */}
            <DashboardWidget
              title="API Requests"
              value="12.4K"
              icon={<Icons.Zap className="h-4 w-4" />}
              color="from-cyan/25 to-cyan/8"
              borderColor="border-cyan/25"
              glow="rgba(6,182,212,0.2)"
            >
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan via-primary to-cyan bg-[length:200%_100%] animate-gradient-shift shadow-[0_0_20px_rgba(6,182,212,0.4)]" />
                  </div>
                  <p className="mt-1.5 text-[9px] text-muted/50">72% of monthly limit</p>
                </div>
                <div className="text-right">
                  <span className="mono text-[10px] text-cyan font-semibold block">2.4K/h</span>
                  <span className="text-[9px] text-muted/50">avg rate</span>
                </div>
              </div>
            </DashboardWidget>

            {/* SYSTEM HEALTH */}
            <DashboardWidget
              title="System Health"
              value="99.9%"
              icon={<Icons.Shield className="h-4 w-4" />}
              color="from-green-500/25 to-green-500/8"
              borderColor="border-green-500/25"
              glow="rgba(34,197,94,0.2)"
            >
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 bg-[length:200%_100%] animate-gradient-shift shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                  </div>
                  <p className="mt-1.5 text-[9px] text-muted/50">99.9% uptime (30 days)</p>
                </div>
                <div className="text-right">
                  <span className="mono text-[10px] text-green-400 font-semibold block">Excellent</span>
                  <span className="text-[9px] text-muted/50">status</span>
                </div>
              </div>
            </DashboardWidget>
          </div>

          {/* Bottom: workflow builder preview - Enhanced */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-gradient-to-r from-white/[0.04] to-transparent px-4 py-3">
            <div className="relative">
              <Icons.Workflow className="h-4 w-4 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-md" />
            </div>
            <span className="text-[11px] text-muted/80 font-medium">
              Workflow Builder — 3 active automations
            </span>
            <span className="ml-auto text-[10px] text-primary font-semibold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Running
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardWidget({
  title,
  value,
  icon,
  children,
  color,
  borderColor,
  glow,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  borderColor: string;
  glow: string;
}) {
  return (
    <div
      className={`group/widget relative rounded-xl border bg-gradient-to-b ${color} ${borderColor} p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_${glow}]`}
    >
      {/* Inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/[0.02] opacity-0 group-hover/widget:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-muted/70 group-hover/widget:text-white/90 transition-colors">{icon}</span>
            <span className="text-[11px] text-muted/80 font-medium">{title}</span>
          </div>
          <span className="mono text-[11px] font-semibold text-white/90">
            {value}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}