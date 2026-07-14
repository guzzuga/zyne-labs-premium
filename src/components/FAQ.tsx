"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";

const FAQS = [
  {
    q: "Service apa aja yang ZyneCode terima?",
    a: "Kalo lo butuh app AI, sistem otomatis, integrasi API, atau landing page — kita bisa. Intinya: project yang butuh coding (Python, React, Laravel, Flutter, dll), kita handle semua.",
  },
  {
    q: "Berapa lama satu project?",
    a: "Tergesar kompleksitasnya. Landing page bisa 1-2 minggu. Web app biasa 4-8 minggu. Kalau ada AI/ML, mungkin 2-4 bulan. Kita kasih timeline detail pas konsultasi awal.",
  },
  {
    q: "Ada maintenance setelah app jadi?",
    a: "Iya, tiap project dapat 30 hari free support. Abis itu kita punya paket maintenance bulanan (update bug, fitur baru, monitoring server). Gak ngingetin — tinggal WA.",
  },
  {
    q: "Bisa kerjain project yang udah ada?",
    a: "Bisa banget. Banyak klien dateng sama project yang udah setengah jadi atau punya bug nyeleneh. Kita review, perbaiki, dan lanjutin. Gak masalah.",
  },
  {
    q: "Tech stack-nya pake apa aja?",
    a: "React, Next.js, Laravel, Node.js, Python, Flutter — itu yang paling sering. Kalau butuh ML, pake TensorFlow. Pilih teknologi berdasarkan apa yang paling cocok sama project, bukan karena kita ngefanboy sama satu framework.",
  },
  {
    q: "Bagaimana soal keamanan data?",
    a: "Login pake bcrypt, database dienkripsi, HTTPS wajib. Klien enterprise dapat tambahan: audit trail, RBAC, dan pen testing. Gak main-main soal data orang.",
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
            Yang sering ditanya{" "}
            <span className="gradient-text">sebelum mulai</span>
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
