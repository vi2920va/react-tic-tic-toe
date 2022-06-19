import React from "react";
import useGame from "../hooks/useGame";
import Board from "./Board";
import Log from "./Log";
import styled from "styled-components";

const Game: React.FC = () => {
  const { gameState, current, isNext, jumpTo, winner, handleButtonPress } =
    useGame();
  return (
    <StyledRow gap={20}>
      <StyledCol gap={20}>
        <StyledTitle>
          {winner ? `Winner ${winner}` : `Next Player ${isNext ? "X" : "O"}`}
        </StyledTitle>
        <Board board={current} onClick={handleButtonPress} />
      </StyledCol>
      <Log history={gameState.history} jumpTo={jumpTo} />
    </StyledRow>
  );
};

const StyledRow = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

const StyledCol = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

const StyledTitle = styled.h1`
  text-align: center;
`;

export default Game;
