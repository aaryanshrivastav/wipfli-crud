import { Router } from "express";
import { getOrderItems, getOrderById } from "../controllers/orderitemsController.js";

const router = Router();

router.get("/", getOrderItems);
router.get("/:orderId", getOrderById)

export default router;