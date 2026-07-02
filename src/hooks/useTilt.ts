"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   useTilt — Lightweight 3D tilt on mouse move

   Tracks mouse position relative to element, applies
   a subtle rotateX/Y transform (±8° max).
   No framer-motion, no JS-heavy animations.
──────────────────────────────────────────────────────── */
export function useTilt(maxRotation = 8) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let isHovering = false;

    const onEnter = () => { isHovering = true; };
    const onLeave = () => {
      isHovering = false;
      cancelAnimationFrame(rafId);
      el.style.transform = "";
    };
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!isHovering || !el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [maxRotation]);

  return ref;
}