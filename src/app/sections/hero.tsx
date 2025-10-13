"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="home"
      className="py-24 px-4 flex flex-col items-center text-center gap-6"
    >
      <h2 className="text-4xl font-bold">👋 Hi, I'm Daksh Shahani</h2>
      <p className="text-muted-foreground max-w-xl">
        I build fast, responsive websites using <strong>TypeScript</strong>,
        <strong> Next.js</strong>, and beautiful UI systems like <strong>shadcn/ui</strong>.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <Badge>TypeScript</Badge>
        <Badge>Next.js</Badge>
        <Badge>TailwindCSS</Badge>
        <Badge>shadcn/ui</Badge>
      </div>
      <Button asChild className="mt-6">
        <a href="#projects">View My Work</a>
      </Button>
    </section>
  );
}