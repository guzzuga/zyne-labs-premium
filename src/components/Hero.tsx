"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const WA = "https://wa.me/6285729753619";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
              Premium AI Engineering Studio
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-[clamp(2.8rem,8vw,4.5rem)] font-bold leading-[0.9] tracking-tighter"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              <span>Build Premium AI.</span>
              <br />
              <span className="gradient-text">Ship with Confidence.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              We build premium AI-powered applications, intelligent systems, and
              automation solutions for forward-thinking businesses. From concept
              to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={WA}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"
              >
                Start Your Project
                <Icons.ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#works"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base"
              >
                <Icons.Play className="h-4 w-4" />
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-8"
            >
              {[
                { value: "25+", label: "Clients" },
                { value: "50+", label: "Projects" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative"
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
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-purple-glow/10 to-cyan/10 opacity-40 blur-2xl transition duration-700 group-hover:opacity-60" />

      {/* Glass shell */}
      <div className="glass-strong glow-primary-lg relative overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Inner gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.06),transparent_50%)]" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-3 md:px-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-[11px] text-muted/60">
              premium.zyne.dev
            </span>
          </div>
          <span className="mono flex items-center gap-1.5 text-[10px] text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            LIVE
          </span>
        </div>

        {/* Dashboard Content */}
        <div className="relative p-4 md:p-5">
          <div className="grid gap-3 md:grid-cols-2">
            {/* AI CHAT */}
            <DashboardWidget
              title="AI Chat"
              value="Active"
              icon={<Icons.MessageSquare className="h-3.5 w-3.5" />}
              color="from-primary/20 to-primary/5"
              borderColor="border-primary/20"
            >
              <div className="mt-2 space-y-1.5">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/20" />
                  <div className="h-3 flex-1 rounded-full bg-white/5" />
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10" />
                  <div className="h-3 w-3/4 rounded-full bg-white/5" />
                </div>
              </div>
            </DashboardWidget>

            {/* ANALYTICS */}
            <DashboardWidget
              title="Analytics"
              value="+24%"
              icon={<Icons.BarChart3 className="h-3.5 w-3.5" />}
              color="from-purple-glow/20 to-purple-glow/5"
              borderColor="border-purple-glow/20"
            >
              <div className="mt-2 flex items-end gap-1">
                {[30, 55, 40, 70, 45, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    className="h-full flex-1 rounded-t-sm bg-gradient-to-t from-purple-glow/40 to-purple-glow/20"
                    style={{ height: `${h}%`, maxHeight: 36 }}
                  />
                ))}
              </div>
            </DashboardWidget>

            {/* API */}
            <DashboardWidget
              title="API Requests"
              value="12.4K"
              icon={<Icons.Zap className="h-3.5 w-3.5" />}
              color="from-cyan/20 to-cyan/5"
              borderColor="border-cyan/20"
            >
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan to-primary" />
                  </div>
                </div>
                <span className="mono text-[10px] text-cyan">2.4K/h</span>
              </div>
            </DashboardWidget>

            {/* SYSTEM HEALTH */}
            <DashboardWidget
              title="System Health"
              value="98.7%"
              icon={<Icons.Shield className="h-3.5 w-3.5" />}
              color="from-green-500/20 to-green-500/5"
              borderColor="border-green-500/20"
            >
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-green-500 to-green-400" />
                  </div>
                </div>
                <span className="mono text-[10px] text-green-400">99%</span>
              </div>
            </DashboardWidget>
          </div>

          {/* Bottom: workflow builder preview */}
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
            <Icons.Workflow className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] text-muted">
              Workflow Builder — 3 active automations
            </span>
            <span className="ml-auto text-[10px] text-primary">Running</span>
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
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  borderColor: string;
}) {
  return (
    <div
      className={`rounded-xl border bg-gradient-to-b ${color} ${borderColor} p-3`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-muted/80">{icon}</span>
          <span className="text-[11px] text-muted">{title}</span>
        </div>
        <span className="mono text-[11px] font-semibold text-white">
          {value}
        </span>
      </div>
      {children}
    </div>
  );
}
