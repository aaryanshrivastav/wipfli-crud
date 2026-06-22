import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

const router = Router();

router.get("/",authMiddleware, getProducts);

export default router;