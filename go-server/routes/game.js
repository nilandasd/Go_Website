const express = require("express");
const router = express.Router();
const verifyToken = require("../util/verifyToken");
const { Game } = require("../models/models");

router.use("/", (req, res, next) => verifyToken(req, res, next));

router.post("/", async (req, res) => {
  try {
    const result = await Game.findOne({ status: "waiting" }).exec();
    if(result === null) {
      const newGame = new Game({
        playerBlack: "",
        playerWhite: "",
        board: new Array(13).fill(0).map(() => new Array(13).fill(0)),
        turn: "black",
        status: "waiting",
        winner: "",
        whiteCaptures: 0,
        blackCaptures: 0,
        moves: 0,
      });
      console.log(newGame)
      if (Math.random() < 0.5) {
        newGame.playerBlack = req.username;
      } else {
        newGame.playerWhite = req.username;
      }
      await newGame.save();
      return res.status(200).json({ gameid: newGame._id });
    } else {
      if(result.playerBlack === req.username || result.playerWhite === req.username){
        res.sendStatus(400);
        return;
      }
      if (result.playerBlack === '') {
        result.playerBlack = req.username;
      } else {
        result.playerWhite = req.username;
      }
      result.status = "live";
      await result.save();
      return res
        .status(200)
        .json({ gameid: result._id });
    }
  } catch (err) {
    return res.status(500).json(err.toString());
  }
});

//poll for a game update
router.get("/", async (req, res) => {
  
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  while(true){
    const result = await Game.findById(req.body.gameid).exec();
    let playerColor;
    if (req.username === result.playerBlack) {
      playerColor = "black";
    } else {
      playerColor = "white";
    }
    if (playerColor === result.turn) {
      res.status(200).json({...result});
      break;
    } else {
      await timeout(10000);
    }
  }
  
});

//play a move
router.put("/", async (req, res) => {
  const result = await Game.findById(req.body.gameid).exec();
  if(result === null){
    res.sendStatus(404);
    return;
  }
  let playerColor;
  if (req.username === result.playerBlack) {
    playerColor = "black";
  } else {
    playerColor = "white";
  }

  if(playerColor !== result.turn){
    res.sendStatus(401);
    return;
  }

  if(req.body.move === "pass"){
    updateGame(result, -1);
  } else if (
    !Array.isArray(req.body.move) ||
    req.body.move.length !== 2 ||
    req.body.move[0] < 0 ||
    req.body.move[1] < 0 ||
    req.body.move[0] >= 13 ||
    req.body.move[1] >= 13 ||
    result.board[req.body.move[0]][req.body.move[1]] !== 0
  ) {
    res.sendStatus(400);
    return;
  }

  updateGame(result, req.body.move);

  await result.save();
  res.status(200).json({ ...result });
});



module.exports = router;
