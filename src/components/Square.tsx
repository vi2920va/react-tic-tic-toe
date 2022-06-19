import React from "react";
import { Value } from "../hooks/useGame";
import styled from "styled-components";

interface SquareProps {
  value: Value;
  onClick: (i: React.MouseEvent<HTMLButtonElement>) => void;
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => {
  return <StyledSquareBtn onClick={onClick}>{value}</StyledSquareBtn>;
};

export default Square;

const StyledSquareBtn = styled.button`
  width: 95px;
  height: 95px;
  padding: 0;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: 700;
  background: #fff;
  cursor: pointer;

  &:active {
    padding: 0;
  }
`;
