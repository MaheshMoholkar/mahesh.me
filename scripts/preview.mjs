// Build every variant and write a page that shows them side by side.
//   npm run preview            writes out/preview/ (serve it with `npx serve out/preview`)
//
// Each variant is built with `next build` into .next-preview/<name>, so the regular .next build is left alone.
// Its prerendered HTML is kept, Next's runtime scripts are dropped and a small script stands in for the
// interactive parts (theme switches, Boxy's modals, Cozy's "Show more", the clock). src/site.config.ts is
// pointed at each variant in turn; it and tsconfig.json are restored afterwards.
import { execFileSync, spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const configPath = join(root, "src", "site.config.ts");
const variantsDir = join(root, "src", "variants");
const out = join(root, "out", "preview");
const EXPORT = /^export \* from "\.\/variants\/([\w-]+)";$/m;

// What the comparison page says about each variant; any other variant folder gets its name only
const ABOUT = {
  boxy: "Square boxes in 2px ink, a tone per box, details in modals. Fits one desktop screen.",
  minimal: "A spec sheet: numbered labels in a left column, mono figures, rows that expand in place.",
  cozy: "Warm paper, a soft serif, rounded cards and a timeline. The long-form page.",
};
const ORDER = ["boxy", "minimal", "cozy"];

const variants = readdirSync(variantsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(variantsDir, d.name, "index.ts")))
  .map((d) => d.name)
  .sort((a, b) => (ORDER.indexOf(a) + 1 || 99) - (ORDER.indexOf(b) + 1 || 99) || a.localeCompare(b));

const config = readFileSync(configPath, "utf8");
// next build adds its distDir's types folder to tsconfig.json; put the file back afterwards
const tsconfigPath = join(root, "tsconfig.json");
const tsconfig = readFileSync(tsconfigPath, "utf8");
const active = EXPORT.exec(config)?.[1];
if (!active) throw new Error(`No "export * from "./variants/<name>";" line in src/site.config.ts`);

