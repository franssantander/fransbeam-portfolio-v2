import AboutMe from "@/components/home/AboutMe";
import DesignsProject from "@/components/home/DesignsProject";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import WhatIdo from "@/components/home/WhatIdo";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <DesignsProject />
      <AboutMe />
      <WhatIdo />
    </>
  );
};

export default Home;
