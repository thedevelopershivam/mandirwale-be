const sequelize = require("../../util/database/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../../models/userModel");
const { catchAsync } = require("../../util/function/catchAsync");
const AppError = require("../../util/function/appError");
const signToken = require("../../util/function/signToken");



const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOption = {
    expires: new Date(Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000),
    // secure: true, //for security reason only accept https request
    httpOnly: true,
  }
  // console.log(res.headers)
  res.cookie('jwt', token, cookieOption);
  // console.log(user);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      name: user.username,
      email: user.email,
      role: user.role,
      photo: user.photo,
    },
  })
}

exports.createUser = catchAsync(async (req, res) => {
  const createdUser = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  res.status(201).json({
    status: "success",
    data: createdUser,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Username and password both require!", 404));
  }

  const getRec = await userModel.findOne({
    where: { email: email }
  });

  if (!getRec) {
    return next(new AppError("may be username and password are wrong!", 403));
  }

  const incrept = await bcrypt.compare(password, getRec.password);
  if (!incrept) {
    return next(new AppError("may be username and password are wrong!", 403));
  }

  const token = signToken(getRec.id);
  // const token = jwt.sign({ id: getRec.id }, process.env.TOKEN_SECRET)
  createSendToken(getRec, 200, res);
});