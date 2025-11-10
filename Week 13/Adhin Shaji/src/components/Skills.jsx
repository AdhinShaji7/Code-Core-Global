import React, { useRef } from "react";
import { cn } from "../lib/utils";
import { CardSpotlight } from "./ui/card-spotlight";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const colors = [
    [97, 218, 251], 
    [255, 87, 34],    
    [33, 150, 243],  
    [247, 223, 30],  
    [49, 120, 198],   
    [0, 230, 118],   
    [98, 0, 234],     
    [255, 136, 0],    
    [139, 195, 74],  
    [255, 202, 40],  
    [0, 117, 143],    
    [79, 93, 149],    
    [255, 215, 0],    
    [240, 101, 41],   
    [56, 189, 248],   
  ];

  const icons = [
    <FaReact key="react" className="text-white text-2xl" />,
    <FaHtml5 key="html" className="text-white text-2xl" />,
    <FaCss3Alt key="css" className="text-white text-2xl" />,
    <FaJs key="js" className="text-white text-2xl" />,
    <SiTypescript key="ts" className="text-white text-2xl" />,
    <SiMongodb key="mongodb" className="text-white text-2xl" />,
    <SiExpress key="express" className="text-white text-2xl" />,
    <SiPostman key="postman" className="text-white text-2xl" />,
    <FaNodeJs key="node" className="text-white text-2xl" />,
    <SiFirebase key="firebase" className="text-white text-2xl" />,
    <SiMysql key="mysql" className="text-white text-2xl" />,
    <FaPhp key="php" className="text-white text-2xl" />,
    <FaPython key="python" className="text-white text-2xl" />,
    <FaBootstrap key="bootstrap" className="text-white text-2xl" />,
    <SiTailwindcss key="tailwind" className="text-white text-2xl" />,
  ];

  const audioSources = [
    "/e6-piano.mp3",
    "/d6-piano.mp3",
    "/b6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/d6-piano.mp3",
    "/e6-piano.mp3",
    "/a6-piano.mp3",
    "/c6-piano.mp3",
    "/g6-piano.mp3",
    "/f6-piano.mp3",
    "/a6-piano.mp3",
    "/f6-piano.mp3",
  ];

  const audioRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const audio = new Audio(audioSources[index % audioSources.length]);
    audioRefs.current[index] = audio;
    audio.play();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">

      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />


      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />


      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6">
        Tools in My Arsenal
      </h2>


      <div className="z-20 mb-6 text-lg font-semibold text-center">
        <p className="block sm:hidden bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Tap icons to play sound 🎵
        </p>
        <p className="hidden sm:block bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Hover over icons to hear a sound 🎵
        </p>
      </div>

      {/* Skill Cards */}
      <div className="relative z-20 flex justify-center gap-4 flex-wrap max-w-5xl w-full">
        {icons.map((icon, index) => (
          <CardSpotlight
            key={index}
            className="h-20 w-20 rounded-full flex items-center justify-center bg-black"
            color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleMouseEnter(index)}
          >
            <div className="relative z-20">{icon}</div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default Skills;
