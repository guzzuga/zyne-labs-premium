"use client";

import { useEffect, useMemo, useState } from "react";
import LuxuryGif from "@/components/fx/LuxuryGif";
import { Icons } from "@/components/Icons";
import { usePatrickMotion } from "@/components/usePatrickMotion";
import ProductPreview from "@/components/ProductPreview";
import TrustMetrics from "@/components/TrustMetrics";

// ❌ hapus duplikat (ini bikin noise / potensi error)
// import TrustMetricsInline from "@/components/TrustMetrics";

const BRAND = "Zyne Labs Studio";
const WA = "https://wa.me/6285729753619";

// taruh file-nya di: /public/images/available.jpg
const AVAILABLE_BG = "/images/available.jpg";

// ✅ Tech stack pakai SVG di: /public/tech/
const STACK = [
  { label: "Laravel", icon: "/tech/laravel.svg" },
  { label: "JavaScript", icon: "/tech/javascript.svg" },
  { label: "React", icon: "/tech/react.svg" },
  { label: "MySQL", icon: "/tech/mysql.svg" },
  { label: "Flutter", icon: "/tech/flutter.svg" },
  { label: "Python", icon: "/tech/python.svg" },
];

type WorkItem = {
  tag: string;
  title: string;
  desc: string;
  image?: string;
  images?: string[];
  featured?: boolean;
};

