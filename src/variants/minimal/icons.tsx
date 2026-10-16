import type { ReactNode } from "react";
import { siGithub, siX } from "simple-icons";

// Brand marks come from Simple Icons; the rest are outline icons on Lucide's 24px grid
function Brand({ path }: { path: string }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function Outline({ children }: { children: ReactNode }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const GitHubIcon = () => <Brand path={siGithub.path} />;
export const XIcon = () => <Brand path={siX.path} />;

// Simple Icons dropped LinkedIn's mark, so this one is an outline
export const LinkedInIcon = () => (
  <Outline>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Outline>
);

export const MailIcon = () => (
  <Outline>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Outline>
);

export const FileIcon = () => (
  <Outline>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </Outline>
);

export const GlobeIcon = () => (
  <Outline>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </Outline>
);

export const ChevronIcon = () => (
  <Outline>
    <path d="m9 18 6-6-6-6" />
  </Outline>
);
