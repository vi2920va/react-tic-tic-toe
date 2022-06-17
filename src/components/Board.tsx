import React, { useState } from "react";
import Squere from "./Squere";
import styled from "styled-components";

export type Value = "X" | "O";
export type BoardState = Value[];

const Board: React.FC = () => {
  const [squares, setSquares] = useState<BoardState>(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const handleButtonPross = (i: number) => {
    const boards = [...squares];
    boards[i] = "X";

    setSquares(boards);
    setIsNext(true);
    if (isNext) {
      boards[i] = "O";
      setSquares(boards);
      setIsNext(false);
    }
  };

  const renderSquare = (i: number) => {
    return <Squere onClick={() => handleButtonPross(i)} value={squares[i]} />;
  };

  const calculateWinner = (boardState: BoardState) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
      return null;
    }
  };

  return (
    <div>
      <StyledStats className="start">Next player : X</StyledStats>
      <StyleRow className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </StyleRow>
      <StyleRow className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </StyleRow>
      <StyleRow className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </StyleRow>
    </div>
  );
};
export default Board;

const StyledStats = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

export const StyleRow = styled.div`
  display: flex;
`;
