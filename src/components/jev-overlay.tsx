"use client";

import { useEffect } from "react";

/**
 * JevOverlay — gaze + voice highlight bridge. Only activates inside the
 * jev-end harness iframe (window.self !== window.top), so direct visits
 * to the portfolio are untouched.
 *
 * Child -> parent: posts {type:'jev-pointer', x, y, over} on mousemove
 *   (this is the "gaze" stream; a camera will replace the mouse later).
 * Parent -> child: {type:'jev-highlight', id} outlines a component,
 *   {type:'jev-flash', id} flashes it green when a Jev decision fires.
 */
export function JevOverlay() {
  useEffect(() => {
    if (window.self === window.top) return;

    const dot = document.createElement("div");
    dot.id = "jev-gaze-dot";
    document.body.appendChild(dot);

    let hoverEl: Element | null = null;
    let selected: Element | null = null;

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const el = document
        .elementFromPoint(e.clientX, e.clientY)
        ?.closest?.("[data-jevid]");
      if (el !== hoverEl) {
        hoverEl?.classList.remove("jev-gaze-hover");
        hoverEl = el ?? null;
        hoverEl?.classList.add("jev-gaze-hover");
      }
      window.parent.postMessage(
        {
          type: "jev-pointer",
          x: Math.round(e.clientX),
          y: Math.round(e.clientY),
          over: (el as HTMLElement)?.dataset?.jevid || "none",
        },
        "*"
      );
    };

    const onMsg = (e: MessageEvent) => {
      const d = e.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "jev-highlight") {
        selected?.classList.remove("jev-gaze-selected");
        selected =
          d.id && d.id !== "none"
            ? document.querySelector(`[data-jevid="${d.id}"]`)
            : null;
        selected?.classList.add("jev-gaze-selected");
        selected?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
      if (d.type === "jev-flash" && d.id) {
        const el = document.querySelector(`[data-jevid="${d.id}"]`);
        el?.classList.add("jev-gaze-fired");
        setTimeout(() => el?.classList.remove("jev-gaze-fired"), 1200);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("message", onMsg);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("message", onMsg);
      hoverEl?.classList.remove("jev-gaze-hover");
      selected?.classList.remove("jev-gaze-selected");
      dot.remove();
    };
  }, []);

  return null;
}
