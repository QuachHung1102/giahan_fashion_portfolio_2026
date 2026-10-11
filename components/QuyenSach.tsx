"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";

type Props = {
  /** exactly four: 1 and 4 lie flat, 2 and 3 are the two faces of the leaf that turns */
  trang: [ReactNode, ReactNode, ReactNode, ReactNode];
  className?: string;
};

const laManHinhLon = () => matchMedia("(width >= 64rem)").matches;

const trangGiay = "relative shrink-0 snap-center overflow-hidden bg-white max-lg:w-full lg:h-full lg:w-1/2";

// The scrapbook is a book. Wide screens get an open spread with one leaf that really turns;
// phones get a strip you swipe, because a spread at 390px is a postage stamp.
export default function QuyenSach({ trang, className = "" }: Props) {
  // wide screens: has the leaf been turned
  const [lat, datLat] = useState(false);
  // phones: which end of the strip we're at
  const [mep, datMep] = useState<"dau" | "giua" | "cuoi">("dau");
  const dai = useRef<HTMLDivElement>(null);

  const sang = (huong: 1 | -1) => {
    if (laManHinhLon()) return datLat(huong === 1);
    const hop = dai.current;
    if (!hop) return;
    // one step = a page plus the gap, so the scroll lands exactly on the next snap point
    const buoc = (hop.firstElementChild as HTMLElement).offsetWidth + parseFloat(getComputedStyle(hop).columnGap);
    const itChuyenDong = matchMedia("(prefers-reduced-motion: reduce)").matches;
    hop.scrollBy({ left: huong * buoc, behavior: itChuyenDong ? "auto" : "smooth" });
  };

  const theoDoi = () => {
    const hop = dai.current;
    if (!hop) return;
    const conLai = hop.scrollWidth - hop.clientWidth - hop.scrollLeft;
    datMep(hop.scrollLeft < 8 ? "dau" : conLai < 8 ? "cuoi" : "giua");
  };

  const bamPhim = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    // or the browser nudges the strip a few pixels on its own
    e.preventDefault();
    sang(e.key === "ArrowRight" ? 1 : -1);
  };

  // left half goes back, right half goes on, like a real one. phones swipe instead
  const bamTrang = (e: MouseEvent<HTMLDivElement>) => {
    if (!laManHinhLon()) return;
    const { left, width } = e.currentTarget.getBoundingClientRect();
    sang(e.clientX < left + width / 2 ? -1 : 1);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={dai}
        role="group"
        aria-roledescription="book"
        aria-label="More than I give, a four page scrapbook"
        tabIndex={0}
        onKeyDown={bamPhim}
        onScroll={theoDoi}
        onClick={bamTrang}
        className="sach dai-sach relative flex items-start gap-12 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:pb-8 lg:block lg:h-842 lg:w-1190 lg:cursor-pointer"
      >
        <div className={`${trangGiay} bong gay-trai lg:absolute lg:top-0 lg:left-0`}>{trang[0]}</div>
        {/* the leaf casts no shadow of its own on wide screens: the page lying under it already does */}
        <div data-lat={lat} className="to-sach max-lg:contents lg:absolute lg:top-0 lg:left-1/2 lg:z-10 lg:h-full lg:w-1/2">
          <div className={`${trangGiay} max-lg:bong gay-phai`}>{trang[1]}</div>
          <div className={`${trangGiay} max-lg:bong gay-trai`}>{trang[2]}</div>
        </div>
        <div className={`${trangGiay} bong gay-phai lg:absolute lg:top-0 lg:left-1/2`}>{trang[3]}</div>
      </div>

      <div className="mt-14 flex justify-center gap-20 lg:mt-0 lg:contents">
        <NutLat huong={-1} tatLon={!lat} tatNho={mep === "dau"} khiBam={sang} />
        <NutLat huong={1} tatLon={lat} tatNho={mep === "cuoi"} khiBam={sang} />
      </div>
    </div>
  );
}

type NutProps = {
  huong: 1 | -1;
  /** nothing left that way: on wide screens, on phones */
  tatLon: boolean;
  tatNho: boolean;
  khiBam: (huong: 1 | -1) => void;
};

function NutLat({ huong, tatLon, tatNho, khiBam }: NutProps) {
  return (
    <button
      type="button"
      aria-label={huong === 1 ? "Next page" : "Previous page"}
      onClick={() => khiBam(huong)}
      className={`bong grid size-48 cursor-pointer place-items-center rounded-full bg-hong text-white transition-[opacity,scale] duration-300 hover:scale-110 active:scale-90 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${huong === 1 ? "lg:-right-74" : "lg:-left-74"} ${tatLon ? "lg:pointer-events-none lg:opacity-30" : ""} ${tatNho ? "max-lg:pointer-events-none max-lg:opacity-30" : ""}`}
    >
      <svg viewBox="0 0 12 9" aria-hidden className={`h-12 w-16 fill-current ${huong === 1 ? "rotate-90" : "-rotate-90"}`}>
        <path d="M6 0l6 9H0z" />
      </svg>
    </button>
  );
}
