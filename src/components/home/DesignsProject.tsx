import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DesignsProject: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-20">
        <div className="px-4 max-w-7xl m-auto">
          <div>
            <div>
              <h3 className="uppercase text-xs font-semibold">
                Crafting Engaging Experiences
              </h3>
              <h1 className="font-bold text-lg md:text-2xl">
                UI/UX Design Projects
              </h1>
            </div>
            <p className="text-sm/6 text-neutral-500 md:max-w-lg">
              Designing digital experiences that are intuitive, visually
              stunning, and user-centered. From wireframes to interactive
              prototypes, I focus on usability, accessibility, and seamless
              interactions to elevate products that users love.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols md:grid-cols-2 gap-4 mt-20">
              <Card className="py-2">
                <CardContent className="px-2">
                  <img
                    className="rounded-md w-auto h-auto"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </CardContent>
              </Card>
              <Card className="py-2">
                <CardContent className="px-2">
                  <img
                    className="rounded-md w-auto h-auto"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </CardContent>
              </Card>
              <Card className="py-2">
                <CardContent className="px-2">
                  <img
                    className="rounded-md w-auto h-auto"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </CardContent>
              </Card>
              <Card className="py-2">
                <CardContent className="px-2">
                  <img
                    className="rounded-md w-auto h-auto"
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignsProject;
