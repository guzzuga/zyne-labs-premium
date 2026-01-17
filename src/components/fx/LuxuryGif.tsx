"use client";

type Blend = "screen" | "lighten" | "normal";
type Mode = "center" | "cover";

export default function LuxuryGif({
  src = "/fx/orb.gif",
  size = 520,
  opacity = 0.72,
  blend = "screen",
  className = "",
  float = true,

  // NEW
  mode = "center",          // "center" (default) | "cover" (nyatu bg)
  mask = true,              // kasih mask biar nyatu
  darken = 0,               // 0 - 0.8 overlay hitam (opsional)
  blur = 0,                 // blur halus, misal 2-6
  quality = "soft",         // "soft" | "crisp"
  anchor = "60% 40%",       // pusat mask
}: {
  src?: string;
  size?: number;
  opacity?: number;
  blend?: Blend;
  className?: string;
  float?: boolean;

  mode?: Mode;
  mask?: boolean;
  darken?: number;
  blur?: number;
  quality?: "soft" | "crisp";
  anchor?: string;
}) {
  const isCover = mode === "cover";

  const baseFilter =
    quality === "crisp"
      ? "saturate(1.12) contrast(1.08)"
      : "saturate(1.18) contrast(1.05)";

  // mask untuk bikin nyatu (tidak kotak)
  const maskImage = mask
    ? `radial-gradient(circle at ${anchor},
        rgba(0,0,0,1) 34%,
        rgba(0,0,0,.75) 52%,
        transparent 78%)`
    : undefined;

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        // biar bisa ditumpuk: kamu atur z-index di parent/props className
        opacity: 1,
      }}
    >
      {/* optional dark overlay (biar kontras tetap premium) */}
      {darken > 0 ? (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${Math.min(Math.max(darken, 0), 0.8)})` }}
        />
      ) : null}

      {/* GIF layer */}
      <img
        src={src}
        alt=""
        draggable={false}
        className={`select-none ${
          isCover
            ? "absolute inset-0 h-full w-full"
            : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        } ${float ? "gif-float" : ""}`}
        style={{
          objectFit: isCover ? "cover" : "contain",
          objectPosition: isCover ? "center" : "center",
          width: isCover ? "100%" : Math.min(size, 820),
          maxWidth: isCover ? "100%" : "78vw",
          opacity,
          mixBlendMode: blend,
          filter: `${baseFilter}${blur ? ` blur(${blur}px)` : ""}`,
          transform: isCover ? undefined : undefined,

          // mask agar nyatu
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />

      {/* subtle vignette layer biar nyatu sama bg (ringan) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 40%, transparent 55%, rgba(0,0,0,.55) 100%)",
          opacity: isCover ? 0.45 : 0.25,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}