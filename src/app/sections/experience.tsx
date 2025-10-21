import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Media Specialist - nwPlus",
      desc: "Developed and executed digital media campaigns to boost engagement for major hackathons, including nwHacks, Hack-Camp, and cmd-f, reaching over 1,000 participants annually. \nCollaborated with cross-functional teams to create promotional content, manage social media channels, and enhancebrand visibility, contributing to the success of Western Canada’s largest student-run hackathons.",
    },
    {
      title: "Lead Organizer - TEDx",
      desc: "Managed a 27-member team to organize Qatar’s longest-running TEDx event, featuring 5 international speakers and a hybrid audience. \nDirected logistics, branding, and speaker curation while coordinating with sponsors and partners to ensure seamless large-scale event execution.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 flex flex-col items-center text-center gap-8 bg-background"
    >
      <h3 className="text-3xl font-semibold">Experience</h3>
      <div className="max-w-3xl w-full flex flex-col gap-6 text-left">
        {experiences.map((exp) => (
          <Card key={exp.title} className="flex flex-col">
            <CardHeader>
              <h4 className="font-semibold">{exp.title}</h4>
            </CardHeader>
            <CardContent>
              {exp.desc.includes("\n") ? (
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {exp.desc.split("\n").map((line, index) => (
                    <li key={index}>{line.trim()}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">{exp.desc}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
