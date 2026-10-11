import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Anh, { type VungCat } from "@/components/Anh";
import ChuVe from "@/components/ChuVe";
import HienDan from "@/components/HienDan";
import KhungVideo from "@/components/KhungVideo";

export const metadata: Metadata = {
  title: "Art",
  description: "Glee Ams, The Classic, ON STAGE and G'LAMS': Gia Han's life on stage.",
};

const tenMuc = "co-24 leading-none font-semibold text-xanh-tim lg:co-28 lg:leading-[0.643]";
const doanVan = "co-17 leading-[1.15] lg:co-18 lg:leading-none";

type Hinh = { nguon: string; moTa: string; rong: number; cao: number; cat?: VungCat; som?: boolean };

// a row of photos that share one height, however wide each one is. doc = stack them on phones
function HangAnh({ hinh, bo = true, doc = false, className = "" }: { hinh: Hinh[]; bo?: boolean; doc?: boolean; className?: string }) {
  return (
    <div className={`flex ${doc ? "flex-col lg:flex-row" : ""} ${className}`}>
      {hinh.map((h, i) => (
        <HienDan
          key={h.nguon}
          tre={i * 0.12}
          className={doc ? "lg:flex-(--chia)" : "flex-(--chia)"}
          style={{ "--chia": `${h.rong} 1 0` } as CSSProperties}
        >
          <Anh
            nguon={h.nguon}
            moTa={h.moTa}
            cat={h.cat}
            tiLe={h.rong / h.cao}
            uuTien={h.som}
            phong
            className={bo ? "bo-10" : ""}
          />
        </HienDan>
      ))}
    </div>
  );
}

