import React, { FC, useCallback } from "react";
import styled,  { css } from "styled-components";
import { useTypedDispatch } from "./hooks";
import { gameActions } from "../store/gameSlice";

const StyledStone = styled("div")<{ name: string }>`
  height: 100%;
  width: 100%;
  margin: 2%;

  ${(props) =>
    props.name === "white" &&
    `
      background: linear-gradient(150deg, white, grey);
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `}
  ${(props) =>
    props.name === "black" &&
    `
      background: linear-gradient(150deg, black, grey);
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.89) 0px -2px 6px 0px inset;
    `}
`;

interface StoneProps {
  name: string;
  index: number;
}

const Stone: FC<StoneProps> = ({ name, index }) => {
  const dispatch = useTypedDispatch();
  const clickHandler = useCallback(
    (event): React.MouseEventHandler<HTMLDivElement> => {
      dispatch(gameActions.placeStone(index));
      return event;
    },
    [dispatch]
  );

  return <StyledStone name={name} onClick={clickHandler} />;
};

export default Stone;
