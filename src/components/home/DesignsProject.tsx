import React from "react";
import designs from "@/data/designs.json";
import DesignList from "./DesignList";
import { motion } from "motion/react";

const DesignsProject: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-24">
        <div className="px-4 max-w-7xl m-auto">
          <div className="bg-white rounded-2xl backdrop-blur-sm max-w-max  space-y-3">
            <h3 className="uppercase text-xs font-semibold">
              Crafting Engaging Experiences
            </h3>
            <h1 className="font-bold text-2xl md:text-3xl">
              UI/UX Design Projects
            </h1>
            <p className="text-base/8 text-neutral-500 md:max-w-lg">
              Designing digital experiences that are intuitive, visually
              stunning, and user-centered. From wireframes to interactive
              prototypes, I focus on usability, accessibility, and seamless
              interactions to elevate products that users love.
            </p>
          </div>
          <div className="mt-20 space-y-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols md:grid-cols-2 gap-6 mt-20"
            >
              {designs.map((design, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <DesignList design={design} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsProject;
