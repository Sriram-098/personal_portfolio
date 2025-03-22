import React from 'react';
import Textchange from '../Projects/Textchange';
import { Github, Linkedin } from 'lucide-react'; // Import Linkedin icon

const Home = () => {
  return (
    <div className="text-white flex justify-center items-center w-full h-screen p-10 md:p-20">
      {/* Left Section */}
      <div className="text-center max-w-2xl">
        {/* Dynamic Text */}
        <h1 className="text-4xl md:text-6xl font-bold leading-normal tracking-tighter pb-3">
          <Textchange />
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl tracking-tight pb-8">
          I love turning ideas into dynamic, user-friendly web applications, solving problems through code and creativity.
        </p>

        {/* Contact Me Through Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Contact Me Through
        </h2>

        {/* Buttons in one row */}
        <div className="flex justify-center gap-6">
          {/* GitHub Button */}
          <a
            href="https://github.com/Sriram-098" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md bg-[#465697] p-3 text-white w-32 h-12 hover:bg-[#374580] transition-all"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/sriram-senapathi-2b3b3b3b3" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md bg-[#465697] p-3 text-white w-32 h-12 hover:bg-[#374580] transition-all"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;