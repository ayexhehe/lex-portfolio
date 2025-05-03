"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { BackgroundBoxes } from "./Boxes";
import { BackgroundBeams } from "./background-beams";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '@/components/data/confetti.json';
import MagicButton from "@/components/MagicButton";
import { IoDownloadOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgclassName,
  titleclassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id:number;
  img?: string;
    imgclassName?: string;
    titleclassName?: string;

}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy =() => {
    const link = document.createElement("a");
  link.href = "/GABUTAN_CV.pdf";
  link.download = "Gabutan_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "relative group/bento overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl border dark:border-white/[0.2] dark:bg-black  dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 3 && 'flex justify-center'} h-full`}>
              <div className="relative z-10">
                  {img && (
                        <div
                          className={cn(
                            id === 1 && "absolute right-0 -top-10 h-full"
                          )}
                        >
                          <img
                            src={img}
                            alt={img}
                            className={cn(
                              imgclassName,
                              "w-[20rem] h-[25rem] md:right-8 object-cover object-right-top"
                            )}
                      />

                    
            </div>


  )}
</div>
              {id === 3 && (
                  <BackgroundGradientAnimation>
                      <div className=" flex items-center justify-center text-white font-bold">                        
                      </div>
                  </BackgroundGradientAnimation>    
                )}
          
                {id === 4 && (
                  <BackgroundBoxes />
                )}

                {id === 1 &&(
                  <BackgroundBeams />
                )}


            <div className={cn(
              titleclassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-60 flex flex-col px-5 p-5 lg:p-10'
            )}>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs z-10">
                {description}
              </div>
              <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
               </div>


            {id === 2 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-1">
                <div className="flex flex-col gap-3 lg:gap-5">
                  {['HTML', 'CSS', 'JavaScript'].map((item) => (
                    <span key={item} className="py-4 lg:py-6 lg:px-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                  <span className="py-6 px-3 rounded-lg text-center bg-[#10132e]">

                  </span>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-6 px-3 rounded-lg text-center bg-[#10132e]">
                </span>
                  {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                    <span key={item} className="py-4 lg:py-6 lg:px-3 px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                  
                </div>
              </div>
              )}

              {id === 3 && (
                <div className="mt-5 relative">
                  <div className="absolute -bottom-12 right-0">
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    } 
}}/>
          <MagicButton
          title={copied ? 'Resume Downloaded' : 'Resume'}
          icon={<IoDownloadOutline />}
          position ="left"
          handleClick={handleCopy}
          
          />
                  </div>
                </div>
              )}   
      </div>
    </div>
    </div>
  );
};
