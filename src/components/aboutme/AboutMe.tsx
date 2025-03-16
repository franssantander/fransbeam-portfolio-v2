import React from "react";
import { Separator } from "@/components/ui/separator";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../ExperienceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techStacks from "@/data/techstacks.json";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";
import TechStacksCard from "../TechStacksCard";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="px-4 max-w-7xl m-auto py-36 md:py-0">
          <div className="w-full h-dvh flex flex-col justify-center items-center pt-20">
            <div className="w-full flex flex-col gap-y-7 text-center">
              <h1 className="font-bold text-2xl max-w-xl m-auto lg:text-3xl/12">
                👋 Hi, I’m Francis Beam - A Fullstack Developer & UI/UX Designer
              </h1>
              <p className="text-neutral-500 max-w-sm m-auto">
                Building Seamless Digital Experiences with Code & Design since
                2020
              </p>
            </div>
            <div className="pt-20">
              <div className="space-y-5 text-center">
                <h1 className="text-neutral-500 text-lg/9 max-w-2xl mx-auto">
                  With a passion for both functionality and aesthetics, I
                  specialize in crafting user-friendly, high-performance
                  applications. As a Full-Stack Software Engineer, I develop
                  scalable, efficient solutions, and as a UI/UX Designer, I
                  ensure every interaction is intuitive and engaging.
                </h1>
                <h1 className="text-neutral-500 text-lg/9 max-w-2xl mx-auto">
                  From front-end development to backend architecture, I bring
                  ideas to life with clean code and thoughtful design. My goal?
                  To create products that not only work flawlessly but also
                  provide an exceptional user experience.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Separator className=" bg-neutral-400" />
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full h-full py-20 space-y-34">
            <div className="w-full flex flex-col text-center">
              <h1 className="font-bold text-2xl max-w-xl m-auto lg:text-3xl/12">
                Experiences
              </h1>
            </div>
            <div>
              {experiences.map((exp, index) => (
                <ExperienceCard exp={exp} key={index} />
              ))}
            </div>
          </div>
        </div>
        <Separator className=" bg-neutral-400" />
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full h-full py-20 space-y-34">
            <div className="w-full flex flex-col text-center">
              <h1 className="font-bold text-2xl max-w-xl m-auto lg:text-3xl/12">
                Skills
              </h1>
            </div>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechStacksCard title="Frontend" stack="frontend_stacks" />
              <TechStacksCard title="Backend" stack="backend_stacks" />
              <TechStacksCard title="Tools & Others" stack="tools" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
