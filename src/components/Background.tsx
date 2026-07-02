"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────────────
   Mouse-tracking glow that follows the cursor.
   Only active on desktop; disabled on mobile to save
   battery / avoid janky repaints.
─────────────────────────────────────────────────── */
function MouseGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const handleMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMove]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-[0.13] transition-transform duration-700 ease-out"
        style={{
          left: pos.x - 300,
          top: pos.y - 300,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.35), rgba(139,92,246,0.12), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Aurora / Mesh Gradient background
   Pure CSS — zero images.  Six animated radial
   gradient layers + grid + noise + vignette.
─────────────────────────────────────────────────── */
function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 1: Deep blue top-left ── */}
      <motion.div
        className="absolute"
        style={{
          top: "-10%",
          left: "-10%",
          width: "55%",
          height: "55%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.16), transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Layer 2: Purple top-right ── */}
      <motion.div
        className="absolute"
        style={{
          top: "5%",
          right: "-15%",
          width: "50%",
          height: "50%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.14), transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Layer 3: Cyan bottom-left ── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-15%",
          left: "15%",
          width: "50%",
          height: "45%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.12), transparent 70%)",
          filter: "blur(110px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.94, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Layer 4: Orange accent (subtle, bottom-right) ── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "40%",
          height: "40%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.07), transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Layer 5: Bright center spot (enterprise glow) ── */}
      <motion.div
        className="absolute"
        style={{
          top: "20%",
          left: "30%",
          width: "45%",
          height: "40%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.08), rgba(139,92,246,0.05), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -20, 25, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Layer 6: Cyan centre-right highlight ── */}
      <motion.div
        className="absolute"
        style={{
          top: "40%",
          right: "10%",
          width: "35%",
          height: "35%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.09), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 35, -25, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Subtle dot grid (Vercel-style) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
        }}
      />

      {/* ── Faint cross-hatch grid (Linear-style) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 15%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 15%, transparent 65%)",
        }}
      />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Vignette (darken edges) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(5,8,22,0.45) 100%)",
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Background — exported component.
   Composed of Aurora + Mouse Glow.
─────────────────────────────────────────────────── */
export default function Background() {
  return (
    <>
      <AuroraBackground />
      <MouseGlow />
    </>
  );
}