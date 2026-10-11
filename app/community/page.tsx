import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Anh, { type VungCat } from "@/components/Anh";
import ChuVe from "@/components/ChuVe";
import KhungTiLe, { dat } from "@/components/KhungTiLe";
import QuyenSach from "@/components/QuyenSach";

export const metadata: Metadata = {
  title: "Community",
  description: "More than I give: Hữu Nghị Village, tea for Trạm Tấu, WITH Project and ROMUN.",
};

const goc = "/images/community";

type Manh = {
  nguon: string;
  /** photos get one. stickers stay silent */
  moTa?: string;
  /** x, y, width, height on the 595 x 842 page */
  o: readonly [x: number, y: number, rong: number, cao: number];
  xoay?: number;
  /** white polaroid border, in page pixels */
  vien?: 3 | 5;
  cat?: VungCat;
  /** sway, for stickers that can't sit still */
  lac?: number;
};

const doVien = { 3: "vien-3", 5: "vien-5" };

// One strip of collage. On a wide screen it sits at its artboard y; on a phone the strips and the
// paragraphs simply stack, so the text can be a readable size instead of a scaled-down smudge.
function DaiGhep({ y, cao, manh, children }: { y: number; cao: number; manh: Manh[]; children?: ReactNode }) {
  return (
    <div className="dai-ghep" style={{ "--y": y, "--cao": cao } as CSSProperties}>
      {manh.map((m, i) => {
        const [x, yManh, rong, caoManh] = m.o;
        return (
          <span
            key={i}
            aria-hidden={m.moTa ? undefined : true}
            style={dat(x, yManh - y, rong, caoManh, m.xoay)}
            className={m.vien ? "anh-chup" : "pointer-events-none"}
          >
            <span
              className={`block size-full ${m.vien ? `bong border-white ${doVien[m.vien]}` : m.lac ? "animate-lac" : ""}`}
              style={m.lac ? ({ "--goc-lac": `${m.lac}deg`, animationDelay: `${-i * 0.7}s` } as CSSProperties) : undefined}
            >
              {/* eager, all of them: a lazy picture on a page that slides in arrives after the page does */}
              <Anh nguon={`${goc}/${m.nguon}`} moTa={m.moTa} cat={m.cat} uuTien className="size-full" />
            </span>
          </span>
        );
      })}
      {children}
    </div>
  );
}

function Van({ x, y, rong, tua = false, children }: { x: number; y: number; rong: number; tua?: boolean; children: ReactNode }) {
  const The = tua ? "h2" : "p";
  return (
    <The className={`van-sach ${tua ? "tua" : ""}`} style={{ "--x": x, "--y": y, "--rong": rong } as CSSProperties}>
      {children}
    </The>
  );
}

function Trang({ children }: { children: ReactNode }) {
  return (
    <KhungTiLe rong={595} className="lg:h-full">
      {children}
    </KhungTiLe>
  );
}

function TrangMot() {
  return (
    <Trang>
      <Van tua x={39.9} y={30.4} rong={502.2}>
        Every time I give, I receive so much more.
      </Van>
      <Van x={39.9} y={63.9} rong={502.2}>
        Hữu Nghị Village feels like a second home to me, filled with beloved siblings, aunts and grandpas. My monthly
        visits have nurtured my empathy and gratitude, while guiding me toward what I hope to leave behind: “Man is not
        born to disappear like a nameless grain of sand, but to leave an imprint on the earth and in the hearts of
        others.
      </Van>
      <DaiGhep
        y={170}
        cao={285}
        manh={[
          { nguon: "page-1/village-gathering.jpg", moTa: "Veterans and volunteers gathered in a hall at Hữu Nghị Village", o: [24.9, 196.1, 262.3, 196.5], xoay: -4.39, vien: 5 },
          { nguon: "page-1/village-stage.jpg", moTa: "Children performing on a small stage at the village", o: [318.9, 222.2, 195.3, 160.6], xoay: 3.77, vien: 5, cat: [109.78, 100, -9.78, 0] },
          { nguon: "stickers/frame-polka.png", o: [547.5, 207.5, 213.9, 259], xoay: 93.77 },
        ]}
      />
      <Van x={34.8} y={459.6} rong={521.9}>
        Even after six years together, I still become a crybaby whenever I hear the stories of veterans from across
        the country. This place has also become the happiest part of my month: coming back to bring the village little
        gifts, sometimes mooncakes, sometimes blankets and bedding. I am grateful to be able to give back to the
        community that raised and sheltered me, while I still can—before they have to say goodbye to us.
      </Van>
      <DaiGhep
        y={570}
        cao={272}
        manh={[
          { nguon: "page-1/gift-group.jpg", moTa: "Volunteers in orange shirts handing out gift bags", o: [24.9, 622.5, 281.4, 187.6], xoay: -3.03, vien: 5 },
          { nguon: "page-1/packing-gifts.png", moTa: "Gia Han and friends packing gift bags", o: [295.4, 576.5, 262.4, 147.6], xoay: 5.42, vien: 5 },
          { nguon: "stickers/heart.png", o: [239, 592.2, 84.9, 70.2], lac: 5 },
        ]}
      />
    </Trang>
  );
}

