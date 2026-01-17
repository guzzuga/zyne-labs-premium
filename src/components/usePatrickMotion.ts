"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function usePatrickMotion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // GSAP context = anti double init saat Fast Refresh
    const ctx = gsap.context(() => {
      // Kill old triggers (fast refresh safety)
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // =========================
      // HERO ENTER (biarkan sekali saja)
      // =========================
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const kicker = document.querySelector('[data-hero="kicker"]');
      const title = document.querySelector('[data-hero="title"]');
      const desc = document.querySelector('[data-hero="desc"]');
      const cta = document.querySelector('[data-hero="cta"]');
      const pills = gsap.utils.toArray<HTMLElement>("[data-pill]");

      // Init states (avoid flicker)
      gsap.set([kicker, desc, cta], { autoAlpha: 0, y: 16 });
      gsap.set(title, { autoAlpha: 0, y: 24, filter: "blur(10px)" });
      gsap.set(pills, { autoAlpha: 0, y: 10 });

      tl.to(kicker, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.05)
        .to(title, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, 0.1)
        .to(desc, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.25)
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.32)
        .to(pills, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.04 }, 0.38);

      // =========================
      // REVEAL GROUP ON SCROLL (REPEAT)
      // =========================
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>(group.querySelectorAll("[data-reveal-item]"));
        if (!items.length) return;

        // set awal, supaya bisa “muncul lagi” saat masuk lagi
        gsap.set(items, { autoAlpha: 0, y: 18, filter: "blur(5px)" });

        ScrollTrigger.create({
          trigger: group,
          start: "top 80%",
          end: "bottom 60%",
          // KUNCI: restart saat masuk, reverse saat keluar balik
          toggleActions: "restart reverse restart reverse",

          onEnter: () => {
            gsap.to(items, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: "auto",
            });
          },

          onLeaveBack: () => {
            gsap.to(items, {
              autoAlpha: 0,
              y: 18,
              filter: "blur(5px)",
              duration: 0.45,
              ease: "power2.inOut",
              stagger: 0.04,
              overwrite: "auto",
            });
          },
        });
      });

      // =========================
      // LIGHT PARALLAX for GIF FX
      // add wrapper: <div data-fx="parallax"> <LuxuryGif .../> </div>
      // =========================
      document.querySelectorAll<HTMLElement>('[data-fx="parallax"]').forEach((el) => {
        gsap.to(el, {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      // =========================
      // Header feel (smooth)
      // =========================
      const header = document.querySelector<HTMLElement>("header");
      if (header) {
        gsap.to(header, {
          backgroundColor: "rgba(0,0,0,0.72)",
          // backdropFilter kadang berat; ini halus + aman
          scrollTrigger: {
            trigger: document.body,
            start: "top -60",
            end: "top -200",
            scrub: true,
          },
        });
      }

      // Refresh triggers (important)
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); // auto kill animations + triggers created in context
    };
  }, []);
}
