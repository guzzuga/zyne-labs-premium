"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";

const PLANS = [
  {
    name: "Starter",
    desc: "Perfect for early-stage startups and small projects.",
    price: { monthly: 499, yearly: 4990 },
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
    price: { monthly: 1499, yearly: 14990 },
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
    price: { monthly: 4999, yearly: 49990 },
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.24em] text-primary">
            PRICING
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            No hidden fees. Scale your AI infrastructure as you grow.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                !yearly
                  ? "bg-primary text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                yearly
                  ? "bg-primary text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              Annual{" "}
              <span className="ml-1 rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] text-green-400">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className="relative"
            >
              {plan.popular ? (
                <div className="pricing-gradient-border h-full">
                  <div className="pricing-inner">
                    <PricingCard
                      plan={plan}
                      yearly={yearly}
                    />
                  </div>
                </div>
              ) : (
                <div className="glass h-full overflow-hidden rounded-2xl border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20">
                  <PricingCard plan={plan} yearly={yearly} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  yearly,
}: {
  plan: (typeof PLANS)[number];
  yearly: boolean;
}) {
  const price = yearly ? plan.price.yearly : plan.price.monthly;
  const period = yearly ? "/year" : "/month";

  return (
    <div className="flex h-full flex-col p-6 md:p-8">
      {plan.popular && (
        <div className="mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-primary to-purple-glow px-3 py-1 text-[10px] font-semibold tracking-wide text-white">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted">{plan.desc}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-white">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-muted">{period}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/6285729753619"
        className={
          plan.popular
            ? "btn-primary mt-6 flex items-center justify-center py-3 text-sm"
            : "btn-secondary mt-6 flex items-center justify-center py-3 text-sm"
        }
      >
        {plan.cta}
      </a>
    </div>
  );
}
