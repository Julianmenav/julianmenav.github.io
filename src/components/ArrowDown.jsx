import React from "react";
import { useScroll } from "../hooks/useScroll";

export default function () {
  const hidden = useScroll();

  return (
    <div className={`${hidden && "opacity-0"} transition-all duration-1000 fixed bottom-5 w-full flex justify-center items-center`}>
      <a href="#portfolio" className={`animate-bounce flex justify-center items-center p-1 rounded-full bg-zinc-700/30 text-white dark:bg-white/30 dark:text-black`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </a>
    </div>
  );
}
