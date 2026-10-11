import type { Metadata } from "next";
import Link from "next/link";
import Anh, { type VungCat } from "@/components/Anh";
import ChuVe from "@/components/ChuVe";
import KhungTiLe, { dat } from "@/components/KhungTiLe";
import TheNghieng from "@/components/TheNghieng";
import type { TenChu } from "@/data/lettering";

export const metadata: Metadata = {
  title: "Unbox",
  description: "Three boxes, three sides of Gia Han: academics, community and art.",
};

type Hop = {
  chu: TenChu;
  duong: string;
  nguon: string;
  moTa: string;
  /** where the cut-out sits inside the 260.7 x 503 card */
  khung: readonly [x: number, y: number, rong: number, cao: number];
  cat: VungCat;
  bo?: boolean;
};

const cacHop: Hop[] = [
  {
    chu: "academics",
    duong: "/academic",
    nguon: "/images/unbox/academics.png",
    moTa: "Gia Han mid-speech as a Model UN delegate",
    khung: [10.8, 0, 239, 503],
    cat: [231.61, 145.06, -58.14, -22.53],
  },
  {
    chu: "community",
    duong: "/community",
    nguon: "/images/unbox/community.png",
    moTa: "Gia Han smiling while packing gifts",
    khung: [0, 64.7, 260.7, 438.3],
    cat: [312.44, 103.81, -120.66, -3.81],
    bo: true,
  },
  {
    chu: "art",
    duong: "/art",
    nguon: "/images/unbox/art.png",
    moTa: "Gia Han singing into a microphone",
    khung: [20, 64.7, 233.3, 438.3],
    cat: [211.31, 168.36, -59.69, -46.37],
  },
];

export default function TrangUnbox() {
  return (
    <main className="mot-man flex min-h-dvh flex-col pt-(--nav) lg:justify-center">
      <div className="flex w-full flex-col items-center px-16 py-40 lg:h-958 lg:p-0">
        <h1 className="text-hong max-lg:[--co:0.8] lg:mt-101">
          <ChuVe ten="explore" nhay />
        </h1>
        {/* one column on phones, three across from tablets up. the cards scale, so any width works */}
        <ul className="mt-32 grid justify-center gap-24 sm:w-full sm:max-w-720 sm:grid-cols-3 sm:gap-16 lg:mt-42 lg:flex lg:w-auto lg:max-w-none lg:gap-21">
          {cacHop.map((hop, i) => (
            <li key={hop.chu} className="animate-len" style={{ animationDelay: `${500 + i * 130}ms` }}>
              <TheNghieng className="w-300 sm:w-full lg:w-260.75">
                <Link href={hop.duong} className="bong block overflow-hidden bo-10 bg-hong text-white">
                  <KhungTiLe rong={260.7} className="aspect-[260.7/503]">
                    <ChuVe ten={hop.chu} className="absolute top-18 left-0" />
                    {/* the cut-out is pinned where the designer pinned it, head room and all */}
                    <span style={dat(...hop.khung)}>
                      <Anh
                        nguon={hop.nguon}
                        moTa={hop.moTa}
                        cat={hop.cat}
                        uuTien
                        className={`size-full ${hop.bo ? "bo-10" : ""}`}
                      />
                    </span>
                  </KhungTiLe>
                </Link>
              </TheNghieng>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
