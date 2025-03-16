import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import techStacks from "@/data/techstacks.json";

interface TechStacksCardProps {
  title: string;
  stack: keyof typeof techStacks;
}

const TechStacksCard: React.FC<TechStacksCardProps> = ({ title, stack }) => {
  const stackData = techStacks[stack]; 

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {stackData?.map((tech, index) => (
          <Badge key={index} variant="outline">
            <StackIcon className="w-4 h-4" name={tech.icon} />
            {tech.title}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default TechStacksCard;