function TrangHai() {
  return (
    <Trang>
      <Van x={36.5} y={31.1} rong={517.8}>
        Inspired, I wanted to reach children in even more isolated communities, especially those whose needs often go
        unnoticed. I came to believe that giving someone a “fishing rod” is far more meaningful than simply handing
        them a fish. So, together with my friends, I built a system that sells locally sourced tea to support education
        and community development in Bản Liền and Trạm Tấu. The first time I saw those mountains with my own eyes, I
        saw beyond the landscapes I had studied by heart in Geography—the poverty, the distance, and the people living
        within them.
      </Van>
      <DaiGhep
        y={176}
        cao={666}
        manh={[
          { nguon: "page-2/hills-group.jpg", moTa: "The team posing on a hillside above the clouds", o: [181.4, 398.5, 263.2, 126.5], vien: 3, cat: [100, 156.08, 0, -50.65] },
          { nguon: "page-2/tea-workshop.jpg", moTa: "A tea maker at work beside his roasting drum", o: [237.5, 182.8, 316.9, 211.3], vien: 3 },
          { nguon: "page-2/classroom.jpg", moTa: "A classroom full of students holding their new notebooks", o: [45.4, 276.9, 249.7, 150.3], vien: 3, cat: [100, 124.62, 0, -15.72] },
          { nguon: "page-2/village-road.jpg", moTa: "A village at the foot of green hills", o: [448.3, 398.5, 106.1, 172.3], vien: 3, cat: [243.54, 100, -118.21, 0] },
          { nguon: "page-2/valley.jpg", moTa: "A river valley and rice terraces in Trạm Tấu", o: [45.4, 529.4, 399.2, 266.2], vien: 3 },
          { nguon: "page-2/school-meeting.jpg", moTa: "Students and teachers gathered in a school hall", o: [302.1, 575.2, 252.3, 109.9], vien: 3, cat: [100, 172.13, 0, -72.13] },
          { nguon: "page-2/friends-cutout.png", moTa: "Gia Han and three friends leaning on a wooden desk", o: [45.4, 352, 206.3, 173], cat: [117.47, 93.48, -0.01, 23.21] },
          { nguon: "stickers/button-plaid.png", o: [377.7, 502.8, 101.1, 99.9], lac: 6 },
          { nguon: "stickers/bunny.png", o: [181.4, 195.8, 81.4, 111.4], lac: 4 },
          { nguon: "letters/sanse-s.png", o: [223.4, 717.3, 62.2, 84.5], xoay: 9.7 },
          { nguon: "letters/sanse-s.png", o: [419.9, 744.3, 62.2, 84.5], xoay: -5.51 },
          { nguon: "letters/sanse-a.png", o: [270.5, 744.3, 72.4, 78.3] },
          { nguon: "letters/n.png", o: [342.8, 735.1, 81.5, 80.1] },
          { nguon: "letters/sanse-e.png", o: [491.8, 741.5, 56.7, 76] },
        ]}
      />
    </Trang>
  );
}

