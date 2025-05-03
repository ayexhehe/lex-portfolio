"use client"
import MagicButton from '@/components/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { cn } from "@/lib/utils";
import React from 'react'

import { TbWorldStar } from 'react-icons/tb';

const Hero = () => {
  return (
    <section id="home">
    <div>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh]  w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>
        <div className="relative -top-[20] flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_0.5px),linear-gradient(to_bottom,#262626_1px,transparent_0.5px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
       <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black-100 
        [mask-image:linear-gradient(to_top,transparent,black)]" />

       <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Shaping Digital Experiences with Passion
            </h2>



            <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Welcome to Alex Gabs&apos; Portfolio"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Driven by curiosity, creativity, and the art of craft.
            </p>

            <a href="#about">
              <MagicButton 
              title="Explore my World"
              icon={<TbWorldStar />}
              position='right'
              handleClick={() => {}}
              />
            </a>
            
        </div>
       </div>
    
    </div>
    </div>
    </section>
  )
}

export default Hero