export default function TrangNgheThuat() {
  return (
    <main className="relative pt-(--nav) pb-48 lg:pb-72.5">
      {/* polka dots instead of gingham on this page */}
      <div aria-hidden className="nen-cham">
        <div />
      </div>

      <div className="bong relative mx-12 mt-24 bg-white px-14 pt-28 pb-28 lg:mx-auto lg:mt-37.75 lg:w-1294.5 lg:px-27.25 lg:pt-48.25 lg:pb-46">
        <h1 className="mx-auto w-fit text-hong max-lg:[--co:0.62]">
          <ChuVe ten="ticket" nhay />
        </h1>

        <section className="mt-28 flex flex-col gap-16 lg:mt-54 lg:flex-row lg:gap-0">
          <HangAnh
            className="gap-8 lg:w-908.75 lg:shrink-0 lg:gap-10.5"
            hinh={[
              {
                nguon: "/images/art/glee-duet.jpg",
                moTa: "Gia Han in a white dress singing a duet at a Glee Ams show",
                rong: 316.4,
                cao: 367.9,
                cat: [116.29, 100, 0, 0],
                som: true,
              },
              {
                nguon: "/images/art/glee-acoustic.jpg",
                moTa: "An acoustic set: Gia Han singing between a cajon player and a guitarist",
                rong: 582,
                cao: 367.9,
                cat: [100, 105.45, 0, 0],
                som: true,
              },
            ]}
          />
          <HienDan tre={0.24} className="lg:ml-29.25 lg:w-303 lg:pt-82.5">
            <h2 className={tenMuc}>Glee Ams</h2>
            <p className={`${doanVan} mt-8 lg:mt-11`}>
              Glee Ams is the largest music club at Hanoi-Amsterdam High School for the Gifted, hosting two annual
              Travezia shows, smaller musical projects, and guest performances at events across the city. This is my
              first home in high school!
            </p>
          </HienDan>
        </section>

        <section className="relative mt-18 flex flex-col gap-16 bg-hong-nhat p-16 lg:mt-18.5 lg:block lg:h-437 lg:p-0">
          <HienDan className="lg:absolute lg:top-145 lg:left-30.5 lg:w-480.5">
            <h2 className="co-26 leading-none font-semibold text-white uppercase lg:co-40">
              Chưa bao giờ
              <br />
              (by Trung Quân)
              <br />
              Glee Ams live cover
            </h2>
          </HienDan>
          <HienDan tre={0.12} className="aspect-[695.8/389.2] lg:absolute lg:top-24.5 lg:right-23.25 lg:w-695.75">
            <KhungVideo
              ma="J3AZSgxRYTw"
              tieuDe="Chưa Bao Giờ (Trung Quân), Glee Ams live cover"
              anhBia="/images/art/video-cover.png"
            />
          </HienDan>
        </section>

        <section className="mt-40 lg:mt-78.75">
          <HienDan className="lg:w-615">
            <h2 className={tenMuc}>The Classic</h2>
            <p className={`${doanVan} mt-8 lg:mt-11`}>
              My first high school summer could not have been more memorable with The Classics and their Concert! This
              annual event brings together opera singers, professional musicians, and high school students from across
              Hanoi to create a concert that feels both intimate and warmly welcoming, yet remarkably professional
            </p>
          </HienDan>
          <HangAnh
            doc
            className="mt-16 gap-8 lg:mt-23 lg:gap-10"
            hinh={[
              {
                nguon: "/images/art/classic-choir.jpg",
                moTa: "A choir in black and white facing their conductor on a wooden stage",
                rong: 615,
                cao: 398,
                cat: [103.54, 100, -3.54, 0],
              },
              {
                nguon: "/images/art/classic-piano.jpg",
                moTa: "Singers beside a grand piano in a concert hall",
                rong: 615,
                cao: 398,
                cat: [100, 103.04, 0, 0],
              },
            ]}
          />
        </section>

        <section className="mt-40 lg:mt-56.5">
          <HienDan className="lg:w-615">
            <h2 className={`${tenMuc} flex flex-wrap gap-x-17 gap-y-10`}>
              ON STAGE
              <a
                href="https://youtu.be/kLJcXGPTGmc?si=osFpy7PPcYY1kZ1N"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-opacity duration-300 hover:opacity-60"
              >
                [My performance]
              </a>
            </h2>
            <p className={`${doanVan} mt-8 lg:mt-11`}>
              ON STAGE is where that actress grew. Here, I stepped into a completely different character with newfound
              confidence - a young nurse returning to her hometown - in Vietnam’s largest high school student theater
              program. The production was later broadcast on national television by VTV
            </p>
          </HienDan>
          <HangAnh
            doc
            className="mt-16 gap-8 lg:mt-23 lg:gap-10"
            hinh={[
              {
                nguon: "/images/art/on-stage-ensemble.jpg",
                moTa: "The cast mid-scene under deep blue stage light",
                rong: 615,
                cao: 414.7,
                cat: [101.17, 100, -1.17, 0],
              },
              {
                nguon: "/images/art/on-stage-wide.jpg",
                moTa: "The whole stage from the back of the hall during ON STAGE",
                rong: 615,
                cao: 414.7,
                cat: [101.17, 100, -1.17, 0],
              },
            ]}
          />
        </section>

        <section className="mt-40 lg:mt-56.5">
          <HienDan className="lg:w-615">
            <h2 className={tenMuc}>G’LAMS’</h2>
            <p className={`${doanVan} mt-8 lg:mt-11`}>
              G’LAMS’ Ba Hồi Hồn Vương was where my stage journey began. After a year of training, I stepped onto the
              stage to embody the spirit of a H’Mông girl - a character who gave my earliest days as an actress a soul
            </p>
          </HienDan>
          <HangAnh
            bo={false}
            doc
            className="mt-16 gap-8 lg:mt-18 lg:gap-7.75"
            hinh={[
              {
                nguon: "/images/art/glams-fog.jpg",
                moTa: "Actors standing in stage fog under a single beam of light",
                rong: 384.5,
                cao: 256,
              },
              {
                nguon: "/images/art/glams-village.jpg",
                moTa: "Gia Han in costume with the cast in front of a painted village backdrop",
                rong: 455.6,
                cao: 256,
              },
              {
                nguon: "/images/art/glams-bedside.jpg",
                moTa: "A quiet bedside scene lit against a dark stage",
                rong: 384.5,
                cao: 256,
              },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
