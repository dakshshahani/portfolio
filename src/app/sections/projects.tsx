import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal website built with Next.js 15 and shadcn/ui.",
      link: "https://github.com/dakshshahani/portfolio",
      btn: "View Project",
    },
    {
      title: "ClarityVR",
      desc: "AI-based virtual reality therapist reducing mental health stigma through immersive and accessible therapy sessions.",
      link: "https://github.com/aircon2/clarityVR",
      btn: "View Project",
    },
    {
      title: "AExpressions",
      desc: "Web-based tool that generates After Effects expressions from user prompts or AE files, powered by React, TypeScript, and FastAPI. Features built-in expressions and AI integration to streamline motion design workflows for creators.",
      link: "https://github.com/dakshshahani/aexpressions",
      btn: "View Project",
    },
    {
      title: "Space Guide",
      desc: "Browser-based educational tool built with HTML, CSS, and JavaScript that enables interactive exploration of our solar system. Features dynamic navigation and responsive design for an engaging learning experience across devices.",
      link: "https://github.com/aircon2/space-guide",
      btn: "View Project",
    },
  ];

  // Dynamically set column count based on divisibility
  const projectCount = projects.length;
  const colCount = projectCount % 4 === 0 ? 4 : projectCount % 3 === 0 ? 3 : 3; // fallback to 3 if neither divides evenly

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-background flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>

      {/* Dynamically inject the Tailwind grid class */}
      <div
        className={`grid sm:grid-cols-2 lg:grid-cols-${colCount} gap-6 max-w-5xl`}
      >
        {projects.map((p) => (
          <Card key={p.title} className="text-left flex flex-col">
            <CardHeader>
              <h4 className="font-semibold text-lg">{p.title}</h4>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <p className="text-muted-foreground flex-1">{p.desc}</p>

              <Button asChild className="mt-4 w-full">
                <a href={p.link}>{p.btn}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
