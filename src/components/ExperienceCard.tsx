import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ExperienceType {
  exp: {
    logo: string;
    position: string;
    name: string;
    year: string;
    exp_list: string[];
  };
}

const ExperienceCard: React.FC<ExperienceType> = (props) => {
  const { exp } = props;
  const { logo, position, name, year, exp_list } = exp;

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-x-3">
          <Card className="w-12 p-2 rounded-sm">
            <CardContent className="p-0">
              <img className="w-32" src={logo} alt={name} />
            </CardContent>
          </Card>
          <div className="space-y-1 bg-white rounded-full">
            <h1 className="font-bold text-lg">{position}</h1>
            <div className="flex items-center gap-x-3">
              <h3 className="text-neutral-500 text-xs">{name}</h3>
              <Icon
                icon="tabler:circle-filled"
                className="text-neutral-400"
                fontSize={6}
              />
              <h3 className="text-neutral-500 text-xs">{year}</h3>
            </div>
          </div>
        </div>
        <ul className="list-disc space-y-3 text-neutral-500 text-sm/7 pt-5 ml-4">
          {exp_list.map((list, index) => (
            <li className="bg-white" key={index}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceCard;
