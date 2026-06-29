"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";

const FAQS = [
  {
    q: "What services does Zyne Labs offer?",
    a: "We specialize in AI-powered application development, custom software engineering, workflow automation, API integration, and UI/UX design. From concept to deployment, we build solutions that scale.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timeline depends on complexity. A standard web application takes 4-8 weeks, while larger AI systems may take 8-16 weeks. We provide a clear timeline during the initial consultation.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes 30 days of post-launch support. We also offer ongoing maintenance, monitoring, and feature enhancement retainers for long-term partnerships.",
  },
  {
    q: "Can you work with existing codebases?",
    a: "Absolutely. Our Project Takeover service is designed for exactly this — we audit, refactor, and extend existing codebases with fresh features and modern best practices.",
  },
  {
    q: "What technologies do you use?",
    a: "Our stack includes React, Next.js, Laravel, Node.js, Python, Flutter, and various AI/ML frameworks. We choose the best technology for each project's specific requirements.",
  },
  {
    q: "How do you handle data security?",
    a: "Security is paramount. We implement OWASP best practices, end-to-end encryption, secure authentication, and comply with data protection regulations. Enterprise clients get additional security audits.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mono text-[11px] tracking-[0.24em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 space-y-3"
        >
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="glass group cursor-pointer rounded-2xl border-white/[0.06] transition-all duration-300 hover:border-primary/20"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex items-center justify-between p-5 md:p-6">
                <span className="pr-4 text-sm font-medium text-white md:text-base">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <Icons.Plus className="h-4 w-4 text-muted" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-relaxed text-muted md:px-6 md:pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
