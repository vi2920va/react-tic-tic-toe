import React from "react";
import Squere from "./Squere";
import styled from "styled-components";

const Board: React.FC = () => {
  const handleButtonPross = () => {};
  const renderSquare = (i: number) => {
    return <Squere onClick={handleButtonPross} value={i} />;
  };

  return (
    <div>
      <StyledStats className="start">Next player : X</StyledStats>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;

const StyledStats = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;
