import express from 'express';
import { getInterests } from '../controllers/interests';

const router = express.Router();

router.get('/', getInterests);

export default router;
