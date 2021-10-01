const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = mongoose.model(
  "User",
  new Schema({ username: String, password: String })
);

const Game = mongoose.model(
  "Game",
  new Schema(
    { playerBlack: String, 
      playerWhite: String, 
      turn: String, 
      board: [Number], 
      status: String, 
      whiteCaptures: Number, 
      blackCaptures: Number,
      moves: Number
    })
);

module.exports = {
  User,
  Game,
};
