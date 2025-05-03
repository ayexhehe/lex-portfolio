import React from "react";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdCall, MdAccountCircle } from "react-icons/md";


export const navItems = [
  { name: "Home", link: "#home", icon: React.createElement(FaHome) },
  { name: "About", link:"#about",icon: React.createElement(MdAccountCircle) },
  { name: "Projects", link: "#projects", icon: React.createElement( AiFillProject) },
  { name: "Contacts", link: "#contacts", icon: React.createElement(MdCall) },
];

export const gridItems = [
        {
            id: 1,
            description: "Hello! My name is",         
            title: "Alexander Gabutan",
            className: "md:col-span-2",
            img: " /img1.png",
            imgclassName: "w-full h-full object-cover object-center relative",
            titleclassName: "justify-center",
          },
          {
            id: 2,
            title: "My tech stack.",
            description: "Forever refining",
            className: "md:col-span-1",
            titleclassName: "justify-center md:justify-start lg:justify-center",
          },
          {
            id: 3,
            title: "Get to know me more.",
            className: "md:col-span-1",
            titleclassName: "justify-center md:max-w-full max-w-60 text-center",
          },
          {
            id: 4,
            className: "md:col-span-2",
          },
]