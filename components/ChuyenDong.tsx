"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// one switch for everyone who asked their OS for less motion
export default function ChuyenDong({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
