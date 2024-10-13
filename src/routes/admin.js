const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.send({
    message: "Sign up endpoint",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.send({
    message: "Sign in endpoint",
  });
});
adminRouter.put("/course", (req, res) => {
  res.send({
    message: "Sign in endpoint",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.send({
    message: "Sign in endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
