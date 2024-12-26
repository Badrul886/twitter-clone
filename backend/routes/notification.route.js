import express from "express"
import { protectRoute } from "../middlewire/protectRoute.js";
import { getNotifications } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
// router.delete("/", protectRoute, deleteNotifications);


export default router;
