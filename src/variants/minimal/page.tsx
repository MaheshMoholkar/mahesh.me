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
  type Project,
} from "@/content/site";
import { ChevronIcon, FileIcon, GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon, XIcon } from "../shared/icons";
import { LocalTime } from "../shared/LocalTime";
import { ThemeToggle } from "./ThemeToggle";

const social = Object.fromEntries(SOCIALS.map((s) => [s.label, s.href]));

// One short paragraph per sentence reads closer to the reference than a single block
const bio = hero.bio.split(/(?<=\.)\s+/);

function InlineLink({ href, icon, children, download }: { href: string; icon: ReactNode; children: ReactNode; download?: boolean }) {
  const external = href.startsWith("http");
  return (
    <a className="ilink" href={href} {...(download ? { download: true } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {icon}
      {children}
    </a>
  );
}

/** A row title whose chevron stays glued to the last word, so a wrapped title never leaves it alone on a line. */
function Title({ text }: { text: string }) {
  const cut = text.lastIndexOf(" ") + 1;
  return (
    <span className="item__title">
      {text.slice(0, cut)}
      <span className="item__last">
        {text.slice(cut)}
        <ChevronIcon />
      </span>
    </span>
  );
}

function Highlights({ items }: { items: Highlight[] }) {
  return (
    <ul>
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

function ProjectItem({ project }: { project: Project }) {
  return (
    // Links sit beside the <details>, not inside its <summary>, so they stay links instead of becoming part of a toggle
    <div className="item item--links">
      <details>
        <summary className="item__row">
          <Image className="thumb" src={project.image.src} alt="" width={36} height={36} sizes="36px" />
          <span className="item__main">
            <Title text={project.name} />
            <span className="item__desc">{project.summary}</span>
          </span>
        </summary>
        <div className="more">
          <a href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} screenshot at full size`}>
            <Image
              className="more__shot"
              src={project.image.src}
              alt={`${project.name} screenshot`}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 700px) 100vw, 610px"
            />
          </a>
          {project.subtitle ? <p className="more__sub">{project.subtitle}</p> : null}
          <Highlights items={project.highlights} />
          <p className="more__stack">{project.stack.join(" · ")}</p>
        </div>
      </details>
      <span className="item__links">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${l.label}`}>
            {l.label === "GitHub" ? <GitHubIcon /> : <GlobeIcon />}
          </a>
        ))}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="wrap">
      <header className="head">
        <Image className="avatar" src="/profile.png" alt={hero.name} width={52} height={52} priority />
        <div className="head__text">
          <h1 className="name">
            {hero.name}
            <span className="status">{hero.status}</span>
          </h1>
          <p className="role">{hero.headline}</p>
        </div>
        <ThemeToggle />
      </header>

      <div className="intro">
        {bio.map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
        <p>
          Reach me via{" "}
          <InlineLink href={`mailto:${EMAIL}`} icon={<MailIcon />}>
            email
          </InlineLink>{" "}
          · see my code on{" "}
          <InlineLink href={social.GitHub} icon={<GitHubIcon />}>
            GitHub
          </InlineLink>
          .
        </p>
        <p>
          Find me on{" "}
          <InlineLink href={social.LinkedIn} icon={<LinkedInIcon />}>
            LinkedIn
          </InlineLink>{" "}
          and{" "}
          <InlineLink href={social.X} icon={<XIcon />}>
            X
          </InlineLink>
          , or grab my{" "}
          <InlineLink href={RESUME_PDF} icon={<FileIcon />} download>
            resume
          </InlineLink>
          .
        </p>
      </div>

      <section className="section">
        <h2># experience</h2>
        {experience.map((exp) => (
          <div key={exp.company} className="item">
            <details>
              <summary className="item__row">
                <span className="mark" aria-hidden="true">
                  {exp.company[0]}
                </span>
                <span className="item__main">
                  <Title text={exp.company} />
                  <span className="item__sub">{exp.title}</span>
                </span>
                <span className="item__meta">
                  <span className="item__when">{exp.dates}</span>
                  <span>
                    {exp.duration} · {exp.location}
                  </span>
                </span>
              </summary>
              <div className="more">
                <p>{exp.summary}</p>
                <Highlights items={exp.highlights} />
                {exp.stack?.length ? <p className="more__stack">{exp.stack.join(" · ")}</p> : null}
              </div>
            </details>
          </div>
        ))}
      </section>

      <section className="section">
        <h2># projects</h2>
        {[flagship, ...projects].map((p) => (
          <ProjectItem key={p.name} project={p} />
        ))}
        <p className="note">
          more on{" "}
          <a className="ilink" href={social.GitHub} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </section>

      <section className="section">
        <h2># stack</h2>
        <dl className="stack">
          {stackIndex.map((g) => (
            <div key={g.name}>
              <dt>{g.name}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <h2># education</h2>
        {education.map((e) => (
          <div key={e.degree} className="item">
            <div className="item__row item__row--static">
              <span className="mark" aria-hidden="true">
                {e.school[0]}
              </span>
              <span className="item__main">
                <span className="item__title">{e.degree}</span>
                <span className="item__sub">{e.school}</span>
              </span>
              <span className="item__meta">
                <span>{e.years}</span>
                <span>{e.result}</span>
              </span>
            </div>
          </div>
        ))}
      </section>

      <footer className="foot">
        <span>
          {hero.location}
          <LocalTime className="foot__time" />
        </span>
        <span>
          © {new Date().getFullYear()} {hero.name}
        </span>
      </footer>
    </main>
  );
}
