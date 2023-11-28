import express from 'express';

import routesDownloads from './routes/downloads';
import routesBasics from './routes/basics';
import routesEducation from './routes/education';
import routesInterests from './routes/interests';
import routesResume from './routes/resume';
import routesSkills from './routes/skills';
import routesWork from './routes/work';

import MessageResponse from '../../interfaces/MessageResponse';
import path from 'path';

const router = express.Router();

router.get<{}, MessageResponse>('/docs', (req, res) => {
  res
    .set(
      'Content-Security-Policy',
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    .sendFile(path.resolve(__dirname, '../../../../public/rapidoc.html'));
});

router.use('/', routesResume);

// Utility endpoints
router.use('/downloads', routesDownloads);

// JSON endpoints
router.use('/basics', routesBasics);
router.use('/education', routesEducation);
router.use('/interests', routesInterests);
router.use('/skills', routesSkills);
router.use('/work', routesWork);

export default router;
