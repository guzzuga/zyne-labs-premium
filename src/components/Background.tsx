"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora layer */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="aurora-layer absolute -left-[10%] -top-[20%] h-[60%] w-[50%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.15), transparent 70%)",
            animation: "aurora1 18s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-layer absolute -right-[10%] top-[10%] h-[50%] w-[45%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.12), transparent 70%)",
            animation: "aurora2 22s ease-in-out infinite",
          }}
        />
        <div
          className="aurora-layer absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.08), transparent 70%)",
            animation: "aurora3 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Mesh gradient */}
      <div
        className="mesh-layer absolute inset-0 opacity-[0.03]"
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

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute left-[15%] top-[25%] h-32 w-32 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.12), transparent)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[20%] top-[45%] h-40 w-40 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.10), transparent)",
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-[45%] bottom-[20%] h-36 w-36 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.08), transparent)",
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,8,22,0.8) 100%)",
        }}
      />
    </div>
  );
}
