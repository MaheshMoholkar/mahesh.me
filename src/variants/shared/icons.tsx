import type { ReactNode } from "react";
import { siGithub, siX } from "simple-icons";

// Brand marks come from Simple Icons; the rest are outline icons on Lucide's 24px grid.
// Each variant sizes them through the class it passes (default "icon").
type IconProps = { className?: string };

function Brand({ path, className = "icon" }: IconProps & { path: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function Outline({ children, className = "icon" }: IconProps & { children: ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const GitHubIcon = (p: IconProps) => <Brand path={siGithub.path} {...p} />;
export const XIcon = (p: IconProps) => <Brand path={siX.path} {...p} />;

// Simple Icons dropped LinkedIn's mark, so this one is an outline
export const LinkedInIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Outline>
);

export const MailIcon = (p: IconProps) => (
  <Outline {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Outline>
);

export const FileIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </Outline>
);

export const GlobeIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </Outline>
);

export const ChevronIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="m9 18 6-6-6-6" />
  </Outline>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Outline>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Outline>
);

export const DownloadIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M12 15V3" />
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
  </Outline>
);

export const SunIcon = (p: IconProps) => (
  <Outline {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </Outline>
);

export const MoonIcon = (p: IconProps) => (
  <Outline {...p}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </Outline>
);
