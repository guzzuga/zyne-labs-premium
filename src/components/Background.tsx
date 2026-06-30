"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora layer - Enhanced */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="aurora-layer absolute -left-[10%] -top-[20%] h-[60%] w-[50%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.18), transparent 70%)",
            animation: "aurora1 18s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-layer absolute -right-[10%] top-[10%] h-[50%] w-[45%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.15), transparent 70%)",
            animation: "aurora2 22s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-layer absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.1), transparent 70%)",
            animation: "aurora3 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Mesh gradient */}
      <div
        className="mesh-layer absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #6366F1 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #8B5CF6 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #06B6D4 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, #6366F1 0%, transparent 50%)
          `,
          animation: "mesh 24s ease-in-out infinite",
        }}
      />

      {/* Grid - More pronounced (Agus Collection style) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      {/* Dual glow orbs - Agus Collection style */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.15), transparent)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[15%] top-[35%] h-56 w-56 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.12), transparent)",
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-[40%] bottom-[15%] h-44 w-44 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.1), transparent)",
        }}
        animate={{
          y: [0, -35, 0],
          x: [0, 8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating mini orbs - Particle effect */}
      <motion.div
        className="absolute left-[25%] top-[60%] h-16 w-16 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent)" }}
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[30%] top-[70%] h-12 w-12 rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent)" }}
        animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,8,22,0.85) 100%)",
        }}
      />
    </div>
  );
}
