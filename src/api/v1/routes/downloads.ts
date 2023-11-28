// https://stackoverflow.com/questions/7288814/download-a-file-from-nodejs-server-using-express

import express from 'express';
import { downloadHtml } from '../controllers/downloads';

const router = express.Router();

router.get('/html', downloadHtml);

export default router;