let ref = "";
try {
  const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  const sha = execFileSync("git", ["rev-parse", "--short", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
  const dirty = execFileSync("git", ["status", "--porcelain", "--", "src", "public"], { cwd: root, encoding: "utf8" }).trim();
  ref = `${branch} @ ${sha}${dirty ? " + local changes" : ""}`;
} catch {
  // Not a git checkout: the page just leaves the line out
}

// Stands in for the theme script: the comparison page sets the theme on the frame, so read that first
const THEME_INIT = `<script>(function(){var t=null;try{t=window.frameElement&&window.frameElement.getAttribute("data-theme")}catch(e){}if(t!=="light"&&t!=="dark"){try{t=localStorage.getItem("theme")}catch(e){}}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})()</script>`;

// The interactive parts, without React: theme switches and the D key, Boxy's modal rows, Cozy's "Show more", the clock
const BEHAVIOUR = `<script>(function(){
var root=document.documentElement;
function sync(){var dark=root.dataset.theme==="dark";document.querySelectorAll('[role="switch"]').forEach(function(b){b.setAttribute("aria-checked",String(dark))});document.querySelectorAll(".theme-btn").forEach(function(b){b.setAttribute("aria-pressed",String(dark))})}
window.__previewSync=sync;
function flip(){root.dataset.theme=root.dataset.theme==="dark"?"light":"dark";sync()}
document.querySelectorAll(".more-btn").forEach(function(b){b.dataset.more=b.textContent});
document.addEventListener("click",function(e){
var t=e.target;
if(t.closest('.bx-switch,.theme__switch,.theme-btn')){flip();return}
var open=t.closest(".row__open");if(open){var d=open.closest(".row").querySelector("dialog");if(d){d.showModal();var c=d.querySelector(".modal__close");if(c)c.focus()}return}
var close=t.closest(".modal__close");if(close){close.closest("dialog").close();return}
if(t.tagName==="DIALOG"){t.close();return}
var more=t.closest(".more-btn");if(more){var list=more.previousElementSibling,isOpen=more.getAttribute("aria-expanded")==="true";if(isOpen)list.setAttribute("data-collapsed","");else list.removeAttribute("data-collapsed");more.setAttribute("aria-expanded",String(!isOpen));more.textContent=isOpen?more.dataset.more:"Show less"}
});
window.addEventListener("keydown",function(e){if(e.key.toLowerCase()!=="d"||e.metaKey||e.ctrlKey||e.altKey||e.repeat)return;var g=e.target;if(g.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(g.tagName))return;flip()});
var clock=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",hour:"numeric",minute:"2-digit"});
function tick(){document.querySelectorAll("time.foot__time,time.clock").forEach(function(el){el.textContent=clock.format(new Date())})}
tick();setInterval(tick,30000);sync();
})()</script>`;

function build(variant) {
  writeFileSync(configPath, config.replace(EXPORT, `export * from "./variants/${variant}";`));
  const distDir = join(".next-preview", variant);
  console.log(`Building ${variant}…`);
  const run = spawnSync("npx", ["next", "build"], { cwd: root, env: { ...process.env, NEXT_DIST_DIR: distDir }, encoding: "utf8" });
  if (run.status !== 0) {
    process.stderr.write(run.stdout + run.stderr);
    throw new Error(`next build failed for ${variant}`);
  }
  return join(root, distDir);
}

const fonts = new Set();

function flatten(variant, dist) {
  let html = readFileSync(join(dist, "server", "app", "index.html"), "utf8");

  // Inline Next's stylesheets; their fonts are copied next to the page
  const css = [];
  html = html.replace(/<link rel="stylesheet" href="\/_next\/static\/css\/([^"]+)"[^>]*\/?>/g, (m, file) => {
    css.push(readFileSync(join(dist, "static", "css", file), "utf8"));
    return "";
  });
  const style = css
    .join("\n")
    .replace(/url\((?:\.\.\/media\/|\/_next\/static\/media\/)([^)]+)\)/g, (m, file) => {
      fonts.add(join(dist, "static", "media", file));
      return `url(fonts/${file})`;
    })
    .replace(/<\/style/gi, "<\\/style");

  html = html
    // Next's runtime: flight data, chunks, preloads
    .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/g, (m, body) => (body.includes('localStorage.getItem("theme")') ? THEME_INIT : ""))
    .replace(/<link rel="(?:preload|modulepreload)"[^>]*\/?>/g, "")
    // Images and files from public/
    .replace(/\s(?:srcSet|srcset|sizes)="[^"]*"/g, "")
    .replace(/src="\/_next\/image\?url=([^&"]+)[^"]*"/g, (m, u) => `src="assets${decodeURIComponent(u)}"`)
    .replace(/(src|href)="\/(?!\/)([^"#?]+\.(?:png|jpe?g|svg|webp|pdf|ico))"/g, '$1="assets/$2"')
    .replace("</head>", () => `<style>${style}</style></head>`)
    .replace("</body>", () => `${BEHAVIOUR}</body>`);

  const stray = html.match(/(?:src|href)="\/_next\/[^"]*"/g);
  if (stray) throw new Error(`${variant}: unhandled Next.js asset ${stray[0]}`);
  return html;
}

const pages = [];
try {
  for (const v of variants) pages.push({ key: v, name: v[0].toUpperCase() + v.slice(1), about: ABOUT[v] ?? "", html: flatten(v, build(v)) });
} finally {
  writeFileSync(configPath, config);
  writeFileSync(tsconfigPath, tsconfig);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "fonts"), { recursive: true });
cpSync(join(root, "public"), join(out, "assets"), { recursive: true });
for (const f of fonts) cpSync(f, join(out, "fonts", f.split(/[\\/]/).pop()));

// The shell is one file in two parts: head material, then the page, split at the <!-- page --> marker
const shell = readFileSync(join(import.meta.dirname, "preview", "shell.html"), "utf8");
const data = JSON.stringify({ active, ref, variants: pages }).replace(/</g, "\\u003c");
const filled = shell.replace("/*__DATA__*/null", () => data);
const [head, body] = filled.split("<!-- page -->");
writeFileSync(
  join(out, "index.html"),
  `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head.trim()}\n</head>\n<body>\n${body.trim()}\n</body>\n</html>\n`
);
// The same page without the document wrapper, for hosts that add their own
writeFileSync(join(out, "page.html"), `${head.trim()}\n${body.trim()}\n`);

console.log(`\nWrote out/preview/ (${pages.map((p) => p.key).join(", ")}). Open it with: npx serve out/preview`);
