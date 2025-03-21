import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const HomeLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="border-b">
        <div className="w-full fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
