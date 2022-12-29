import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Picture from "./Picture";

import "../App.css";

const squad = [
  {
    id: 1,
    name: "Rohit Sharma",
    url: "https://www.mumbaiindians.com/static-assets/images/players/large/3852.png?v=2.18&w=200",
  },
  {
    id: 2,
    name: "Jofra Archer",
    url: "https://www.mumbaiindians.com/static-assets/images/players/large/64254.png?v=2.17&w=400",
  },
  {
    id: 3,
    name: "Suryakumar yadav",
    url: "https://www.mumbaiindians.com/static-assets/images/players/large/11803.png?v=2.18&w=200",
  },
  {
    id: 4,
    name: "Jusprit Bumrah",
    url: "https://www.mumbaiindians.com/static-assets/images/players/large/63755.png?v=2.18&w=200",
  },
  {
    id: 5,
    name: "Tim David",
    url: "https://www.mumbaiindians.com/static-assets/images/players/large/67402.png?v=2.18&w=200",
  },
  // {
  //   id: 6,
  //   name: "Cameron Green",
  //   url: "https://www.mumbaiindians.com/static-assets/images/players/large/66870.png?v=2.18&w=200",
  // },
];

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
    const playerList = squad.filter((player) => id === player.id);
    setBoard((board) => [...board, playerList[0]]);
  };

  return (
    <>
      <div className="pictures">
        {squad.map((player) => {
          return <Picture key={player.id} url={player.url} />;
        })}
      </div>
      <div className="playing-xi">
        <h4>Playing XI</h4>
        <div className="Board">
          {board.map((picture) => {
            return <Picture url={player.url} id={player.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DragDrop;
