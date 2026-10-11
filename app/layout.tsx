import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ChuVe from "@/components/ChuVe";
import ChuyenDong from "@/components/ChuyenDong";
import ThanhDieuHuong from "@/components/ThanhDieuHuong";
import TiaSang from "@/components/TiaSang";

// vietnamese subset: Hữu Nghị and Trạm Tấu deserve their accents
const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin", "vietnamese"],
});

// the two display faces. block, not swap: a logo flashing in Arial is worse than a short blank
const retroDolly = localFont({
  src: "./fonts/Retro_Dolly.ttf",
  weight: "400",
  variable: "--font-retro-dolly",
  display: "block",
});
const galano = localFont({
  src: "./fonts/GalanoGrotesqueAltBold.otf",
  weight: "700",
  variable: "--font-galano-alt",
  display: "block",
});

export const metadata: Metadata = {
  title: {
    default: "Gia Han | Portfolio",
    template: "%s | Gia Han",
  },
  description: "Gia Han's portfolio: Model UN, Geography, community work and a life on stage. Unbox it.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${alexandria.variable} ${retroDolly.variable} ${galano.variable} antialiased`}>
      <body className="font-sans">
        <ChuyenDong>
          <ThanhDieuHuong
            logo={<ChuVe ten="han" />}
            trangChu={<ChuVe ten="home" />}
            gioiThieu={<ChuVe ten="aboutMe" />}
          />
          <div className="khung-trang">{children}</div>
        </ChuyenDong>
        <TiaSang />
      </body>
    </html>
  );
}
