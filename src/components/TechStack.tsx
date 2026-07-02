"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import { Icons } from "./Icons";

const TECH_ICONS: Record<string, React.ElementType> = {
  React: Icons.Code2,
  TypeScript: Icons.Code2,
  JavaScript: Icons.Code2,
  Tailwind: Icons.Code2,
  Python: Icons.Code2,
  "Node.js": Icons.Code2,
  Laravel: Icons.Code2,
  PHP: Icons.Code2,
  Flutter: Icons.Code2,
  "React Native": Icons.Code2,
  iOS: Icons.Code2,
  Android: Icons.Code2,
  MySQL: Icons.Cloud,
  PostgreSQL: Icons.Cloud,
  MongoDB: Icons.Cloud,
  TensorFlow: Icons.BrainCircuit,
};

const TECH_COLORS: Record<string, string> = {
  React: "from-cyan-400/20 to-cyan-500/5",
  TypeScript: "from-blue-500/20 to-blue-600/5",
  JavaScript: "from-yellow-400/20 to-yellow-500/5",
  Tailwind: "from-teal-400/20 to-teal-500/5",
  Python: "from-yellow-400/20 to-yellow-500/5",
  "Node.js": "from-green-500/20 to-green-600/5",
  Laravel: "from-red-500/20 to-red-600/5",
  PHP: "from-indigo-400/20 to-indigo-500/5",
  Flutter: "from-blue-400/20 to-blue-500/5",
  "React Native": "from-cyan-500/20 to-cyan-600/5",
  iOS: "from-gray-400/20 to-gray-500/5",
  Android: "from-green-400/20 to-green-500/5",
  MySQL: "from-blue-400/20 to-blue-500/5",
  PostgreSQL: "from-blue-600/20 to-blue-700/5",
  MongoDB: "from-green-500/20 to-green-600/5",
  TensorFlow: "from-orange-500/20 to-orange-600/5",
};

const TECH_STACKS = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "Laravel", "PHP"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    category: "Database & AI",
    items: ["MySQL", "PostgreSQL", "MongoDB", "TensorFlow"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Extracted so useTilt is at the top level ── */
function TechStackCard({ stack }: { stack: typeof TECH_STACKS[0] }) {
  const tiltRef = useTilt(4);

  return (
    <div
      ref={tiltRef}
      className="tilt-card relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
    >
      <div className="tilt-card-inner">
        <div className="mb-6 inline-block rounded-lg bg-gradient-to-r from-primary/20 to-purple-glow/20 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/20">
          {stack.category}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stack.items.map((tech) => {
            const IconComponent = TECH_ICONS[tech] || Icons.Code2;
            return (
              <div
                key={tech}
                className={`group/tech relative flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-gradient-to-b p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-lg ${TECH_COLORS[tech] || "from-white/5 to-transparent"}`}
              >
                <div className="relative h-12 w-12 rounded-lg bg-white/5 p-2 flex items-center justify-center overflow-hidden">
                  <IconComponent className="h-5 w-5 text-white/60 relative z-10" />
                </div>

                <span className="text-xs font-medium text-white/80 text-center">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative px-4 py-20 sm:px-6 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="mono text-[11px] tracking-[0.3em] text-primary uppercase">
            Technology Stack
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              Powered by Modern
            </span>{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              Technologies
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted/90">
            We use cutting-edge technologies to build scalable, maintainable, and high-performance solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {TECH_STACKS.map((stack) => (
            <motion.div
              key={stack.category}
              variants={categoryVariants}
              className="group"
            >
              <TechStackCard stack={stack} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted/60 mb-6">And many more tools & services</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Redis', 'Elasticsearch', 'GraphQL', 'REST API', 'Git', 'CI/CD', 'Figma', 'OpenAI', 'Hugging Face'].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-muted/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-white hover:bg-primary/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}