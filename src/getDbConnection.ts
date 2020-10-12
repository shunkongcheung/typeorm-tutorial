import { createConnection, Connection } from "typeorm";
import dotenv from "dotenv";

const getDbConnection = async () => {
  // read .env file into process.env
  dotenv.config();

  // here createConnection will load connection options from
  // ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
  // files, or from special environment variables
  //
  // to connect using configuation file, uncomment the following:
  const connection: Connection = await createConnection();

  // !! DO NOT PUT CONNECTION Information here. It should not be commited to your repository.
  // to manually connect to database. uncomment the following:
  // const connection: Connection = await createConnection({
  //   type: process.env.TYPEORM_CONNECTION,
  //   host: process.env.TYPEORM_HOST,
  //   port: process.env.TYPEORM_PORT,
  //   username: process.env.TYPEORM_USERNAME,
  //   password: process.env.TYPEORM_PASSWORD,
  //   database: process.env.TYPEORM_DATABASE,
  // });

  return connection;
};

export default getDbConnection;
