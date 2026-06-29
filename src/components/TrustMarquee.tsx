"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { label: "React", emoji: "⚛️" },
  { label: "Laravel", emoji: "🧩" },
  { label: "Python", emoji: "🐍" },
  { label: "Flutter", emoji: "📱" },
  { label: "TypeScript", emoji: "📘" },
  { label: "Next.js", emoji: "▲" },
  { label: "Node.js", emoji: "🟢" },
  { label: "OpenAI", emoji: "🤖" },
  { label: "Tailwind", emoji: "🎨" },
  { label: "MySQL", emoji: "🗄️" },
];

export default function TrustMarquee() {
  return (
    <section className="relative px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono mb-8 text-center text-[11px] tracking-[0.24em] text-muted"
        >
          TRUSTED BY MODERN TEAMS
        </motion.p>

        <div className="glass relative overflow-hidden rounded-2xl py-6 md:py-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050816] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050816] to-transparent" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex shrink-0 gap-12 px-6"
              animate={{ x: [0, -1720] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-muted/60"
                >
                  <span className="text-xl">{logo.emoji}</span>
                  <span className="whitespace-nowrap text-sm font-medium">
                    {logo.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
