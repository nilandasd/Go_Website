//a redux reducer for keeping the state of a game
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum Stone {
  EMPTY = 0,
  BLACK,
  WHITE,
}

interface GameState {
  board: Array<Stone>;
  whiteCaptures: number;
  blackCaptures: number;
  playerTurn: string;
  gameOn: boolean;
};

const initialState: GameState = {
    board: new Array(169).fill(0), 
    whiteCaptures: 0, 
    blackCaptures: 0, 
    playerTurn: "black",
    gameOn: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.gameOn = true;
    },
    gameOver(state) {
      state.gameOn = false;
    },
    resetBoard(state) {
      state.board.fill(0);
    },
    setBoard(state, action: PayloadAction<Array<Stone>>) {
      state.board = action.payload;
    },
    placeStone(state, action: PayloadAction<number>) {
      if (state.board[action.payload] !== Stone.EMPTY) {
        return;
      }
      if (state.playerTurn === "black") {
        state.board[action.payload] = Stone.BLACK;
      } else {
        state.board[action.payload] = Stone.WHITE;
      }
    },
    setWhiteCaptures(state, action: PayloadAction<number>) {
      state.whiteCaptures = action.payload;
    },
    setBlackCaptures(state, action: PayloadAction<number>) {
      state.blackCaptures = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;