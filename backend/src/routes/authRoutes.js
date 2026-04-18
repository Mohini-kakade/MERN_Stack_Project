
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,sendOtp,verifyOtp
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login/otp", sendOtp);
router.post("/verify-otp", verifyOtp);

module.exports = router;

