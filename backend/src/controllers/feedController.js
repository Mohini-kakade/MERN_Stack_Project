
const Post = require("../models/Post");

const getFeeds = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

  
};

const addFeed = async (req, res) => {
  try {
    const { title, description, image } =
      req.body;

    const post = await Post.create({
      title,
      description,
      image,
      userId: req.user.id
    });

    res.status(201).json({
      message: "Post Added",
      post
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  getFeeds,addFeed
};

