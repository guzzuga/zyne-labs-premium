"use client";

import { motion } from "framer-motion";
import { Icons } from "./Icons";

const FOOTER_LINKS = {
  Product: [
    { label: "AI Agents", href: "#" },
    { label: "Automation", href: "#" },
    { label: "Knowledge Base", href: "#" },
    { label: "API", href: "#" },
    { label: "Pricing", href: "#pricing" },
  ],
  Developers: [
    { label: "Documentation", href: "#" },
    { label: "SDK & Libraries", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "SLA", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.06] px-4 pb-8 pt-16 sm:px-6 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-purple-glow">
                <Icons.Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm font-semibold">ZyneCode</div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Premium AI engineering studio building intelligent applications,
              systems, and automation for forward-thinking businesses.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/guzzuga"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/30 hover:text-white"
                aria-label="GitHub"
              >
                <Icons.Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/agus-efendi-45645a18a"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <Icons.Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/efnd_ags"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/30 hover:text-white"
                aria-label="Instagram"
              >
                <Icons.Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/efndags"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/30 hover:text-white"
                aria-label="X"
              >
                <Icons.Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} ZyneCode Studio. Built with care.</p>
          <p className="mono tracking-[0.22em]">
            PREMIUM AI ENGINEERING
          </p>
        </div>
      </div>
    </footer>
  );
}
