"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const WA = "https://wa.me/6287874722632";

export default function FinalCTA() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-glow/20 to-cyan/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-bg opacity-30" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Content */}
        <div className="relative px-6 py-16 text-center md:px-16 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mono text-[11px] tracking-[0.24em] text-white/70"
          >
            LET&apos;S TALK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Punya ide project?
            <br />
            <span className="text-white">Yuk diskusi dulu.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70"
          >
            Gak perlu detail — ceritain aja ide lo. Nanti kita kasih saran teknis, estimasi waktu, dan harga. Gratis, no obligation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={WA}
              className="btn-primary inline-flex items-center gap-2 bg-white text-bg px-8 py-3.5 text-base font-semibold hover:bg-white/90"
              style={{
                background: "white",
                color: "#050816",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              Start Your Project
              <Icons.ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@zynecode.web.id"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 text-base text-white"
            >
              <Icons.Mail className="h-4 w-4" />
              hello@zynecode.web.id
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
