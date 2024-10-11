const express = require("express");
const port = 3000;
const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(port);
