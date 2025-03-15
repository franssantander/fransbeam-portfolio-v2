import React from "react";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-32">
        <div className="px-4 max-w-7xl m-auto">
          <div className="w-full flex flex-col gap-y-7 text-center">
            <h1 className="font-bold text-2xl max-w-xl m-auto lg:text-3xl">
              👋 Hi, I’m Francis Beam - A Fullstack Developer & UI/UX Designer
            </h1>
            <p className="text-neutral-500 max-w-sm m-auto">
              Building Seamless Digital Experiences with Code & Design since
              2020
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
