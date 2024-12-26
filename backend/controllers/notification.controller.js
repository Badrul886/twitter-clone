import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    const notification = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });

    await Notification.updateMany({ to: userId }, { read: true });

    return res.status(200).json(notification);
  } catch (error) {
    console.log("Error in getNotifications function", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({ to: userId });

    return res
      .status(200)
      .json({ message: "Notifications deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNotifications function", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
