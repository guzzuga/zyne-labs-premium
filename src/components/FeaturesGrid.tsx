"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const FEATURES = [
  {
    icon: Icons.BrainCircuit,
    title: "AI Agents",
    desc: "Autonomous AI agents that learn, reason, and act on your business data in real-time.",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    icon: Icons.Workflow,
    title: "Workflow Automation",
    desc: "Complex multi-step automation pipelines that eliminate manual work and reduce errors.",
    gradient: "from-purple-glow/20 to-purple-glow/5",
    border: "border-purple-glow/20",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Icons.BookOpen,
    title: "Knowledge Base",
    desc: "Intelligent document processing and RAG-powered knowledge retrieval systems.",
    gradient: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: Icons.GitBranch,
    title: "API Integration",
    desc: "Seamless third-party API integration and custom middleware for any platform.",
    gradient: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
    glow: "rgba(34,197,94,0.15)",
  },
  {
    icon: Icons.Shield,
    title: "Enterprise Security",
    desc: "SOC 2 compliant infrastructure with end-to-end encryption and audit logging.",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    icon: Icons.BarChart3,
    title: "Analytics & Insights",
    desc: "Real-time dashboards with custom metrics, predictive analytics, and anomaly detection.",
    gradient: "from-purple-glow/20 to-purple-glow/5",
    border: "border-purple-glow/20",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Icons.Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud-native architecture deployed across AWS, GCP, or Azure.",
    gradient: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: Icons.Code2,
    title: "Developer SDK",
    desc: "Type-safe SDKs and comprehensive developer tools for rapid integration.",
    gradient: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
    glow: "rgba(34,197,94,0.15)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.24em] text-primary">
            FEATURES
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Enterprise-Grade{" "}
            <span className="gradient-text">AI Infrastructure</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Everything you need to build, deploy, and scale AI-powered
            applications.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className={`relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b ${feature.gradient} ${feature.border} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}
                style={
                  {
                    "--glow-color": feature.glow,
                  } as React.CSSProperties
                }
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -inset-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(300px at 50% 50%, var(--glow-color), transparent 70%)`,
                  }}
                />

                {/* Shimmer border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl shimmer-line" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10">
                    <feature.icon className="h-5 w-5 text-white/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
