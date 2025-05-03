'use client';
import React, { JSX, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false); // Start as hidden

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating nav only after the user starts scrolling
      if (window.scrollY > 0) {
        setVisible(true); // Show when scrolled down
      } else {
        setVisible(false); // Hide when at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 pl-8 py-2 items-center justify-center space-x-4 md:px-8 md:space-x-6 sm:px-6 sm:space-x-4 transition-opacity duration-300",
        !visible && "opacity-0 pointer-events-none", // Hide when at the top
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={navItem.link}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
    </div>
  );
};
