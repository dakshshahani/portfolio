"use client"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

export function InteractiveGridPatternDemo() {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Mobile - always rendered but hidden on desktop */}
      <div className="relative h-[100svh] w-full md:hidden">
        <InteractiveGridPattern
          width={20}
          height={20}
          squares={[50, 36]}
          rowOffset={0}
          colOffset={-15}
          animate={false}
          className={cn(
            "border-0",
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(50%_35%_at_50%_50%,black_60%,transparent_100%)]",
            "skew-y-6 opacity-70"
          )}
          squaresClassName="stroke-foreground/40"
        />
      </div>

      {/* Desktop - always rendered but hidden on mobile */}
      <div className="relative hidden md:block h-[90vmin] w-[100vmin]">
        <InteractiveGridPattern
          squares={[30,30]}
          rowOffset={-5}
          colOffset={-2}
          className={cn(
            "border-0",
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(60%_60%_at_50%_50%,black_60%,transparent_100%)]",
            "skew-y-12 opacity-70"
          )}
          squaresClassName="stroke-foreground/40"
        />
      </div>
    </section>
  )
}
