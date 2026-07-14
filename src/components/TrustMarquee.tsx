"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { label: "React", src: "/tech/react.svg" },
  { label: "Laravel", src: "/tech/laravel.svg" },
  { label: "Python", src: "/tech/python.svg" },
  { label: "Flutter", src: "/tech/flutter.svg" },
  { label: "JavaScript", src: "/tech/javascript.svg" },
  { label: "MySQL", src: "/tech/mysql.svg" },
];

export default function TrustMarquee() {
  return (
    <section className="relative px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono mb-8 text-center text-[11px] tracking-[0.24em] text-white/90"
        >
          TRUSTED BY MODERN TECH
        </motion.p>

        <div className="glass relative overflow-hidden rounded-2xl py-6 md:py-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050816] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050816] to-transparent" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex shrink-0 gap-12 px-6"
              animate={{ x: [0, -1032] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative h-8 w-8 md:h-10 md:w-10">
                    <Image
                      src={logo.src}
                      alt={logo.label}
                      fill
                      className="object-contain filter grayscale-0 hover:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 768px) 32px, 40px"
                    />
                  </div>
                  <span className="whitespace-nowrap text-sm font-medium text-white/90">
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