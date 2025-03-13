import Navbar from "@/components/home/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="border-b">
        <div className="w-full fixed top-0 left-0 right-0 bg-white border-b border-gray-200">
          <Navbar />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default HomeLayout;
