// Show or switch the design the site builds with.
//   npm run variant            list the variants and mark the active one
//   npm run variant minimal    build with src/variants/minimal from now on
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const configPath = join(root, "src", "site.config.ts");
const variantsDir = join(root, "src", "variants");
const EXPORT = /^export \* from "\.\/variants\/([\w-]+)";$/m;

const variants = readdirSync(variantsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(variantsDir, d.name, "index.ts")))
  .map((d) => d.name)
  .sort();

const config = readFileSync(configPath, "utf8");
const active = EXPORT.exec(config)?.[1];
if (!active) {
  console.error(`No "export * from "./variants/<name>";" line in src/site.config.ts`);
  process.exit(1);
}

const wanted = process.argv[2];
if (!wanted) {
  for (const v of variants) console.log(`${v === active ? "*" : " "} ${v}`);
  process.exit(0);
}
if (!variants.includes(wanted)) {
  console.error(`Unknown variant "${wanted}". Choose one of: ${variants.join(", ")}`);
  process.exit(1);
}

writeFileSync(configPath, config.replace(EXPORT, `export * from "./variants/${wanted}";`));
console.log(wanted === active ? `Already on ${wanted}.` : `Switched ${active} → ${wanted}. Restart \`npm run dev\` so the old variant's global CSS is dropped.`);
