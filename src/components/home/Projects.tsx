import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects.json";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const Projects: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-20 bg-[#F6F5F4] rounded-t-4xl">
        <div className="px-4 max-w-7xl m-auto">
          <div>
            <div>
              <h3 className="uppercase text-xs font-semibold">
                Turning Ideas into Scalable Solutions
              </h3>
              <h1 className="font-bold text-lg">
                Software Development Projects
              </h1>
            </div>
            <p className="text-xs/6 text-neutral-500">
              Building robust, high-performing applications with clean code and
              modern technologies. Whether it's front-end magic, back-end
              architecture, or full-stack development.
            </p>
          </div>
          <div className="mt-20">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div>
                  <Card className="py-2" key={index}>
                    <CardContent className="px-2">
                      <img
                        className="rounded-md"
                        src={project.img}
                        alt={project.title}
                      />
                    </CardContent>
                  </Card>
                  <div className="space-y-2 mt-4">
                    <h1 className="font-bold text-xl">{project.title}</h1>
                    <p className="text-xs/6 text-neutral-500">{project.desc}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.techstacks.map((tech, index) => (
                        <Badge variant="outline" key={index}>
                          <StackIcon className="w-4 h-4" name={tech.icon} />
                          {tech.title}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-x-3">
                      <Button size="sm">
                        <Icon icon="lucide:github" width="24" height="24" />
                        Source Code
                      </Button>
                      {project.live_demo === null && (
                        <Button size="sm" disabled>
                          Coming Soon
                        </Button>
                      )}
                      {project.live_demo !== null && (
                        <Button size="sm">
                          <Icon
                            icon="lucide:external-link"
                            width="24"
                            height="24"
                          />
                          View Live
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
