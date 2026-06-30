"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const WA = "https://wa.me/6285729753619";

export default function Nav() {
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,8,22,0)", "rgba(5,8,22,0.85)"]
  );
  const navBlur = useTransform(scrollY, [0, 80], [0, 24]);
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
        style={{
          backgroundColor: navBg,
          backdropFilter: `blur(${navBlur}px)`,
          WebkitBackdropFilter: `blur(${navBlur}px)`,
          borderColor: navBorder,
          boxShadow: useTransform(
            scrollY,
            [0, 80],
            [
              "0 0 0 0 transparent",
              "0 4px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
            ]
          ),
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 overflow-hidden rounded-xl shadow-lg shadow-primary/20">
            <Image
              src="/zyne-logo.png"
              alt="Zyne Labs Logo"
              width={36}
              height={36}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Zyne Labs
            </div>
            <div className="mono text-[10px] tracking-[0.22em] text-muted">
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
              className="group relative rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-3 bottom-0.5 h-px origin-left scale-x-0 bg-primary/50 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WA}
          className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm"
        >
          Get Started
          <Icons.ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </motion.nav>
    </motion.header>
  );
}
