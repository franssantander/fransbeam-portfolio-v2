import React from "react";
import { Button } from "../ui/button";
import Me from "@/assets/me.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full px-4 max-w-7xl m-auto h-dvh grid grid-cols items-center md:grid-cols-2">
        <div>
          <div className="space-y-4 bg-white/80 backdrop-blur-none">
            <div className="space-y-2">
              <h3 className="uppercase text-neutral-500 text-xs font-semibold">
                Full-Stack Software Engineer | UI/UX Designer
              </h3>
              <h1 className="font-bold text-2xl sm:text-5xl/14">
                Building Digital Experiences with Code & Design
              </h1>
            </div>
            <p className="text-neutral-500 text-sm/7 max-w-xl">
              I craft seamless, high-performing web applications and intuitive
              user experiences. With a passion for both engineering and design,
              I bridge the gap between functionality and aesthetics to create
              digital products that truly stand out.
            </p>
            <div className="flex items-center gap-x-3">
              <Button>View my projects</Button>
              <Button variant="outline">Email me</Button>
              <Button variant="ghost">
                <Icon icon="lucide:github" fontSize={24} />
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex right-0 justify-end">
            <img className="w-md" src={Me} alt="Francis Beam Santander" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
