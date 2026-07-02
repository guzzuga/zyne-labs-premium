"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   useTilt — Lightweight 3D tilt on mouse/touch move

   Supports both mouse (desktop) and touch (mobile) events.
   RAF-based for smooth 60fps animation.
──────────────────────────────────────────────────────── */
export function useTilt(maxRotation = 8) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let isHovering = false;

    const applyTilt = (clientX: number, clientY: number) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!isHovering) return;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
      });
    };

    const onEnter = () => {
      isHovering = true;
      // Remove transition for instant tilt response
      el.style.transition = "none";
    };

    const onLeave = () => {
      isHovering = false;
      cancelAnimationFrame(rafId);
      // Smooth reset animation
      el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "";
      // Clean up transition after reset
      setTimeout(() => { if (el) el.style.transition = ""; }, 600);
    };

    // Mouse events
    const onMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      applyTilt(e.clientX, e.clientY);
    };

    // Touch events (mobile)
    const onTouchMove = (e: TouchEvent) => {
      if (!isHovering || e.touches.length === 0) return;
      applyTilt(e.touches[0].clientX, e.touches[0].clientY);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });
    el.addEventListener("touchcancel", onLeave, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
      el.removeEventListener("touchcancel", onLeave);
      el.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, [maxRotation]);

  return ref;
}