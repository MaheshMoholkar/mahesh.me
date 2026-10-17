# maheshmoholkar.in

Mahesh Moholkar's portfolio: one content file, three designs to choose from. Built with Next.js 15 (App Router).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build of the active variant
npm run lint
```

## Variants

Every variant reads the same content from `src/content/site.ts`, so an edit there updates all of them. The site builds with one variant at a time:

| Variant   | Folder                  | Look |
| --------- | ----------------------- | ---- |
| `boxy`    | `src/variants/boxy`     | 2px ink borders, four tones (blue, mint, pink, yellow), mono labels, rows that open into modals; the whole page fits one desktop screen. Light and dark. |
| `cozy`    | `src/variants/cozy`     | Warm paper, Fraunces display type, rounded cards, a timeline, hard offset shadows on buttons; the long-form page with education, certificates and side projects. Light and dark. |
| `minimal` | `src/variants/minimal`  | One narrow column, small type, a grey hierarchy, rows that expand in place. Light and dark. |

```bash
npm run variant            # list variants, * marks the active one
npm run variant cozy       # build with cozy from now on (restart `npm run dev` afterwards)
```

The switch rewrites the one export in `src/site.config.ts`. It is a re-export rather than a runtime setting so that only the chosen variant's code, fonts and global CSS end up in the build.

To compare them, build all three into one page that shows them side by side (desktop or phone width, light or dark):

```bash
npm run preview            # about two minutes; writes out/preview/
npx serve out/preview
```

Shared pieces live in `src/variants/shared`: page metadata, the light/dark script and hook (also bound to the <kbd>D</kbd> key), Pune's local clock and the icon set.

## Content

- `src/content/site.ts`: hero, experience, projects, side projects, skills, education, certificates and the page title and description.
- `public/`: screenshots, logos, the portrait and `Mahesh-Moholkar-Resume.pdf`.
- `resume/`: LaTeX sources for the resume. Rebuild the PDF and replace the one in `public/` when it changes.
