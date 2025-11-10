import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMusic, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-wide">Adhin.</h1>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-a md:inline ${
                location.pathname === link.path ? "text-indigo-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          onClick={toggleMusic}
          className="relative hidden md:flex items-center justify-center ml-4"
        >
          <div
            className={`w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isPlaying
                ? "animate-spin-slow"
                : "shadow-[0_0_10px_rgba(210,181,181,0.7)]"
            }`}
          >
            <FaMusic
              className={`text-white text-xl ${
                isPlaying ? "animate-spin-slow" : ""
              } hover:text-indigo-300 transition duration-300 z-10`}
            />
            {isPlaying && (
              <div
                className="absolute inset-0 rounded-full border-t border-[rgba(210,181,181,0.7)] animate-[spin_4.5s_linear_infinite]"
                style={{
                  top: "-3px",
                  left: "-3px",
                  right: "-3px",
                  bottom: "-3px",
                }}
              />
            )}
          </div>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center space-y-6 py-6 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium hover:text-indigo-400 transition duration-300 ${
              location.pathname === link.path ? "text-indigo-400" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div onClick={toggleMusic} className="flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isPlaying
                ? "animate-spin-slow"
                : "shadow-[0_0_10px_rgba(210,181,181,0.7)]"
            }`}
          >
            <FaMusic
              className={`text-white text-2xl ${
                isPlaying ? "animate-spin-slow" : ""
              } hover:text-indigo-300 transition duration-300`}
            />
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop preload="auto">
        <source src="/suzume.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
};

export default Navbar;
