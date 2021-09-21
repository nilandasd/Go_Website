import React from "react";
import styled from "styled-components";
import Stone from "./Stone";

const Lines = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 2px solid black;
  margin: 5%;
  height: 90%;
  width: 90%;
`;

const Liberties = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: min(98vh, 50vw);
  width: min(98vh, 50vw);
`;

const BoardContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  justfy-content: center;
  align-items: center;
  background: #c7975a;
  height: min(98vh, 50vw);
  width: min(98vh, 50vw);
  box-shadow: #211b13 0px 3px 6px, #261f15 0px 3px 6px;
`;

const LineBox = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid black;
`;



const GameBoard = () => {
  const LineBoxes = [];
  for (let i = 0; i < 64; i++) {
    LineBoxes.push(<LineBox key={i} />);
  }
  console.log(LineBoxes);

  return (
    <BoardContainer>
      <Lines>{LineBoxes}</Lines>
      <Liberties>
        <Stone color="white" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
        <Stone color="empty" />
      </Liberties>
    </BoardContainer>
  );
};

export default GameBoard;
