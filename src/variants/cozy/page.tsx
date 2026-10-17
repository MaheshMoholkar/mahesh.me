import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  certificates,
  education,
  EMAIL,
  experience,
  flagship,
  hero,
  projects,
  RESUME_PDF,
  sideProjects,
  SOCIALS,
  stackIndex,
  type Link,
  type Project,
  type SideProject,
} from "@/content/site";
import { ArrowRightIcon, ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "../shared/icons";
import { LocalTime } from "../shared/LocalTime";
import { Highlights } from "./Highlights";
import { ThemeButton } from "./ThemeButton";

// Side projects shown before "Show more"
const SIDE_VISIBLE = 3;

const SOCIAL_ICONS: Record<string, (p: { className?: string }) => ReactNode> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
};

/** Stagger index for the hero's rise-in animation. */
const at = (i: number) => ({ "--i": i }) as CSSProperties;

function ExtLink({ label, href }: Link) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowUpRightIcon />
    </a>
  );
}

function Chips({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="chips">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="section__head">
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {note ? <p className="section__note">{note}</p> : null}
      </header>
      {children}
    </section>
  );
}

/** A screenshot that opens the project's first link; the card's own links stay separate. */
function Shot({ project, sizes, priority }: { project: { name: string; image: { src: string; width: number; height: number }; links: Link[] }; sizes: string; priority?: boolean }) {
  const live = project.links.find((l) => l.label === "Live") ?? project.links[0];
  return (
    <a className="shot" href={live.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
      <Image src={project.image.src} alt="" width={project.image.width} height={project.image.height} sizes={sizes} priority={priority} />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project reveal">
      <Shot project={project} sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 520px" />
      <div className="project__body">
        <h3 className="project__title">{project.name}</h3>
        <p className="project__summary">{project.summary}</p>
        <Chips items={project.stack} />
        <div className="links">
          {project.links.map((l) => (
            <ExtLink key={l.href} {...l} />
          ))}
        </div>
      </div>
    </article>
  );
}

function SideCard({ project }: { project: SideProject }) {
  return (
    <article className="card mini reveal">
      {/* Side projects have no recorded size; every screenshot is wider than the card, so a 16:10 box is enough */}
      <Shot project={{ ...project, image: { src: project.image, width: 1600, height: 1000 } }} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 340px" />
      <div className="mini__body">
        <div className="mini__head">
          <h4 className="mini__title">{project.name}</h4>
          <span className="mini__year">{project.year}</span>
        </div>
        <p className="mini__summary">{project.summary}</p>
        <p className="mini__stack">{project.stack.join(" · ")}</p>
        <div className="links links--small">
          {project.links.map((l) => (
            <ExtLink key={l.href} {...l} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const year = new Date().getFullYear();
  const hidden = sideProjects.length - SIDE_VISIBLE;

  return (
    <div className="wrap" id="top">
      <nav className="topbar" aria-label="Sections">
        <ul className="topbar__links">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ThemeButton />
      </nav>

      <main>
        <header className="hero">
          <div className="hero__text">
            <p className="pill rise" style={at(0)}>
              <span className="pill__dot" aria-hidden="true" />
              {hero.status} · {hero.workMode}
            </p>
            <h1 className="hero__name rise" style={at(1)}>
              {hero.name}
            </h1>
            <p className="hero__headline rise" style={at(2)}>
              {hero.headline}
            </p>
            <p className="hero__bio rise" style={at(3)}>
              {hero.bio}
            </p>
            <div className="actions rise" style={at(4)}>
              <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
                Get in touch
                <ArrowRightIcon />
              </a>
              <a className="btn" href={RESUME_PDF} download>
                Resume
                <DownloadIcon />
              </a>
            </div>
            <ul className="socials rise" style={at(5)}>
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <li key={s.href}>
                    <a className="social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      {Icon ? <Icon /> : s.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a className="social" href={`mailto:${EMAIL}`} aria-label="Email">
                  <MailIcon />
                </a>
              </li>
            </ul>
          </div>
          <figure className="portrait rise" style={at(2)}>
            <Image src="/profile.png" alt={`Illustrated portrait of ${hero.name}`} width={320} height={320} sizes="(max-width: 900px) 220px, 320px" priority />
            <figcaption className="portrait__tag">{hero.location}</figcaption>
          </figure>
        </header>

        <Section id="experience" title="Experience" note={`${experience.length} roles`}>
          <ol className="timeline">
            {experience.map((exp) => (
              <li key={exp.company} className="job reveal">
                <article className="card job__card">
                  <header className="job__head">
                    {exp.logo ? (
                      <Image className="job__logo" src={exp.logo} alt="" width={44} height={44} />
                    ) : (
                      <span className="job__logo job__logo--mark" aria-hidden="true">
                        {exp.company[0]}
                      </span>
                    )}
                    <div className="job__who">
                      <h3 className="job__company">{exp.company}</h3>
                      <p className="job__role">{exp.title}</p>
                    </div>
                    <span className="tag">{exp.duration}</span>
                  </header>
                  <p className="job__meta">
                    {exp.dates} · {exp.location}
                  </p>
                  <p className="job__summary">{exp.summary}</p>
                  <Highlights items={exp.highlights} />
                  <Chips items={exp.stack} />
                  {exp.link ? (
                    <div className="links">
                      <ExtLink {...exp.link} />
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects" note={`${projects.length + 1} featured · ${sideProjects.length} more`}>
          <article className="card feature reveal">
            <div className="feature__media">
              <Shot project={flagship} sizes="(max-width: 900px) 100vw, 560px" />
            </div>
            <div className="feature__body">
              <p className="eyebrow">Featured</p>
              <h3 className="feature__title">{flagship.name}</h3>
              {flagship.subtitle ? <p className="feature__sub">{flagship.subtitle}</p> : null}
              <p className="feature__summary">{flagship.summary}</p>
              <dl className="points">
                {flagship.highlights.map((h, i) =>
                  typeof h === "object" ? (
                    <div key={i}>
                      <dt>{h.lead.replace(/:\s*$/, "")}</dt>
                      <dd>{h.text}</dd>
                    </div>
                  ) : (
                    <div key={i}>
                      <dd>{h}</dd>
                    </div>
                  )
                )}
              </dl>
              <Chips items={flagship.stack} />
              <div className="links">
                {flagship.links.map((l) => (
                  <ExtLink key={l.href} {...l} />
                ))}
              </div>
            </div>
          </article>

          <div className="grid grid--2">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <h3 className="subhead">More builds</h3>
          <div className="grid grid--3">
            {sideProjects.slice(0, SIDE_VISIBLE).map((p) => (
              <SideCard key={p.name} project={p} />
            ))}
          </div>
          {hidden > 0 ? (
            // A <details> needs no script, so the extra cards are in the server HTML
            <details className="more">
              <summary className="btn btn--quiet">
                <span className="more__show">Show {hidden} more</span>
                <span className="more__hide">Show fewer</span>
              </summary>
              <div className="grid grid--3">
                {sideProjects.slice(SIDE_VISIBLE).map((p) => (
                  <SideCard key={p.name} project={p} />
                ))}
              </div>
            </details>
          ) : null}
        </Section>

        <Section id="skills" title="Skills">
          <div className="card skills reveal">
            {stackIndex.map((g) => (
              <div key={g.name} className="skill">
                <h3 className="skill__name">{g.name}</h3>
                <Chips items={g.items} />
              </div>
            ))}
          </div>
        </Section>

        <div className="split">
          <Section id="education" title="Education">
            <ul className="edu">
              {education.map((e) => (
                <li key={e.degree} className="card edu__item reveal">
                  <h3 className="edu__degree">{e.degree}</h3>
                  <p className="edu__school">{e.school}</p>
                  <p className="edu__meta">
                    {e.years} · {e.location} · {e.result}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
          <Section id="certificates" title="Certificates">
            <ul className="card certs reveal">
              {certificates.map((c) => (
                <li key={c.href}>
                  <a className="cert" href={c.href} target="_blank" rel="noopener noreferrer">
                    <span className="cert__title">{c.title}</span>
                    <span className="cert__by">
                      {c.issuer} · {c.via}
                    </span>
                    <ArrowUpRightIcon className="icon cert__icon" />
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <section id="contact" className="card contact reveal" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact__title">
            Get in touch
          </h2>
          <p className="contact__note">
            {hero.status} · {hero.workMode}
          </p>
          <a className="contact__email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <div className="actions actions--center">
            <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
              Write an email
              <ArrowRightIcon />
            </a>
            <a className="btn" href={RESUME_PDF} download>
              Resume
              <DownloadIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>
          © {year} {hero.name}
        </span>
        <span>
          {hero.location} <LocalTime className="foot__time" />
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
