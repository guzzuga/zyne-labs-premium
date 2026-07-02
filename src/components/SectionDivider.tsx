"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   Animated Section Divider

   Thin gradient line that draws in on scroll — subtle,
   premium, zero performance cost.
──────────────────────────────────────────────────────── */
export default function SectionDivider() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center py-3">
      <div className="h-px w-56 max-w-[80%] overflow-hidden rounded-full">
        <div ref={lineRef} className="section-divider-line" />
      </div>
    </div>
  );
}