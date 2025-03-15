import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="hidden max-w-7xl mx-auto items-center justify-between p-4 lg:flex">
        <div className="flex items-center gap-x-7">
          <h1 className="font-bold text-xl">Fransbeam</h1>
          <ul className="flex items-center gap-x-7 text-sm text-neutral-500">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/designs">Designs</Link>
            <Link to="/about-me">About me</Link>
          </ul>
        </div>
        <div className="space-x-3 flex items-center">
          <Button>Resume</Button>
          {/* <DarkModeToggle /> */}
        </div>
      </div>
      <div className="w-full fixed border-b left-0 bg-white flex items-center justify-between p-4 lg:hidden">
        <div>
          <h1 className="font-bold text-lg">Fransbeam</h1>
        </div>
        <Drawer direction="right">
          <DrawerTrigger>
            <Button size="sm">
              <Icon icon="lucide:menu" fontSize={24} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl">Fransbeam</DrawerTitle>
              <DrawerDescription>
                <ul className="pt-20 flex flex-col gap-y-7 text-lg text-neutral-500">
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/designs">Designs</Link>
                  <Link to="/about-me">About me</Link>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
