"use client";

import { motion, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

const loXo = { damping: 30, stiffness: 100, mass: 2 };

type Props = {
  children: ReactNode;
  className?: string;
  /** degrees at the very edge */
  doNghieng?: number;
  phongTo?: number;
};

// A card that leans toward the cursor. The spring is React Bits' TiltedCard; the tooltip is gone
// and it wraps whatever you hand it instead of a single image.
export default function TheNghieng({ children, className = "", doNghieng = 12, phongTo = 1.05 }: Props) {
  const khung = useRef<HTMLDivElement>(null);
  const xoayX = useSpring(0, loXo);
  const xoayY = useSpring(0, loXo);
  const co = useSpring(1, loXo);

  // mouse only: a finger has no hover, and a stuck tilt looks broken
  const nghieng = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || !khung.current) return;
    const hop = khung.current.getBoundingClientRect();
    xoayX.set(((e.clientY - hop.top - hop.height / 2) / (hop.height / 2)) * -doNghieng);
    xoayY.set(((e.clientX - hop.left - hop.width / 2) / (hop.width / 2)) * doNghieng);
    co.set(phongTo);
  };

  const thang = () => {
    xoayX.set(0);
    xoayY.set(0);
    co.set(1);
  };

  return (
    <div ref={khung} className={`perspective-[800px] ${className}`} onPointerMove={nghieng} onPointerLeave={thang}>
      <motion.div className="size-full transform-3d" style={{ rotateX: xoayX, rotateY: xoayY, scale: co }}>
        {children}
      </motion.div>
    </div>
  );
}