export default function Page() {
  usePatrickMotion();

  const [lang, setLang] = useState<"id" | "en">("id");

  const t = useMemo(() => {
    const ID = {
      navWorks: "Works",
      navAbout: "About",
      navContact: "Contact",
      startProject: "Start a Project",
      viewWorks: "View Works",
      kicker: "Premium Product Engineering",
      heroDesc:
        "Saya membantu kamu membangun aplikasi & sistem custom yang rapi, cepat, dan scalable. Mulai dari website, dashboard admin, API backend, sampai AI & automation untuk bisnis.",
      selectedCases: "SELECTED CASES",
      worksTitle: "Project yang saya kerjakan",
      worksDesc:
        "Ini contoh layanan & output yang biasa saya deliver. Nanti kamu bisa ganti dengan studi kasus asli + link demo.",
      aboutKicker: "HELLO. I AM",
      aboutName: "Agus Efendi",
      aboutBody:
        "Saya membantu bisnis dan individu membangun produk digital yang fokus pada hasil: rapi, cepat, mudah dipakai, dan siap berkembang. Mulai dari UI/UX, implementasi sistem, sampai automation berbasis AI.",
      servicesKicker: "SERVICES",
      techStackKicker: "TECH STACK",
      techStackNote: "Modern stack untuk web, backend, automation, dan mobile.",
      availableKicker: "AVAILABLE FOR WORK",
      availableTitle: "Let’s build something",
      availableDesc:
        "Fokus: aplikasi bisnis, sistem internal, AI chatbot, dan automation workflow.",
      quickResponse: "Quick response • Professional",
      connectKicker: "LET’S CONNECT",
      connectBody:
        "Ceritakan kebutuhan project kamu. Saya bantu berikan solusi yang tepat + estimasi yang jelas. Privasi aman & profesional.",
      footerMade: `© ${new Date().getFullYear()} ${BRAND}. Built with care.`,
    };

    const EN = {
      navWorks: "Works",
      navAbout: "About",
      navContact: "Contact",
      startProject: "Start a Project",
      viewWorks: "View Works",
      kicker: "Premium Product Engineering",
      heroDesc:
        "I help you build clean, fast, scalable apps & custom systems, from websites and admin dashboards to backend APIs, AI, and business automation.",
      selectedCases: "SELECTED CASES",
      worksTitle: "Projects I build",
      worksDesc:
        "These are common deliverables I ship. You can replace them later with real case studies + demo links.",
      aboutKicker: "HELLO. I AM",
      aboutName: "Agus Efendi",
      aboutBody:
        "I help businesses and individuals build outcome driven digital products: clean UI, fast performance, easy to use, and ready to scale. from UI/UX to system implementation and AI automation.",
      servicesKicker: "SERVICES",
      techStackKicker: "TECH STACK",
      techStackNote: "Modern stack for web, backend, automation, and mobile.",
      availableKicker: "AVAILABLE FOR WORK",
      availableTitle: "Let’s build something clean & powerful.",
      availableDesc:
        "Focus: business apps, internal systems, AI chatbots, and automation workflow.",
      quickResponse: "Quick response • Professional",
      connectKicker: "LET’S CONNECT",
      connectBody:
        "Tell me what you’re building. I’ll propose the best approach + a clear estimate. Privacy safe & professional.",
      footerMade: `© ${new Date().getFullYear()} ${BRAND}. Built with care.`,
    };

    return lang === "id" ? ID : EN;
  }, [lang]);

  const chips = useMemo(
    () => [
      "Custom Software",
      "System Information",
      "Dashboard / Admin",
      "API & Backend",
      "AI Chatbot",
      "Automation",
      "UI/UX Website",
      "UI/UX Mobile",
      "Project Takeover",
      "Bug Fixing",
    ],
    []
  );

  const works = useMemo<WorkItem[]>(
    () => (lang === "id" ? (WORKS_ID as WorkItem[]) : (WORKS_EN as WorkItem[])),
    [lang]
  );

  const bullets = useMemo(
    () => (lang === "id" ? BULLETS_ID : BULLETS_EN),
    [lang]
  );

  const services = useMemo(
    () => (lang === "id" ? SERVICES_ID : SERVICES_EN),
    [lang]
  );

  return (
    <main className="min-h-screen noise vignette gridlines">
      {/* ================= TOP NAV (PREMIUM) ================= */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <div className="nav-shell flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl px-4 py-3 shadow-luxe">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5">
                <Icons.Sparkles className="h-4 w-4 text-white/85" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{BRAND}</div>
                <div className="mono text-[11px] tracking-[0.22em] text-white/55">
                  SOFTWARE • SYSTEM • AI
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
              <a className="nav-link" href="#works">
                {t.navWorks}
              </a>
              <a className="nav-link" href="#about">
                {t.navAbout}
              </a>
              <a className="nav-link" href="#contact">
                {t.navContact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* ✅ Language Toggle (muncul di Android juga) */}
              <div className="flex items-center rounded-xl border border-white/10 bg-white/5 p-1 scale-[.92] sm:scale-100 origin-right">
                <button
                  onClick={() => setLang("id")}
                  className={`mono px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.22em] rounded-lg transition ${
                    lang === "id"
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-label="Switch to Indonesian"
                  type="button"
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`mono px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.22em] rounded-lg transition ${
                    lang === "en"
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-label="Switch to English"
                  type="button"
                >
                  EN
                </button>
              </div>

              <a
                href={WA}
                className="btn-primary rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold shadow-glow transition hover:shadow-[0_0_0_1px_rgba(255,255,255,.25),0_0_50px_rgba(59,110,255,.16)]"
              >
                {t.startProject}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pt-28 md:pt-32">
        {/* ✅ Extra neon layer (nyatu sama GIF, halus) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.18),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(59,110,255,.16),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,.06),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/35" />

        {/* FX orb */}
        <LuxuryGif src="/fx/soon.gif" size={560} opacity={0.72} blend="screen" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
            {/* LEFT */}
            <div>
              <p
                data-hero="kicker"
                className="inline-flex items-center gap-2 text-xs text-white/70 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full shadow-glow"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {t.kicker}
              </p>

              <HeroTitle />

              <p
                data-hero="desc"
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
              >
                {t.heroDesc}
              </p>

              {/* trust metrics (biar gak “error” layout): kasih wrapper */}
              <div className="mt-6">
                <TrustMetrics />
              </div>

              <div
                data-hero="cta"
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href={WA}
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-semibold shadow-glow hover:shadow-[0_0_0_1px_rgba(255,255,255,.25),0_0_50px_rgba(59,110,255,.16)] transition"
                >
                  <Icons.ArrowUpRight className="h-4 w-4" />
                  {t.startProject}
                </a>
                <a
                  href="#works"
                  className="btn-secondary inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:border-cyan-400/40 hover:bg-white/10 transition"
                >
                  {t.viewWorks}
                </a>
              </div>

              {/* TRUST STRIP (subtle, premium) */}
              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-white/55">
                <span className="mono tracking-[0.22em]">BUILD WITH</span>
                <div className="flex items-center gap-2">
                  {STACK.map((s) => (
                    <span
                      key={s.label}
                      className="tech-pill"
                      title={s.label}
                      aria-label={s.label}
                    >
                      <span className="tech-pill__glow" aria-hidden="true" />
                      <img
                        src={s.icon}
                        alt={s.label}
                        className="tech-pill__icon"
                        loading="lazy"
                      />
                    </span>
                  ))}
                </div>
              </div>

              {/* CHIPS */}
              <div className="mt-10 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    data-pill
                    className="pill pill-marquee mono rounded-full px-4 py-2 text-[12px] text-white/85"
                    style={{
                      ["--pill-px" as any]: "1rem",
                      ["--pill-py" as any]: "0.5rem",
                    }}
                    aria-label={c}
                    title={c}
                  >
                    <span className="pill-label">{c}</span>
                    <span className="pill-track" aria-hidden="true">
                      <span className="pill-inner">
                        <span className="pill-text">{c}</span>
                        <span className="pill-text">{c}</span>
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: PREMIUM PREVIEW */}
            <div className="relative md:pb-6" data-reveal-group>
              <div
                data-reveal-item
                className="relative z-10 w-full max-w-[560px] md:ml-auto"
              >
                {/* NOTE: -top besar sering bikin “gak terasa” di beberapa layout.
                    Pakai translate-y supaya konsisten. */}
                <div className="relative md:-translate-y-10 lg:-translate-y-24">
                  <ProductPreview />
                </div>
              </div>

              {/* orb glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(59,110,255,.7), transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKS ================= */}
      <section id="works" className="px-6 pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl" data-reveal-group>
          <div data-reveal-item className="flex items-end justify-between gap-6">
            <div>
              <p className="mono text-[11px] tracking-[0.24em] text-white/55">
                {t.selectedCases}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.worksTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/65 md:text-base">
                {t.worksDesc}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {works.map((w) => {
              const media = w.images ?? (w.image ? [w.image] : []);
              const isFeatured = !!w.featured;

              return (
                <a
                  key={w.title}
                  href={WA}
                  data-reveal-item
                  className="group glass lux-border shadow-soft block rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/25"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="mono text-[11px] tracking-[0.22em] text-white/55">
                      {w.tag}
                    </span>
                    <Icons.ArrowUpRight className="h-4 w-4 text-white/45 transition group-hover:text-white/80" />
                  </div>

                  <div className="mt-4 text-xl font-semibold">{w.title}</div>
                  <div className="mt-2 text-sm text-white/65">{w.desc}</div>

                  <div
                    className={`mt-6 relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 ${
                      isFeatured ? "h-40" : "h-28"
                    }`}
                  >
                    <WorkMedia images={media} title={w.title} />

                    {/* overlay premium */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.60),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,110,255,.22),transparent_60%)] opacity-70" />

                    {/* shine */}
                    <div className="absolute -left-10 top-0 h-full w-28 -skew-x-12 bg-white/10 opacity-0 blur-md transition group-hover:opacity-100" />

                    <div className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/15 bg-black/45 px-2 py-0.5 text-[10px] text-white/80">
                      {w.featured ? "FEATURED" : "CASE STUDY"}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-transparent px-6 py-16 md:py-24"
      >
        <LuxuryGif
          src="/fx/bold2.gif"
          size={1420}
          opacity={0.45}
          blend="screen"
          mask
          darken={0.15}
          blur={0}
          float={false}
          className="-z-20 [mask-image:radial-gradient(circle_at_60%_40%,black_45%,transparent_78%)]"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(650px 450px at 70% 35%, rgba(0, 0, 0, 0), transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-7xl" data-reveal-group>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            {/* LEFT CARD */}
            <div
              data-reveal-item
              className="glass lux-border shadow-soft rounded-3xl p-7 md:p-9"
            >
              <div className="mono text-[11px] tracking-[0.24em] text-white/55">
                {t.aboutKicker}
              </div>
              <div className="mt-3 text-3xl font-semibold md:text-4xl">
                {t.aboutName}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                {t.aboutBody}
              </p>

              <div className="mt-6 grid gap-3">
                {bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/75"
                  >
                    <Icons.ShieldCheck className="h-4 w-4 text-white/70" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="grid gap-5">
              {/* AVAILABLE */}
              <div
                data-reveal-item
                className="relative shadow-soft overflow-hidden rounded-3xl border border-white/10 bg-black/30"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${AVAILABLE_BG}')` }}
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,110,255,.25),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(237,237,237,.10),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,.06),rgba(255,255,255,.02))]" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,110,255,.18),transparent_55%)]" />

                <div className="relative flex h-[420px] flex-col justify-end p-6">
                  <div className="mono text-[11px] tracking-[0.22em] text-white/60">
                    {t.availableKicker}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {t.availableTitle}
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    {t.availableDesc}
                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_18px_rgba(59,110,255,.75)]" />
                    {t.quickResponse}
                  </div>
                </div>
              </div>

              {/* SERVICES */}
              <div
                data-reveal-item
                className="glass lux-border shadow-soft rounded-3xl p-7 md:p-9"
              >
                <div className="mono text-[11px] tracking-[0.24em] text-white/55">
                  {t.servicesKicker}
                </div>

                <div className="mt-3 grid gap-4">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/30">
                          <s.icon className="h-5 w-5 text-white/80" />
                        </div>
                        <div className="font-semibold">{s.title}</div>
                      </div>

                      <ul className="mt-3 space-y-1 text-sm text-white/70">
                        {s.items.map((it: string) => (
                          <li key={it} className="flex gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/30" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* TECH STACK */}
                <div className="mt-6">
                  <div className="mono text-[11px] tracking-[0.22em] text-white/55">
                    {t.techStackKicker}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {STACK.map((s) => (
                      <div
                        key={s.label}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-3 shadow-soft transition hover:-translate-y-[1px] hover:border-white/25 hover:bg-black/35"
                        aria-label={s.label}
                        title={s.label}
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
                        <div
                          className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-70"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(59,110,255,.65), transparent 60%)",
                          }}
                        />

                        <div className="relative flex items-center gap-3 py-1">
                          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white shadow-[0_10px_24px_rgba(0,0,0,.35)] transition group-hover:shadow-[0_0_28px_rgba(59,110,255,.35)]">
                            <img
                              src={s.icon}
                              alt={s.label}
                              className="block max-h-[22px] max-w-[22px] object-contain transition duration-300 group-hover:scale-[1.05] group-hover:drop-shadow-[0_0_12px_rgba(59,110,255,.28)]"
                              loading="lazy"
                            />
                          </div>

                          <div className="min-w-0 flex flex-col justify-center leading-tight">
                            <div className="mono text-[10px] tracking-[0.22em] text-white/50">
                              STACK
                            </div>
                            <div className="mt-[2px] truncate text-sm font-semibold text-white/85 transition group-hover:text-white">
                              {s.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-xs text-white/45">
                    {t.techStackNote}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="glass lux-border shadow-soft rounded-[34px] p-8 md:p-12"
            data-reveal-group
          >
            <div
              data-reveal-item
              className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center"
            >
              <div>
                <div className="mono text-[11px] tracking-[0.24em] text-white/55">
                  {t.connectKicker}
                </div>
                <h3
                  className="mt-3 text-5xl tracking-tight2 md:text-7xl"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    lineHeight: 0.9,
                  }}
                >
                  LET’S
                  <br />
                  CONNECT
                </h3>
                <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
                  {t.connectBody}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <span
                      key={i}
                      data-pill
                      className="pill mono rounded-full px-4 py-2 text-[12px] text-white/85"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div
                data-reveal-item
                className="lux-border rounded-3xl border border-white/10 bg-black/30 p-6"
              >
                <div className="mono text-[11px] tracking-[0.24em] text-white/55">
                  CONTACT
                </div>
                <div className="mt-4 grid gap-3">
                  <a
                    href={WA}
                    className="electric-glow flex items-center justify-between rounded-2xl bg-electric px-5 py-4 text-sm font-semibold text-white"
                  >
                    <span className="flex items-center gap-2">
                      <Icons.Phone className="h-4 w-4" />
                      WhatsApp
                    </span>
                    <Icons.ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="mailto:hello@zynelabs.studio"
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white/90 hover:bg-white/10"
                  >
                    <span className="flex items-center gap-2">
                      <Icons.Mail className="h-4 w-4" />
                      Email
                    </span>
                    <Icons.ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 hairline pt-5 text-xs text-white/55">
                  {t.footerMade}
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom + Social icons */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
            <div className="mono tracking-[0.22em]">BLACK × ELECTRIC BLUE</div>

            <div className="flex flex-wrap items-center gap-4">
              <a className="hover:text-white" href="#works">
                works
              </a>
              <a className="hover:text-white" href="#about">
                about
              </a>
              <a className="hover:text-white" href="#contact">
                contact
              </a>

              <span
                className="hidden md:inline-block h-4 w-px bg-white/15"
                aria-hidden="true"
              />

              <a
                href="https://github.com/guzzuga"
                className="inline-flex items-center hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Icons.Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/agus-efendi-45645a18a"
                className="inline-flex items-center hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Icons.Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://instagram.com/efnd_ags"
                className="inline-flex items-center hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <Icons.Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/share/1PQc4FQtFB/"
                className="inline-flex items-center hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <Icons.Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://x.com/efndags"
                className="inline-flex items-center hover:text-white"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                title="X (Twitter)"
              >
                <Icons.Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroTitle() {
  const title = "DESIGNER & DEVELOPER";

  return (
    <h1
      data-hero="title"
      data-text={title}
      className="hero-dd mt-6 text-[64px] leading-[0.82] tracking-tight2 md:text-[110px]"
      style={{ fontFamily: "var(--font-display), sans-serif" }}
    >
      <span className="hero-dd__inner">{title}</span>
    </h1>
  );
}

function WorkMedia({ images, title }: { images?: string[]; title: string }) {
  const slides = useMemo(() => (images ?? []).filter(Boolean), [images]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 2400);
    return () => clearInterval(t);
  }, [slides.length]);

  if (slides.length === 0) {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,110,255,.22),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,.06),rgba(255,255,255,.02))]" />
    );
  }

  return (
    <>
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${title} ${idx + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            idx === i ? "opacity-95" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}

      {slides.length > 1 ? (
        <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full transition ${
                idx === i ? "bg-white/80" : "bg-white/25"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

/** ====== DATA ======
 *  Taruh gambar:
 *  - Dashboard slider: /public/works/dashboard-1.jpg, dashboard-2.jpg, dashboard-3.jpg
 *  - Lainnya: /public/works/<nama-file>.jpg (optional)
 */

const WORKS_ID: WorkItem[] = [
  {
    tag: "WEB APP",
    title: "Dashboard Admin & Reporting",
    desc: "Role, analytics, export report, dan workflow approval.",
    images: [
      "/works/dashboard-1.jpg",
      "/works/dashboard-2.jpg",
      "/works/dashboard-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "SYSTEM",
    title: "Sistem Informasi Internal",
    desc: "Otomasi proses kerja + audit trail + integrasi database.",
    images: [
      "/works/system1.jpg",
      "/works/system2.jpg",
      "/works/system3.jpg",
    ],
    featured: true,
  },
  {
    tag: "AI",
    title: "AI Chatbot Customer Support",
    desc: "FAQ, routing, dan integrasi website/WhatsApp.",
    images: [
      "/works/ai-1.jpg",
      "/works/ai-2.jpg",
      "/works/ai-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "BACKEND",
    title: "API & Backend Service",
    desc: "Auth, rate limit, logging, monitoring, dan integrasi.",
    images: [
      "/works/backend-1.jpg",
      "/works/backend-2.jpg",
      "/works/backend-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "MOBILE",
    title: "Flutter Mobile App",
    desc: "UI premium + koneksi API + notifikasi + release ready.",
    images: [
      "/works/mobile-1.jpg",
      "/works/mobile-2.jpg",
      "/works/mobile-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "SUPPORT",
    title: "Project Takeover",
    desc: "Beresin bug, rapihin codebase, lanjut fitur sampai deploy.",
    images: [
      "/works/support-1.jpg",
      "/works/support-2.jpg",
      "/works/support-3.jpg",
    ],
    featured: true,
  },
];

const WORKS_EN: WorkItem[] = [
  {
    tag: "WEB APP",
    title: "Admin Dashboard & Reporting",
    desc: "Roles, analytics, exports, and approval workflows.",
    images: [
      "/works/dashboard-1.jpg",
      "/works/dashboard-2.jpg",
      "/works/dashboard-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "SYSTEM",
    title: "Internal Information System",
    desc: "Process automation, audit trails, and database integrations.",
    images: [
      "/works/system1.jpg",
      "/works/system2.jpg",
      "/works/system3.jpg",
    ],
    featured: true,
  },
  {
    tag: "AI",
    title: "AI Customer Support Chatbot",
    desc: "FAQ, routing, and website/WhatsApp integration.",
    images: [
      "/works/ai-1.jpg",
      "/works/ai-2.jpg",
      "/works/ai-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "BACKEND",
    title: "API & Backend Service",
    desc: "Auth, rate limiting, logging, monitoring, and integrations.",
    images: [
      "/works/backend-1.jpg",
      "/works/backend-2.jpg",
      "/works/backend-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "MOBILE",
    title: "Flutter Mobile App",
    desc: "Premium UI, API connection, notifications, and release-ready.",
    images: [
      "/works/mobile-1.jpg",
      "/works/mobile-2.jpg",
      "/works/mobile-3.jpg",
    ],
    featured: true,
  },
  {
    tag: "SUPPORT",
    title: "Project Takeover",
    desc: "Fix bugs, refactor the codebase, ship features, and deploy.",
    images: [
      "/works/support-1.jpg",
      "/works/support-2.jpg",
      "/works/support-3.jpg",
    ],
    featured: true,
  },
];

const BULLETS_ID = [
  "Custom solutions sesuai kebutuhan",
  "Full source code + dokumentasi",
  "Revisi fleksibel sampai beres",
  "Free consultation sebelum mulai",
];

const BULLETS_EN = [
  "Custom solutions tailored to your needs",
  "Full source code + documentation",
  "Flexible revisions until it’s done",
  "Free consultation before starting",
];

const SERVICES_ID = [
  {
    icon: Icons.Code2,
    title: "Software Development",
    items: [
      "Website & Web Application",
      "Sistem Informasi",
      "Dashboard & Admin Panel",
      "API & Backend System",
    ],
  },
  {
    icon: Icons.Bot,
    title: "AI & Automation",
    items: [
      "AI Chatbot",
      "Virtual Assistant",
      "Business Automation",
      "AI Search & Recommendation",
      "Predictive AI (tren & data)",
    ],
  },
  {
    icon: Icons.Brush,
    title: "UI / UX Design",
    items: [
      "UI/UX Website",
      "UI/UX Mobile App",
      "Wireframe & Prototype",
      "Custom Professional Design",
    ],
  },
  {
    icon: Icons.Wrench,
    title: "Project Support",
    items: [
      "Project takeover",
      "Bug fixing & error fixing",
      "Feature enhancement",
      "Unfinished project continuation",
      "Privasi aman & profesional",
    ],
  },
];

const SERVICES_EN = [
  {
    icon: Icons.Code2,
    title: "Software Development",
    items: [
      "Website & Web Applications",
      "Information Systems",
      "Dashboard & Admin Panels",
      "API & Backend Systems",
    ],
  },
  {
    icon: Icons.Bot,
    title: "AI & Automation",
    items: [
      "AI Chatbot",
      "Virtual Assistant",
      "Business Automation",
      "AI Search & Recommendation",
      "Predictive AI (trends & data)",
    ],
  },
  {
    icon: Icons.Brush,
    title: "UI / UX Design",
    items: [
      "Website UI/UX",
      "Mobile App UI/UX",
      "Wireframes & Prototypes",
      "Custom Professional Design",
    ],
  },
  {
    icon: Icons.Wrench,
    title: "Project Support",
    items: [
      "Project takeover",
      "Bug & error fixing",
      "Feature enhancements",
      "Continue unfinished projects",
      "Privacy safe & professional",
    ],
  },
];

const INTERESTS = [
  "CUSTOM SOFTWARE",
  "AI CHATBOT",
  "AUTOMATION",
  "DASHBOARD",
  "API BACKEND",
  "UI/UX DESIGN",
  "MOBILE APP",
  "PROJECT TAKEOVER",
  "STARTUPS",
  "NEW BUSINESSES",
];