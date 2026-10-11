"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds `is-visible` to every `.reveal` block once it scrolls into view.
// Blocks entering together get a small stagger. Re-runs on client navigation.
export const RevealObserver = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains("reveal-ready")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let index = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${index++ * 80}ms`);
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

// Runs before first paint so blocks below the fold start hidden instead of flashing
export const revealInitScript = `(function(){try{if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready')}}catch(e){}})();`;
