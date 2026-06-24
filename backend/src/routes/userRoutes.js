import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import { roleMiddleware } from "../middleware/roleMiddleware.js"

const router = Router();

router.get("/",authMiddleware, roleMiddleware(['ADMIN']), getUsers);

export default router;