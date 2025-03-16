import React, { useState } from "react";
import techstacks from "@/data/techstacks.json";
import { Badge } from "@/components/ui/badge";
import StackIcon from "tech-stack-icons";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../ExperienceCard";
import { motion } from "motion/react";

const AboutMe: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHoverStart = (section: string, index: number) => {
    setHoveredIndex(`${section}-${index}`);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

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
                  <motion.div
                    key={`frontend-${index}`}
                    onHoverStart={() => handleHoverStart("frontend", index)}
                    onHoverEnd={handleHoverEnd}
                    whileHover={{ rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-md p-2 flex items-center gap-x-2 transition-all duration-300 text-neutral-500
                 hover:bg-gradient-to-r hover:from-[#803AEA] hover:to-violet-600 
                 hover:text-transparent hover:bg-clip-text hover:font-medium"
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{
                          scale: hoveredIndex === `frontend-${index}` ? 1.3 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <StackIcon className="w-5 h-5" name={tech.icon} />
                      </motion.div>
                      <h1 className="text-sm">{tech.title}</h1>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-md">Backend Development</h1>
              <div className="flex items-center flex-wrap gap-4">
                {techstacks.backend_stacks.map((tech, index) => (
                  <motion.div
                    key={`backend-${index}`}
                    onHoverStart={() => handleHoverStart("backend", index)}
                    onHoverEnd={handleHoverEnd}
                    whileHover={{ rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-md p-2 flex items-center gap-x-2 transition-all duration-300 text-neutral-500
                 hover:bg-gradient-to-r hover:from-[#803AEA] hover:to-violet-600 
                 hover:text-transparent hover:bg-clip-text hover:font-medium"
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{
                          scale: hoveredIndex === `backend-${index}` ? 1.3 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <StackIcon className="w-5 h-5" name={tech.icon} />
                      </motion.div>
                      <h1 className="text-sm">{tech.title}</h1>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="font-semibold text-md">Tools & Others</h1>
              <div className="flex items-center flex-wrap gap-4">
                {techstacks.tools.map((tech, index) => (
                  <motion.div
                    key={`tools-${index}`}
                    onHoverStart={() => handleHoverStart("tools", index)}
                    onHoverEnd={handleHoverEnd}
                    whileHover={{ rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-md p-2 flex items-center gap-x-2 transition-all duration-300 text-neutral-500
                 hover:bg-gradient-to-r hover:from-[#803AEA] hover:to-violet-600 
                 hover:text-transparent hover:bg-clip-text hover:font-medium"
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{
                          scale: hoveredIndex === `tools-${index}` ? 1.3 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <StackIcon className="w-5 h-5" name={tech.icon} />
                      </motion.div>
                      <h1 className="text-sm">{tech.title}</h1>
                    </Badge>
                  </motion.div>
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
