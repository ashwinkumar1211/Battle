import asyncHandler from 'express-async-handler';
import Fight from '../models/fightModel.js';

//@desc Fetch All Fights
//@route Get /api/fights
//@access Public
const getFights = asyncHandler(async (req, res) => {
  const pageSize = 1;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Fight.countDocuments({});
  const fights = await Fight.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ fights, page, pages: Math.ceil(count / pageSize) });
});

//@desc Add Fight
//@route Post /api/fight
//@access Public
const addfight = asyncHandler(async (req, res) => {
  const fight = new Fight({
    teamname: req.body.teamname,
    playeronename: req.body.playeronename,
    playertwoname: req.body.playertwoname,
    ties: req.body.ties,
  });

  const createdFight = await fight.save();
  res.status(201).json(fight);
});

export { getFights, addfight };
