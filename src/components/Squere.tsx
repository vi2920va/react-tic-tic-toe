import React from "react";
import { Value } from "./Board";
import styled from "styled-components";

interface SquereProps {
  value: Value;
  onClick: (i: React.MouseEvent<HTMLButtonElement>) => void;
}

const Squere: React.FC<SquereProps> = ({ onClick, value }) => {
  return <StyledSqureBtn onClick={onClick}>{value}</StyledSqureBtn>;
};

export default Squere;

const StyledSqureBtn = styled.button`
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
