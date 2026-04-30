"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Experience } from "@/types/experience";

interface ExpandableTimelineProps {
  experiences: Experience[];
}

export default function ExpandableTimeline({
  experiences,
}: ExpandableTimelineProps) {
  const [active, setActive] = useState<Experience | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Modal Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
            >
              {/* Image Header */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                {/* Title, Company, Location, Date */}
                <div className="flex justify-between items-start p-4 gap-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`company-${active.company}-${id}`}
                      className="text-neutral-600 text-sm"
                    >
                      {active.company} • {active.location}
                    </motion.p>
                  </div>

                  {/* Date Badge */}
                  <div className="px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap">
                    <p className="text-xs font-semibold text-black">
                      {active.startDate} - {active.endDate}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Timeline List View */}
      <div className="max-w-xl mx-auto w-full relative">
        {/* Timeline Line */}
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-neutral-300" />

        {/* Timeline Items */}
        <div className="space-y-6 pl-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${id}`}
              layoutId={`card-${exp.title}-${id}`}
              onClick={() => setActive(exp)}
              className="group relative p-4 flex flex-col md:flex-row justify-between items-start hover:bg-gray-200 rounded-xl cursor-pointer -ml-16 pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-neutral-400 border-2 border-white" style={{ left: '14px', top: '24px', transform: 'translate(-50%, -50%)' }} />

              {/* Content */}
              <div className="flex gap-4 flex-col md:flex-row flex-1">
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${exp.title}-${id}`}
                    className="font-medium text-black group-hover:text-neutral-600 text-left"
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`company-${exp.company}-${id}`}
                    className="text-sm text-neutral-600 group-hover:text-neutral-700"
                  >
                    {exp.company}
                  </motion.p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
