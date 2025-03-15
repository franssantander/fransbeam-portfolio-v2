import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardContent } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";

type Project = {
  project: {
    img: string;
    title: string;
    type: string;
    desc: string;
    features: string[];
    live_demo: string;
    techstacks: string[];
  };
};

const ProjectList: React.FC<Project> = (props) => {
  const { project } = props;
  const { img, title, type, features, techstacks, desc, live_demo } = project;
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:gap-x-4 lg:gap-x-10">
        <Card className="py-2">
          <CardContent className="px-2">
            <img className="rounded-md w-auto h-auto" src={img} alt={title} />
          </CardContent>
        </Card>
        <div className="space-y-6 mt-4 bg-white rounded-2xl backdrop-blur-sm">
          <div className="space-y-1">
            <h3 className="text-neutral-500 text-sm uppercase font-semibold">
              {type}
            </h3>
            <div className="flex items-center gap-x-2 relative">
              <h1 className="font-bold text-xl">{title}</h1>
              <div className="absolute bottom-0 h-1 bg-[#803AEA] w-10"></div>
              <Button variant="ghost" size="lg">
                <Icon icon="lucide:github" width="24" height="24" />
              </Button>
            </div>
          </div>
          <p className="text-sm/6 text-neutral-500">{desc}</p>
          {features.map((feature) => (
            <ul className="hidden md:block space-y-3">
              <li className="flex items-center gap-x-4">
                <Icon color="#803AEA" icon="lucide:sparkle" fontSize={16} />
                <p className="text-xs/5 text-neutral-500">{feature}</p>
              </li>
            </ul>
          ))}
          <div className="flex flex-wrap items-center gap-3">
            {techstacks.map((tech, index: number) => (
              <Badge variant="outline" key={index}>
                <StackIcon className="w-4 h-4" name={tech.icon} />
                {tech.title}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-x-3 md:hidden">
            <Button size="sm">
              <Icon icon="lucide:github" width="24" height="24" />
              Source Code
            </Button>
            {live_demo === null && (
              <Button size="sm" disabled>
                Coming Soon
              </Button>
            )}
            {live_demo !== null && (
              <Button size="sm">
                <Icon icon="lucide:external-link" width="24" height="24" />
                View Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
