"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Andi Pratama",
    role: "CEO",
    company: "TechForward ID",
    avatar: "AP",
    rating: 5,
    quote:
      "Zyne Labs delivered an AI-powered dashboard that transformed how we analyze customer data. The team's attention to detail and understanding of our needs was exceptional.",
  },
  {
    name: "Siti Rahmawati",
    role: "CTO",
    company: "SmartBuild Inc.",
    avatar: "SR",
    rating: 5,
    quote:
      "They took our legacy system and rebuilt it from the ground up with modern AI capabilities. Performance improved 10x and our team couldn't be happier.",
  },
  {
    name: "Budi Santoso",
    role: "Founder",
    company: "Axiom AI",
    avatar: "BS",
    rating: 5,
    quote:
      "Working with Zyne Labs was a game-changer. They didn't just build what we asked for — they suggested improvements that made our product significantly better.",
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
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.24em] text-primary">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Hear from the founders and teams who partnered with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass relative h-full overflow-hidden rounded-2xl border-white/[0.06] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20">
                {/* Avatar */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-glow text-sm font-semibold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={i < t.rating ? "#F59E0B" : "rgba(255,255,255,0.15)"}
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
