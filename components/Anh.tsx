import Image from "next/image";

/** crop in % of the frame: [width, height, left, top] - copied from Figma's crop box */
export type VungCat = readonly [rong: number, cao: number, trai: number, tren: number];

type Props = {
  nguon: string;
  /** leave empty for stickers and other eye candy */
  moTa?: string;
  cat?: VungCat;
  /** for the one sticker the designer cropped at an angle */
  bienDoi?: string;
  /** width / height, when the frame has no size of its own */
  tiLe?: number;
  /** above the fold: load now instead of lazily */
  uuTien?: boolean;
  /** gentle zoom on hover */
  phong?: boolean;
  className?: string;
};

// The original file, untouched. Cropping is CSS only, so swapping a photo later is a file drop.
export default function Anh({ nguon, moTa = "", cat, bienDoi, tiLe, uuTien = false, phong = false, className = "" }: Props) {
  // next/image with fill refuses a custom size, so the crop lives on a box around it
  const khungCat = cat
    ? { width: `${cat[0]}%`, height: `${cat[1]}%`, left: `${cat[2]}%`, top: `${cat[3]}%` }
    : bienDoi
      ? { inset: 0, transform: bienDoi, transformOrigin: "0 0" }
      : undefined;
  const hinh = <Image src={nguon} alt={moTa} fill loading={uuTien ? "eager" : "lazy"} draggable={false} />;
  return (
    <span className={`anh ${phong ? "phong" : ""} ${className}`} style={tiLe ? { aspectRatio: tiLe } : undefined}>
      {khungCat ? (
        <span className="absolute" style={khungCat}>
          {hinh}
        </span>
      ) : (
        hinh
      )}
    </span>
  );
}
