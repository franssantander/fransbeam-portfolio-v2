import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div className="flex items-center gap-x-7">
        <h1 className="font-bold text-xl">Fransbeam</h1>
        <ul className="flex items-center gap-x-7 text-sm text-neutral-500">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/designs">Designs</Link>
          <Link to="/about-me">About me</Link>
        </ul>
      </div>
      <div className="space-x-3">
        <Button size="sm">Resume</Button>
        <Button variant="ghost" size="sm">
          <Icon icon="lucide:moon" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
