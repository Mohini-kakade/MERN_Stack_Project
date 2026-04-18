
const express = require("express");
const router = express.Router();


const protect = require("../middleware/authMiddleware");
const {
  getFeeds,addFeed
} = require("../controllers/feedController");

router.get("/", protect, getFeeds);
router.post("/", protect, addFeed);

module.exports = router;

