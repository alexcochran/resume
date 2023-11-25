import { pino } from 'pino';

let logLevel: string;

if (process.env.LOG_LEVEL) {
  logLevel = process.env.LOG_LEVEL;
} else {
  logLevel = 'debug';
}

export const logger = pino({
  name: 'app-name',
  level: logLevel,
});
