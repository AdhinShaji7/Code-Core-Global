import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { cn } from '../lib/utils'; 

const Hero = () => {
  return (
    <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
  
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      
   
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

  
      <div className="relative z-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Hi! Myself Adhin Shaji
        </h1>

        <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
          Dreams Coded into Reality with <span className="text-indigo-300 font-semibold typing-text">
            <Typewriter
              words={['Weaving Full-Stack Magic', 'Animating Digital Fantasies', 'Forging Unbreakable Backends', 'Sculpting Pixel-Perfect Frontends', 'Crafting Apps for Every Horizon', 'Breathing Life into 3D Worlds']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div className="flex justify-center gap-4 mt-6 text-2xl">
          <a href="https://github.com/AdhinShaji7" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/adhin-shaji/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;