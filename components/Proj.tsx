"use client";
import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"; // Import the missing component
import MagicButton from "./MagicButton";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "A web application designed to help homeowners monitor their electricity consumption and billing in real time, while also providing alerts for potential electrical hazards. Developed using HTML, CSS, and JavaScript, the interface offers users intuitive access to system data and controls",
    name: "Smart Circuit Breaker System",
    designation: "Project Lead and Developer",
    src: "proj1.png",
  },
  {
    quote:
      "a mobile application that allows users to remotely control their home appliances using voice commands. Developed with MIT App Inventor, with IoT-enabled hardware components powered by  C++, and Arduino Uno.",
    name: "HOME AUTOMATION with Voice Control",
    designation: "Project Lead and Developer",
    src: "proj2.png",
  },
  {
    quote:
      "a school project, C#-based parking management system designed for administrative use. It allows users to generate parking codes for specific destinations, providing a smooth and convenient experience for car owners.",
    name: "Park-It",
    designation: "Frond-end Developer",
    src: "proj3.png",
  },
  {
    quote:
      "Looking forward to adding more projects—continually expanding my tech stack and skills.",
    name: "More to come!",
    designation: "",
    src: "proj4.png",
  },
];

const Testimonials = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center py-10">
      {/* Testimonials Section */}
      <section id="projects" className="w-full scroll-mt-0 relative z-10">
        <div className="flex justify-center relative mt-20 mb-60">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mb-10">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-4xl lg:text-5xl"
              words="My Work in Action"
            />
          </div>

          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mt-20">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="w-full lg:pt-60 relative z-10">
        <div className="text-center">
          <h1 className="relative lg:-top-40  lg:text-[80px] text-[40px] md:text-4xl lg:text-5xl">
          <b id="contacts" className="scroll mt-10 " >Reach out and let&apos;s build <span className="text-purple-700">something</span> great</b>
            </h1>
            <p className=" relative py-5 text-white-200 text-lg"> I&apos;m here to help in any way I can.</p>
            <a className=" " href="mailto:alexhuntme123@gmail.com">
              <MagicButton
              title="Connect"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => window.location.href = "mailto:alexhuntme123@gmail.com"}
              />
            </a>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-center mt-16">
  <p className="text-sm md:text-base font-light md:font-normal">
    © 2024 Gabs. All rights reserved.
  </p>
  <div className="flex space-x-4 mt-4 md:mt-0">
    <a
      href="https://www.linkedin.com/in/alexander-gabutan-86bb08345/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-violet-700 hover:text-white-100 transition"
      aria-label="Visit LinkedIn Profile"
    >
      <FaLinkedin size={20} />
    </a>
    <a
      href="https://github.com/ayexhehe" // Replace with your actual GitHub profile link
      target="_blank"
      rel="noopener noreferrer"
      className="text-violet-700 hover:text-white-100 transition"
      aria-label="Visit GitHub Profile"
    >
      <FaGithub size={20} />
    </a>
  </div>
</div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};


export default Testimonials;
