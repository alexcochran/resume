import express from 'express';
import { getWork } from '../controllers/work';

const router = express.Router();

router.get('/', getWork);

export default router;
