import React from 'react';
import { cn } from "../lib/utils";

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      <div className="relative z-20 text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
        <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
          About Me.
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Hey, I’m Adhin Shaji — a Full Stack Developer passionate about building clean, functional, and interactive web experiences. I have worked on multiple React projects, building dynamic web applications and interactive user interfaces, and I enjoy creating user-friendly and visually appealing experiences.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Currently, I’m working as a Front-End Intern at CoreCore Global, where I contribute to building interactive and responsive web interfaces. I thrive on solving problems, learning new technologies, and applying them to practical solutions.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I am also developing <strong>Xeon</strong>, a startup project designed to transform bold ideas into structured opportunities. This venture helps me grow my entrepreneurial mindset while honing skills in product thinking, strategy, and leadership — all through real-world feedback and continuous iteration.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I am continuously exploring modern web technologies such as React, Redux, Tailwind, Firebase, Node.js, and REST APIs to improve my development skills and deliver efficient, scalable, and innovative solutions.
        </p>

        <p className="text-lg leading-relaxed">
          My goal is to take on challenging projects, contribute to impactful web solutions, and grow as a developer while sharing knowledge with the community.
        </p>
      </div>

    </section>
  );
};

export default About;
