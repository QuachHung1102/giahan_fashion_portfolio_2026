"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import Anh, { type VungCat } from "@/components/Anh";
import KhungTiLe, { dat } from "@/components/KhungTiLe";

const hoSo = [
  ["Age", "17"],
  ["Sign", "Libra"],
  ["Like", "eating, romance, singing"],
  ["Dislike", "onion, bad hair days"],
];

type MonDo = {
  nhan: string;
  /** which thoughts this one summons. the last three are just pretty */
  mo?: number;
  hop: readonly [x: number, y: number, rong: number, cao: number];
  xoay?: number;
  bo?: boolean;
  cat?: VungCat;
  bienDoi?: string;
};

// every icon is a window onto the same sticker sheet, cut where the designer cut it
const phuKien: MonDo[] = [
  { nhan: "Lipstick", mo: 0, hop: [25.1, 19.9, 53.9, 112], xoay: -16.59, cat: [2337.74, 899.88, -252.3, -589.06] },
  { nhan: "Handbag", mo: 1, hop: [27, 11, 80, 107], bo: true, cat: [795.45, 479.45, -463.99, -304.78] },
  { nhan: "Glasses", mo: 2, hop: [14, 27, 107, 69], cat: [683.59, 843.37, -557.94, -13.46] },
  {
    nhan: "Sleep mask",
    hop: [25.5, 22, 91.1, 72.7],
    xoay: 9.12,
    bo: true,
    bienDoi: "translate(-654.9%, 215.28%) matrix(7.2778, -2.6942, 2.723, 7.3556, 0, 0)",
  },
  { nhan: "Bow", hop: [42.1, 6, 90.6, 99.4], xoay: 17.52, cat: [1221.75, 890.07, -209.89, -620.5] },
  { nhan: "Necklace", hop: [30, 30, 79, 73], cat: [1199.09, 1020.93, -366.28, -33.42] },
];

type LoiNghi = {
  tren: ReactNode;
  duoi: ReactNode;
  /** where the top line starts: the three-liner sits higher than the one-liners */
  yTren: number;
};

type Props = {
  // lettering and clouds arrive ready-made from the server
  ten: ReactNode;
  tieuDePhuKien: ReactNode;
  mayTren: ReactNode;
  mayDuoi: ReactNode;
  loiNghi: LoiNghi[];
};

const doiChu = {
  initial: { opacity: 0, scale: 0.5, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.5, filter: "blur(6px)" },
  transition: { duration: 0.2 },
};

