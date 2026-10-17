"use client";

import { useTheme } from "../shared/useTheme";

/**
 * Light/dark switch, also bound to the D key. The thumb's position is styled from <html data-theme>,
 * which the script in layout.tsx sets before paint, so it is right even before hydration.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();

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
