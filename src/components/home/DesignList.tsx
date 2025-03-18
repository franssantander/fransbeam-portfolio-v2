import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface DesignListType {
  design: {
    id: number;
    img: string;
    title: string;
    description: string;
    year: string;
    overview_cover: string;
    overview: string;
    color_palette: string;
    typography: string;
    wireframe: string;
    project_outcome: string[];
    link: string;
  };
}

const DesignList: React.FC<DesignListType> = (props) => {
  const { design } = props;
  const { id, img, title } = design;
  return (
    <Link state={design} to={`/designs/${id}`}>
      <Card className="py-2">
        <CardContent className="px-2">
          <div className="rounded-md overflow-hidden">
            <motion.img
              className="rounded-md w-auto h-auto"
              src={`/thumbnail/${img}`}
              alt={title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DesignList;
