import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
import Button from "./Button";
import { MI } from "../Utils/Data";

import "../App.css";

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addPlayerToXI(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addPlayerToXI = (id) => {
    const playerList = MI.filter((player) => id === player.id);
    setBoard((board) => [...board, playerList[0]]);
  };

  const clickHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="pictures">
        {MI.map((player) => {
          return (
            <Button onClick={() => addPlayerToXI(player.id)}>
              <Picture key={player.id} id={player.id} url={player.url} />
            </Button>
          );
        })}
      </div>
      <div className="playing-xi">
        <h4>Playing XI</h4>
        <div className="Board" ref={drop}>
          {board.map((player) => {
            return (
              <h2 className="player-card" key={player.id}>
                {player.name}
              </h2>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DragDrop;
