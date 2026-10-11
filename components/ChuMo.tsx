"use client";

import { useDaThay } from "@/components/useDaThay";

type Props = {
  chu: string;
  the?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** seconds between words */
  nhip?: number;
};

// Words drift down out of a blur, one after another. React Bits' BlurText, trimmed to what a
// headline needs, able to be an actual heading, and done in CSS so it never waits on the main thread.
export default function ChuMo({ chu, the: The = "h2", className = "", nhip = 0.12 }: Props) {
  const [tieuDe, thay] = useDaThay<HTMLHeadingElement & HTMLParagraphElement>("0px", 0.5);
  const tu = chu.split(" ");
  return (
    <The ref={tieuDe} className={className} aria-label={chu}>
      {tu.map((mot, i) => (
        <span
          key={i}
          aria-hidden
          className={`inline-block whitespace-pre ${thay ? "animate-mo" : "opacity-0"}`}
          style={{ animationDelay: `${i * nhip}s` }}
        >
          {i < tu.length - 1 ? `${mot} ` : mot}
        </span>
      ))}
    </The>
  );
}
