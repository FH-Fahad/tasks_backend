const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/userController");

router.post("/login", login);
router.post("/signup", signup);

// const Device = require("./models/device.Schema");

// router.post("/", async (req, res) => {
//   try {
//     const { deviceInfo } = req.body;

//     const savedDeviceInfo = await Device.create(deviceInfo);
//     res.json(savedDeviceInfo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
