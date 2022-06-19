import React from "react";
import { BoardState } from "../hooks/useGame";

interface LogProps {
  history: BoardState[];
  jumpTo: (i: number) => void;
}
const Log: React.FC<LogProps> = ({ history, jumpTo }) => {
  return (
    <ul>
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => jumpTo(index)}>
              Go to {index === 0 ? "start" : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Log;
