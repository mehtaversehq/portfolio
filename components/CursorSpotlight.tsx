"use client";

import { useEffect, useRef, useState } from "react";

export function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const wideViewport = window.matchMedia("(min-width: 768px)").matches;
    if (reduceMotion || !finePointer || !wideViewport) return;

    setEnabled(true);

    function updateSpotlight() {
      frameRef.current = null;
      const spotlight = spotlightRef.current;
      if (!spotlight) return;

      spotlight.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
    }

    function handlePointerMove(event: PointerEvent) {
      positionRef.current = { x: event.clientX, y: event.clientY };
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateSpotlight);
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-56 w-56 rounded-full blur-2xl will-change-transform"
      style={{
        background: "color-mix(in srgb, var(--accent) 10%, transparent)",
        transform: "translate3d(-200px, -200px, 0) translate(-50%, -50%)",
      }}
    />
  );
}
