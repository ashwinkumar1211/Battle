import asyncHandler from 'express-async-handler';
import Team from '../models/teamModel.js';

const topTeamController = asyncHandler(async (req, res) => {
  const teams = await Team.find({}).sort({ score: -1 }).limit(2);

  res.json(teams);
});

const AddTeamController = asyncHandler(async (req, res) => {
  const team = await Team.findOne({ teamname: req.body.teamname });

  const { teamname, score, wins, losses, ties } = req.body;

  if (team) {
    team.teamname = req.body.teamname || team.teamname;
    team.score = req.body.score;
    team.wins = req.body.wins;
    team.losses = req.body.losses;
    team.ties = req.body.ties;

    const updatedTeam = await team.save();

    res.json({
      _id: updatedTeam._id,
      teamname: updatedTeam.teamname,
      score: updatedTeam.score,
      wins: updatedTeam.wins,
      losses: updatedTeam.losses,
      ties: updatedTeam.ties,
    });
  } else {
    const team = new Team({
      teamname,
      score,
      wins,
      losses,
      ties,
    });
    const createdTeam = await team.save();
    res.status(201).json(createdTeam);
  }
});

export { topTeamController, AddTeamController };
