"use client";

import { useTheme } from "../shared/useTheme";

/** Boxy light/dark switch, also bound to the D key. The thumb is styled from <html data-theme>, so it is right before hydration. */
export function ThemeSwitch() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" role="switch" aria-checked={theme === "dark"} className="bx-switch" onClick={toggle}>
      <span className="bx-switch__track" aria-hidden="true">
        <span className="bx-switch__thumb" />
      </span>
      Dark mode
      <kbd className="bx-key" aria-hidden="true">
        D
      </kbd>
    </button>
  );
}
