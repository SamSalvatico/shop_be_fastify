import fastify from 'fastify';
import dotenv from 'dotenv';
import dbConnection from './database/connection';
import logger from './utils/logger';
// server.get('/ping', async (request, reply) => {
//  return 'pong\n'
// })

async function initializeServer() {
  try {
    dotenv.config();
    const dbConn = await dbConnection({});
    // logger.debug('hjkgdfhvf');
    if (dbConn == null) {
      logger.fatal('Error connecting to db');
    } else {
      const server = fastify();
      // server.use(logger);
      server.listen(8080, (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        logger.debug(`Server listening at ${address}`);
      });
    }
  } catch (e) {
    console.log(e);
    logger.fatal(e);
  }
}

initializeServer();
