import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
// import { DarkModeToggle } from "@/components/DarkModeToggle";
import navMenu from "@/data/navbar.json";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Icon } from "@iconify/react/dist/iconify.js";
import _ from "lodash";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="hidden max-w-7xl mx-auto items-center justify-between p-4 lg:flex">
        <div className="flex items-center gap-x-7">
          <Link to="/" className="font-bold text-xl">
            Fransbeam
          </Link>
          <ul className="flex items-center gap-x-7 text-sm text-neutral-500">
            {navMenu.map((menu, index) => {
              const isActive =
                location.pathname === menu.link ||
                (menu.link.includes("designs") &&
                  _.includes(location.pathname, "designs/"));

              return (
                <Link
                  className={isActive ? "font-medium text-black" : ""}
                  key={index}
                  to={menu.link}
                >
                  {menu.menu}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="space-x-3 flex items-center">
          <a href="/Francis Beam Santander - Resume.pdf" download>
            <Button>Resume</Button>
          </a>
          {/* <DarkModeToggle /> */}
        </div>
      </div>
      <div className="w-full fixed border-b left-0 bg-white flex items-center justify-between p-4 lg:hidden">
        <div>
          <Link to="/" className="font-bold text-2xl">
            Fransbeam
          </Link>
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
