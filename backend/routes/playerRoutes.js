import express from 'express';
const router = express.Router();
import { createPlayer, listPlayers } from '../controllers/playerController.js';

router.route('/addplayer').post(createPlayer);
router.route('/').get(listPlayers);

export default router;
