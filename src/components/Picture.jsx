import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      width="150px"
      style={{ opacity: isDragging ? "0.4" : "1" }}
    />
  );
};

export default Picture;
