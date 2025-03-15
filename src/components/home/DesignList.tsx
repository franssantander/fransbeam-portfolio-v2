import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DesignList: React.FC = (props) => {
  const { design } = props;
  const { img, title, link } = design;
  return (
    <Link to={link}>
      <Card className="py-2">
        <CardContent className="px-2">
          <img className="rounded-md w-auto h-auto" src={img} alt={title} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default DesignList;
