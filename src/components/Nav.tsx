"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icons } from "./Icons";

const NAV_LINKS = [
  { label: "Product", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WA = "https://wa.me/6287874722632";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop + Mobile Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 transition-all duration-500 ${
          scrolled ? "pb-2" : "pb-3"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500 ${
            scrolled
              ? "bg-[#050816]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
              : "bg-transparent"
          }`}
          style={{ padding: "12px 16px" }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/20 ring-1 ring-white/10">
              <Image
                src="/zyne-logo.png"
                alt="Zyne Labs Logo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="36px"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight text-white">
                Zyne Labs
              </div>
              <div className="mono text-[9px] tracking-[0.25em] text-muted/70">
                STUDIO
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative rounded-xl px-3 py-2 text-sm text-muted/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-2 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-cyan transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary bg-[length:200%_100%] animate-gradient-shift" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                Get Started
                <Icons.ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] gap-1.5 transition-all duration-300 hover:border-primary/30"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white/80 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1 }}
              >
                <a
                  href={WA}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary bg-[length:200%_100%] animate-gradient-shift" />
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Get Started
                    <Icons.ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}