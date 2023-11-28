import express from 'express';
import { getDocsHtml, getOpenApiSpec } from '../controllers/docs';

const router = express.Router();

router.get('/', getDocsHtml);
router.get('/openapi-spec', getOpenApiSpec);

export default router;
