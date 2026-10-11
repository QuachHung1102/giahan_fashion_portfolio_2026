import type { CSSProperties } from "react";
import { chuVe, type Chu, type TenChu } from "@/data/lettering";

type Props = {
  ten: TenChu;
  /** words hop in one by one */
  nhay?: boolean;
  className?: string;
};

const phong = { dolly: "font-dolly font-normal", galano: "font-galano font-bold" };

// The designer's lettering in its own typefaces, boxed and sized in artboard pixels.
// Shrink it with --co (e.g. [--co:0.8]), recolour it with text-*.
export default function ChuVe({ ten, nhay = false, className = "" }: Props) {
  const chu: Chu = chuVe[ten];
  return (
    <span
      className={`chu-ve ${phong[chu.phong]} ${nhay ? "chu-nhay" : ""} ${className}`}
      style={
        {
          "--rong": chu.rong,
          "--cao": chu.cao,
          "--co-chu": chu.co,
          "--dong": chu.dong,
          "--gian": chu.gian,
          "--gian-tu": chu.gianTu,
          "--canh": chu.canh && "left",
        } as CSSProperties
      }
    >
      {/* whole words hop, not letters: a word keeps its kerning, and the spaces stay plain text */}
      {nhay
        ? chu.chu.split(/(\s+)/).map((manh, i) =>
            manh.trim() ? (
              <span key={i} style={{ "--i": i / 2 } as CSSProperties}>
                {manh}
              </span>
            ) : (
              manh
            ),
          )
        : chu.chu}
    </span>
  );
}
