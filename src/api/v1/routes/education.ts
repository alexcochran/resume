import express from 'express';
import { getEducation } from '../controllers/education';

const router = express.Router();

router.get('/', getEducation);

export default router;
