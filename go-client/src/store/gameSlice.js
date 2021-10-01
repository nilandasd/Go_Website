//a redux reducer for keeping the state of a game
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    board: new Array(13).fill(0).map(() => new Array(13).fill(0)), //13 * 13 board
    whiteCaptures: 0, 
    blackCaptures: 0, 
    playerTurn: "black",
    userColor: "undefined",
    move: 0,
    gameOn: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateState(state, action) {
      
    },
    startGame(state) {
      state.gameOn = true;
    },
    gameOver(state) {
      state.gameOn = false;
    },
    resetBoard(state) {
      state.board.fill(0);
    },
    setBoard(state, action) {
      state.board = action.payload;
    },
    placeStone(state, action) {
      const row = action.payload[0];
      const col = action.payload[1];
      if (state.board[row][col] !== 0 || state.playerTurn !== state.userColor || !state.gameOn) {
        return;
      }
      console.log("stone placed")
      if (state.playerTurn === "black") {
        state.board[row][col] = 1;
        state.move += 1;
        state.playerTurn = "white";
      } else {
        state.move += 1;
        state.board[row][col] = 2;
        state.playerTurn = "black";
      }
    },
    setWhiteCaptures(state, action) {
      state.whiteCaptures = action.payload;
    },
    setBlackCaptures(state, action) {
      state.blackCaptures = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;