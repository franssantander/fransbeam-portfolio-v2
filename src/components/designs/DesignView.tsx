import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const DesignView: React.FC = () => {
  const location = useLocation();
  const viewData = location.state;
  const filepath = "../../../public/thumbnail/";
  const {
    title,
    description,
    year,
    overview_cover,
    overview,
    color_palette,
    typography,
    wireframe,
    project_outcome,
  } = viewData;

  return (
    <>
      <div className="w-full h-full max-w-7xl mx-auto px-4 py-32">
        <Button className="w-14" variant="link">
          <Link
            className="flex items-center justify-between gap-x-2 text-neutral-600 w-14 group"
            to="/designs"
          >
            <motion.div
              className="flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Icon
                className="text-neutral-600"
                icon="lucide:arrow-left"
                fontSize={24}
              />
            </motion.div>
            Back
          </Link>
        </Button>
        <div>
          <div className="mt-7 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <h3>{description}</h3>
            <h3>{year}</h3>
          </div>
          <div className="py-20">
            <div className="space-y-20">
              <div className="space-y-10">
                <img src={`${filepath}${overview_cover}`} alt={title} />
                <div className="space-y-6">
                  <h1 className="font-bold text-2xl md:text-3xl">Overview</h1>
                  <p className="text-neutral-500 max-w-2xl">{overview}</p>
                </div>
              </div>
              <div className="md:flex md:gap-x-14">
                <div className="space-y-6">
                  <h1 className="font-bold text-2xl md:text-3xl">
                    Color Palette
                  </h1>
                  <img src={`${filepath}${color_palette}`} alt={title} />
                </div>

                <div className="space-y-6">
                  <h1 className="font-bold text-2xl md:text-3xl">
                    Color Palette
                  </h1>
                  <img src={`${filepath}${typography}`} alt={title} />
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="font-bold text-2xl md:text-3xl">Wireframe</h1>
                <img
                  className="max-w-auto md:max-w-2xl mx-auto"
                  src={`${filepath}${wireframe}`}
                  alt={title}
                />
              </div>
              <div className="space-y-6">
                <h1 className="font-bold text-2xl md:text-3xl">
                  Project Outcome
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-auto">
                  {project_outcome.map((data, index: number) => (
                    <img
                      src={`${filepath}${data}`}
                      key={index}
                      alt={title}
                      className={index === 2 ? "md:col-span-2 mx-auto" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignView;
