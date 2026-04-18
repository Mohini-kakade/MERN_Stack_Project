
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  getFeeds
} = require("../controllers/feedController");

router.get("/", protect, getFeeds);

module.exports = router;

