import React, { useEffect, useState } from "react";

export default function ResumeBtn() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 2500);
  }, []);

  return (
    <a href="/Julian_Mena_CV.pdf" target="_blank" className={`${hidden && "opacity-0"} transition-opacity duration-1000 fixed bottom-3 left-2 text-sm bg-orange-600 dark:bg-purple-600 text-white font-bold rounded-md shadow-lg flex items-center p-2 lg:text-base lg:bottom-10 lg:left-10 lg:px-3 z-10`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
      </svg>
      <span className="">Resume / CV</span>
    </a>
  );
}
