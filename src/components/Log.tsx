import React from "react";
import { BoardState } from "../hooks/useGame";

interface LogProps {
  history: BoardState[];
  jumpTo: (i: number) => void;
  onClick: () => void;
}
const Log: React.FC<LogProps> = ({ history, jumpTo, onClick }) => {
  return (
    <ul>
      {history.map((_, index) => {
        return (
          <li key={index}>
            {index === 0 ? (
              <button onClick={onClick}>Go to start</button>
            ) : (
              <button onClick={() => jumpTo(index)}>Move #{index}</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Log;
