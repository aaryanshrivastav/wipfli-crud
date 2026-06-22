import { DBSQLClient } from "@databricks/sql";

const client = new DBSQLClient();

let connection = null;

export async function getConnection() {
  try {
    if (connection) {
      return connection;
    }

    connection = await client.connect({
      host: process.env.DATABRICKS_HOST,
      path: process.env.DATABRICKS_HTTP_PATH,
      token: process.env.DATABRICKS_TOKEN,
    });

    console.log("Connected to Databricks");

    return connection;
  } catch (error) {
    console.error("Databricks Connection Failed");
    console.error(error);

    throw error;
  }
}

export async function closeConnection() {
  if (connection) {
    await connection.close();
    connection = null;

    console.log("Databricks Connection Closed");
  }
}