import React from "react";
import { BoardState } from "../hooks/useGame";
import Square from "./Square";
import styled from "styled-components";

interface BoardProps {
  board: BoardState;
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  const renderSquare = (i: number) => {
    return <Square onClick={() => onClick(i)} value={board[i]} />;
  };

  return (
    <>
      <StyledWrapper>
        <StyledRow className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </StyledRow>
        <StyledRow className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </StyledRow>
        <StyledRow className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </StyledRow>
      </StyledWrapper>
    </>
  );
};

const StyledRow = styled.div`
  display: flex;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Board;
