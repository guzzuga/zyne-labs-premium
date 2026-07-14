"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import { Icons } from "./Icons";

const FEATURES = [
  {
    icon: Icons.BrainCircuit,
    title: "AI Agents",
    desc: "Bot yang bisa mikir & kerja sendiri: baca data, kasih rekomendasi, jalanin task rutin tanpa diawasin.",
  },
  {
    icon: Icons.Workflow,
    title: "Workflow Automation",
    desc: "Hubungin tool-tool lo (email, sheet, CRM) biar kerjaan berulang jalan sendiri. Hemat jam tiap minggu.",
  },
  {
    icon: Icons.BookOpen,
    title: "Knowledge Base",
    desc: "Upload dokumen perusahaan, nanti AI yang jawab pertanyaan tim. Gak perlu cari manual di folder berantakan.",
  },
  {
    icon: Icons.GitBranch,
    title: "API Integration",
    desc: "Mau nyambungin payment, WhatsApp, atau ERP lama? Kita bikin middleware biar semua ngomong satu bahasa.",
  },
  {
    icon: Icons.Shield,
    title: "Security & Auth",
    desc: "Login aman, data terenkripsi, audit trail jelas. Cocok buat klien yang data-nya sensitif.",
  },
  {
    icon: Icons.BarChart3,
    title: "Dashboard & Report",
    desc: "Satu layar buat pantau metric penting. Auto-refresh, bisa export, gak usah buka 5 tab sekaligus.",
  },
  {
    icon: Icons.Cloud,
    title: "Cloud Deploy",
    desc: "App lo ditaruh di AWS / GCP / Vercel — auto-scale kalau trafik naik, gak panic pas viral.",
  },
  {
    icon: Icons.Code2,
    title: "Clean Codebase",
    desc: "Kode rapi & kebabiasaan standar industri. Tim lo bisa lanjutin tanpa harus nebak-nebak logika saya.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Extracted so useTilt is at the top level ── */
function FeatureCard({ feature }: { feature: typeof FEATURES[0] }) {
  const tiltRef = useTilt(6);

  return (
    <div
      ref={tiltRef}
      className="tilt-card gradient-border-animated relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all duration-300 hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
    >
      <div className="tilt-card-inner relative z-10">
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110">
          <feature.icon className="h-5.5 w-5.5 text-white/90" />
        </div>

        <h3 className="text-lg font-semibold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
          {feature.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted/80">
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mono text-[11px] tracking-[0.3em] text-primary uppercase">
            Features
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              Yang bisa
            </span>{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              kami kerjain
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted/90">
            Dari ide di napkin sampai app yang dipakai user beneran. Ini range yang biasa kita ambil.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}