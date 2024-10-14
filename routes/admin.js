require("dotenv").config();
const { Router } = require("express");
const { adminModel, courseModel } = require("../database/dbSchema");
const adminMiddleware = require("../Middlewares/adminMiddleware");
const adminRouter = Router();
const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await adminModel.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  res.json({
    message: "SignUp successful",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.findOne({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId,
  });
  res.json({
    message: "Course Created",
    courseId: course._id,
  });
});

module.exports = {
  adminRouter,
};
