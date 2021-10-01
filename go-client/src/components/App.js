import React from "react";
import styled from "styled-components";
import Game from "./Game";
import PlayerInfo from "./PlayerInfo";

const StyledApp = styled.div`
   background: #0C2924;
   height: 100vh;
   width: 100vw;
   display: grid;
   grid-template-columns: 1fr 6fr 1fr;
`;

const App = () => {
  return (
    <StyledApp>
      <PlayerInfo />
      <Game />
    </StyledApp>
  );
};

export default App;
