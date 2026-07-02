"use client";

/* ─────────────────────────────────────────────────────────
   Premium Aurora Background — Pure CSS (NO framer-motion)

   4 large radial blobs with CSS keyframe animations.
   Zero JS re-renders, GPU-accelerated, no layout thrashing.

   Inspired by Vercel / Linear / Stripe — subtle, elegant.
──────────────────────────────────────────────────────── */

function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Blob 1 — Indigo, top-left ── */}
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

      {/* ── Blob 2 — Purple, top-right ── */}
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

      {/* ── Blob 3 — Cyan, bottom-center ── */}
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

      {/* ── Blob 4 — Pink, mid-right ── */}
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

      {/* ── Blob 5 — Warm orange, bottom-right ── */}
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

      {/* ── Dot grid — Vercel style, extremely subtle ── */}
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

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, transparent 0%, rgba(5,8,22,0.45) 100%)",
        }}
      />
    </div>
  );
}

export default function Background() {
  return <AuroraBackground />;
}