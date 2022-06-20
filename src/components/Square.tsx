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
  margin: 5px 5px;
  padding: 0;
  border: 1px solid #2d6898;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 700;
  background-image: linear-gradient(
    bottom,
    rgb(73, 132, 180) 0%,
    rgb(97, 155, 203) 100%
  );
  background-color: #538fbe;
  box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    inset 0px 0px 3px rgba(255, 255, 255, 0.5);
  color: #fff;

  cursor: pointer;

  &:active {
    padding: 0;
  }
`;
