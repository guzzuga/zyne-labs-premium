"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   Premium Aurora Background + Lightweight Particles

   5 CSS blobs for aurora effect + canvas particles for
   subtle "neural network" feel — AI aesthetic for ZyneCode.

   Particles: ~30 dots, connecting lines within 120px.
   Single RAF loop, ~0.1ms per frame.
──────────────────────────────────────────────────────── */

function AuroraBackground() {
  return (
    <>
      {/* ── Animated blobs ── */}
      <div
        className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
        aria-hidden="true"
      >
        {/* Blob 1 — Indigo */}
        <div
          className="absolute"
          style={{
            top: "-20%",
            left: "-15%",
            width: "60vw",
            height: "60vw",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.06) 35%, transparent 65%)",
            filter: "blur(100px)",
            willChange: "transform",
            animation: "aurora-blob-1 40s ease-in-out infinite",
          }}
        />

        {/* Blob 2 — Purple */}
        <div
          className="absolute"
          style={{
            top: "-10%",
            right: "-20%",
            width: "55vw",
            height: "55vw",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(139,92,246,0.05) 35%, transparent 65%)",
            filter: "blur(100px)",
            willChange: "transform",
            animation: "aurora-blob-2 45s ease-in-out infinite",
          }}
        />

        {/* Blob 3 — Cyan */}
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            left: "20%",
            width: "50vw",
            height: "50vw",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 35%, transparent 65%)",
            filter: "blur(100px)",
            willChange: "transform",
            animation: "aurora-blob-3 35s ease-in-out infinite",
          }}
        />

        {/* Blob 4 — Pink */}
        <div
          className="absolute"
          style={{
            top: "35%",
            right: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
            willChange: "transform",
            animation: "aurora-blob-4 38s ease-in-out infinite",
          }}
        />

        {/* Blob 5 — Orange */}
        <div
          className="absolute"
          style={{
            bottom: "-15%",
            right: "10%",
            width: "35vw",
            height: "35vw",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
            willChange: "transform",
            animation: "aurora-blob-5 42s ease-in-out infinite",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 60% 55% at 50% 40%, black 10%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 55% at 50% 40%, black 10%, transparent 65%)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, transparent 0%, rgba(5,8,22,0.45) 100%)",
          }}
        />
      </div>

      {/* ── Particle canvas ── */}
      <ParticleCanvas />
    </>
  );
}

/* ── Lightweight particle system ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    const PARTICLE_COUNT = 28;
    const CONNECTION_DIST = 120;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Keep within bounds
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.25)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[-1]"
      aria-hidden="true"
      style={{ zIndex: -1 }}
    />
  );
}

export default function Background() {
  return <AuroraBackground />;
}