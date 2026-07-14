"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";

const PLANS = [
  {
    name: "Starter",
    desc: "Perfect for early-stage startups and small projects.",
    price: { monthly: 99, yearly: 990 },
    features: [
      "1 AI Agent",
      "5K API requests/month",
      "Basic analytics",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    desc: "Ideal for growing businesses scaling their AI infrastructure.",
    price: { monthly: 299, yearly: 2990 },
    features: [
      "5 AI Agents",
      "50K API requests/month",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team workspace",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For organizations needing custom solutions and dedicated support.",
    price: { monthly: 999, yearly: 9990 },
    features: [
      "Unlimited AI Agents",
      "Unlimited API requests",
      "Real-time analytics",
      "24/7 dedicated support",
      "Custom development",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const CATEGORIES = ["All", "AI & Machine Learning", "Mobile Development", "Backend Infrastructure"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.3em] text-primary uppercase">
            Pricing
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              Harga
            </span>{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              yang masuk akal
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted/90">
            Gak ada biaya tersembunyi. Pilih paket, kalau kurang tinggal upgrade.
          </p>

          {/* Toggle - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-1.5 backdrop-blur-xl"
          >
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                !yearly
                  ? "bg-gradient-to-r from-primary to-purple-glow text-white shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  : "text-muted/70 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                yearly
                  ? "bg-gradient-to-r from-primary to-purple-glow text-white shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                  : "text-muted/70 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-2 rounded-lg bg-gradient-to-r from-green-500/20 to-green-400/20 px-2 py-0.5 text-[10px] font-semibold text-green-400 border border-green-500/30">
                Save 17%
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className="relative"
            >
              {plan.popular ? (
                /* Popular Plan - Enhanced Gradient Border */
                <div className="group relative h-full">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-primary via-purple-glow to-cyan opacity-100 blur-lg animate-gradient-shift" />
                  <div className="absolute -inset-[2px] rounded-[26px]">
                    <div className="h-full w-full rounded-[26px] bg-gradient-to-br from-primary via-purple-glow to-cyan bg-[length:200%_200%] animate-gradient-shift" />
                  </div>
                  
                  {/* Card content */}
                  <div className="relative h-full rounded-[24px] bg-[#0B0F1F] border border-white/10 p-[2px]">
                    <div className="h-full rounded-[22px] bg-gradient-to-b from-[#0F172A] to-[#0B0F1F] p-6 sm:p-7 md:p-8">
                      <PricingCard plan={plan} yearly={yearly} popular />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="pointer-events-none absolute -inset-20 bg-gradient-to-br from-primary/10 via-purple-glow/10 to-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              ) : (
                /* Regular Plan */
                <div className="group relative h-full">
                  <div className="glass h-full overflow-hidden rounded-2xl border-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] bg-gradient-to-b from-white/[0.03] to-transparent">
                    <PricingCard plan={plan} yearly={yearly} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted/60 mb-2">Garansi 30 hari uang kembali · Gak perlu kartu kredit</p>
          <p className="text-xs text-muted/40">Semua harga dalam USD. Berhenti kapan aja, gak ada lock-in.</p>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  yearly,
  popular,
}: {
  plan: (typeof PLANS)[number];
  yearly: boolean;
  popular?: boolean;
}) {
  const price = yearly ? plan.price.yearly : plan.price.monthly;
  const period = yearly ? "/year" : "/month";

  return (
    <div className="flex h-full flex-col">
      {popular && (
        <div className="mb-5 inline-block w-fit rounded-full bg-gradient-to-r from-primary via-purple-glow to-cyan px-4 py-1.5 text-[10px] font-bold tracking-widest text-white uppercase shadow-[0_0_30px_rgba(99,102,241,0.5)] animate-gradient-shift bg-[length:200%_100%]">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
        {plan.name}
      </h3>
      <p className="mt-1.5 text-sm text-muted/80">{plan.desc}</p>

      <div className="mt-7 flex items-baseline gap-1.5">
        <span className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-muted/60">{period}</span>
      </div>

      <ul className="mt-8 flex-1 space-y-3 sm:space-y-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-muted/80">
            <Icons.Check className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${popular ? 'text-primary' : 'text-primary/70'}`} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/6287874722632"
        className={
          popular
            ? "btn-primary mt-8 flex items-center justify-center py-3.5 text-sm font-semibold rounded-xl"
            : "btn-secondary mt-8 flex items-center justify-center py-3.5 text-sm font-semibold rounded-xl"
        }
      >
        {plan.cta}
      </a>
    </div>
  );
}