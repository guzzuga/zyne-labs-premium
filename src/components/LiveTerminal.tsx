"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { snippets, colorMap, type SnippetLine } from "./LiveTerminalData";

interface RenderedLine {
  tokens: SnippetLine["tokens"];
}

export default function LiveTerminal() {
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [lang, setLang] = useState("python");
  const [phase, setPhase] = useState<"typing" | "holding" | "fading" | "pausing">("typing");
  const timeoutRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLines([]);
    setCurrentText("");
  }, []);

  // Blink cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  // Main typing loop
  useEffect(() => {
    let sceneIdx = 0;
    let lineIdx = 0;
    let charIdx = 0;
    let currentLine: SnippetLine | null = null;

    const schedule = (fn: () => void, ms: number) => {
      timeoutRef.current = window.setTimeout(fn, ms);
    };

    const typeChar = () => {
      if (!currentLine) return;
      if (charIdx < currentLine.fullText.length) {
        const nextChar = currentLine.fullText[charIdx];
        setCurrentText((prev) => prev + nextChar);
        charIdx++;
        schedule(typeChar, 35 + Math.random() * 30);
      } else {
        // Line complete - save it
        setLines((prev) => [...prev, { tokens: currentLine!.tokens }]);
        setCurrentText("");
        charIdx = 0;
        lineIdx++;
        if (lineIdx < snippets[sceneIdx].lines.length) {
          currentLine = snippets[sceneIdx].lines[lineIdx];
          schedule(typeChar, currentLine!.fullText === "" ? 120 : 500 + Math.random() * 700);
        } else {
          // All lines typed - hold for 10 seconds
          setPhase("holding");
          schedule(hold, 10000);
        }
      }
    };

    const hold = () => {
      // After holding, fade out character by character
      setPhase("fading");
      fadeOut();
    };

    const fadeOut = () => {
      // Remove lines from top one by one
      setLines((prev) => {
        if (prev.length === 0) {
          setPhase("pausing");
          schedule(nextScene, 2000);
          return prev;
        }
        const remaining = prev.slice(1);
        schedule(fadeOut, 80 + Math.random() * 60);
        return remaining;
      });
    };

    const nextScene = () => {
      sceneIdx++;
      if (sceneIdx >= snippets.length) sceneIdx = 0;
      const scene = snippets[sceneIdx];
      setLang(scene.lang);
      setPhase("typing");
      currentLine = scene.lines[0];
      lineIdx = 1;
      charIdx = 0;
      clear();
      schedule(typeChar, 600);
    };

    // Start first scene
    const first = snippets[0];
    setLang(first.lang);
    currentLine = first.lines[0];
    lineIdx = 1;
    charIdx = 0;
    schedule(typeChar, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex h-full flex-col overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          {snippets.map((s, i) => (
            <span
              key={s.lang}
              className={`text-[10px] font-mono transition-colors duration-500 ${
                s.lang === lang ? "text-white/80" : "text-white/20"
              }`}
            >
              {s.lang}
            </span>
          ))}
        </div>
        <div className="flex gap-1">
          {snippets.map((s, i) => (
            <div
              key={i}
              className={`h-1 w-3 rounded-full transition-all duration-500 ${
                s.lang === lang
                  ? "bg-primary shadow-[0_0_6px_rgba(99,102,241,0.5)]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Code area - VS Code style */}
      <div
        className="flex-1 overflow-hidden px-4 py-3"
        style={{
          background: "rgba(30,30,30,0.4)",
        }}
      >
        <div className="font-mono text-[11px] leading-relaxed md:text-[13px]">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none text-[10px] text-[#858585] mr-3 inline-block w-5 text-right shrink-0">
                {i + 1}
              </span>
              <span>
                {line.tokens.map((token, j) => (
                  <span
                    key={j}
                    style={{
                      color: colorMap[token.cls] || "#D4D4D4",
                      fontStyle: token.cls === "cm" ? "italic" : "normal",
                    }}
                  >
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}

          {/* Current typing line */}
          {currentText && (
            <div className="flex">
              <span className="select-none text-[10px] text-[#858585] mr-3 inline-block w-5 text-right shrink-0">
                {lines.length + 1}
              </span>
              <span className="text-[#D4D4D4]">
                {currentText}
                <span
                  className="inline-block h-3.5 w-[2px] ml-px align-middle"
                  style={{
                    backgroundColor: "#D4D4D4",
                    boxShadow: showCursor ? "0 0 4px rgba(212,212,212,0.5)" : "none",
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s",
                  }}
                />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[9px] text-muted/50 font-mono">
            {phase === "typing" ? "typing" : phase === "holding" ? "complete" : phase === "fading" ? "clearing" : "idle"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-muted/30 font-mono">utf-8</span>
          <span className="text-[9px] text-muted/30 font-mono">LF</span>
        </div>
      </div>
    </motion.div>
  );
}