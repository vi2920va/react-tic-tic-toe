import { useState } from "react";

export type Value = "X" | "O" | null;

export type BoardState = Value[];

export interface GameState {
  history: BoardState[];
  step: number;
}

const useGame = () => {
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
    const boardState = gameState.history[gameState.history.length - 1];

    if (calculateWinner(boardState) || boardState[i]) {
      return;
    }
    const newBoardState = [...boardState];
    newBoardState[i] = gameState.step % 2 === 0 ? "X" : "O";
    history.push(newBoardState);
    setGameState({
      history: history,
      step: history.length - 1,
    });
  };

  const handleButtonReset = () => {
    setGameState({
      history: [createBoardState()],
      step: 0,
    });
  };

  const jumpTo = (i: number) => {
    setGameState({
      history: gameState.history,
      step: i,
    });
  };

  return {
    gameState,
    current,
    isNext,
    winner,
    handleButtonPress,
    handleButtonReset,
    jumpTo,
  };
};

export default useGame;
