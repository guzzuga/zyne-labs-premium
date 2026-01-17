"use client";

import { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/Icons";

function useCountUp(to: number, duration = 900) {
  const [v, setV] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    const step = (t: number) => {
      if (!start.current) start.current = t;
      const p = Math.min((t - start.current) / duration, 1);
      setV(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to, duration]);

  return v;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24">
      <path
        fill={filled ? "#FACC15" : "rgba(250,204,21,.35)"}
        d="M12 17.27 18.18 21l-1.64-7.03L22 
           9.24l-7.19-.61L12 2 9.19 
           8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

export default function TrustMetricsInline() {
  const clients = useCountUp(25);
  const projects = useCountUp(40);

  return (
    <div className="mt-4 grid grid-cols-3 gap-2 max-w-sm">
      <Mini
        icon={<Icons.Sparkles className="h-3.5 w-3.5 text-white/80" />}
        value={`${clients}+`}
        label="Clients"
      />

      <Mini
        icon={<Icons.Code2 className="h-3.5 w-3.5 text-white/80" />}
        value={`${projects}+`}
        label="Projects"
      />

      <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-black/30 px-3 py-2">
        <div className="flex items-center gap-1">
          <Icons.ShieldCheck className="h-3.5 w-3.5 text-white/80" />
          <span className="text-sm font-semibold">4.9</span>
        </div>

        <div className="mt-0.5 flex gap-[1px]">
          <Star filled />
          <Star filled />
          <Star filled />
          <Star filled />
          <Star filled={false} />
        </div>
      </div>
    </div>
  );
}

function Mini({
  icon,
  value,
  label,
}: {
  icon: JSX.Element;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-black/30 px-3 py-2">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <span className="text-[10px] leading-none text-white/55">
        {label}
      </span>
    </div>
  );
}