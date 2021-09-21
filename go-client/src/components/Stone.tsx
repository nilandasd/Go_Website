import React, { FC } from "react";
import styled,  { css } from "styled-components";

const StyledStone = styled.div`
  height: 100%;
  width: 100%;
  margin: 2%;

  ${(props) =>
    props.color === "white" &&
    css`
      background: linear-gradient(150deg, white, grey);
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `}
  ${(props) =>
    props.color === "black" &&
    css`
      background: linear-gradient(150deg, black, grey);
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `}
`;

interface StoneProps {
    color: string
}

const Stone: FC<StoneProps> = ({ color }) => {
  return <StyledStone color={color} />;
};

export default Stone;
