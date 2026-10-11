import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** artboard width this box was drawn at */
  rong: number;
  className?: string;
  children: ReactNode;
};

// A box that carries its own ruler: inside, spacing units are pixels of a `rong`-wide artboard,
// whatever size the box ends up on screen. Collages stay collages.
export default function KhungTiLe({ rong, className = "", children }: Props) {
  return (
    <div className={`khung-ti-le ${className}`} style={{ "--goc": rong } as CSSProperties}>
      <div>{children}</div>
    </div>
  );
}

/** pin something at artboard coordinates. rotation pivots on the top-left corner, like Figma */
export function dat(x: number, y: number, rong: number, cao: number, xoay = 0): CSSProperties {
  return {
    position: "absolute",
    left: `calc(var(--spacing) * ${x})`,
    top: `calc(var(--spacing) * ${y})`,
    width: `calc(var(--spacing) * ${rong})`,
    height: `calc(var(--spacing) * ${cao})`,
    ...(xoay ? { rotate: `${xoay}deg`, transformOrigin: "0 0" } : null),
  };
}
