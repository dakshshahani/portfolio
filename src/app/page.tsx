import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SectionCard } from "@/components/section-card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10 py-12">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <h2 className="text-3xl font-semibold">👋 Hey, I'm Daksh</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            I build websites using TypeScript and Next.js.
          </p>
          <Button className="mt-6" asChild>
            <a href="/projects">View Projects</a>
          </Button>
        </CardContent>
      </Card>

      <SectionCard
        title="Recent Work"
        description="Take a look at some of my latest web apps and projects."
      />
    </div>
  );
}