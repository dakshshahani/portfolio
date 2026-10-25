import ExpandableCardList from "@/components/expandable-card-list";
import { ExpandableCard } from "@/types/expandable-card";

export function Projects() {
  const projectCards: ExpandableCard[] = [
    {
      title: "Gaze - 🏆 MHacks 2026",
      description: "Editor you point at with your eyes and direct with your voice",
      src: "/gaze-about.png",
      ctaText: "View Project",
      ctaLink: "https://github.com/dakshshahani/mhacks",
      content: () => (
        <div className="space-y-4">
          <p>
            Desktop tool that edits frontend code by pointing at an element with
            your head and describing the change out loud — no prompts, selectors,
            or file names required.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">
              Next.js, React, TypeScript, MediaPipe, Jev, Gemini, ElevenLabs,
              Electron
            </p>
          </div>
        </div>
      ),
    },
    {
        title: "MediScan",
        description: "AI-powered medication scanning and analysis tool",
        src:"/mediscan.png",
        ctaText: "View Project",
        ctaLink: "https://github.com/aircon2/mediscan",
        content: () => (
            <div className="space-y-4">
            <p>
              Scan or upload medication packaging to instantly identify the drug, its active ingredients, side effects, and treatments, with an interactive knowledge graph for exploring related medications.
            </p>
            <div>
              <p className="font-semibold text-sm mb-2">Tech Stack:</p>
              <p className="text-sm">
                Next.js, React, TailwindCSS, Framer Motion, Sigma.js, Express.js, Google Gemini AI
              </p>
            </div>
            </div>
        )
    },
    {
      title: "komo - 🏆 Hack Western 2025",
      description: "Unified search platform for enterprise workspaces",
      src: "/komo.png",
      ctaText: "View Project",
      ctaLink: "https://github.com/aircon2/komo",
      content: () => (
        <div className="space-y-4">
          <p>
            Unified search across every enterprise and personal workspace,
            returning instant results with AI‑driven summaries that turn
            scattered data into a single source of truth.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">
              Next.js, Gemini, TypeScript, React, TailwindCSS, SQLite, Redux
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Weblink",
      description: "Visual knowledge map for saved links",
      src: "/weblink.jpeg",
      ctaText: "View Project",
      ctaLink: "https://github.com/dakshshahani/weblink",
      content: () => (
        <div className="space-y-4">
          <p>
            Bookmarking system that turns saved links into a visual,
            interconnected knowledge map, making it easy to organize, discover,
            and explore related content.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">
              Next.js, Supabase, OpenAI, D3.js, TypeScript, React, TailwindCSS
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "ClarityVR",
      description: "AI-based virtual reality therapist",
      src: "/clarityvr.jpg",
      ctaText: "View Project",
      ctaLink: "https://github.com/aircon2/clarityVR",
      content: () => (
        <div className="space-y-4">
          <p>
            AI-based virtual reality therapist reducing mental health stigma
            through immersive and accessible therapy sessions.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">
              Unity, C#, OpenAI, ElevenLabs, Express.js, React
            </p>
          </div>
        </div>
      ),
     },
    //  {
    //    title: "AExpressions",
    //    description: "AI-powered After Effects expression generator",
    //    src: "/aexpressions.png",
    //    ctaText: "View Project",
    //    ctaLink: "https://github.com/dakshshahani/aexpressions",
    //    content: () => (
    //      <div className="space-y-4">
    //        <p>
    //          Web-based tool that generates After Effects expressions from user
    //          prompts or AE files, powered by React, TypeScript, and FastAPI.
    //          Features built-in expressions and AI integration to streamline
    //          motion design workflows for creators.
    //        </p>
    //        <div>
    //          <p className="font-semibold text-sm mb-2">Tech Stack:</p>
    //          <p className="text-sm">React, TypeScript, OpenAPI, MongoDB</p>
    //        </div>
    //      </div>
    //    ),
    //  },
   ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 bg-transparent flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-8 text-foreground">Projects</h3>
      <div className="w-full max-w-5xl">
        <ExpandableCardList cards={projectCards} />
      </div>
    </section>
  );
}
