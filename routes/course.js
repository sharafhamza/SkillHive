const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "Course buy page",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "Course preview",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
