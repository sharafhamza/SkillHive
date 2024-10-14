require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
app.use(express.json());

app.use("/user", userRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(7777);
  console.log("connected");
}

main();
