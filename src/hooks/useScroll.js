import { useEffect, useState } from "react";

export const useScroll = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const main = document.querySelector("#main-scroll");
    if (!main) return;
    const scrollFunction = () => {
      setHidden(main.scrollTop > 100);
    };

    scrollFunction();
    main.addEventListener("scroll", scrollFunction);

    return () => {
      main.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return hidden;
};
