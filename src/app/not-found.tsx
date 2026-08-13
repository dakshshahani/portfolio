"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Same skewed interactive grid as the hero, but showing the 404 */}
      <div className="relative h-[90vmin] w-[100vmin]">
        <InteractiveGridPattern
          width={100}
          height={100}
          squares={[30, 30]}
          rowOffset={-1}
          colOffset={1}
          line1="4 0 4"
          line2="Page Not Found"
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

      {/* Overlay message + CTA, matching the site's quiet minimal style */}
      <div className="relative z-10 -mt-[12vmin] flex flex-col items-center gap-5 text-center">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          This page went off the grid
        </p>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
