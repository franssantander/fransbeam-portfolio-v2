import React from "react";
import experiences from "@/data/experiences.json";
import ExperienceCard from "../ExperienceCard";
import TechStacksCard from "../TechStacksCard";
import wave from "@/assets/vector/wave.svg";
import skills from "@/data/skills.json";
import wavingHand from "@/assets/vector/waving-hand.gif";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="w-full h-full pb-20">
        <div className="px-4 max-w-7xl m-auto py-30 md:py-0">
          <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center pt-20">
            <div className="w-full flex flex-col gap-y-7 text-center">
              <h1 className="bg-white rounded-full font-bold text-2xl max-w-xl m-auto flex lg:text-3xl/12">
                <span>
                  <img draggable="false" className="w-14" src={wavingHand} />
                </span>
                Hi, I’m Francis Beam - A Fullstack Software Engineer & UI/UX Designer
              </h1>
              <p className="bg-white rounded-full text-neutral-500 max-w-sm m-auto">
                Building Seamless Digital Experiences with Code & Design since
                2020
              </p>
            </div>
            <div className="pt-20">
              <div className="space-y-5 text-center">
                <h1 className="bg-white rounded-full text-neutral-500 text-lg/9 max-w-2xl mx-auto">
                  With a passion for both functionality and aesthetics, I
                  specialize in crafting user-friendly, high-performance
                  applications. As a Full-Stack Software Engineer, I develop
                  scalable, efficient solutions, and as a UI/UX Designer, I
                  ensure every interaction is intuitive and engaging.
                </h1>
                <h1 className="bg-white rounded-full text-neutral-500 text-lg/9 max-w-2xl mx-auto">
                  From front-end development to backend architecture, I bring
                  ideas to life with clean code and thoughtful design. My goal?
                  To create products that not only work flawlessly but also
                  provide an exceptional user experience.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full h-full py-20 space-y-34">
            <div className="w-full flex flex-col text-center">
              <img className="w-sm m-auto" src={wave} />
              <h1 className="bg-white rounded-full font-bold text-2xl max-w-xl m-auto lg:text-3xl/12">
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
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full h-full py-20 space-y-34">
            <div className="w-full flex flex-col text-center">
              <img className="w-sm m-auto" src={wave} />
              <h1 className="bg-white rounded-full font-bold text-2xl max-w-xl m-auto lg:text-3xl/12">
                My Tech Stack
              </h1>
            </div>
            <div className="bg-white rounded-full flex flex-1 max-w-3xl m-auto flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <TechStacksCard skill={skill} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
