import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import projects from "@/data/projects.json";
import ProjectList from "../home/ProjectList";

const Projects: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div>
          <div className="w-full space-y-4 text-center">
            <Icon
              color="#FFC900"
              className="flex justify-center w-full"
              icon="lucide:sparkles"
              fontSize={24}
            />

            <h1 className="font-bold text-2xl lg:text-3xl">My Projects</h1>
            <p className="text-neutral-500 dark:text-[#B3B8C4] max-w-lg m-auto">
              Explore my work and see how I merge creativity with technology to
              deliver impactful projects.
            </p>
          </div>
          <div className="mt-20 space-y-20">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <ProjectList project={project} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
