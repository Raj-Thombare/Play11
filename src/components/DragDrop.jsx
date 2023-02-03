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
    console.log(playerList);
    setBoard((board) => [...board, playerList[0]]);
  };

  const clickHandler = (player) => {
    console.log(player);
  };

  return (
    <div className="container">
      <div className="pictures">
        {MI.map((player) => {
          return (
            <Button onClick={() => addPlayerToXI(player.id)} key={player.id}>
              <Picture id={player.id} url={player.url} />
            </Button>
          );
        })}
      </div>
      <div className="playing-xi">
        <h3>
          Your Team of <span>MI</span>
        </h3>
        <div className="Board" ref={drop}>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
          <div className="player-container">
            <div className="player-digit">1</div>
            <div className="player-card">
              <img
                className="xi-img"
                src="https://cdn-icons-png.flaticon.com/512/1193/1193274.png"
              />
              <h2>Player</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
// {
//   board.map((player) => {
//     return (
//       <div className="player-card" key={player.id}>
//         {/* <img className="xi-img" src={player.url} /> */}
//         <img className="xi-img" src={player.url} />
//         <h2>{player.name}</h2>
//       </div>
//     );
//   });
// }