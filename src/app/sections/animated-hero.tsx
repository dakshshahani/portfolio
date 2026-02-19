"use client"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

export function InteractiveGridPatternDemo() {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="relative h-[90vmin] w-[100vmin]">
        <InteractiveGridPattern
          className={cn(
            "border-0",
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(60%_60%_at_50%_50%,black_60%,transparent_100%)]",
            "skew-y-12 opacity-70"
          )}
          squaresClassName="stroke-foreground/40"
          text="Daksh Shahani"
          letterFadeDelay={1500}
        />
      </div>
    </section>
  )
}
