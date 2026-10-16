import {
  siBetterauth,
  siDocker,
  siDotnet,
  siDrizzle,
  siExpo,
  siFastapi,
  siGrafana,
  siI18next,
  siNextdotjs,
  siOllama,
  siOpentelemetry,
  siPostgresql,
  siPrisma,
  siPython,
  siRailway,
  siRazorpay,
  siReact,
  siReacthookform,
  siRedis,
  siShadcnui,
  siTailwindcss,
  siTanstack,
  siTrpc,
  siTypescript,
  siUpstash,
  siVitest,
  type SimpleIcon,
} from "simple-icons";

// First match wins, so the more specific label goes first ("React Hook Form" before "React")
const ICONS: [RegExp, SimpleIcon][] = [
  [/\.net/i, siDotnet],
  [/^python/i, siPython],
  [/fastapi/i, siFastapi],
  [/^react hook form/i, siReacthookform],
  [/^react/i, siReact],
  [/^next/i, siNextdotjs],
  [/^typescript/i, siTypescript],
  [/^postgres/i, siPostgresql],
  [/^redis/i, siRedis],
  [/^opentelemetry/i, siOpentelemetry],
  [/^grafana/i, siGrafana],
  [/^docker/i, siDocker],
  [/^tanstack/i, siTanstack],
  [/^tailwind/i, siTailwindcss],
  [/^shadcn/i, siShadcnui],
  [/^i18next/i, siI18next],
  [/^vitest/i, siVitest],
  [/^expo/i, siExpo],
  [/^railway/i, siRailway],
  [/^trpc/i, siTrpc],
  [/^upstash/i, siUpstash],
  [/^better.?auth/i, siBetterauth],
  [/^drizzle/i, siDrizzle],
  [/^ollama/i, siOllama],
  [/^razorpay/i, siRazorpay],
  [/^prisma/i, siPrisma],
];

/** Monochrome brand mark for a stack label; tools with no Simple Icons mark get a plain square so labels still line up. */
export function TechIcon({ name }: { name: string }) {
  const icon = ICONS.find(([re]) => re.test(name))?.[1];
  return (
    <svg className="tech-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icon ? <path d={icon.path} /> : <rect x="7" y="7" width="10" height="10" />}
    </svg>
  );
}
