import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import mountains from "@/assets/vector/mountains.svg";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="w-full h-full relative bg-[#7241FF] py-24">
        <div className="relative px-4 space-y-32 max-w-7xl m-auto z-10">
          <div className="text-center flex flex-col gap-y-7 z-50">
            <div className="w-full m-auto flex justify-center space-x-4">
              <Link to="/github.com">
                <Icon
                  icon="lucide:github"
                  className="text-white"
                  fontSize={34}
                />
              </Link>
              <Link to="/github.com">
                <Icon
                  icon="lucide:linkedin"
                  className="text-white"
                  fontSize={34}
                />
              </Link>
              <Link to="/github.com">
                <Icon
                  icon="lucide:facebook"
                  className="text-white"
                  fontSize={34}
                />
              </Link>
            </div>
            <h1 className="text-2xl/10 font-bold max-w-2xl m-auto lg:text-4xl/14 text-white">
              I’m always open to new opportunities and would love to hear from
              you.
            </h1>
            <div>
              <Button size="lg">Email me</Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 items-center justify-between sm:flex-row">
            <h1 className="text-white text-sm">
              © {year} All rights reserved.
            </h1>
            <ul className="flex fkex items-center gap-x-7 text-sm text-white">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/designs">Designs</Link>
              <Link to="/about-me">About me</Link>
            </ul>
          </div>
        </div>
        <img className="absolute bottom-0 w-full" src={mountains} alt="" />
      </footer>
    </>
  );
};

export default Footer;
