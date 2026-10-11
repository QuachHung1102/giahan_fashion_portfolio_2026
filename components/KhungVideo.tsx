"use client";

import { useState } from "react";
import Anh from "@/components/Anh";

type Props = {
  /** the bit after watch?v= */
  ma: string;
  tieuDe: string;
  anhBia: string;
};

// YouTube only moves in once you press play. until then it's a picture and a triangle,
// which is a few hundred KB of player nobody had to download
export default function KhungVideo({ ma, tieuDe, anhBia }: Props) {
  const [phat, datPhat] = useState(false);

  if (phat) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${ma}?autoplay=1&rel=0`}
        title={tieuDe}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="size-full bg-black"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => datPhat(true)}
      aria-label={`Play video: ${tieuDe}`}
      className="group relative block size-full cursor-pointer"
    >
      <Anh nguon={anhBia} phong className="size-full" />
      <svg
        viewBox="0 0 46.4 46.4"
        aria-hidden
        className="absolute top-1/2 left-1/2 size-46.5 -translate-1/2 animate-nhip fill-white drop-shadow-[0_2px_6px_rgb(0_0_0/0.5)]"
      >
        <path d="M46.4 23.2 0 46.4V0z" />
      </svg>
    </button>
  );
}
