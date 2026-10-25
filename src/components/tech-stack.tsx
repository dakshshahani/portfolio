import type { ComponentType } from "react";
import {
  SiD3,
  SiElectron,
  SiElevenlabs,
  SiExpress,
  SiFramer,
  SiGooglegemini,
  SiMediapipe,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSharp,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { Brain, Network } from "lucide-react";
import OpenAIIcon from "@/components/icons/openai";
import { Badge } from "@/components/ui/badge";

type TechIcon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const TECH = {
  nextjs: { label: "Next.js", Icon: SiNextdotjs },
  react: { label: "React", Icon: SiReact },
  typescript: { label: "TypeScript", Icon: SiTypescript },
  tailwind: { label: "TailwindCSS", Icon: SiTailwindcss },
  framer: { label: "Framer Motion", Icon: SiFramer },
  sigma: { label: "Sigma.js", Icon: Network },
  express: { label: "Express.js", Icon: SiExpress },
  gemini: { label: "Gemini", Icon: SiGooglegemini },
  mediapipe: { label: "MediaPipe", Icon: SiMediapipe },
  jev: { label: "Jev", Icon: Brain },
  elevenlabs: { label: "ElevenLabs", Icon: SiElevenlabs },
  electron: { label: "Electron", Icon: SiElectron },
  supabase: { label: "Supabase", Icon: SiSupabase },
  openai: { label: "OpenAI", Icon: OpenAIIcon },
  d3: { label: "D3.js", Icon: SiD3 },
  unity: { label: "Unity", Icon: SiUnity },
  csharp: { label: "C#", Icon: SiSharp },
  sqlite: { label: "SQLite", Icon: SiSqlite },
  redux: { label: "Redux", Icon: SiRedux },
} satisfies Record<string, { label: string; Icon: TechIcon }>;

export type Tech = keyof typeof TECH;

export default function TechStack({ items }: { items: Tech[] }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold">Tech Stack:</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => {
          const { label, Icon } = TECH[item];
          return (
            <Badge
              key={item}
              variant="secondary"
              className="gap-1.5 border-black/5 px-2.5 py-1 text-xs font-medium text-card-foreground dark:border-white/10 [&>svg]:size-3.5"
            >
              <Icon aria-hidden className="text-muted-foreground" />
              {label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
