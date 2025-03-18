import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

type Project = {
  project: {
    img: string;
    title: string;
    github: string;
    type: string;
    desc: string;
    features: string[];
    live_demo: string;
    techstacks: string[];
  };
};

const ProjectList: React.FC<Project> = (props) => {
  const { project } = props;
  const { img, title, type, github, features, techstacks, desc, live_demo } =
    project;

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:gap-x-4 lg:gap-x-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <a href={live_demo} target="_blank" rel="noopener noreferrer">
            <Card className="py-2">
              {live_demo === "" && (
                <CardHeader className="px-4 h-4 pt-2">
                  <CardTitle>
                    <div className="flex items-end flex-col">
                      <Badge
                        variant="secondary"
                        className="p-1 flex items-center gap-x-2"
                      >
                        <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_8px_2px] shadow-yellow-300"></span>
                        Coming Soon
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
              )}
              <CardContent className="w-full h-full px-2 relative">
                <div className="rounded-md overflow-hidden">
                  <motion.img
                    className="rounded-md max-w md:max-w-2xl h-auto object-cover"
                    src={`../../../public/thumbnail/${img}`}
                    alt={title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </CardContent>
            </Card>
          </a>
        </motion.div>
        <div className="max-w-screen-sm mx-auto overflow-hidden">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="space-y-5 mt-4 bg-white rounded-2xl backdrop-blur-sm">
              <div className="space-y-1">
                <h3 className="text-neutral-500 text-xs uppercase font-semibold">
                  {type}
                </h3>
                <div className="flex items-center gap-x-2 relative">
                  <h1 className="font-bold text-xl">{title}</h1>
                  <div className="absolute bottom-0 h-1 bg-[#803AEA] w-10"></div>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="lg">
                      <Icon icon="lucide:github" width="24" height="24" />
                    </Button>
                  </a>
                </div>
              </div>
              <p className="text-base/7 text-neutral-500">{desc}</p>
              {features.map((feature) => (
                <ul className="hidden md:block">
                  <li className="flex items-center gap-x-3">
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
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Button size="sm">
                    <Icon icon="lucide:github" width="24" height="24" />
                    Source Code
                  </Button>
                </a>
                {live_demo === "" && (
                  <Button size="sm" disabled>
                    Coming Soon
                  </Button>
                )}
                {live_demo !== "" && (
                  <a href={live_demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <Icon
                        icon="lucide:external-link"
                        width="24"
                        height="24"
                      />
                      View Live
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
