import { Router } from "express";
import { getConnection } from "../config/databricks.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

const router = Router();

router.get(
  "/admin-test",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  (req, res) => {
    res.json({
      message: "Admin access granted"
    });
  }
);

router.get("/ping", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "wipfli-CRUD",
    timestamp: new Date().toISOString(),
  });
});

router.get("/testDB", async (req, res) => {
  try {
    const connection = await getConnection();

    const session = await connection.openSession();

    const operation = await session.executeStatement(
      "SELECT 1 AS database_connection_test"
    );

    const result = await operation.fetchAll();

    await operation.close();
    await session.close();

    res.status(200).json({
      status: "CONNECTED",
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

export default router;