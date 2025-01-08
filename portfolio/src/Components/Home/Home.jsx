import React from 'react';
import Textchange from '../Projects/Textchange';

const Home = () => {
  return (
    <div className="text-white md:px-20 flex justify-between w-full items-center p-10 md:p-20">
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10 md:pb-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter pb-3">
        <Textchange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight pb-8">
          I’m a full-stack web developer with a passion for creating dynamic, user-friendly web applications. Currently, I am pursuing a B.Tech at Anil Neerukonda Institute of Technology and have experience working with technologies such as React, Node.js, Express, JavaScript, MySQL, and more.
        </p>
        <button className="rounded-md bg-[#465697] p-2 text-white">
          Contact Me
        </button>
      </div>
      
      {/* Right Section (Image) */}
      <div className="md:w-2/4">
        <img className="w-full md:w-2/4 mx-auto" src="https://clipart-library.com/images_k/homework-clipart-transparent/homework-clipart-transparent-21.png" alt="Homework Illustration" />
      </div>
    </div>
  );
};

export default Home;

