import React from "react";
import { Badge } from "@/components/ui/badge";
import StackIcon from "tech-stack-icons";

interface TechStacksCardProps {
  skill: {
    title: string;
    icon: string;
  };
}

const TechStacksCard: React.FC<TechStacksCardProps> = (props) => {
  const { skill } = props;
  const { title, icon } = skill;
  return (
    <Badge className="text-lg gap-x-3 bg-white" variant="outline">
      <StackIcon className="w-5 h-5" name={icon} />
      {title}
    </Badge>
  );
};

export default TechStacksCard;
