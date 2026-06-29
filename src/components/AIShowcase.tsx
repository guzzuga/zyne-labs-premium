"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const SHOWCASE = [
  {
    icon: Icons.MessageSquare,
    title: "AI Chat",
    desc: "Multi-turn conversations with context-aware responses.",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Icons.Eye,
    title: "Vision",
    desc: "Image recognition, document parsing, and visual data extraction.",
    gradient: "from-purple-glow/20 to-purple-glow/5",
    border: "border-purple-glow/20",
  },
  {
    icon: Icons.Mic,
    title: "Voice",
    desc: "Speech-to-text, voice commands, and real-time transcription.",
    gradient: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
  },
  {
    icon: Icons.RefreshCw,
    title: "Automation",
    desc: "Autonomous task execution and workflow orchestration.",
    gradient: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
  },
  {
    icon: Icons.BrainCircuit,
    title: "Reasoning",
    desc: "Advanced logical reasoning and multi-step problem solving.",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    icon: Icons.HardDrive,
    title: "Memory",
    desc: "Persistent context and long-term knowledge retention.",
    gradient: "from-purple-glow/20 to-purple-glow/5",
    border: "border-purple-glow/20",
  },
  {
    icon: Icons.Code,
    title: "Coding Assistant",
    desc: "Code generation, review, debugging, and optimization.",
    gradient: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function AIShowcase() {
  return (
    <section id="showcase" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.24em] text-primary">
            AI CAPABILITIES
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Powered by <span className="gradient-text-cyan">Advanced AI</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cutting-edge AI models fine-tuned for enterprise performance and
            reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {SHOWCASE.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`group relative ${i === SHOWCASE.length - 1 ? "md:col-span-1 lg:col-span-2 md:col-start-2 lg:col-start-auto" : ""}`}
            >
              <div
                className={`relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b ${item.gradient} ${item.border} p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Hover shine */}
                <div className="pointer-events-none absolute -inset-20 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-white/5 border border-white/10">
                    <item.icon className="h-4.5 w-4.5 text-white/80" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.desc}
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
