import express from 'express';
const router = express.Router();
import {
  topTeamController,
  AddTeamController,
} from '../controllers/teamControllers.js';

router.route('/').get(topTeamController);
router.route('/addteam').post(AddTeamController);

export default router;
