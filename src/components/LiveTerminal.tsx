"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const codes = [
  {
    lang: "python",
    lines: [
      { t: "from zyne import Agent, Pipeline", c: "kw" },
      { t: "", c: "" },
      { t: "# Initialize AI agent", c: "cm" },
      { t: "agent = Agent(model=\"zyne-v3\")", c: "var" },
      { t: "", c: "" },
      { t: "pipeline = Pipeline([", c: "kw" },
      { t: '    agent.chat(prompt="Build a website")', c: "str" },
      { t: "    agent.design(style=\"premium\")", c: "var" },
      { t: "    agent.deploy(target=\"vercel\")", c: "kw" },
      { t: "])", c: "" },
      { t: "", c: "" },
      { t: "result = pipeline.run()", c: "var" },
      { t: 'print(f"✅ Deployed: {result.url}")', c: "str" },
    ],
  },
  {
    lang: "javascript",
    lines: [
      { t: "import { createApp } from 'zyne';", c: "kw" },
      { t: "", c: "" },
      { t: "const app = createApp({", c: "var" },
      { t: '  name: "my-ai-app"', c: "str" },
      { t: '  framework: "nextjs"', c: "str" },
      { t: "  ai: { enabled: true },", c: "kw" },
      { t: "});", c: "" },
      { t: "", c: "" },
      { t: "app.ai.addCapability('vision');", c: "var" },
      { t: "app.ai.addCapability('voice');", c: "var" },
      { t: "app.ai.addCapability('code');", c: "var" },
      { t: "", c: "" },
      { t: "await app.deploy();", c: "kw" },
      { t: 'console.log("🚀 App is live!");', c: "str" },
    ],
  },
  {
    lang: "typescript",
    lines: [
      { t: "interface AIAgent {", c: "kw" },
      { t: '  model: string;', c: "var" },
      { t: '  capabilities: string[];', c: "var" },
      { t: "}", c: "" },
      { t: "", c: "" },
      { t: "const agent: AIAgent = {", c: "var" },
      { t: '  model: "zyne-3.5",', c: "str" },
      { t: '  capabilities: ["chat", "code", "vision"]', c: "var" },
      { t: "};", c: "" },
      { t: "", c: "" },
      { t: "agent.capabilities.forEach(c =>", c: "kw" },
      { t: "  console.log(`Loaded: ${c}`)", c: "var" },
      { t: ");", c: "" },
    ],
  },
];

const colors: Record<string, string> = {
  kw: "text-purple-400",
  cm: "text-gray-500",
  var: "text-cyan-300",
  str: "text-green-400",
};

export default function LiveTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [lang, setLang] = useState("python");
  const timeoutRef = useRef<number | null>(null);

  const clearAll = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLines([]);
    setCurrentLine("");
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let sceneIdx = 0;
    let lineIdx = 0;
    let charIdx = 0;

    const next = () => {
      if (sceneIdx >= codes.length) sceneIdx = 0;
      const scene = codes[sceneIdx];
      setLang(scene.lang);
      clearAll();

      const type = () => {
        if (lineIdx >= scene.lines.length) {
          sceneIdx++;
          lineIdx = 0;
          charIdx = 0;
          timeoutRef.current = window.setTimeout(next, 2800);
          return;
        }

        const line = scene.lines[lineIdx];
        if (charIdx < line.t.length) {
          setCurrentLine((p) => p + line.t[charIdx]);
          charIdx++;
          timeoutRef.current = window.setTimeout(type, 25 + Math.random() * 30);
        } else {
          setLines((p) => [...p, currentLine]);
          setCurrentLine("");
          charIdx = 0;
          lineIdx++;
          timeoutRef.current = window.setTimeout(type, line.t === "" ? 100 : 300);
        }
      };

      type();
    };

    timeoutRef.current = window.setTimeout(next, 800);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearAll]);

  const getLineClass = (text: string) => {
    if (text.startsWith("#") || text.startsWith("//")) return "cm";
    if (text.startsWith('"') || text.startsWith("'") || text.startsWith("`")) return "str";
    if (text.startsWith("from ") || text.startsWith("import ") || text.startsWith("interface ") || text.startsWith("const ") || text.startsWith("await ")) return "kw";
    return "var";
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Language badge */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
        <span className="text-[10px] text-muted/60 font-mono">{lang}</span>
        <div className="flex gap-1">
          {codes.map((_, i) => (
            <div key={i} className={`h-1 w-4 rounded-full transition-colors ${i === codes.findIndex(c => c.lang === lang) ? 'bg-primary' : 'bg-white/10'}`} />
          ))}
        </div>
      </div>

      {/* Code area */}
      <div className="flex-1 overflow-hidden px-4 py-3">
        <div className="font-mono text-[11px] leading-relaxed md:text-[13px]">
          {lines.map((l, i) => {
            const cls = getLineClass(l);
            return (
              <div key={i} className={colors[cls] || "text-white/80"}>
                <span className="select-none text-[9px] text-muted/30 mr-3 inline-block w-4 text-right">
                  {i + 1}
                </span>
                {l}
              </div>
            );
          })}
          {currentLine && (
            <div className={colors[getLineClass(currentLine)] || "text-white/80"}>
              <span className="select-none text-[9px] text-muted/30 mr-3 inline-block w-4 text-right">
                {lines.length + 1}
              </span>
              {currentLine}
              <span
                className="inline-block h-3.5 w-[2px] ml-0.5 align-middle"
                style={{
                  backgroundColor: "#6366F1",
                  boxShadow: showCursor ? "0 0 8px rgba(99,102,241,0.8)" : "none",
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}