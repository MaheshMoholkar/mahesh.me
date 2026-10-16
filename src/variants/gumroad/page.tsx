import Image from "next/image";
import type { ReactNode } from "react";
import { DetailRow } from "./DetailRow";
import { TechIcon } from "./TechIcon";
import {
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


type Tone = "blue" | "mint" | "pink" | "yellow";

/** A box whose header strip, row "+" hover and modal header all take the box's tone. */
function Panel({ title, end, tone, area, children }: { title: string; end?: string; tone: Tone; area: string; children: ReactNode }) {
  return (
    <section className={`bx-box panel tone--${tone} ${area}`}>
      <div className="bx-strip bx-strip--tone">
        <h2>{title}</h2>
        {end ? <span className="bx-strip__end">{end}</span> : null}
      </div>
      {children}
    </section>
  );
}

function ExtLink({ label, href, download }: Link & { download?: boolean }) {
  return (
    <a className="bx-link" href={href} {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}>
      {label}
      <span className="bx-glyph" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

/** A highlight's bold lead, minus its trailing colon, for use as a heading or label. */
const leadLabel = (lead: string) => lead.replace(/:\s*$/, "");

function Bullets({ items }: { items: Highlight[] }) {
  return (
    <ul className="bullets">
      {items.map((item, i) =>
        typeof item === "object" ? (
          <li key={i}>
            <strong>{leadLabel(item.lead)}</strong> {item.text}
          </li>
        ) : (
          <li key={i}>{item}</li>
        )
      )}
    </ul>
  );
}

function Chips({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="chips">
      {items.map((t) => (
        <span key={t} className="chip">
          <TechIcon name={t} />
          {t}
        </span>
      ))}
    </div>
  );
}

/** Vertical icon + name list, for the narrow facts sidebar. */
function TechList({ items }: { items: string[] }) {
  return (
    <ul className="tech-list">
      {items.map((t) => (
        <li key={t}>
          <TechIcon name={t} />
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const links = project.links.map((l) => <ExtLink key={l.href} {...l} />);
  return (
    <DetailRow title={project.name} sub={project.subtitle} desc={project.summary} modalSub={project.subtitle} wide aside={links} actions={links}>
      <div className="project">
        <div className="project__media">
          <div className="project__pin">
            {/* Screenshots are served as-is: the optimizer's resize + recompression blurs small UI text */}
            <a href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} screenshot at full size`}>
              <Image
                className="project__shot"
                src={project.image.src}
                alt={`${project.name} screenshot`}
                width={project.image.width}
                height={project.image.height}
                unoptimized
              />
            </a>
          </div>
        </div>
        <div className="project__text">
          <p className="modal__summary">{project.summary}</p>
          {/* Highlights with a bold lead get it as their label; plain ones are numbered, unless there is only one */}
          <ol className="ledger">
            {project.highlights.map((item, i) => (
              <li key={i}>
                {typeof item === "object" ? (
                  <span className="modal__label">{leadLabel(item.lead)}</span>
                ) : project.highlights.length > 1 ? (
                  <span className="modal__label">{String(i + 1).padStart(2, "0")}</span>
                ) : null}
                <p>{typeof item === "object" ? item.text : item}</p>
              </li>
            ))}
          </ol>
          <div className="project__stack">
            <span className="modal__label">Stack</span>
            <Chips items={project.stack} />
          </div>
        </div>
      </div>
    </DetailRow>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="bx-box panel tone--yellow area-intro">
        <div className="bx-strip bx-strip--tone">
          <span>● {hero.status}</span>
          <span className="bx-strip__end">{hero.workMode}</span>
        </div>
        <div className="intro__body">
          <h1 className="intro__name bx-wide">{hero.name}</h1>
          <p className="intro__headline">{hero.headline}</p>
          <p className="intro__bio">{hero.bio}</p>
        </div>
        {/* Contact as tiles that run edge to edge: two wide actions, then the socials */}
        <nav className="tiles" aria-label="Contact">
          <a className="tile tile--wide tile--tone" href={`mailto:${EMAIL}`}>
            Get in touch
            <span className="bx-glyph" aria-hidden="true">
              →
            </span>
          </a>
          <a className="tile tile--wide" href={RESUME_PDF} download>
            Resume
            <span className="bx-glyph" aria-hidden="true">
              ↓
            </span>
          </a>
          {SOCIALS.map((s) => (
            <a key={s.href} className="tile" href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
              <span className="bx-glyph" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </header>

      <Panel title="Experience" end={`${experience.length} roles`} tone="blue" area="area-exp">
        <div className="rows">
          {experience.map((exp) => (
            <DetailRow
              key={exp.company}
              title={exp.company}
              sub={`${exp.title} · ${exp.location}`}
              desc={exp.summary}
              lead={
                <span className="row__when">
                  <span>{exp.dates}</span>
                  <span className="row__dur">{exp.duration}</span>
                </span>
              }
            >
              <div className="facts-layout">
                <dl className="facts">
                  <div>
                    <dt className="modal__label">Role</dt>
                    <dd>{exp.title}</dd>
                  </div>
                  <div>
                    <dt className="modal__label">When</dt>
                    <dd>{exp.dates}</dd>
                    <dd className="facts__dur">{exp.duration}</dd>
                  </div>
                  <div>
                    <dt className="modal__label">Where</dt>
                    <dd>{exp.location}</dd>
                  </div>
                  {exp.stack?.length ? (
                    <div className="facts__stack">
                      <dt className="modal__label">Stack</dt>
                      <dd>
                        <TechList items={exp.stack} />
                      </dd>
                    </div>
                  ) : null}
                </dl>
                <div className="facts-layout__main">
                  <p className="modal__summary">{exp.summary}</p>
                  <Bullets items={exp.highlights} />
                </div>
              </div>
            </DetailRow>
          ))}
        </div>
      </Panel>

      <Panel title="Systems & projects" end={`${projects.length + 1} builds`} tone="mint" area="area-proj">
        <div className="rows">
          <ProjectRow project={flagship} />
          {projects.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </div>
      </Panel>

      <Panel title="Stack" tone="pink" area="area-stack">
        <dl className="stack">
          {stackIndex.map((g) => (
            <div key={g.name} className="stack__row">
              <dt className="stack__label">{g.name}</dt>
              <dd className="stack__items">
                {g.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Panel>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Mahesh Moholkar</span>
      </footer>
    </main>
  );
}
