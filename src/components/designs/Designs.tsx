import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import DesignList from "../home/DesignList";
import designs from "@/data/designs.json";

const Designs: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-32">
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full space-y-4 text-center">
            <Icon
              color="#FFC900"
              className="flex justify-center w-full"
              icon="lucide:sparkles"
              fontSize={24}
            />

            <h1 className="font-bold text-2xl lg:text-3xl">UI/UX Designs</h1>
            <p className="text-neutral-500 max-w-lg m-auto">
              Explore my work and see how I merge creativity with technology to
              deliver impactful projects.
            </p>
          </div>
          <div className="mt-20 space-y-20">
            <div className="grid grid-cols md:grid-cols-2 gap-6 mt-20">
              {designs.map((design, index: number) => (
                <DesignList design={design} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Designs;
