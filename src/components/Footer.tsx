import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import mountains from "@/assets/vector/mountains.svg";
import { motion } from "motion/react";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  const socialLinks = [
    { icon: "lucide:github", url: "https://github.com/franssantander" },
    { icon: "lucide:linkedin", url: "https://www.linkedin.com/in/francebeam/" },
  ];

  return (
    <>
      <footer className="w-full h-full relative bg-[#7241FF] py-24">
        <div className="relative px-4 space-y-32 max-w-7xl m-auto z-10">
          <div className="text-center flex flex-col gap-y-7 z-50">
            <div className="w-full m-auto flex justify-center space-x-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  target="_blank"
                  className="relative flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative"
                  >
                    <Icon
                      icon={item.icon}
                      className="text-white"
                      fontSize={34}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
            <h1 className="text-2xl/10 font-bold max-w-2xl m-auto lg:text-4xl/14 text-white">
              I’m always open to new opportunities and would love to hear from
              you.
            </h1>
            <motion.div
              className="flex justify-center mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <a href="mailto:santanderfrancisbeam@gmail.com">
                <Button size="lg">Email me</Button>
              </a>
            </motion.div>
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
