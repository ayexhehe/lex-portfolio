"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxes() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl py-2 text-xl text-white relative z-20")}>
        <b>"Dream. Believe. Achieve."</b>
      </h1>
      <p className="text-center mt-2 px-10 lg:px-20  text-neutral-300 relative z-20">
      An individual with a strong passion for contributing to the digital world. eager to learn, adaptable to training and dedicated to providing high-quality performance and output, aiming for professional development and continuous skill enhancement.
      </p>
    </div>
  );
}
