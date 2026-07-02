/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        "bg-secondary": "#0F172A",
        surface: "#111827",
        primary: "#6366F1",
        "primary-dark": "#4F46E5",
        "purple-glow": "#8B5CF6",
        cyan: "#06B6D4",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        ink: "#FFFFFF",
        muted: "#94A3B8",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tight2: "-0.03em",
        tighter: "-0.04em",
      },
      animation: {
        "aurora": "aurora 15s ease-in-out infinite",
        "mesh": "mesh 20s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-move": "gradientMove 6s ease infinite",
        "gradient-shift": "gradient-xy 4s ease infinite",
        "gradient-xy": "gradient-xy 4s ease infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-delayed": "float-slow 7s ease-in-out 1s infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.4" },
          "25%": { transform: "translate(5%, -5%) scale(1.05)", opacity: "0.5" },
          "50%": { transform: "translate(-3%, 3%) scale(0.95)", opacity: "0.35" },
          "75%": { transform: "translate(-5%, -2%) scale(1.02)", opacity: "0.45" },
        },
        mesh: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -20px) rotate(2deg)" },
          "66%": { transform: "translate(-20px, 15px) rotate(-1deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(60px)" },
          "50%": { opacity: "0.7", filter: "blur(80px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
