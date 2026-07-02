"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   Premium Aurora / Mesh Gradient Background

   8 animated radial blobs with high Gaussian blur,
   slow drift animations (25–45 s), and rich colour
   blending — Vercel / Linear / Stripe style.

   Mouse-tracking glow follows the cursor on desktop.
   Zero images, zero video — pure CSS + framer-motion.
──────────────────────────────────────────────────────── */

/* ── Blob definitions ──────────────────────────────── */
interface Blob {
  className?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  background: string;
  blur: string;
  x: number[];
  y: number[];
  scale: number[];
  opacity?: number[];
  duration: number;
  delay?: number;
}

const BLOBS: Blob[] = [
  /* 1 — Deep indigo, top-left */
  {
    top: "-15%",
    left: "-10%",
    width: "55vw",
    height: "55vw",
    background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
    blur: "160px",
    x: [0, 80, -50, 0],
    y: [0, -60, 40, 0],
    scale: [1, 1.12, 0.92, 1],
    duration: 38,
  },
  /* 2 — Rich purple, top-right */
  {
    top: "-5%",
    right: "-15%",
    width: "50vw",
    height: "50vw",
    background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0.07) 40%, transparent 70%)",
    blur: "150px",
    x: [0, -80, 60, 0],
    y: [0, 70, -50, 0],
    scale: [1, 1.08, 0.94, 1],
    duration: 42,
  },
  /* 3 — Cyan, bottom-left */
  {
    bottom: "-15%",
    left: "10%",
    width: "48vw",
    height: "48vw",
    background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
    blur: "140px",
    x: [0, 60, -40, 0],
    y: [0, -50, 30, 0],
    scale: [1, 1.10, 0.90, 1],
    duration: 35,
  },
  /* 4 — Pink / magenta, mid-right */
  {
    top: "30%",
    right: "-10%",
    width: "40vw",
    height: "40vw",
    background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)",
    blur: "130px",
    x: [0, -50, 40, 0],
    y: [0, 40, -30, 0],
    scale: [1, 1.06, 0.95, 1],
    duration: 30,
  },
  /* 5 — Warm orange, bottom-right */
  {
    bottom: "-10%",
    right: "5%",
    width: "38vw",
    height: "38vw",
    background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.03) 40%, transparent 70%)",
    blur: "120px",
    x: [0, -40, 35, 0],
    y: [0, 30, -25, 0],
    scale: [1, 1.05, 0.96, 1],
    duration: 40,
  },
  /* 6 — Bright centre — indigo + purple blend */
  {
    top: "15%",
    left: "25%",
    width: "50vw",
    height: "45vw",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 30%, transparent 65%)",
    blur: "130px",
    x: [0, 50, -40, 0],
    y: [0, -30, 40, 0],
    opacity: [0.7, 1, 0.7],
    scale: [1, 1.08, 0.95, 1],
    duration: 28,
  },
  /* 7 — Cyan highlight, centre-right */
  {
    top: "50%",
    right: "15%",
    width: "35vw",
    height: "35vw",
    background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 65%)",
    blur: "110px",
    x: [0, -35, 25, 0],
    y: [0, 30, -20, 0],
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.06, 0.94, 1],
    duration: 33,
  },
  /* 8 — Pink accent, top centre */
  {
    top: "-10%",
    left: "35%",
    width: "42vw",
    height: "42vw",
    background: "radial-gradient(circle, rgba(244,114,182,0.10) 0%, rgba(192,132,252,0.06) 35%, transparent 65%)",
    blur: "140px",
    x: [0, 40, -35, 0],
    y: [0, -25, 15, 0],
    opacity: [0.6, 0.9, 0.6],
    scale: [1, 1.07, 0.93, 1],
    duration: 45,
  },
];

/* ── Mouse glow ────────────────────────────────────── */
function MouseGlow() {
  const pos = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(139,92,246,0.08) 35%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.4 }}
      />
    </div>
  );
}

/* Lightweight mouse hook — rAF throttled */
function useMousePosition(): { x: number; y: number } {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return pos;
}

/* ── Main background ──────────────────────────────── */
function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Animated blobs ── */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            ...(b.top !== undefined && { top: b.top }),
            ...(b.bottom !== undefined && { bottom: b.bottom }),
            ...(b.left !== undefined && { left: b.left }),
            ...(b.right !== undefined && { right: b.right }),
            width: b.width,
            height: b.height,
            borderRadius: "9999px",
            background: b.background,
            filter: `blur(${b.blur})`,
          }}
          animate={{
            x: b.x,
            y: b.y,
            scale: b.scale,
            ...(b.opacity ? { opacity: b.opacity } : {}),
          }}
          transition={{
            duration: b.duration,
            delay: b.delay ?? 0,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Dot grid (Vercel-style, very subtle) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 55% 50% at 50% 40%, black 15%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 50% at 50% 40%, black 15%, transparent 70%)",
        }}
      />

      {/* ── Cross-hatch (Linear-style) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 12%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 12%, transparent 60%)",
        }}
      />

      {/* ── Noise texture (SVG, 2.5 %) ── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 40%, transparent 0%, rgba(5,8,22,0.50) 100%)",
        }}
      />
    </div>
  );
}

/* ── Export ────────────────────────────────────────── */
export default function Background() {
  return (
    <>
      <AuroraBackground />
      <MouseGlow />
    </>
  );
}