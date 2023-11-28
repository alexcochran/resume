import express from 'express';
import { getSkills } from '../controllers/skills';

const router = express.Router();

router.get('/', getSkills);

export default router;
