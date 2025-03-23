import React from "react";
import whatIdo from "@/data/whatido.json";
import line from "@/assets/vector/line.svg";
import { motion } from "motion/react";

const WhatIdo: React.FC = () => {
  return (
    <>
      <div className="w-full relative bg-white dark:bg-[#161F33] h-full flex items-center py-24">
        <div className="max-w-7xl px-4 m-auto space-y-32">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">What I do?</h1>
            <p className="text-base/8 text-neutral-500 dark:text-[#B3B8C4] max-w-xl m-auto">
              As a full-stack web developer and uiux designer, I specialize in
              building high quality application that applies good practices,
              principles, architecture and user-friendly websites that deliver
              outstanding end user.
            </p>
          </div>
          <img
            className="hidden lg:block md:absolute w-full left-0 bottom-14 opacity-60"
            src={line}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols space-y-10 md:grid-cols-2 gap-x-10 lg:grid-cols-4"
          >
            {whatIdo.map((data, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-3"
              >
                <img src={`/icons/${data.icon}`} alt="System Design" />
                <div className="space-y-3">
                  <h1 className="font-bold text-lg">{data.title}</h1>
                  <p className="text-neutral-500 text-sm/6 dark:text-[#B3B8C4]">
                    {data.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhatIdo;
