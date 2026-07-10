"use client"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

export function InteractiveGridPatternDemo() {
  return (
    <section className="bg-background relative hidden md:flex w-full items-center justify-center overflow-hidden py-10 md:py-20">
      {/* Desktop - always rendered but hidden on mobile */}
       <div className="relative md:block h-[90vmin] w-[100vmin]">
         <InteractiveGridPattern
          width={100}
          height={100}
          squares={[30,30]}
          rowOffset={-1}
          colOffset={1}
          className={cn(
            "border-0",
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(45%_45%_at_50%_50%,black_60%,transparent_100%)]",
            "skew-y-12 opacity-70",
            "[transform-origin:center] scale-125"
          )}
          squaresClassName="stroke-foreground/40"
        />
       </div>
    </section>
  )
}
