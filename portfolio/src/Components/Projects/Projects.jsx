import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="portfolio website"
          main="A personal portfolio website showcasing my skills, projects, and experience as a full-stack web developer and machine learning enthusiast."
        />
       
      </div>
    </div>
  );
};

export default Projects;
