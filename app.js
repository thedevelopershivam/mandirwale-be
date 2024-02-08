const express = require("express");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");
var bodyParser = require('body-parser')
const app = new express();

app.use(cors())
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// pages router
const userRoute = require("./route/Auth/user.route");
const homeRoute = require("./route/home/home.route");
const adminRoute = require("./route/admin/adminRouter");

// middleware
const { adminAuthMiddleware } = require("./middleware/Auth/authMiddleware");
const { userRoleMiddleware } = require("./middleware/admin/rolesCheckMiddleware");
// const { default: helmet } = require("helmet");

const limiter = rateLimiter({
  max: 1000,
  windowMS: 60 * 60 * 1000,
  message: "Too many requests from this IP, Please try again after an hour!"
})

// app.use("/api", limiter);

// intergration of router middleware
app.use("/api/v1/admin", userRoute);
app.use("/api/v1/admin", homeRoute);


app.use("/api/v1/admin",
  adminAuthMiddleware,
  userRoleMiddleware('admin', 'superAdmin'),
  adminRoute);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    errors: err.message,
    message: err,
  });
  next();
});

module.exports = app;