export default function SanKhau({ ten, tieuDePhuKien, mayTren, mayDuoi, loiNghi }: Props) {
  const [chon, datChon] = useState(0);
  const bupBe = useRef<HTMLDivElement>(null);
  const nghi = loiNghi[chon];

  const doi = (so: number) => {
    datChon(so);
    // on a phone the doll may be off screen. bring her back so the tap visibly does something
    bupBe.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <main className="mot-man flex min-h-dvh flex-col pt-(--nav) lg:justify-center">
      <div className="relative mx-auto w-full max-lg:flex max-lg:max-w-520 max-lg:flex-col max-lg:items-center max-lg:gap-28 max-lg:px-16 max-lg:py-28 lg:h-958">
        <section className="w-373.5 max-lg:w-full lg:absolute lg:top-98 lg:left-(--le)">
          <h1 className="flex h-68 animate-truot items-center bo-10 bg-hong pl-31.75 text-white">{ten}</h1>
          <dl className="bong mt-16 animate-truot bo-10 bg-hong-kem px-31.75 py-29.75 co-20 leading-[1.2] text-hong-dam [animation-delay:120ms] lg:h-156.5">
            {hoSo.map(([nhan, giaTri]) => (
              <div key={nhan}>
                <dt className="inline font-bold">{nhan}:</dt> <dd className="inline">{giaTri}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-label="Accessories"
          className="w-302 max-lg:order-last max-lg:w-full lg:absolute lg:top-98 lg:right-(--le)"
        >
          <h2 className="bong grid h-68 animate-truot place-items-center bo-10 bg-hong text-white [--tu:60px]">
            {tieuDePhuKien}
          </h2>
          <ul className="mt-47 grid grid-cols-[repeat(2,auto)] justify-start gap-x-30 gap-y-36 pl-6 max-lg:mt-24 max-lg:grid-cols-3 max-lg:justify-normal max-lg:gap-20 max-lg:pl-0">
            {phuKien.map((mon, i) => (
              <li
                key={mon.nhan}
                className="animate-bat lg:w-133"
                style={{ animationDelay: `${350 + i * 70}ms` }}
              >
                <PhuKien mon={mon} dangChon={mon.mo === chon} khiBam={doi} />
              </li>
            ))}
          </ul>
        </section>

        {/* doll, clouds and the big pink button. drawn last: the cloud overlaps her name tag */}
        <div
          ref={bupBe}
          className="scroll-mt-(--nav) max-lg:w-full lg:absolute lg:top-0 lg:left-1/2 lg:w-551.25 lg:-translate-x-1/2"
        >
          <KhungTiLe rong={551.25} className="aspect-[551.25/895]">
            <span style={dat(80.1, 757.4, 391, 84.9)} className="animate-tho rounded-[50%] bg-xanh-may" />
            <div style={dat(168, 33.4, 215.2, 788.5)} className="bup-be">
              <Anh
                nguon="/images/home/gia-han.png"
                moTa="Gia Han in her school uniform, hands behind her back"
                cat={[244.31, 100, -70.23, 0]}
                uuTien
                className="size-full"
              />
            </div>

            <div
              style={{ ...dat(311.8, 647, 219, 143.8), "--tre": "650ms", "--tre-noi": "1.6s" } as CSSProperties}
              className="may origin-top-left text-hong-dam"
            >
              <span key={chon} className="block size-full animate-nhun">
                {mayDuoi}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={chon} style={dat(49, 66, 122, 20)} {...doiChu}>
                  {nghi.duoi}
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              style={{ ...dat(0, 23.4, 226, 177.1), "--tre": "500ms", "--tre-noi": "1.1s" } as CSSProperties}
              className="may origin-bottom text-hong-dam"
            >
              <span key={chon} className="block size-full animate-nhun">
                {mayTren}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={chon} style={dat(51, nghi.yTren - 23.4, 122, 60)} {...doiChu}>
                  {nghi.tren}
                </motion.div>
              </AnimatePresence>
            </div>

            <Link
              href="/unbox"
              style={dat(170.2, 822, 210.8, 65)}
              className="nut-unbox bong grid place-items-center bo-7 bg-hong-dam co-37 leading-none font-bold text-white"
            >
              Unbox
            </Link>
          </KhungTiLe>
        </div>
      </div>
    </main>
  );
}

function PhuKien({ mon, dangChon, khiBam }: { mon: MonDo; dangChon: boolean; khiBam: (so: number) => void }) {
  const [x, y, rong, cao] = mon.hop;
  const ve = (
    <KhungTiLe rong={133} className="aspect-square">
      <span className="vien-4 bong absolute inset-0 overflow-hidden rounded-full border-hong">
        <Anh nguon="/images/home/checker-pink.png" uuTien className="size-full" />
      </span>
      <span style={dat(x, y, rong, cao, mon.xoay)}>
        <Anh
          nguon="/images/home/accessories-sheet.png"
          cat={mon.cat}
          bienDoi={mon.bienDoi}
          className={`size-full ${mon.bo ? "bo-30" : ""}`}
        />
      </span>
    </KhungTiLe>
  );

  // the bow, the mask and the necklace are window dressing
  if (mon.mo === undefined) return <div aria-hidden>{ve}</div>;

  return (
    <button
      type="button"
      aria-label={mon.nhan}
      aria-pressed={dangChon}
      onClick={() => khiBam(mon.mo!)}
      className="mon-do block w-full cursor-pointer"
    >
      {ve}
    </button>
  );
}
