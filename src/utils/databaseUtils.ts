/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default class DatabaseUtils {
  static getConnectionUrl(): string {
    const { MONGO_DB_HOST, MONGO_DB_PORT, MONGO_DB_DATABASE } = process.env;
    const MONGO_DB_CONNECTION_PREFIX: string =
      process.env.MONGO_DB_CONNECTION_PREFIX == null ||
      process.env.MONGO_DB_CONNECTION_PREFIX === undefined
        ? "mongodb"
        : process.env.MONGO_DB_CONNECTION_PREFIX;
    let connString = "";
    if (MONGO_DB_CONNECTION_PREFIX.toLowerCase() === "mongodb") {
      // eslint-disable-next-line max-len
      connString = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}?ssl=true&replicaSet=globaldb&retrywrites=false`;
    } else {
      connString = `mongodb+srv://${MONGO_DB_HOST}/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
    }
    return connString;
  }
}
