"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motionPresets";

// Uppercase versions of the same roles used in TypingIdentity
const FRAGMENTS = [
  "ANALYST",
  "AI DEVELOPER",
  "DATA SCIENTIST",
  "FOUNDER",
  "POLYMATH",
  "LINGUIST",
  "ML ENGINEER",
];

export function IntroNameRitual({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [word, setWord] = useState("YAJAT");
  const [wordKey, setWordKey] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onComplete();
      return;
    }

    // Progress paced to reach 100% just before the 3700ms exit
    let prog = 0;
    const progTimer = setInterval(() => {
      const step = prog < 65 ? Math.random() * 1.2 + 0.4 : Math.random() * 0.6 + 0.15;
      prog = Math.min(prog + step, 100);
      setProgress(Math.round(prog));
      if (prog >= 100) clearInterval(progTimer);
    }, 25);

    // Phase 1 → MEHTA at 650ms
    const t1 = setTimeout(() => {
      setWord("MEHTA");
      setWordKey((k) => k + 1);
    }, 650);

    // Phase 2 → identity fragments at 2300ms (1 second later than before)
    let fi = 0;
    let fragTimer: ReturnType<typeof setInterval>;
    const t2 = setTimeout(() => {
      fragTimer = setInterval(() => {
        fi = (fi + 1) % FRAGMENTS.length;
        setWord(FRAGMENTS[fi]);
        setWordKey((k) => k + 1);
      }, 175);
    }, 2300);

    // Phase 3 → exit at 3700ms
    const t3 = setTimeout(() => {
      clearInterval(progTimer);
      clearInterval(fragTimer);
      setProgress(100);
      setVisible(false);
      setTimeout(onComplete, 500);
    }, 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(progTimer);
      clearInterval(fragTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070707] select-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={wordKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="text-[5rem] font-semibold tracking-[0.14em] text-[#f5d76e] md:text-[9rem]"
            >
              {word}
            </motion.p>
          </AnimatePresence>
          <p className="mt-5 font-mono text-xs tracking-[0.35em] text-zinc-600">
            {String(progress).padStart(3, "0")}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
