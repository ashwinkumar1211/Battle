import asyncHandler from 'express-async-handler';
import Player from '../models/playerModel.js';

//@desc Create a player
//@route Get /api/players/:id
//@access public
const createPlayer = asyncHandler(async (req, res) => {
  const player = new Player({
    playername: req.body.playername,
    teamname: req.body.teamname,
    score: req.body.score,
    wins: req.body.wins,
    losses: req.body.losses,
    ties: req.body.ties,
  });

  const createdPlayer = await player.save();
  res.status(201).json(player);
});

//@desc list players
//@route Get /api/players
//@access public
const listPlayers = asyncHandler(async (req, res) => {
  const players = await Player.find({});

  res.json(players);
});

export { createPlayer, listPlayers };
