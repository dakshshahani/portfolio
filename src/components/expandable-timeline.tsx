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
  const [imageWidth, setImageWidth] = useState<number>(600);
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
             className="fixed inset-0 bg-[var(--overlay)] h-full w-full z-10"
           />
        )}
      </AnimatePresence>

       {/* Expanded Modal */}
       <AnimatePresence>
         {active && typeof active === "object" ? (
           <div className="fixed inset-0 grid place-items-center z-[100]">
             {(() => {
               const activeIndex = experiences.findIndex((exp) => exp === active);
               return (
                 <>
                   <motion.button
                     key={`button-${activeIndex}-${id}`}
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
                      className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-secondary rounded-full h-6 w-6"
                     onClick={() => setActive(null)}
                   >
                     <CloseIcon />
                   </motion.button>
                    <motion.div
                      layoutId={`card-${activeIndex}-${id}`}
                      ref={ref}
                      className="h-full md:h-fit md:max-h-[90%] flex flex-col bg-card sm:rounded-3xl overflow-hidden"
                      style={{ width: `${imageWidth}px`, maxWidth: '90vw' }}
                    >
                       {/* Image Header */}
                       <motion.div layoutId={`image-${activeIndex}-${id}`} className="flex items-center justify-center min-h-[200px]">
                         <img
                           src={active.src}
                           alt={active.title}
                           onLoad={(e) => {
                             const img = e.currentTarget;
                             setImageWidth(img.offsetWidth);
                           }}
                           className="w-full sm:rounded-tr-lg sm:rounded-tl-lg object-contain object-top"
                         />
                     </motion.div>

                     <div>
                        {/* Title, Company, Location, Date */}
                        <div className="flex justify-between items-start p-4 gap-4">
                         <div className="flex-1">
<motion.h3
                              layoutId={`title-${activeIndex}-${id}`}
                              className="font-bold text-card-foreground text-2xl"
                            >
                              {active.title}
                            </motion.h3>
                            <motion.p
                              layoutId={`company-${activeIndex}-${id}`}
                              className="text-card-foreground/70 text-sm"
                            >
                             {active.company} • {active.location}
                           </motion.p>
                         </div>

                          {/* Date Badge */}
                          <div className="px-4 py-2 bg-secondary rounded-full whitespace-nowrap">
                            <p className="text-xs font-semibold text-secondary-foreground">
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
                            className="text-card-foreground/70 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                          >
                           {typeof active.content === "function"
                             ? active.content()
                             : active.content}
                         </motion.div>
                       </div>
                     </div>
                   </motion.div>
                 </>
               );
             })()}
           </div>
         ) : null}
       </AnimatePresence>

      {/* Timeline List View */}
      <div className="max-w-xl mx-auto w-full relative">
         {/* Timeline Line */}
         <div className="absolute left-3 top-0 bottom-0 w-1 bg-border" />

        {/* Timeline Items */}
        <div className="space-y-6 pl-16">
           {experiences.map((exp, index) => (
              <motion.div
                key={`${index}-${exp.title}-${id}`}
                layoutId={`card-${index}-${id}`}
                onClick={() => setActive(exp)}
                className="group relative p-4 flex flex-col md:flex-row justify-between items-start hover:bg-surface-hover dark:hover:bg-surface-hover rounded-xl cursor-pointer -ml-16 pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 rounded-full bg-primary border-2 border-background" style={{ left: '14px', top: '24px', transform: 'translate(-50%, -50%)' }} />

               {/* Content */}
               <div className="flex gap-4 flex-col md:flex-row flex-1 items-start md:items-center justify-between w-full">
                 <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${index}-${id}`}
                      className="font-medium text-foreground group-hover:text-muted-foreground text-left"
                    >
                     {exp.title}
                   </motion.h3>
                    <motion.p
                      layoutId={`company-${index}-${id}`}
                      className="text-sm text-muted-foreground group-hover:text-foreground"
                    >
                     {exp.company}
                   </motion.p>
                 </div>
                 {/* Thumbnail Image */}
                 <motion.img
                   layoutId={`thumbnail-${index}-${id}`}
                   src={exp.logo}
                   alt={exp.title}
                   width={60}
                   height={60}
                   className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                 />
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
      className="h-4 w-4 text-card-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
