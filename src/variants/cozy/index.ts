import type { Viewport } from "next";

export { default as Layout, metadata } from "./layout";
export { default as Page } from "./page";

// The original design never set a viewport; the root layout re-exports one from every variant
export const viewport: Viewport = {};
