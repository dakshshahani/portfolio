"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { ExpandableCard } from "@/types/expandable-card";

interface ExpandableCardListProps {
  cards: ExpandableCard[];
}

export default function ExpandableCardList({ cards }: ExpandableCardListProps) {
  const [active, setActive] = useState<ExpandableCard | null>(null);

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
                key={active.title}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative flex flex-col"
              >
                <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-t-3xl sm:h-72">
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <Dialog.Title className="text-2xl font-bold text-card-foreground">
                      {active.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-card-foreground/70">
                      {active.description}
                    </Dialog.Description>
                  </div>

                  <a
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground transition-colors hover:bg-primary/80 hover:text-primary-foreground"
                  >
                    View Github
                  </a>
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

      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        {cards.map((card) => (
          <li key={card.title}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActive(card)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(card);
                }
              }}
              className="group flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 outline-none transition-colors hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-ring md:flex-row dark:hover:bg-surface-hover"
            >
              <div className="flex flex-1 flex-col gap-4 md:flex-row">
                <div>
                  <h3 className="text-center font-medium text-foreground group-hover:text-muted-foreground md:text-left">
                    {card.title}
                  </h3>
                  <p className="text-center text-muted-foreground group-hover:text-foreground md:text-left">
                    {card.description}
                  </p>
                </div>
              </div>
              <span className="mt-4 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground transition-colors group-hover:bg-primary/80 group-hover:text-primary-foreground md:mt-0 dark:group-hover:bg-primary/90 dark:group-hover:text-primary-foreground">
                View Project
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
