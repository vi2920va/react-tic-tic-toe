import React from "react";
import Board from "./Board";

const Game: React.FC = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Game;
