import express from 'express';
const router = express.Router();
import {
  createPlayer,
  listPlayers,
  updatePlayerScore,
} from '../controllers/playerController.js';

router.route('/addplayer').post(createPlayer);
router.route('/').get(listPlayers);
router.route('/player/:id').put(updatePlayerScore);

export default router;
