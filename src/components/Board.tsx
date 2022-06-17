import React, { useState } from "react";
import Squere from "./Squere";
import styled from "styled-components";

export type Value = "X" | "O" | null;

export type BoardState = Value[];

export interface GameState {
  history: BoardState[];
  step: number;
}

const Board: React.FC = () => {
  const createBoardState = () => Array<Value>(9).fill(null);

  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

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
    }
    return null;
  };

  const current = gameState.history[gameState.step];
  const isNext = gameState.step % 2 === 0;
  const winner = calculateWinner(current);

  const handleButtonPress = (i: number) => {
    const history = gameState.history.slice(0, gameState.step + 1);
    const newBoardState = gameState.history[gameState.history.length - 1];
    newBoardState[i] = gameState.step % 2 === 0 ? "X" : "O";
    history.push(newBoardState);

    setGameState({
      history,
      step: history.length - 1,
    });
  };

  const renderSquare = (i: number) => {
    return <Squere onClick={() => handleButtonPress(i)} value={current[i]} />;
  };
  return (
    <div>
      <StyledStats className="start">
        {winner ? `Winner ${winner}` : `Next player : ${isNext ? "X" : "O"}`}
      </StyledStats>
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

const StyleRow = styled.div`
  display: flex;
`;
