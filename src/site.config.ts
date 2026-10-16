/**
 * Which design the site builds with. Point the export at another variant, then build and commit:
 *   "./variants/gumroad"  boxy cards, 2px ink borders, four brand tones
 *   "./variants/cozy"     the original single-page design
 *   "./variants/minimal"  single narrow column, small type, light/dark switch
 *
 * It is a re-export rather than a string setting on purpose: only the chosen variant's code, fonts and
 * global CSS end up in the build, so the variants' resets and :root tokens never meet.
 */
export * from "./variants/gumroad";
