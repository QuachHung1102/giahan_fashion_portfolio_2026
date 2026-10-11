"use client";

import type { CSSProperties, ReactNode } from "react";
import { useDaThay } from "@/components/useDaThay";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** seconds to wait, for staggering neighbours */
  tre?: number;
};

// Rises into place when you scroll to it, once. nobody likes things re-animating on the way back up.
// The rise is a CSS animation on purpose: it runs off the main thread, so it keeps gliding
// while the browser is busy decoding a ten-megabyte photo.
export default function HienDan({ children, className = "", style, tre = 0 }: Props) {
  const [the, thay] = useDaThay<HTMLDivElement>("0px 0px -12% 0px");
  return (
    <div ref={the} className={`${thay ? "animate-len" : "opacity-0"} ${className}`} style={{ ...style, animationDelay: `${tre}s` }}>
      {children}
    </div>
  );
}
