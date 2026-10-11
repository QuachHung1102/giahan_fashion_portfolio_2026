"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const mucLuc = [
  { nhan: "Academics", duong: "/academic" },
  { nhan: "Community", duong: "/community" },
  { nhan: "Arts", duong: "/art" },
];

type Props = {
  // lettering, handed over ready-made by the server
  logo: ReactNode;
  trangChu: ReactNode;
  gioiThieu: ReactNode;
};

export default function ThanhDieuHuong({ logo, trangChu, gioiThieu }: Props) {
  const [mo, datMo] = useState(false);
  const hop = useRef<HTMLDivElement>(null);

  // click anywhere else or hit Esc and the menu minds its own business
  useEffect(() => {
    if (!mo) return;
    const dong = (e: PointerEvent | KeyboardEvent) => {
      const thoat = e instanceof KeyboardEvent ? e.key === "Escape" : !hop.current?.contains(e.target as Node);
      if (thoat) datMo(false);
    };
    document.addEventListener("pointerdown", dong);
    document.addEventListener("keydown", dong);
    return () => {
      document.removeEventListener("pointerdown", dong);
      document.removeEventListener("keydown", dong);
    };
  }, [mo]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-66 bg-hong text-white"
      style={{ "--spacing": "var(--un)" } as CSSProperties}
    >
      <nav aria-label="Main" className="flex h-full items-stretch px-(--le)">
        <Link href="/" aria-label="Han, back to home" className="flex items-center">
          {logo}
        </Link>
        <span className="grow" />
        <Link href="/" className="flex items-center px-20 transition-opacity duration-300 hover:opacity-70">
          {trangChu}
        </Link>
        <div ref={hop} className="relative">
          <button
            type="button"
            aria-expanded={mo}
            aria-controls="muc-luc"
            onClick={() => datMo(!mo)}
            className={`flex h-full w-170 cursor-pointer items-center justify-center gap-9 transition-colors duration-300 ease-in hover:bg-white hover:text-hong ${mo ? "bg-white text-hong" : ""}`}
          >
            {gioiThieu}
            {/* points up when shut, down when open. yes, backwards. that's the design */}
            <svg
              viewBox="0 0 12 9"
              aria-hidden
              className={`h-9 w-12 fill-current transition-transform duration-300 ${mo ? "rotate-180" : ""}`}
            >
              <path d="M6 0l6 9H0z" />
            </svg>
          </button>
          <ul
            id="muc-luc"
            inert={!mo}
            className={`bong absolute top-76 left-1/2 flex w-211 origin-top -translate-x-1/2 flex-col gap-20 bo-11 bg-white px-40 py-20 transition-[opacity,scale] duration-300 ease-out ${mo ? "" : "scale-90 opacity-0"}`}
          >
            {mucLuc.map((muc) => (
              <li key={muc.duong}>
                <Link
                  href={muc.duong}
                  onClick={() => datMo(false)}
                  className="block co-20 leading-[1.2] font-bold text-hong transition-opacity duration-300 hover:opacity-70"
                >
                  {muc.nhan}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
