"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const FEATURES = [
  {
    icon: Icons.BrainCircuit,
    title: "AI Agents",
    desc: "Autonomous AI agents that learn, reason, and act on your business data in real-time.",
    gradient: "from-primary/25 to-primary/8",
    border: "border-primary/30",
    glow: "rgba(99,102,241,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]",
  },
  {
    icon: Icons.Workflow,
    title: "Workflow Automation",
    desc: "Complex multi-step automation pipelines that eliminate manual work and reduce errors.",
    gradient: "from-purple-glow/25 to-purple-glow/8",
    border: "border-purple-glow/30",
    glow: "rgba(139,92,246,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(139,92,246,0.4)]",
  },
  {
    icon: Icons.BookOpen,
    title: "Knowledge Base",
    desc: "Intelligent document processing and RAG-powered knowledge retrieval systems.",
    gradient: "from-cyan/25 to-cyan/8",
    border: "border-cyan/30",
    glow: "rgba(6,182,212,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(6,182,212,0.4)]",
  },
  {
    icon: Icons.GitBranch,
    title: "API Integration",
    desc: "Seamless third-party API integration and custom middleware for any platform.",
    gradient: "from-green-500/25 to-green-500/8",
    border: "border-green-500/30",
    glow: "rgba(34,197,94,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
  },
  {
    icon: Icons.Shield,
    title: "Enterprise Security",
    desc: "SOC 2 compliant infrastructure with end-to-end encryption and audit logging.",
    gradient: "from-primary/25 to-primary/8",
    border: "border-primary/30",
    glow: "rgba(99,102,241,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]",
  },
  {
    icon: Icons.BarChart3,
    title: "Analytics & Insights",
    desc: "Real-time dashboards with custom metrics, predictive analytics, and anomaly detection.",
    gradient: "from-purple-glow/25 to-purple-glow/8",
    border: "border-purple-glow/30",
    glow: "rgba(139,92,246,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(139,92,246,0.4)]",
  },
  {
    icon: Icons.Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud-native architecture deployed across AWS, GCP, or Azure.",
    gradient: "from-cyan/25 to-cyan/8",
    border: "border-cyan/30",
    glow: "rgba(6,182,212,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(6,182,212,0.4)]",
  },
  {
    icon: Icons.Code2,
    title: "Developer SDK",
    desc: "Type-safe SDKs and comprehensive developer tools for rapid integration.",
    gradient: "from-green-500/25 to-green-500/8",
    border: "border-green-500/30",
    glow: "rgba(34,197,94,0.25)",
    iconGlow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.3em] text-primary uppercase">
            Features
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              Enterprise-Grade
            </span>{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              AI Infrastructure
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted/90">
            Everything you need to build, deploy, and scale AI-powered applications.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card */}
              <div className="gradient-border-animated relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5.5 w-5.5 text-white/90" />
                  </div>

                  <h3 className="text-lg font-semibold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted/80">
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