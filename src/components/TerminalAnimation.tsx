"use client";

import { useEffect, useRef, useState } from "react";

const scenes = [
  [
    { text: "$ npm create zyne-app", color: "text-green-400" },
    { text: "", color: "" },
    { text: "✔ Installing dependencies...", color: "text-blue-300" },
    { text: "✔ Building components...", color: "text-blue-300" },
    { text: "✔ Optimizing assets...", color: "text-blue-300" },
    { text: "✔ Deploying to Cloud...", color: "text-purple-300" },
    { text: "✔ AI Agent Connected", color: "text-yellow-300" },
    { text: "✔ Website Live", color: "text-green-400" },
  ],
  [
    { text: "const agent = new AI();", color: "text-blue-300" },
    { text: "agent.buildWebsite();", color: "text-purple-300" },
    { text: "agent.deploy();", color: "text-yellow-300" },
    { text: 'console.log("Deployment Success");', color: "text-green-400" },
  ],
  [
    { text: "from zyne import Agent", color: "text-cyan-300" },
    { text: "", color: "" },
    { text: "ai = Agent()", color: "text-blue-300" },
    { text: "ai.generate()", color: "text-purple-300" },
    { text: "ai.deploy()", color: "text-yellow-300" },
  ],
];

const TYPE_SPEED = 45;
const LINE_PAUSE = 350;
const SCENE_PAUSE = 2500;

export default function TerminalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let sceneIdx = 0;
    let lineIdx = 0;
    let charIdx = 0;
    let timeout: number;

    const blink = setInterval(() => setShowCursor((p) => !p), 530);

    const typeChar = () => {
      const scene = scenes[sceneIdx];
      const line = scene[lineIdx];
      if (!line) return;

      if (charIdx < line.text.length) {
        const ch = line.text[charIdx];
        setCurrentLine((prev) => prev + ch);
        charIdx++;
        timeout = window.setTimeout(typeChar, TYPE_SPEED + Math.random() * 30);
      } else {
        setLines((prev) => [...prev, currentLine]);
        setCurrentLine("");
        charIdx = 0;
        lineIdx++;
        if (lineIdx < scenes[sceneIdx].length) {
          timeout = window.setTimeout(typeChar, LINE_PAUSE);
        } else {
          timeout = window.setTimeout(nextScene, SCENE_PAUSE);
        }
      }
    };

    const nextScene = () => {
      setLines([]);
      setCurrentLine("");
      charIdx = 0;
      lineIdx = 0;
      sceneIdx = (sceneIdx + 1) % scenes.length;
      timeout = window.setTimeout(typeChar, 600);
    };

    typeChar();

    return () => {
      clearInterval(blink);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="h-full overflow-hidden">
      <div className="font-mono text-xs leading-relaxed md:text-sm">
        {lines.map((l, i) => (
          <div key={i} className="text-white/80">
            {l.startsWith("$") ? (
              <span className="text-green-400">{l}</span>
            ) : l.startsWith("✔") ? (
              <span>{l}</span>
            ) : l.startsWith("from") || l.startsWith("ai") ? (
              <span className="text-cyan-300">{l}</span>
            ) : (
              <span className="text-white/80">{l}</span>
            )}
          </div>
        ))}
        {currentLine && (
          <div className="text-white/90">
            {currentLine}
            <span
              className={`inline-block h-4 w-[2px] ml-0.5 bg-primary ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
              style={{
                boxShadow: showCursor
                  ? "0 0 8px rgba(99,102,241,0.8)"
                  : "none",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}