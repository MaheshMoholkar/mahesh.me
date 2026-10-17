"use client";

import { useTheme, type Theme } from "../shared/useTheme";

const current = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/**
 * "light / dark" as two words; clicking one switches to it. The D key still toggles. Which word is lit is styled
 * from <html data-theme>, which the theme script sets before paint, so it is right even before hydration.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const pick = (t: Theme) => () => {
    if (current() !== t) toggle();
  };

  return (
    <div className="mode" role="group" aria-label="Theme" title="Switch theme (D)">
      <button type="button" className="mode__light" aria-pressed={theme === "light"} onClick={pick("light")}>
        light
      </button>
      <span aria-hidden="true"> / </span>
      <button type="button" className="mode__dark" aria-pressed={theme === "dark"} onClick={pick("dark")}>
        dark
      </button>
    </div>
  );
}
