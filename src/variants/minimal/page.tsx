import Image from "next/image";
import type { ReactNode } from "react";
import {
  education,
  EMAIL,
  experience,
  flagship,
  hero,
  projects,
  RESUME_PDF,
  SOCIALS,
  stackIndex,
  type Highlight,
  type Link,
  type Project,
} from "@/content/site";
import { ArrowUpRightIcon, DownloadIcon } from "../shared/icons";
import { LocalTime } from "../shared/LocalTime";
import { ThemeToggle } from "./ThemeToggle";

const social = Object.fromEntries(SOCIALS.map((s) => [s.label, s.href]));
const bio = hero.bio.split(/(?<=\.)\s+/);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Aug 2023 – Present" → "2023.08 – now", the spec-sheet way of writing a range. */
const numericRange = (dates: string) =>
  dates.replace(/([A-Z][a-z]{2}) (\d{4})/g, (_, m: string, y: string) => `${y}.${String(MONTHS.indexOf(m) + 1).padStart(2, "0")}`).replace("Present", "now");

/** "3 yrs 3 mos" → "3y 3m" */
const shortDuration = (d: string) => d.replace(/(\d+) yrs?/, "$1y").replace(/(\d+) mos?/, "$1m");

function Section({ n, label, children }: { n: string; label: string; children: ReactNode }) {
  return (
    <section className="sec" aria-labelledby={`sec-${n}`}>
      <h2 className="sec__label" id={`sec-${n}`}>
        <span className="sec__num">{n}</span>
        {label}
      </h2>
      <div className="sec__body">{children}</div>
    </section>
  );
}

function TextLink({ href, children, download }: { href: string; children: ReactNode; download?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a className="tlink" href={href} {...(download ? { download: true } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {download ? <DownloadIcon /> : <ArrowUpRightIcon />}
    </a>
  );
}

function Highlights({ items }: { items: Highlight[] }) {
  return (
    <ul className="points">
      {items.map((item, i) => (
        <li key={i}>
          {typeof item === "object" ? (
            <>
              <strong>{item.lead}</strong> {item.text}
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
}

const linkLabel = (l: Link) => (l.label === "GitHub" ? "code" : l.label.toLowerCase());

function ProjectRow({ project }: { project: Project }) {
  return (
    // Links sit beside the <details>, not in its <summary>, so they stay links instead of toggling the row
    <div className="row row--links" style={{ "--links": project.links.length } as React.CSSProperties}>
      <details>
        <summary className="row__head">
          <span className="row__main">
            <span className="row__title">{project.name}</span>
            <span className="row__sub">{project.subtitle ?? project.summary}</span>
          </span>
          <span className="row__spacer" />
          <span className="row__toggle" aria-hidden="true" />
        </summary>
        <div className="row__body">
          <p>{project.summary}</p>
          <a className="shot" href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} screenshot at full size`}>
            <Image
              src={project.image.src}
              alt={`${project.name} screenshot`}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </a>
          <Highlights items={project.highlights} />
          <p className="tags">{project.stack.join(" / ")}</p>
        </div>
      </details>
      <span className="row__links">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${l.label}`}>
            {linkLabel(l)}
            <ArrowUpRightIcon />
          </a>
        ))}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="sheet">
      <header className="top">
        <div className="top__id">
          <h1 className="top__name">{hero.name}</h1>
          <p className="top__role">{hero.headline}</p>
          <p className="top__meta">
            <span className="status">{hero.status}</span>
            <span>
              {hero.location}
              <LocalTime className="clock" />
            </span>
          </p>
        </div>
        <ThemeToggle />
      </header>

      <nav className="links" aria-label="Contact">
        <TextLink href={`mailto:${EMAIL}`}>email</TextLink>
        <TextLink href={social.GitHub}>github</TextLink>
        <TextLink href={social.LinkedIn}>linkedin</TextLink>
        <TextLink href={social.X}>x</TextLink>
        <TextLink href={RESUME_PDF} download>
          resume
        </TextLink>
      </nav>

      <Section n="01" label="About">
        <div className="prose">
          {bio.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </div>
      </Section>

      <Section n="02" label="Work">
        {experience.map((exp) => (
          <details key={exp.company} className="row">
            <summary className="row__head">
              <span className="row__main">
                <span className="row__title">{exp.company}</span>
                <span className="row__sub">{exp.title}</span>
              </span>
              <span className="row__meta">
                <span>{numericRange(exp.dates)}</span>
                <span className="row__dim">
                  {shortDuration(exp.duration)} · {exp.location}
                </span>
              </span>
              <span className="row__toggle" aria-hidden="true" />
            </summary>
            <div className="row__body">
              <p>{exp.summary}</p>
              <Highlights items={exp.highlights} />
              {exp.stack?.length ? <p className="tags">{exp.stack.join(" / ")}</p> : null}
              {exp.link ? (
                <p>
                  <TextLink href={exp.link.href}>{exp.link.label.toLowerCase()}</TextLink>
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </Section>

      <Section n="03" label="Projects">
        {[flagship, ...projects].map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
        <p className="aside">
          more on <TextLink href={social.GitHub}>github</TextLink>
        </p>
      </Section>

      <Section n="04" label="Stack">
        <dl className="stack">
          {stackIndex.map((g) => (
            <div key={g.name}>
              <dt>{g.name}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section n="05" label="Education">
        {education.map((e) => (
          <div key={e.degree} className="row">
            <div className="row__head row__head--static">
              <span className="row__main">
                <span className="row__title">{e.degree}</span>
                <span className="row__sub">{e.school}</span>
              </span>
              <span className="row__meta">
                <span>{e.years.replace(/\s*–\s*/, " – ")}</span>
                <span className="row__dim">{e.result}</span>
              </span>
            </div>
          </div>
        ))}
      </Section>

      <footer className="foot">
        <span>
          © {new Date().getFullYear()} {hero.name}
        </span>
        <span>press d to switch theme</span>
      </footer>
    </main>
  );
}
