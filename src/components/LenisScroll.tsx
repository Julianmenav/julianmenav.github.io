// src/components/LenisWrapper.tsx
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper() {
  useEffect(() => {
    const _ = new Lenis({
      wrapper: document.querySelector("#main-scroll") as HTMLElement,
      content: document.querySelector("#main-scroll > *") as HTMLElement,
      smoothWheel: true,
      lerp: 0.06,
      autoRaf: true,
    });
  }, []);

  return null;
}
