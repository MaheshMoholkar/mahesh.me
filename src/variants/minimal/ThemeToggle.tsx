"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

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
 * Light/dark switch, also bound to the D key. The thumb's position is styled from <html data-theme>,
 * which the script in layout.tsx sets before paint, so it is right even before hydration.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(current());
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "d" || e.metaKey || e.ctrlKey || e.altKey) return;
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

  return (
    <div className="theme">
      <kbd className="theme__key" aria-hidden="true">
        D
      </kbd>
      <button type="button" role="switch" aria-checked={theme === "dark"} aria-label="Dark mode" className="theme__switch" onClick={toggle}>
        <span className="theme__thumb" />
      </button>
    </div>
  );
}
