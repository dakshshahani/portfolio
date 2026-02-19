import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "komo",
      desc: "Komo is a unified search platform that connects all your enterprise and personal workspaces, enabling seamless access to information across multiple tools. It delivers instant results with intelligent summaries and AI‑driven context, turning scattered data into a single source of truth for faster discovery and clarity.",
      link: "https://github.com/aircon2/komo",
      btn: "View Project",
      badges: "Next.js, Gemini, TypeScript, React, TailwindCSS, SQLite, Redux",
    },
    {
      title: "Weblink",
      desc: "WebLink is an intelligent bookmarking system that transforms your saved links into a visual, interconnected knowledge map, making it effortless to organize, discover, and explore related content. It turns scattered web resources into a dynamic network for seamless navigation and insight.",
      link: "https://github.com/dakshshahani/weblink",
      btn: "View Project",
      badges:
        "Next.js, Supabase, OpenAI, D3.js, TypeScript, React, TailwindCSS",
    },
    {
      title: "ClarityVR",
      desc: "AI-based virtual reality therapist reducing mental health stigma through immersive and accessible therapy sessions.",
      link: "https://github.com/aircon2/clarityVR",
      btn: "View Project",
      badges: "Unity, C#, OpenAI, ElevenLabs, Express.js, React",
    },
    {
      title: "AExpressions",
      desc: "Web-based tool that generates After Effects expressions from user prompts or AE files, powered by React, TypeScript, and FastAPI. Features built-in expressions and AI integration to streamline motion design workflows for creators.",
      link: "https://github.com/dakshshahani/aexpressions",
      btn: "View Project",
      badges: "React, TypeScript, OpenAPI, MongoDB",
    },
    {
      title: "Space Guide",
      desc: "Browser-based educational tool built with HTML, CSS, and JavaScript that enables interactive exploration of our solar system. Features dynamic navigation and responsive design for an engaging learning experience across devices.",
      link: "https://devpost.com/software/space-guide",
      btn: "View Project",
      badges: "HTML, CSS, JavaScript",
    },
  ];

  const projectCount = projects.length;
  const colCount = projectCount % 4 === 0 ? 4 : projectCount % 3 === 0 ? 3 : 3; // fallback to 3 if neither divides evenly
  console.log(colCount);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-transparent flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>

      <div
        className={`grid sm:grid-cols-2 md:px-10 lg:grid-cols-${colCount} gap-6 max-w-5xl`}
      >
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <p className="pb-2">{p.desc}</p>
              <Button variant="default" className="mt-auto">
                <a href={p.link}>{p.btn}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
