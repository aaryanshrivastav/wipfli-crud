import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import { getConnection } from "./config/databricks.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await getConnection();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start application");
    process.exit(1);
  }
}

startServer();