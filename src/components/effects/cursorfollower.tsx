"use client";

import React, { useEffect, useState } from "react";

export function CursorFollower(): React.ReactElement {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    >
      <div className="w-5 h-5 rounded-full bg-blue-500/50 mix-blend-difference transition-transform duration-75 ease-out" />
    </div>
  );
}