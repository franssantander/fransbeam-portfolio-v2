import DesignsProject from "@/components/home/DesignsProject";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <DesignsProject />
    </>
  );
};

export default Home;
