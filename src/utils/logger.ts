import pino from 'pino';
// import { APP_ID, LOG_LEVEL } from "./Config";

const logger = pino({
  name: 'app-name',
  level: 'debug',
}, pino.destination('stdout'));

export default logger;
