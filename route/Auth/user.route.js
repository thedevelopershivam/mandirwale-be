const express = require("express");
const router = express.Router();
const signupController = require("../../controllers/Auth/signup.controller");

router.route("/create-user").post(signupController.createUser);
router.route("/login-user").post(signupController.login);

module.exports = router;
