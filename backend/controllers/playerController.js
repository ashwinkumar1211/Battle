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

//@desc Update player score
//@route put /api/players/:id
//@access public
const updatePlayerScore = asyncHandler(async (req, res) => {
  const { score, wins, losses, ties } = req.body;
  const player = await Player.findById(req.params.id);
  if (player) {
    player.score = player.score + score;
    player.wins = player.wins + wins;
    player.losses = player.losses + losses;
    player.ties = player.ties + ties;
    const updatedPlayer = await player.save();

    res.json(updatedPlayer);
  } else {
    res.status(404);
    throw new Error('Player not found');
  }
});

export { createPlayer, listPlayers, updatePlayerScore };
