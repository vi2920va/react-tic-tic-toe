import React, { useCallback } from "react";
import styled from "styled-components";

interface SquereProps {
  value: number;
  onClick: (value: number) => void;
}

const Squere: React.FC<SquereProps> = ({ value }) => {
  const handleButtonprocss = useCallback(
    (value: number) => {
      console.log("squere", value);
    },
    [value]
  );
  return (
    <StyledSqureBtn onClick={() => handleButtonprocss(value)}>
      {value}
    </StyledSqureBtn>
  );
};

export default Squere;

const StyledSqureBtn = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: 700;
  background: #fff;
  cursor: pointer;
`;
