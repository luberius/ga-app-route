"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";

interface IProps {
  eventName: string;
  params: any;
  label?: string;
}

const GaButton = ({ eventName, params, label }: IProps) => {
  const handleClick = () => {
    sendGAEvent({ event: "button_click", value: "xyz" });
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", eventName, {
        ...params,
      });
    } else {
      console.error("Google Analytics not loaded");
    }
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
      {label || "button"}
    </button>
  );
};

export default GaButton;
