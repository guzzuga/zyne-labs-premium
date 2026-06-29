"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TECH_STACKS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/tech/react.svg", color: "from-cyan-400/20 to-cyan-500/5" },
      { name: "TypeScript", icon: "/tech/typescript.svg", color: "from-blue-500/20 to-blue-600/5" },
      { name: "JavaScript", icon: "/tech/javascript.svg", color: "from-yellow-400/20 to-yellow-500/5" },
      { name: "Tailwind", icon: "/fx/tailwind.png", color: "from-teal-400/20 to-teal-500/5" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "/tech/python.svg", color: "from-yellow-400/20 to-yellow-500/5" },
      { name: "Node.js", icon: "/tech/nodejs.svg", color: "from-green-500/20 to-green-600/5" },
      { name: "Laravel", icon: "/tech/laravel.svg", color: "from-red-500/20 to-red-600/5" },
      { name: "PHP", icon: "/tech/php.svg", color: "from-indigo-400/20 to-indigo-500/5" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "/tech/flutter.svg", color: "from-blue-400/20 to-blue-500/5" },
      { name: "React Native", icon: "/tech/react-native.svg", color: "from-cyan-500/20 to-cyan-600/5" },
      { name: "iOS", icon: "/tech/ios.svg", color: "from-gray-400/20 to-gray-500/5" },
      { name: "Android", icon: "/tech/android.svg", color: "from-green-400/20 to-green-500/5" },
    ],
  },
  {
    category: "Database & AI",
    items: [
      { name: "MySQL", icon: "/tech/mysql.svg", color: "from-blue-400/20 to-blue-500/5" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg", color: "from-blue-600/20 to-blue-700/5" },
      { name: "MongoDB", icon: "/tech/mongodb.svg", color: "from-green-500/20 to-green-600/5" },
      { name: "TensorFlow", icon: "/tech/tensorflow.svg", color: "from-orange-500/20 to-orange-600/5" },
    ],
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

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative px-4 py-20 sm:px-6 md:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan/5 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
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

        {/* Tech Stack Grid */}
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
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]">
                {/* Category badge */}
                <div className="mb-6 inline-block rounded-lg bg-gradient-to-r from-primary/20 to-purple-glow/20 px-3 py-1.5 text-xs font-semibold text-primary border border-primary/20">
                  {stack.category}
                </div>

                {/* Tech items */}
                <div className="grid grid-cols-2 gap-4">
                  {stack.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="group/tech relative flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-gradient-to-b p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-lg"
                      style={{ background: `linear-gradient(180deg, ${tech.color.split(' ')[0]}, ${tech.color.split(' ')[1]})` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Tech icon */}
                      <div className="relative h-12 w-12 rounded-lg bg-white/5 p-2 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity" />
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="object-contain relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `<span class="text-xs font-bold text-white/60">${tech.name.substring(0, 2).toUpperCase()}</span>`;
                          }}
                        />
                      </div>

                      {/* Tech name */}
                      <span className="text-xs font-medium text-white/80 text-center">
                        {tech.name}
                      </span>

                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/tech:opacity-100 blur-lg transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tools badge cloud */}
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