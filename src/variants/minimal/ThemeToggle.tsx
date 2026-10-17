"use client";

import { useTheme } from "../shared/useTheme";

/**
 * "light / dark" as text, the current one in full ink. Also bound to the D key. Which word is lit is styled
 * from <html data-theme>, which the theme script sets before paint, so it is right even before hydration.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button type="button" role="switch" aria-checked={theme === "dark"} aria-label="Dark mode" title="Switch theme (D)" className="theme__switch mode" onClick={toggle}>
      <span className="mode__light">light</span>
      <span aria-hidden="true"> / </span>
      <span className="mode__dark">dark</span>
    </button>
  );
}
