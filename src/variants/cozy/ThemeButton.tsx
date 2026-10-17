"use client";

import { MoonIcon, SunIcon } from "../shared/icons";
import { useTheme } from "../shared/useTheme";

/** Round light/dark button, also bound to the D key. Which icon shows is styled from <html data-theme>, so it is right before hydration. */
export function ThemeButton() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" className="theme-btn" onClick={toggle} aria-label="Dark mode" aria-pressed={theme === "dark"} title="Dark mode (D)">
      <MoonIcon className="theme-btn__moon" />
      <SunIcon className="theme-btn__sun" />
    </button>
  );
}
