const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send({
    message: "Sign up endpoint",
  });
});

userRouter.post("/signin", (req, res) => {
  res.send({
    message: "Sign in endpoint",
  });
});
userRouter.get("/purchases", userMiddleware, async function (req, res) {});

module.exports = {
  userRouter,
};
