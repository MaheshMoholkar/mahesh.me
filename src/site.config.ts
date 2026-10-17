/**
 * Which design the site builds with. Switch with `npm run variant <name>` (or edit the export), then build and commit:
 *   "./variants/boxy"     boxy cards, 2px ink borders, four brand tones, one screen on desktop; light and dark
 *   "./variants/cozy"     warm paper, a soft serif, rounded cards and a timeline; the long-form page; light and dark
 *   "./variants/minimal"  single narrow column, small type, a grey hierarchy; light and dark
 *
 * Every variant reads the same content from src/content/site.ts.
 *
 * It is a re-export rather than a string setting on purpose: only the chosen variant's code, fonts and
 * global CSS end up in the build, so the variants' resets and :root tokens never meet.
 */
export * from "./variants/minimal";
