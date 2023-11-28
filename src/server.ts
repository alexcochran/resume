import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { pinoHttp } from 'pino-http';
import path from 'path';
import favicon from 'express-favicon';

import * as middleware from './middleware';
import { logger } from './utils/logger';

import router from './api/v1';

const app = express();
require('dotenv').config();

app.set('json spaces', 2);

// Define the API port
const port = process.env.PORT ? process.env.PORT : 5280;

// Middleware
app.use(pinoHttp({ logger: logger }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(favicon(path.resolve(__dirname, '../public/assets/ac-logo-48x48.png')));
app.use(express.static(path.join(__dirname, 'public')));

// Supply the versioned API routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  // Serve the most recently built HTML resume file as the homepage
  res.sendFile(path.resolve(__dirname, '../../public/jsonresume.html'));
});

app.listen(port, () => {
  logger.info(`🧇 Resume server listening on ${port} 🧇`);
});

app.use(middleware.notFound);
app.use(middleware.errorHandler);
