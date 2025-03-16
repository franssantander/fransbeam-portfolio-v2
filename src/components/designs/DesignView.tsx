import React from "react";
import { useLocation } from "react-router-dom";

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

  console.log("viewData: ", viewData);

  return (
    <>
      <div className="w-full h-full max-w-7xl mx-auto px-4 py-32">
        <div>
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <h3>{description}</h3>
            <h3>{year}</h3>
          </div>
          <div className="py-20">
            <div className="space-y-20">
              <div className="space-y-10">
                <img src={`${filepath}${overview_cover}`} alt={title} />
                <div className="space-y-4">
                  <h1 className="font-bold text-2xl md:text-3xl">Overview</h1>
                  <p className="text-neutral-500 max-w-2xl">{overview}</p>
                </div>
              </div>
              <div className="md:flex md:gap-x-14">
                <div className="space-y-4">
                  <h1 className="font-bold text-2xl md:text-3xl">
                    Color Palette
                  </h1>
                  <img src={`${filepath}${color_palette}`} alt={title} />
                </div>

                <div className="space-y-4">
                  <h1 className="font-bold text-2xl md:text-3xl">
                    Color Palette
                  </h1>
                  <img src={`${filepath}${typography}`} alt={title} />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-2xl md:text-3xl">Wireframe</h1>
                <img src={`${filepath}${wireframe}`} alt={title} />
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-2xl md:text-3xl">
                  Project Outcome
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                  {project_outcome.map((data, index) => (
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
