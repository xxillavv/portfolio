"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

// Lights up the background grid around the pointer.
// Only on devices with a precise pointer, and never with reduced motion.
export const Cursor = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    if (!finePointer || reducedMotion || !glow) return;

    const onMove = (e: PointerEvent) => {
      glow.style.setProperty("--x", `${e.clientX}px`);
      glow.style.setProperty("--y", `${e.clientY}px`);
      glow.dataset.active = "true";
    };
    const onLeave = () => (glow.dataset.active = "false");

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
};
