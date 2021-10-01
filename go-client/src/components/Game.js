import React, { useMemo, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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
    margin: 1.5%;
    height: 97%;
    width: 97%;
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
    const boardState = useSelector(state => state.game.board);
    const turn = useSelector((state) => state.game.turn);
    const userColor = useSelector((state) => state.game.userColor);
    const { sendRequest } = useApi();
    
    const LineBoxes = useMemo(()=> {
      const arr = [];
      for (let i = 0; i < 144; i++) {
        arr.push(<LineBox key={i} />);
      }
      return arr;
    },[]);

    const Board = boardState.map((arr, row) => {
        return arr.map((color, col) => {
            switch (color) {
                case 0:
                    return (
                      <Stone
                        color="empty"
                        key={`${row}${col}`}
                        row={row}
                        col={col}
                        sendRequest={sendRequest}
                      />
                    );
                case 1:
                    return (
                      <Stone
                        color="black"
                        key={`${row}${col}`}
                        row={row}
                        col={col}
                        sendRequest={sendRequest}
                      />
                    );
                case 2:
                    return (
                      <Stone
                        color="white"
                        key={`${row}${col}`}
                        row={row}
                        col={col}
                        sendRequest={sendRequest}
                      />
                    );
              }
          })
    })

    return (
      <BoardContainer>
        <Lines>{LineBoxes}</Lines>
        <Liberties>
          <LibertiesContainer>{Board}</LibertiesContainer>
        </Liberties>
      </BoardContainer>
    );
};

export default GameBoard;
