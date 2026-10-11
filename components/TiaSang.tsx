"use client";

import { useEffect, useRef } from "react";

type Tia = { x: number; y: number; goc: number; luc: number };

type Props = {
  mau?: string;
  soTia?: number;
  doDai?: number;
  banKinh?: number;
  /** ms */
  thoiGian?: number;
};

// A little burst wherever you click. Borrowed from React Bits' ClickSpark, rewired to sit over
// the whole window and to stop painting when there is nothing to paint.
export default function TiaSang({ mau = "#ff42a4", soTia = 8, doDai = 12, banKinh = 24, thoiGian = 450 }: Props) {
  const vai = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = vai.current;
    const but = canvas?.getContext("2d");
    if (!canvas || !but || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tia: Tia[] = [];
    let khung = 0;

    const vuaKhit = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    const ve = (luc: number) => {
      but.clearRect(0, 0, canvas.width, canvas.height);
      but.lineCap = "round";
      tia = tia.filter((t) => {
        const tienDo = (luc - t.luc) / thoiGian;
        if (tienDo >= 1) return false;
        const em = tienDo * (2 - tienDo);
        const xa = em * banKinh;
        const dai = doDai * (1 - em);
        const [cos, sin] = [Math.cos(t.goc), Math.sin(t.goc)];
        // white under pink, so it still shows on the pink bar
        for (const [net, day] of [["#fff", 5], [mau, 2.5]] as const) {
          but.strokeStyle = net;
          but.lineWidth = day;
          but.beginPath();
          but.moveTo(t.x + xa * cos, t.y + xa * sin);
          but.lineTo(t.x + (xa + dai) * cos, t.y + (xa + dai) * sin);
          but.stroke();
        }
        return true;
      });
      khung = tia.length ? requestAnimationFrame(ve) : 0;
    };

    const no = (e: PointerEvent) => {
      const luc = performance.now();
      for (let i = 0; i < soTia; i++) tia.push({ x: e.clientX, y: e.clientY, goc: (2 * Math.PI * i) / soTia, luc });
      if (!khung) khung = requestAnimationFrame(ve);
    };

    vuaKhit();
    addEventListener("resize", vuaKhit);
    addEventListener("pointerdown", no);
    return () => {
      removeEventListener("resize", vuaKhit);
      removeEventListener("pointerdown", no);
      cancelAnimationFrame(khung);
    };
  }, [mau, soTia, doDai, banKinh, thoiGian]);

  return <canvas ref={vai} aria-hidden className="pointer-events-none fixed inset-0 z-100" />;
}
