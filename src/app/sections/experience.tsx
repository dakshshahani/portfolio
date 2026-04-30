import ExpandableTimeline from "@/components/expandable-timeline";
import { Experience } from "@/types/experience";

export function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Engineer, Media Specialist",
      company: "nwPlus",
      location: "Vancouver, Canada",
      startDate: "JAN 2023",
      endDate: "AUG 2024",
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
          <div>
            <p className="font-semibold text-sm mb-2">Key Achievements:</p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>
                Improved load times by 35% through efficient component design
              </li>
              <li>Reduced post-release bugs by 40% with optimized queries</li>
              <li>
                Delivered hands-on Web Dev & API workshops to 400+ hackers
              </li>
              <li>Led media campaigns across social channels with 1000+ engagements</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Lead Organizer",
      company: "TEDx",
      location: "Doha, Qatar",
      startDate: "FEB 2023",
      endDate: "NOV 2023",
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
          <div>
            <p className="font-semibold text-sm mb-2">Highlights:</p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Led team of 27 members for event organization</li>
              <li>Coordinated 5 international speakers</li>
              <li>Managed hybrid audience attendance</li>
              <li>Directed logistics, branding, and speaker curation</li>
              <li>Coordinated with multiple sponsors and partners</li>
            </ul>
          </div>
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
