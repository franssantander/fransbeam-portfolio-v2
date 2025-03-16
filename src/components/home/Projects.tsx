import React from "react";
import projects from "@/data/projects.json";
import ProjectList from "./ProjectList";
import { Button } from "../ui/button";

const Projects: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-24">
        <div className="px-4 max-w-7xl m-auto">
          <div className="bg-white rounded-2xl backdrop-blur-sm max-w-max space-y-3">
            <h3 className="uppercase text-xs font-semibold">
              Turning Ideas into Scalable Solutions
            </h3>
            <h1 className="font-bold text-2xl md:text-3xl">
              Software Development Projects
            </h1>
            <p className="text-base/8 text-neutral-500 md:max-w-lg">
              Building robust, high-performing applications with clean code and
              modern technologies. Whether it's front-end magic, back-end
              architecture, or full-stack development.
            </p>
          </div>
          <div className="mt-20 space-y-20">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <ProjectList project={project} key={index} />
              ))}
            </div>
            <div className="w-full flex justify-center">
              <Button>View more projects</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
