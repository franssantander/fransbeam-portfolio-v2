import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DesignList: React.FC = (props) => {
  const { design } = props;
  const { id, img, title } = design;
  return (
    <Link state={design} to={`/design/${id}`}>
      <Card className="py-2">
        <CardContent className="px-2">
          <img
            className="rounded-md w-auto h-auto"
            src={`../../../public/thumbnail/${img}`}
            alt={title}
          />
        </CardContent>
      </Card>
    </Link>
  );
};

export default DesignList;
