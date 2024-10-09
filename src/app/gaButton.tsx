"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";

const GaButton = () => {
  const handleClick = () => {
    sendGAEvent({ event: "buttonClicked", value: "xyz" });
  };

  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={handleClick}
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Test GA
    </button>
  );
};

export default GaButton;
