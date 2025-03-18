import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import DesignList from "../home/DesignList";
import designs from "@/data/designs.json";
import { motion } from "motion/react";


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
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
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

export default Designs;
