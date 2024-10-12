const express = require("express");
require("dotenv").config();
const { courseRouter } = require("./src/routes/course");
const { userRouter } = require("./src/routes/user");
const { mongoose } = require("mongoose");
const port = 3000;

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);

const load = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port);
  console.log(process.env.MONGO_URL);
};

load();
