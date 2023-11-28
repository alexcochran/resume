import express from 'express';

import routesDownloads from './routes/downloads';
import routesDocs from './routes/docs';
import routesBasics from './routes/basics';
import routesEducation from './routes/education';
import routesInterests from './routes/interests';
import routesResume from './routes/resume';
import routesSkills from './routes/skills';
import routesWork from './routes/work';

const router = express.Router();

// Utility endpoints
router.use('/downloads', routesDownloads);
router.use('/docs', routesDocs);

// JSON endpoints
router.use('/', routesResume);
router.use('/basics', routesBasics);
router.use('/education', routesEducation);
router.use('/interests', routesInterests);
router.use('/skills', routesSkills);
router.use('/work', routesWork);

export default router;
