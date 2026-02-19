"use client"

import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export function DesktopCursor() {
  // Start true to avoid flash on desktop, then hide on mobile after mount
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted) return null;
  if (!isDesktop) return null;

  return <SmoothCursor />;
}
