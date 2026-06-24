import { Router } from "express";

import {
  placeOrder,
  getMyOrders,
  getOrder,
  getOrders,
  confirmOrder,
  completeOrder,
  cancelOrder,
} from "../controllers/orderController.js";

import {
  authMiddleware,
} from "../middleware/authMiddleware.js";

import {
  roleMiddleware,
} from "../middleware/roleMiddleware.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["CUSTOMER"]),
  placeOrder
);

router.get(
  "/my-orders",
  authMiddleware,
  roleMiddleware(["CUSTOMER"]),
  getMyOrders
);

router.get(
  "/:id",
  authMiddleware,
  getOrder
);

router.patch(
  "/:id/cancel",
  authMiddleware,
  cancelOrder
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  getOrders
);

router.patch(
  "/:id/confirm",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  confirmOrder
);

router.patch(
  "/:id/complete",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  completeOrder
);

export default router;