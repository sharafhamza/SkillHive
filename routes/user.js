require("dotenv").config();
const { Router } = require("express");
const { userModel } = require("../database/dbSchema");
const userRouter = Router();
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await userModel.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  res.json({
    message: "SignUp successful",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_USER_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

module.exports = {
  userRouter,
};