function TrangBa() {
  return (
    <Trang>
      <DaiGhep
        y={0}
        cao={400}
        manh={[
          { nguon: "stickers/paper-doll.png", o: [386.5, -38.2, 188.5, 428.5] },
          { nguon: "page-3/with-project-group.jpg", moTa: "Everyone from WITH Project in red shirts on the school steps", o: [54.7, 108.5, 412.7, 275.1], xoay: -2.64, vien: 3 },
          { nguon: "stickers/star.png", o: [468.5, 240.7, 124.7, 132.5], xoay: 35.52 },
          { nguon: "letters/with-w.png", o: [23, 63.7, 118.8, 88.8], xoay: -7.89 },
          { nguon: "letters/with-i.png", o: [143, 32.1, 46.8, 96.4], xoay: -5.87 },
          { nguon: "letters/with-t.png", o: [191, 45.7, 86.7, 91.3] },
          { nguon: "letters/with-h.png", o: [293.6, 32.7, 83.6, 105.9], xoay: 8.64 },
        ]}
      >
        {/* the only live text in the collage: WITH is stickers, PROJECT is type */}
        <span
          style={dat(123.6, 143, 151.8, 30.1)}
          className="grid place-items-center bg-hong-nhat co-30 leading-none font-bold tracking-[-0.01em] text-hong"
        >
          PROJECT
        </span>
      </DaiGhep>
      <Van x={34.8} y={414.7} rong={521.9}>
        But my mission to make education more accessible did not stop there. I continued looking for ways to help
        children learn and thrive academically, especially in subjects that are often overlooked or undervalued in
        Vietnam. Through WITH Project, I work to make social sciences more accessible while learning to understand
        students’ needs and the perspectives of educators. From designing learning materials to supporting high school
        entrance preparation, I found another way to help students see education not simply as a test to pass, but as
        a space where they can grow.
      </Van>
      <DaiGhep
        y={555}
        cao={287}
        manh={[
          { nguon: "page-3/craft-session.jpg", moTa: "Gia Han helping a student with a craft activity", o: [41.6, 588.1, 229.1, 152.7], xoay: -6.24, vien: 3 },
          { nguon: "page-3/presentation.jpg", moTa: "A WITH Project presentation on a school stage", o: [280.9, 613.3, 281.2, 187.4], xoay: 4.2, vien: 3 },
          { nguon: "stickers/paperclip.png", o: [295.7, 563.2, 27.8, 69.6], xoay: 74.2 },
          { nguon: "stickers/tape.png", o: [34.8, 687.1, 90, 19], xoay: 28.8 },
          { nguon: "stickers/pushpin.png", o: [498.4, 586, 58.3, 70.6] },
        ]}
      />
    </Trang>
  );
}

function TrangBon() {
  return (
    <Trang>
      <DaiGhep
        y={0}
        cao={500}
        manh={[
          { nguon: "page-4/classroom.jpg", moTa: "Delegates at work in a ROMUN committee room", o: [163.6, 190, 410, 272.3], xoay: 3.06, vien: 3 },
          { nguon: "page-4/podium.jpg", moTa: "Gia Han speaking at the ROMUN podium", o: [29.1, 32.5, 342.3, 227.3], xoay: -1.12, vien: 3 },
          { nguon: "stickers/clip-polka.png", o: [65.6, 336.9, 129.6, 159.7], xoay: -9.82 },
          { nguon: "stickers/pushpin.png", o: [331.9, 15.1, 58.3, 70.6] },
        ]}
      />
      <DaiGhep
        y={500}
        cao={165}
        manh={[
          { nguon: "letters/romun-r.png", o: [19.1, 544.8, 115, 104.5], xoay: -5.18 },
          { nguon: "letters/romun-o.png", o: [142.1, 508.9, 89.6, 117.8], xoay: 6.39 },
          { nguon: "letters/romun-m.png", o: [232.9, 518.8, 113.3, 124], xoay: 0.79 },
          { nguon: "letters/n.png", o: [456.1, 538.1, 116.2, 114.3], xoay: -1.81 },
          { nguon: "letters/romun-u.png", o: [341.4, 508.9, 122.2, 121.3] },
        ]}
      />
      <Van x={36.6} y={677.4} rong={521.9}>
        ROMUN became my way of giving back to the MUN community that had given me so much. As debate opportunities
        continue to grow across Vietnam, MUN remains relatively scarce, with even fewer competitions creating welcoming
        spaces for newcomers. MUN gave me confidence, knowledge, and, perhaps most importantly, a deeper understanding
        of people whose perspectives differ from my own. So I wanted to pass that opportunity forward, to give more
        students a seat at the table, a chance to speak, and a community that would listen.
      </Van>
    </Trang>
  );
}

export default function TrangCongDong() {
  return (
    // this artboard is 1057 tall, not 1024: the 37 under the book is the designer's breathing room
    // clip, because the turning leaf swings past the bottom of the screen: without it a scrollbar
    // blinks in mid-turn and shoves the whole page sideways
    <main className="mot-man flex min-h-dvh flex-col pt-(--nav) [--cao-man:991] lg:justify-center lg:overflow-clip">
      <div className="flex w-full flex-col items-center px-12 py-24 lg:h-991 lg:p-0">
        <h1 className="bong grid h-58 animate-bat place-items-center bo-10 bg-white px-24 text-hong max-lg:[--co:0.72] lg:mt-27 lg:h-69 lg:w-484 lg:p-0">
          <ChuVe ten="moreThanIGive" nhay />
        </h1>
        <QuyenSach
          className="mt-20 w-full animate-len [animation-delay:250ms] lg:mt-16 lg:w-auto"
          trang={[<TrangMot key={1} />, <TrangHai key={2} />, <TrangBa key={3} />, <TrangBon key={4} />]}
        />
      </div>
    </main>
  );
}
