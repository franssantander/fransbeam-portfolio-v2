import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import StackIcon from "tech-stack-icons";
import { motion } from "motion/react";

interface TechStacksCardProps {
  skill: {
    title: string;
    icon: string;
  };
  index: number;
}

const TechStacksCard: React.FC<TechStacksCardProps> = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { skill, index } = props;
  const { title, icon } = skill;
  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{ rotate: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Badge className="text-md gap-x-3 bg-white" variant="outline">
        <motion.div
          className="flex items-center gap-x-1 px-2 py-1 justify-center hover:bg-gradient-to-r hover:from-[#803AEA] hover:to-violet-600 
                 hover:text-transparent hover:bg-clip-text hover:font-medium"
          animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <StackIcon className="w-4 h-4" name={icon} />
          {title}
        </motion.div>
      </Badge>
    </motion.div>
  );
};

export default TechStacksCard;
