/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import fastify from 'fastify';
import dotenv from 'dotenv';
import DatabaseUtils from './utils/database-utils';
import logger from './utils/logger';
import ServerUtils from './utils/server-utils';
// server.get('/ping', async (request, reply) => {
//  return 'pong\n'
// })

async function initializeServer() {
  try {
    dotenv.config();
    const server = fastify();
    server.register(require('fastify-mongodb'), {
      // force to close the mongodb connection when app stopped
      // the default value is false
      forceClose: true,
      url: DatabaseUtils.getConnectionUrl(),
    });
    ServerUtils.registerRoutes(server);
    // const i = new ProductCategoryIndex(
    //   server,
    //   new ProductCategoryService(ProductCategory, server),
    //   new ProductCategorySchema(),
    // );
    // i.register();
    server.listen(8080, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      logger.debug(`Server listening at ${address}`);
    });
  } catch (e) {
    console.log(e);
    logger.fatal(e);
  }
}

initializeServer();
