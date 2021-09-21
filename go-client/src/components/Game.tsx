import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import { useTypedSelector } from "./hooks";

import Stone from "./Stone";

const Lines = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border: 2px solid black;
  margin: 5%;
  height: 90%;
  width: 90%;
`;

const Liberties = styled.div`
  position: absolute;
  height: min(98vh, 50vw);
  width: min(98vh, 50vw);
`;

const LibertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  margin: 2%;
  height: 96%;
  width: 96%;
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
  const boardState = useTypedSelector(state => state.game.board);
  
  const LineBoxes = useMemo(()=> {
    const arr = [];
    for (let i = 0; i < 144; i++) {
      arr.push(<LineBox key={i} />);
    }
    return arr;
  },[]);

  const Board = boardState.map((StoneColor, i) => {
    switch (StoneColor) {
      case 0:
        return <Stone name="empty" key={i} index={i}  />;
      case 1:
        return <Stone name="black" key={i} index={i} />;
      case 2:
        return <Stone name="white" key={i} index={i} />;
    } 
  })

  return (
    <BoardContainer>
      <Lines>{LineBoxes}</Lines>
      <Liberties>
        <LibertiesContainer>
          {Board}
        </LibertiesContainer>
      </Liberties>
    </BoardContainer>
  );
};

export default GameBoard;
