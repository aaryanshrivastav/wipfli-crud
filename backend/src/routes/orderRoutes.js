import { Router } from "express";
import { getOrders } from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

const router = Router();

router.get("/",authMiddleware, roleMiddleware(["ADMIN"]), getOrders);

export default router;