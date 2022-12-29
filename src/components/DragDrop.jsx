import React from "react";
import Picture from "./Picture";

import "../App.css";

const DragDrop = () => {
  return (
    <>
      <div className="pictures">
        {squad.map((player) => {
          return <Picture key={player.id} url={player.url} />;
        })}
      </div>
      <div className="board"></div>
    </>
  );
};

export default DragDrop;
