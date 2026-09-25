"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { Experience } from "@/types/experience";

interface ExpandableTimelineProps {
  experiences: Experience[];
}

export default function ExpandableTimeline({
  experiences,
}: ExpandableTimelineProps) {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <>
      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[90] bg-[var(--overlay)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-[100] grid max-h-[85vh] w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-card shadow-lg outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          >
            {active && (
              <motion.div
                key={`${active.company}-${active.title}`}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative flex flex-col"
              >
                <div className={`relative h-48 w-full shrink-0 overflow-hidden rounded-t-3xl sm:h-60 ${active.srcFit === "contain" ? "bg-white" : ""}`}>
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className={active.srcFit === "contain" ? "object-contain p-8" : "object-cover"}
                  />
                </div>

                <div className="flex items-start justify-between gap-4 p-4">
                  <div className="flex-1">
                    <Dialog.Title className="text-2xl font-bold text-card-foreground">
                      {active.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-card-foreground/70">
                      {active.company} • {active.location}
                    </Dialog.Description>
                  </div>

                  <div className="whitespace-nowrap rounded-full bg-secondary px-4 py-2">
                    <p className="text-xs font-semibold text-secondary-foreground">
                      {active.startDate} - {active.endDate}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-10 pt-4 text-xs text-card-foreground/70 md:text-sm lg:text-base">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>

                <Dialog.Close
                  aria-label="Close"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-opacity hover:opacity-80"
                >
                  <X className="h-4 w-4" />
                </Dialog.Close>
              </motion.div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Timeline List View */}
      <div className="relative mx-auto w-full max-w-xl">
        {/* Timeline Line */}
        <div className="absolute bottom-0 left-2 top-0 w-1 bg-border" />

        {/* Timeline Items */}
        <div className="space-y-6 pl-12">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.title}-${exp.startDate}`}
              role="button"
              tabIndex={0}
              onClick={() => setActive(exp)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(exp);
                }
              }}
              className="group relative -ml-12 cursor-pointer rounded-xl p-4 pl-12 outline-none transition-colors hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-ring dark:hover:bg-surface-hover"
            >
              {/* Timeline Dot — plain element, never part of any layout animation so it stays crisp */}
              <div className="absolute h-4 w-4 rounded-full border-2 border-background bg-primary" style={{ left: '10px', top: '24px', transform: 'translate(-50%, -50%)' }} />

              {/* Content */}
              <div className="flex w-full flex-1 flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex-1">
                  <h3 className="text-left font-medium text-foreground group-hover:text-muted-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-left text-sm text-muted-foreground group-hover:text-foreground">
                    {exp.company}
                  </p>
                </div>
                <div className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg ${exp.srcFit === "contain" ? "bg-white" : ""}`}>
                  <Image
                    src={exp.logo}
                    alt={exp.title}
                    fill
                    sizes="64px"
                    className={`rounded-lg ${exp.srcFit === "contain" ? "object-contain p-1" : "object-cover"}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
