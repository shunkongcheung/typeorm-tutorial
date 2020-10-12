import { getConnectionOptions } from "typeorm";
import getDbConnection from "./getDbConnection";
const pingDb = async () => {
  const connOptions = await getConnectionOptions();
  const connection = await getDbConnection();

  console.log(JSON.stringify(connOptions, null, 4));
  console.log("✔ successfully connected to database");
  connection.close();
};

export default pingDb;
