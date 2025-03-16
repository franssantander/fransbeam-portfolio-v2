import React from "react";
import { Button } from "../ui/button";
import Me from "@/assets/me.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="w-full px-4 max-w-7xl m-auto h-dvh grid grid-cols items-center md:grid-cols-2">
        <div>
          <div className="space-y-3">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="space-y-3 bg-white/80 backdrop-blur-none"
            >
              <h3 className="uppercase text-neutral-500 text-xs font-semibold">
                Full-Stack Software Engineer | UI/UX Designer
              </h3>
              <h1 className="font-black text-2xl sm:text-5xl/14">
                Building Digital Experiences with Code & Design
              </h1>
              <p className="text-neutral-500 text-base/8 max-w-xl">
                I craft seamless, high-performing web applications and intuitive
                user experiences. With a passion for both engineering and
                design, I bridge the gap between functionality and aesthetics to
                create digital products that truly stand out.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="flex items-center gap-x-3"
            >
              {[
                "View my projects",
                "Email me",
                <Icon icon="lucide:github" fontSize={24} />,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  {index === 2 ? (
                    <Button variant="ghost">{item}</Button>
                  ) : (
                    <Button variant={index === 1 ? "outline" : "default"}>
                      {item}
                    </Button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="hidden md:block"
        >
          <div className="flex right-0 justify-end">
            <img className="w-md" src={Me} alt="Francis Beam Santander" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
