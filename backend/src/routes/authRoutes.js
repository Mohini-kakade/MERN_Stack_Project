
const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,sendOtp
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login/otp", sendOtp);

module.exports = router;

