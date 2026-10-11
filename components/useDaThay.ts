import { useEffect, useRef, useState } from "react";

// true from the first time the element scrolls into view, and it stays true.
// le = rootMargin, nguong = how much of it has to show
export function useDaThay<T extends Element>(le = "0px", nguong = 0) {
  const the = useRef<T>(null);
  const [thay, datThay] = useState(false);

  useEffect(() => {
    if (!the.current) return;
    const mat = new IntersectionObserver(
      ([muc]) => {
        if (!muc.isIntersecting) return;
        datThay(true);
        mat.disconnect();
      },
      { rootMargin: le, threshold: nguong },
    );
    mat.observe(the.current);
    return () => mat.disconnect();
  }, [le, nguong]);

  return [the, thay] as const;
}
