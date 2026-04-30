import ExpandableCardList from "@/components/expandable-card-list";
import { ExpandableCard } from "@/types/expandable-card";

export function Projects() {
  // Old Card-based UI - commented out
  // const projects = [
  //   {
  //     title: "komo",
  //     desc: "Komo is a unified search platform that connects all your enterprise and personal workspaces, enabling seamless access to information across multiple tools. It delivers instant results with intelligent summaries and AI‑driven context, turning scattered data into a single source of truth for faster discovery and clarity.",
  //     link: "https://github.com/aircon2/komo",
  //     btn: "View Project",
  //     badges: "Next.js, Gemini, TypeScript, React, TailwindCSS, SQLite, Redux",
  //   },
  //   {
  //     title: "Weblink",
  //     desc: "WebLink is an intelligent bookmarking system that transforms your saved links into a visual, interconnected knowledge map, making it effortless to organize, discover, and explore related content. It turns scattered web resources into a dynamic network for seamless navigation and insight.",
  //     link: "https://github.com/dakshshahani/weblink",
  //     btn: "View Project",
  //     badges:
  //       "Next.js, Supabase, OpenAI, D3.js, TypeScript, React, TailwindCSS",
  //   },
  //   {
  //     title: "ClarityVR",
  //     desc: "AI-based virtual reality therapist reducing mental health stigma through immersive and accessible therapy sessions.",
  //     link: "https://github.com/aircon2/clarityVR",
  //     btn: "View Project",
  //     badges: "Unity, C#, OpenAI, ElevenLabs, Express.js, React",
  //   },
  //   {
  //     title: "AExpressions",
  //     desc: "Web-based tool that generates After Effects expressions from user prompts or AE files, powered by React, TypeScript, and FastAPI. Features built-in expressions and AI integration to streamline motion design workflows for creators.",
  //     link: "https://github.com/dakshshahani/aexpressions",
  //     btn: "View Project",
  //     badges: "React, TypeScript, OpenAPI, MongoDB",
  //   },
  //   {
  //     title: "Space Guide",
  //     desc: "Browser-based educational tool built with HTML, CSS, and JavaScript that enables interactive exploration of our solar system. Features dynamic navigation and responsive design for an engaging learning experience across devices.",
  //     link: "https://devpost.com/software/space-guide",
  //     btn: "View Project",
  //     badges: "HTML, CSS, JavaScript",
  //   },
  // ];

  const projectCards: ExpandableCard[] = [
    {
      title: "komo",
      description: "Unified search platform for enterprise workspaces",
      src: "https://via.placeholder.com/400x300?text=komo",
      ctaText: "View Project",
      ctaLink: "https://github.com/aircon2/komo",
      content: () => (
        <div className="space-y-4">
          <p>
            Komo is a unified search platform that connects all your enterprise
            and personal workspaces, enabling seamless access to information
            across multiple tools. It delivers instant results with intelligent
            summaries and AI‑driven context, turning scattered data into a
            single source of truth for faster discovery and clarity.
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
      src: "https://via.placeholder.com/400x300?text=Weblink",
      ctaText: "View Project",
      ctaLink: "https://github.com/dakshshahani/weblink",
      content: () => (
        <div className="space-y-4">
          <p>
            WebLink is an intelligent bookmarking system that transforms your
            saved links into a visual, interconnected knowledge map, making it
            effortless to organize, discover, and explore related content. It
            turns scattered web resources into a dynamic network for seamless
            navigation and insight.
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
      src: "https://via.placeholder.com/400x300?text=ClarityVR",
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
    {
      title: "AExpressions",
      description: "AI-powered After Effects expression generator",
      src: "https://via.placeholder.com/400x300?text=AExpressions",
      ctaText: "View Project",
      ctaLink: "https://github.com/dakshshahani/aexpressions",
      content: () => (
        <div className="space-y-4">
          <p>
            Web-based tool that generates After Effects expressions from user
            prompts or AE files, powered by React, TypeScript, and FastAPI.
            Features built-in expressions and AI integration to streamline
            motion design workflows for creators.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">React, TypeScript, OpenAPI, MongoDB</p>
          </div>
        </div>
      ),
    },
    {
      title: "Space Guide",
      description: "Interactive solar system explorer",
      src: "https://via.placeholder.com/400x300?text=Space+Guide",
      ctaText: "View Project",
      ctaLink: "https://devpost.com/software/space-guide",
      content: () => (
        <div className="space-y-4">
          <p>
            Browser-based educational tool built with HTML, CSS, and JavaScript
            that enables interactive exploration of our solar system. Features
            dynamic navigation and responsive design for an engaging learning
            experience across devices.
          </p>
          <div>
            <p className="font-semibold text-sm mb-2">Tech Stack:</p>
            <p className="text-sm">HTML, CSS, JavaScript</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-transparent flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>
      <div className="w-full max-w-5xl">
        <ExpandableCardList cards={projectCards} />
      </div>
    </section>
  );
}
