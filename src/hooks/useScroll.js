import { useEffect, useState } from "react";

export const useScroll = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const scrollFunction = () => {
      window.scrollY === 0 ? setHidden(false) : setHidden(true);
    };

    scrollFunction();
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return hidden;
};
