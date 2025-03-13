import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects.json";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProjectList from "./ProjectList";

const Projects: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-20 bg-[#F6F5F4] rounded-t-4xl rounded-b-4xl">
        <div className="px-4 max-w-7xl m-auto">
          <div>
            <div>
              <h3 className="uppercase text-xs font-semibold">
                Turning Ideas into Scalable Solutions
              </h3>
              <h1 className="font-bold text-lg md:text-2xl">
                Software Development Projects
              </h1>
            </div>
            <p className="text-sm/6 text-neutral-500 md:max-w-lg">
              Building robust, high-performing applications with clean code and
              modern technologies. Whether it's front-end magic, back-end
              architecture, or full-stack development.
            </p>
          </div>
          <div className="mt-20">
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
