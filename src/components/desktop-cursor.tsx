"use client"

import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export function DesktopCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if it's a touch device or small screen
    const checkDesktop = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsDesktop(!hasTouch && !isSmallScreen);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  if (!isDesktop) return null;

  return <SmoothCursor />;
}
