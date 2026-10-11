import type { Metadata } from "next";
import Anh from "@/components/Anh";
import ChuMo from "@/components/ChuMo";
import HienDan from "@/components/HienDan";
import NhanDan from "@/components/NhanDan";

export const metadata: Metadata = {
  title: "Academics",
  description: "Model UN floors and Vietnam's toughest Geography competition, in Gia Han's own words.",
};

// shared type styles. sizes are the artboard's; phones get the smaller ones
const tieuDeLon = "co-32 leading-[1.2] font-bold tracking-[-0.01em] lg:co-70";
const tieuDe = "co-25 leading-none font-semibold lg:co-35";
const doanVan = "co-17 leading-[1.15] lg:co-18 lg:leading-none";

export default function TrangHocThuat() {
  return (
    // the envelope hangs 201.5 below the last panel. the artboard just cuts it off; here it gets 37 of air instead
    <main className="pt-(--nav) pb-150 lg:pb-239">
      <h1 className="sr-only">Academics</h1>

      <section className="bong relative mx-16 mt-36 bg-hong-phan lg:mx-auto lg:mt-42.75 lg:w-1148.25">
        <header className="grid min-h-90 place-items-center bg-hong px-16 py-12 text-center text-white lg:h-136 lg:p-0">
          <ChuMo chu="THE FLOOR IS OPEN" className={tieuDeLon} />
        </header>

        <div className="px-20 pt-28 pb-28 text-white lg:px-58.25 lg:pt-41.5 lg:pb-35.5">
          <HienDan>
            <h3 className={`${tieuDe} lg:-mr-20`}>
              Vietnam delelgate concerned about economic growth when implementing environmental measures
            </h3>
            <p className={`${doanVan} mt-10 lg:mt-11.75`}>
              My first MUN ever! I was nervous and excited to re-present Viet Nam, and even more thrilled to earn my
              first award in my MUN journey. I drew on everything I had learned about Viet Nam through Geography, where
              we study both the physical and socioeconomic landscapes <br className="max-lg:hidden" />
              of our country and the world.
            </p>
          </HienDan>

          <div className="mt-20 grid gap-12 lg:mt-26 lg:grid-cols-2 lg:gap-16">
            <HienDan>
              <Anh
                nguon="/images/academic/mun-classroom.jpg"
                uuTien
                moTa="Delegates at their desks during a Model UN session"
                phong
                className="aspect-[508/338.7] bo-10"
              />
            </HienDan>
            <HienDan tre={0.12}>
              <Anh
                nguon="/images/academic/mun-group.jpg"
                uuTien
                moTa="The whole committee squeezed into one classroom photo"
                phong
                className="aspect-[508/338.7] bo-10"
              />
            </HienDan>
          </div>

          <div className="mt-24 grid gap-12 lg:mt-14.25 lg:grid-cols-2 lg:gap-16">
            <HienDan>
              <h3 className={`${tieuDe} lg:tracking-[-0.02em]`}>
                UAE delegate fights for water accessibility in developing countries
              </h3>
              <p className={`${doanVan} mt-10 lg:mt-11.5`}>
                Geography strikes again! At HMUN 2025’s UN DISEC, I drew on what I knew about each country’s
                environment to find realistic solutions while balancing competing national interests!!!
              </p>
            </HienDan>
            <HienDan tre={0.12} className="relative">
              <Anh
                nguon="/images/academic/hmun-delegates.jpg"
                moTa="Gia Han listening in committee at HMUN 2025"
                cat={[120.88, 103.78, -18.6, -3.78]}
                phong
                className="aspect-[507.6/394.2] bo-10"
              />
              <NhanDan
                nguon="/images/academic/stickers/bow.png"
                lac={2}
                className="top-6 -right-20 aspect-[220.6/377.1] w-84 lg:-top-72 lg:-right-119 lg:w-220.5"
              />
            </HienDan>
          </div>
        </div>

        <NhanDan
          nguon="/images/academic/stickers/cake.png"
          tre={1.5}
          className="-top-38 -right-18 aspect-[210.7/282.4] w-80 lg:-top-33 lg:-right-116 lg:w-210.75"
        />
        {/* the clip holds the two panels together, so it has to sit above the next one */}
        <NhanDan
          nguon="/images/academic/stickers/clip.png"
          lac={1.5}
          tre={3}
          className="-bottom-62 left-10 z-10 aspect-[203.3/247.6] w-104 lg:-bottom-112 lg:left-24.75 lg:w-203.25"
        />
      </section>

      <div className="relative mx-16 mt-70 lg:mx-auto lg:mt-86 lg:w-1148.25">
        {/* tucked behind the panel: only the corner that sticks out is ever seen */}
        <NhanDan
          nguon="/images/academic/stickers/envelope.png"
          lac={0}
          className="-right-110 -bottom-100 aspect-[775.6/873.2] w-320 lg:-right-296.5 lg:-bottom-201.5 lg:w-775.5"
        />

        <section className="bong relative bg-white">
          <header className="grid min-h-90 place-items-center bg-hong-nhat px-16 py-12 text-center text-hong lg:h-136 lg:p-0">
            <ChuMo chu="THE HIGHEST PEAK" className={tieuDeLon} />
          </header>

          <div className="px-20 pt-20 pb-96 lg:px-58.25 lg:pt-19.5 lg:pb-37">
            <HienDan>
              <h3 className={`${tieuDe} mx-auto text-center text-hong lg:w-765.25`}>
                A journey to the top of Vietnam’s toughest Geography competition
              </h3>
            </HienDan>

            <div className="mt-24 flex flex-col gap-14 lg:mt-41.5 lg:flex-row lg:gap-22.25">
              <HienDan className="relative shrink-0 lg:w-706.75">
                <Anh
                  nguon="/images/academic/geography-team.jpg"
                  moTa="The Geography team in green uniforms, fists up, in the school yard"
                  cat={[101.73, 100, -1.73, 0]}
                  phong
                  className="aspect-[706.8/479.3] bo-10"
                />
                <NhanDan
                  nguon="/images/academic/stickers/lace-card.png"
                  lac={1.5}
                  tre={2}
                  className="-top-22 -right-10 aspect-[202.8/262.1] w-78 lg:top-185.5 lg:right-auto lg:left-660.25 lg:w-202.75"
                />
                <NhanDan
                  nguon="/images/academic/stickers/button-brown.png"
                  lac={5}
                  tre={0.8}
                  className="-right-8 -bottom-14 aspect-[145.4/146.8] w-58 lg:right-auto lg:bottom-0 lg:left-585.25 lg:w-145.5"
                />
              </HienDan>
              <HienDan tre={0.12}>
                <p className={`${doanVan} lg:w-303`}>
                  My first climb. In Grade 9, I took on the Hanoi City Geography Competition for the first time. I
                  fell in love with Geography because it is more than memorizing facts - it is a key to decoding the
                  rules that shape our world.
                </p>
              </HienDan>
            </div>

            <div className="relative mt-28 flex flex-col gap-14 lg:mt-19.5 lg:flex-row lg:gap-13.5">
              <HienDan className="shrink-0 lg:w-303">
                <p className={doanVan}>
                  I realized I loved this puzzle because Geography helps me make sense of what I see, connect the
                  physical world with socioeconomic forces, and find answers to the questions I carry about society.
                </p>
              </HienDan>
              <HienDan tre={0.12} className="lg:w-715.5">
                <Anh
                  nguon="/images/academic/geography-pavilion.jpg"
                  moTa="Students gathered on the steps of a red pavilion by the lake"
                  cat={[103.84, 100, 0, 0]}
                  phong
                  className="aspect-[715.5/495.2] bo-10"
                />
              </HienDan>
              {/* the record slides in from off the page and lands on the next photo's corner */}
              <NhanDan
                nguon="/images/academic/stickers/vinyl.png"
                lac={0}
                className="-bottom-56 -left-84 z-10 aspect-square w-170 lg:top-237.75 lg:bottom-auto lg:-left-239.75 lg:w-363.5"
              />
              <NhanDan
                nguon="/images/academic/stickers/button-pink.png"
                lac={6}
                tre={1.2}
                className="-bottom-24 left-36 z-10 aspect-[144.7/146.6] w-62 lg:top-167.5 lg:bottom-auto lg:-left-11.25 lg:w-144.75"
              />
            </div>

            <div className="mt-36 flex flex-col gap-14 lg:mt-19.5 lg:flex-row lg:gap-0">
              <div className="grid grid-cols-[379.4fr_320.4fr] gap-10 lg:w-709.75 lg:shrink-0">
                <HienDan>
                  <Anh
                    nguon="/images/academic/award-group.jpg"
                    moTa="Award ceremony for Hanoi's outstanding students, the whole group on stage"
                    cat={[100, 117.68, 0, -6.11]}
                    phong
                    className="aspect-[379.4/483.8] bo-10"
                  />
                </HienDan>
                <HienDan tre={0.12}>
                  <Anh
                    nguon="/images/academic/award-solo.jpg"
                    moTa="Gia Han holding her certificate on stage"
                    cat={[100, 117.68, 0, 0]}
                    phong
                    className="aspect-[320.4/483.8] bo-10"
                  />
                </HienDan>
              </div>
              <HienDan tre={0.24}>
                <p className={`${doanVan} lg:ml-19.25 lg:w-303`}>
                  And so, I made it through every round, all the way to the national competition. My final answer drew
                  on real experiences from Trạm Tấu – perhaps a little extra credit from life itself!
                </p>
              </HienDan>
            </div>
          </div>

          <NhanDan
            nguon="/images/academic/stickers/shell.png"
            lac={2.5}
            tre={2.2}
            className="-right-8 -bottom-48 aspect-[318.9/284.5] w-136 lg:-right-43.75 lg:-bottom-70.25 lg:w-319"
          />
        </section>
      </div>
    </main>
  );
}
