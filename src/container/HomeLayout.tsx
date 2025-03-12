import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <div id="home-section" className="w-full max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
