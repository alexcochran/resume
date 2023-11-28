import express from 'express';
import { getBasics, getProfiles } from '../controllers/basics';

const router = express.Router();

router.get('/', getBasics);
router.get('/profiles', getProfiles);

export default router;
