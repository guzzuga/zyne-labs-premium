"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   useTilt — Lightweight 3D tilt on mouse move

   Guards element null state in cleanup (StrictMode fix).
   No CSS transition conflict — pure RAF.
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
      if (!isHovering) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);

    return () => {
      // Guard: element may be null on unmount/StrictMode double-invocation
      if (!el) return;
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [maxRotation]);

  return ref;
}