import type { CSSProperties } from "react";
import Anh from "@/components/Anh";

type Props = {
  nguon: string;
  /** position + width + aspect. the sticker brings nothing but itself */
  className?: string;
  /** sway in degrees. 0 to sit still */
  lac?: number;
  /** seconds, so neighbours don't sway in sync like a boy band */
  tre?: number;
};

// a sticker: decorative, untouchable, slightly restless
export default function NhanDan({ nguon, className = "", lac = 3, tre = 0 }: Props) {
  return (
    <span aria-hidden className={`pointer-events-none absolute block ${className}`}>
      <span
        className={`block size-full ${lac ? "animate-lac" : ""}`}
        style={{ "--goc-lac": `${lac}deg`, animationDelay: `${-tre}s` } as CSSProperties}
      >
        <Anh nguon={nguon} className="size-full" />
      </span>
    </span>
  );
}
