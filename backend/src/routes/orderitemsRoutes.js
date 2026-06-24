import { Router } from "express";
import { getOrderItems, getOrderById } from "../controllers/orderitemsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"
const router = Router();

router.get("/",authMiddleware, roleMiddleware(["ADMIN"]), getOrderItems);
router.get("/:orderId",authMiddleware, roleMiddleware(["ADMIN"]), getOrderById)

export default router;