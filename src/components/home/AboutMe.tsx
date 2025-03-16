import React from "react";
import techstacks from "@/data/techstacks.json";
import { Badge } from "@/components/ui/badge";
import StackIcon from "tech-stack-icons";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../ExperienceCard";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-24">
        <div className="grid grid-cols px-4 gap-y-24 max-w-7xl m-auto md:gap-x-32 md:grid-cols-2">
          <div
            id="about-me"
            className="space-y-10 bg-white/50 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <h1 className="font-bold text-2xl md:text-3xl">About me</h1>
              <p className="text-base/8 text-neutral-500">
                Designing digital experiences that are intuitive, visually
                stunning, and user-centered. From wireframes to interactive
                prototypes, I focus on usability, accessibility, and seamless
                interactions to elevate products that users love.
              </p>
              <p className="text-base/8 text-neutral-500">
                Designing digital experiences that are intuitive, visually
                stunning, and user-centered. From wireframes to interactive
                prototypes, I focus on usability, accessibility, and seamless
                interactions to elevate products that users love.
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-md">Frontend Development</h1>
              <div className="flex items-center flex-wrap gap-4">
                {techstacks.frontend_stacks.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    <StackIcon className="w-4 h-4" name={tech.icon} />
                    {tech.title}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-md">Backend Development</h1>
              <div className="flex items-center flex-wrap gap-4">
                {techstacks.backend_stacks.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    <StackIcon className="w-4 h-4" name={tech.icon} />
                    {tech.title}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-md">Tools & Others</h1>
              <div className="flex items-center flex-wrap gap-4">
                {techstacks.tools.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    <StackIcon className="w-4 h-4" name={tech.icon} />
                    {tech.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div id="experience">
            <div className="space-y-6 bg-white/50 backdrop-blur-sm">
              <h1 className="font-bold text-2xl md:text-3xl">Experience</h1>
              <div>
                {experiences.map((exp, index) => (
                  <ExperienceCard exp={exp} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
