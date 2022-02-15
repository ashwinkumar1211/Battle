import express from 'express';
const router = express.Router();
import { getFights, addfight } from '../controllers/fightControllers.js';

router.route('/getfights').get(getFights);
router.route('/addfight').post(addfight);

export default router;
