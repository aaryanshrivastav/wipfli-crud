import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProductController,
  updateProductController,
  deleteProductController
} from "../controllers/productController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";

const router = Router();

router.get(
  "/",
  authMiddleware,
  getProducts
);

router.get(
  "/:id",
  authMiddleware,
  getProduct
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  createProductController
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  updateProductController
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  deleteProductController
);

export default router;