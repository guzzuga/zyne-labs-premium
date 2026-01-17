"use client";

import { useMemo } from "react";

type Card = {
  label: string;
  title: string;
  value: number; // 0-100
  tone?: "blue" | "cyan" | "mint";
};

const bars = {
  blue: "bg-[linear-gradient(90deg,rgba(59,110,255,.0),rgba(59,110,255,.9),rgba(255,255,255,.75))]",
  cyan: "bg-[linear-gradient(90deg,rgba(34,211,238,.0),rgba(34,211,238,.9),rgba(255,255,255,.7))]",
  mint: "bg-[linear-gradient(90deg,rgba(34,197,94,.0),rgba(34,197,94,.8),rgba(255,255,255,.65))]",
};

export default function ProductPreview() {
  const items = useMemo<Card[]>(
    () => [
      { label: "Dashboard Systems", title: "Enterprise UI", value: 74, tone: "cyan" },
      { label: "Conversion Pages", title: "Luxury Landing", value: 62, tone: "mint" },
    ],
    []
  );

  const tags = useMemo(
  () => [
    "Micro-interactions",
    "Performance",
    "Design systems",
    "Motion polish",
    "Responsive UI",
    "Accessibility",
    "SEO-ready",
    "API integration",
    "Analytics",
    "Animations",
    "Component library",
    "Dark mode",
  ],
  []
);

  return (
    <div className="relative">
      {/* OUTER GLASS SHELL */}
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30 shadow-[0_0_0_1px_rgba(255,255,255,.06),0_30px_120px_rgba(0,0,0,.55)]">
        {/* premium gradient hairline */}
        <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(1200px_600px_at_40%_20%,black,transparent_60%)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.18),rgba(59,110,255,.18),rgba(34,211,238,.10),rgba(255,255,255,.06))]" />
        </div>

        {/* specular highlight */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-30" />

        {/* soft inner grid */}
        <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_30%_20%,rgba(59,110,255,.25),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(to_right,rgba(255,255,255,.06)_0,rgba(255,255,255,.06)_1px,transparent_1px,transparent_84px)]" />

        <div className="relative p-5 md:p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold text-white/75">Product Preview</div>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/55">
                v2.0
              </span>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(59,110,255,.65), transparent 60%)",
                  }}
                />

                <div className="text-[11px] text-white/60">{it.label}</div>
                <div className="mt-1 text-[18px] font-semibold tracking-tight text-white/90">
                  {it.title}
                </div>

                {/* progress */}
                <div className="mt-4 h-[10px] w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full opacity-95"
                    style={{ width: `${it.value}%` }}
                  >
                    <div
                      className={`h-full w-full ${bars[it.tone ?? "blue"]} relative`}
                    >
                      {/* animated shine inside bar */}
                      <div className="bar-shine pointer-events-none absolute inset-y-0 -left-20 w-24 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.65),transparent)] opacity-60" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] text-white/45">
                  <span>Quality</span>
                  <span className="mono tracking-[0.18em]">{it.value}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* TAGS */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-white/65">Motion & Polish</div>
              <div className="text-[10px] text-white/40">Client-only</div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 h-px w-full bg-white/10" />

            <div className="mt-3 flex items-center justify-between text-[11px] text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Typical delivery
              </span>
              <span className="mono tracking-[0.18em] text-white/45">
                Design → Build → Launch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* subtle outer glow blob */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,110,255,.35), transparent 60%)",
        }}
      />
    </div>
  );
}