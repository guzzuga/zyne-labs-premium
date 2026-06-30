"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const snippets = [
  {
    lang: "python",
    lines: [
      { t: "from zyne import Agent, Pipeline", c: "import" },
      { t: "from zyne.deploy import vercel", c: "import" },
      { t: "", c: "" },
      { t: "# Initialize AI agent", c: "comment" },
      { t: "agent = Agent(", c: "var" },
      { t: '    model="zyne-3.5",', c: "str" },
      { t: '    temperature=0.7,', c: "num" },
      { t: '    framework="nextjs"', c: "str" },
      { t: ")", c: "var" },
      { t: "", c: "" },
      { t: "pipeline = Pipeline([", c: "var" },
      { t: "    agent.chat(prompt='Build UI'),", c: "func" },
      { t: "    agent.design(style='premium'),", c: "func" },
      { t: "    agent.deploy(target='vercel')", c: "func" },
      { t: "])", c: "var" },
      { t: "", c: "" },
      { t: "result = pipeline.run()", c: "var" },
      { t: "print(f'Deployed: {result.url}')", c: "str" },
    ],
  },
  {
    lang: "typescript",
    lines: [
      { t: "import { createApp } from 'zyne';", c: "import" },
      { t: "import { AIAgent } from 'zyne/core';", c: "import" },
      { t: "", c: "" },
      { t: "const app = createApp({", c: "var" },
      { t: "  name: 'zyne-dashboard',", c: "str" },
      { t: "  framework: 'nextjs',", c: "str" },
      { t: "  ai: { enabled: true },", c: "kw" },
      { t: "});", c: "var" },
      { t: "", c: "" },
      { t: "const agent = new AIAgent({", c: "var" },
      { t: "  model: 'zyne-3.5',", c: "str" },
      { t: "  maxTokens: 4096,", c: "num" },
      { t: "});", c: "var" },
      { t: "", c: "" },
      { t: "await agent.deploy();", c: "func" },
      { t: "console.log('🚀 App is live!');", c: "str" },
    ],
  },
  {
    lang: "javascript",
    lines: [
      { t: "const { Agent, Pipeline } = require('zyne');", c: "import" },
      { t: "", c: "" },
      { t: "// Create workflow", c: "comment" },
      { t: "const workflow = new Pipeline([", c: "var" },
      { t: "  async (ctx) => {", c: "kw" },
      { t: "    const data = await ctx.fetch('/api');", c: "var" },
      { t: '    ctx.output("Fetched:", data);', c: "str" },
      { t: "  },", c: "kw" },
      { t: "  async (ctx) => {", c: "kw" },
      { t: "    const result = await ctx.ai.generate(", c: "var" },
      { t: '      "Analyze this data"', c: "str" },
      { t: "    );", c: "kw" },
      { t: "    return result;", c: "kw" },
      { t: "  }", c: "kw" },
      { t: "]);", c: "var" },
      { t: "", c: "" },
      { t: "workflow.run();", c: "func" },
    ],
  },
];

const colors: Record<string, string> = {
  import: "text-[#569CD6]",
  comment: "text-[#6A9955]",
  var: "text-[#9CDCFE]",
  str: "text-[#CE9178]",
  num: "text-[#B5CEA8]",
  func: "text-[#DCDCAA]",
  kw: "text-[#C586C0]",
};

export default function LiveTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [lineClasses, setLineClasses] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [lang, setLang] = useState("python");
  const timeoutRef = useRef<number | null>(null);

  const clearAll = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLines([]);
    setLineClasses([]);
    setCurrentLine("");
    setCurrentClass("");
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
      if (sceneIdx >= snippets.length) sceneIdx = 0;
      const scene = snippets[sceneIdx];
      setLang(scene.lang);
      clearAll();

      const type = () => {
        if (lineIdx >= scene.lines.length) {
          sceneIdx++;
          lineIdx = 0;
          charIdx = 0;
          timeoutRef.current = window.setTimeout(next, 3200);
          return;
        }

        const line = scene.lines[lineIdx];
        if (charIdx < line.t.length) {
          setCurrentLine((p) => p + line.t[charIdx]);
          setCurrentClass(line.c);
          charIdx++;
          timeoutRef.current = window.setTimeout(type, 18 + Math.random() * 28);
        } else {
          setLines((p) => [...p, currentLine]);
          setLineClasses((p) => [...p, currentClass]);
          setCurrentLine("");
          setCurrentClass("");
          charIdx = 0;
          lineIdx++;
          timeoutRef.current = window.setTimeout(
            type,
            line.t === "" ? 80 : 250
          );
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

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted/60 font-mono">{lang}</span>
        </div>
        <div className="flex gap-1.5">
          {snippets.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-3 rounded-full transition-colors duration-300 ${
                i === snippets.findIndex((s) => s.lang === lang)
                  ? "bg-primary shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Code area */}
      <div className="flex-1 overflow-hidden px-4 py-3">
        <div className="font-mono text-[11px] leading-relaxed md:text-[13px]">
          {lines.map((l, i) => {
            const cls = colors[lineClasses[i]] || "text-[#D4D4D4]";
            return (
              <div key={i} className={cls}>
                <span className="select-none text-[9px] text-[#4E4E4E] mr-3 inline-block w-5 text-right">
                  {i + 1}
                </span>
                {l}
              </div>
            );
          })}
          {currentLine && (
            <div className={colors[currentClass] || "text-[#D4D4D4]"}>
              <span className="select-none text-[9px] text-[#4E4E4E] mr-3 inline-block w-5 text-right">
                {lines.length + 1}
              </span>
              {currentLine}
              <span
                className="inline-block h-3.5 w-[2px] ml-px align-middle"
                style={{
                  backgroundColor: "#569CD6",
                  boxShadow: showCursor
                    ? "0 0 6px rgba(86,156,214,0.7)"
                    : "none",
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