const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/feed", require("./src/routes/feedRoutes"));



app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);