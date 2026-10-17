"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

function persist(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private windows can refuse storage; the switch still works for this visit
  }
}

/**
 * The page's theme and a toggle, also bound to the D key. Style the toggle from <html data-theme>,
 * which themeScript sets before paint, so it is right even before hydration.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(current());
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "d" || e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const target = e.target as HTMLElement;
      if (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const next = current() === "dark" ? "light" : "dark";
      persist(next);
      setTheme(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = () => {
    const next = current() === "dark" ? "light" : "dark";
    persist(next);
    setTheme(next);
  };

  return { theme, toggle };
}
