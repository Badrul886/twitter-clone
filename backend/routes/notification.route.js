import express from "express";
import { protectRoute } from "../middlewire/protectRoute.js";
import {
  /*deleteNotification,*/ deleteNotifications,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
// Additional
// router.delete("/:id", protectRoute, deleteNotification);

export default router;
