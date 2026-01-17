"use client";

import { useLayoutEffect } from "react";

export function usePatrickMotion() {
  useLayoutEffect(() => {
    let ctx: any;
    let mm: any;
    let killed = false;

    (async () => {
      // Dynamic import biar aman di Next.js App Router
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
      const ScrollTrigger =
        stModule.ScrollTrigger || (stModule as any).default || stModule;

      if (killed) return;

      gsap.registerPlugin(ScrollTrigger);

      // Global defaults: premium feel
      gsap.defaults({
        ease: "power3.out",
        duration: 0.8,
      });

      ScrollTrigger.config({
        // bikin scrub + snapping terasa halus saat scroll cepat
        limitCallbacks: true,
        ignoreMobileResize: true,
      });

      // Helper: cek reduce motion
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // NOTE: semua animasi di-scope ke document biar gampang cleanup
      ctx = gsap.context(() => {
        // ====== INTRO / HERO (first load) ======
        const heroKicker = document.querySelector('[data-hero="kicker"]');
        const heroTitle = document.querySelector('[data-hero="title"]');
        const heroDesc = document.querySelector('[data-hero="desc"]');
        const heroCta = document.querySelector('[data-hero="cta"]');

        // Per-letter support (kalau ada)
        const heroChars = heroTitle
          ? Array.from(heroTitle.querySelectorAll(".hero-dd__char"))
          : [];

        const baseIntro = [heroKicker, heroTitle, heroDesc, heroCta].filter(
          Boolean
        ) as Element[];

        // Set initial state
        if (!prefersReduced) {
          gsap.set(baseIntro, { opacity: 0 });

          if (heroKicker) gsap.set(heroKicker, { y: 10, filter: "blur(10px)" });
          if (heroDesc) gsap.set(heroDesc, { y: 14, filter: "blur(12px)" });
          if (heroCta) gsap.set(heroCta, { y: 12, filter: "blur(10px)" });

          // Kalau ada per-letter, lebih “mewah”
          if (heroChars.length) {
            gsap.set(heroChars, {
              opacity: 0,
              y: 18,
              rotateX: 14,
              filter: "blur(14px)",
              transformPerspective: 900,
              transformOrigin: "50% 100%",
            });

            // tracking awal sedikit renggang lalu rapih (feel “tersusun”)
            gsap.set(heroTitle, { letterSpacing: "0.08em" });
          } else if (heroTitle) {
            gsap.set(heroTitle, { y: 18, filter: "blur(16px)" });
          }

          const intro = gsap.timeline({ delay: 0.06 });

          intro
            .to(heroKicker, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 }, 0)
            .to(heroTitle, { opacity: 1, duration: 0.01 }, 0.08);

          if (heroChars.length) {
            intro
              .to(
                heroChars,
                {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  duration: 0.78,
                  stagger: { each: 0.028, from: "start" },
                  ease: "power3.out",
                },
                0.10
              )
              .to(
                heroTitle,
                { letterSpacing: "0em", duration: 0.9, ease: "power2.out" },
                0.16
              );
          } else if (heroTitle) {
            intro.to(
              heroTitle,
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
              0.10
            );
          }

          intro
            .to(heroDesc, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.72 }, 0.32)
            .to(heroCta, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.64 }, 0.40);
        } else {
          // Reduced motion: langsung tampil
          baseIntro.forEach((el) => (el as HTMLElement).style.opacity = "1");
        }

        // ====== SCROLL REVEAL (premium) ======
        // Pattern: [data-reveal-group] membungkus beberapa [data-reveal-item]
        const groups = Array.from(
          document.querySelectorAll<HTMLElement>("[data-reveal-group]")
        );

        if (!prefersReduced) {
          groups.forEach((group) => {
            const items = Array.from(
              group.querySelectorAll<HTMLElement>("[data-reveal-item]")
            );

            if (!items.length) return;

            // Initial state (halus, ga lebay)
            gsap.set(items, {
              opacity: 0,
              y: 16,
              filter: "blur(10px)",
              transform: "translateZ(0)",
            });

            gsap.to(items, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.75,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: "top 82%",
                end: "bottom 55%",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
            });
          });

          // ====== MICRO PARALLAX (lux) ======
          // Parallax halus untuk elemen yang punya data-hero / fx orb / dll
          const parallaxTargets: HTMLElement[] = [
            ...Array.from(document.querySelectorAll<HTMLElement>("[data-hero]")),
          ];

          parallaxTargets.forEach((el) => {
            // hanya yang terlihat “besar” biar gak ganggu
            // (kamu bisa tambahin class khusus kalau mau)
            gsap.to(el, {
              y: -8,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          });
        }

        // ====== HOVER (desktop only) lebih “mahal” ======
        mm = gsap.matchMedia();

        mm.add("(hover: hover) and (pointer: fine)", () => {
          // Card hover “lift” micro—bikin terasa premium tapi gak lebay
          const cards = Array.from(
            document.querySelectorAll<HTMLElement>(".lux-border, .glass")
          );

          cards.forEach((card) => {
            const onEnter = () => {
              gsap.to(card, {
                y: -2,
                duration: 0.22,
                ease: "power2.out",
              });
            };
            const onLeave = () => {
              gsap.to(card, {
                y: 0,
                duration: 0.26,
                ease: "power2.out",
              });
            };

            card.addEventListener("mouseenter", onEnter);
            card.addEventListener("mouseleave", onLeave);

            // cleanup per-element
            (card as any).__pm_cleanup = () => {
              card.removeEventListener("mouseenter", onEnter);
              card.removeEventListener("mouseleave", onLeave);
            };
          });

          return () => {
            cards.forEach((c: any) => c.__pm_cleanup?.());
          };
        });

        // ====== PERF: refresh once after layout ======
        // Biar trigger posisi akurat (fonts/hero height)
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, document);
    })();

    return () => {
      killed = true;

      try {
        // cleanup hover listeners
        document
          .querySelectorAll<HTMLElement>(".lux-border, .glass")
          .forEach((c: any) => c.__pm_cleanup?.());
      } catch {}

      try {
        mm?.revert?.();
      } catch {}

      try {
        ctx?.revert?.();
      } catch {}

      try {
        // kill triggers created (safety)
        // (kalau ScrollTrigger belum ke-load, ini aman karena try/catch)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const st = require("gsap/ScrollTrigger");
        const ScrollTrigger = st.ScrollTrigger || st.default || st;
        ScrollTrigger?.getAll?.().forEach((t: any) => t.kill());
      } catch {}
    };
  }, []);
}
