import ExpandableTimeline from "@/components/expandable-timeline";
import type { Experience } from "@/types/experience";

export function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "nwPlus",
      location: "Vancouver, Canada",
      startDate: "JAN 2026",
      endDate: "Present",
      description:
        "Built and optimized React-Firebase features across multiple web apps, improving load times by 35%.",
      src: "https://via.placeholder.com/400x300?text=nwPlus",
      content: () => (
        <div className="space-y-4">
          <p>
            Built and optimized React-Firebase features across multiple web
            apps, improving load times by 35% and cutting post-release bugs by
            40% through efficient component design and Firestore query tuning.
          </p>
        </div>
      ),
    },
    {
        title: "Media Specialist",
        company: "nwPlus",
        location: "Vancouver, Canada",
        startDate: "SEP 2023",
        endDate: "JAN 2026",
        description:
          "Tackled external developer tickets, building and maintaining web tools and APIs for nwHacks, HackCamp, and cmd-f.",
        src: "https://via.placeholder.com/400x300?text=nwPlus",
        content: () => (
          <div className="space-y-4">
            <p>
              Tackled external developer tickets, building and maintaining web
              tools and APIs for nwHacks, HackCamp, and cmd-f. Delivered hands-on
              Web Dev & API workshops to 400+ hackers, demystifying tech stacks for
              project builds. Led media campaigns across social channels with 
              dev/marketing teams, driving 1,000+ participant engagements.
            </p>
          </div>
        ),
      },

    {
      title: "Lead Organizer",
      company: "TEDx",
      location: "Doha, Qatar",
      startDate: "AUG 2022",
      endDate: "FEB 2023",
      description:
        "Managed a 27-member team to organize Qatar's longest-running TEDx event.",
      src: "https://via.placeholder.com/400x300?text=TEDx",
      content: () => (
        <div className="space-y-4">
          <p>
            Managed a 27-member team to organize Qatar's longest-running TEDx
            event, featuring 5 international speakers and a hybrid audience.
            Directed logistics, branding, and speaker curation while
            coordinating with sponsors and partners to ensure seamless
            large-scale event execution.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-transparent flex flex-col items-center"
    >
      <h3 className="text-3xl font-semibold mb-12">Experience</h3>
      <ExpandableTimeline experiences={experiences} />
    </section>
  );
}
