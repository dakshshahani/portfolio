import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal website built with Next.js 15 and shadcn/ui.",
      link: "#",
      btn: "View Code",
    },
    {
      title: "E‑Commerce UI",
      desc: "Storefront demo built with Next.js API routes + TailwindCSS.",
      link: "#",
      btn: "Live Demo",
    },
    {
      title: "Chat App",
      desc: "Realtime messaging with Socket.IO + React hooks.",
      link: "#",
      btn: "View Project",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-muted/50 flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((p) => (
          <Card key={p.title} className="text-left">
            <CardHeader>
              <h4 className="font-semibold text-lg">{p.title}</h4>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{p.desc}</p>
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