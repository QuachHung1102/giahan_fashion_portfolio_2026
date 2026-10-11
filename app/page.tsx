import ChuVe from "@/components/ChuVe";
import DamMay from "@/components/DamMay";
import SanKhau from "@/components/SanKhau";

// lipstick, handbag, glasses: three accessories, three sides of her
export default function TrangChu() {
  return (
    <SanKhau
      ten={<ChuVe ten="giaHan" />}
      tieuDePhuKien={<ChuVe ten="accessories" />}
      mayTren={<DamMay vi="tren" className="size-full" />}
      mayDuoi={<DamMay vi="duoi" className="size-full" />}
      loiNghi={[
        { tren: <ChuVe ten="romantic" />, duoi: <ChuVe ten="makeup" />, yTren: 78.4 },
        { tren: <ChuVe ten="modelUn" />, duoi: <ChuVe ten="geography" />, yTren: 98 },
        { tren: <ChuVe ten="vocalGlee" />, duoi: <ChuVe ten="actress" />, yTren: 98 },
      ]}
    />
  );
}
