import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern – TechCorp",
      desc: "Developed a React design system in TypeScript and improved developer productivity.",
    },
    {
      title: "Freelance Web Developer",
      desc: "Built responsive web‑apps for local businesses using Next.js and TailwindCSS.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 flex flex-col items-center text-center gap-8"
    >
      <h3 className="text-3xl font-semibold">Experience</h3>
      <div className="max-w-3xl w-full flex flex-col gap-6 text-left">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <CardHeader>
              <h4 className="font-semibold">{exp.title}</h4>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exp.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}