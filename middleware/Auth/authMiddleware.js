const jwt = require('jsonwebtoken');
const AppError = require("../../util/function/appError");
const { catchAsync } = require("../../util/function/catchAsync")
const { promisify } = require("util");
// const { CLIENT_RENEG_LIMIT } = require('tls');
const userModel = require('../../models/userModel');

exports.adminAuthMiddleware = catchAsync(async (req, res, next) => {
    let token = "";
    // getting token and check is there valid token exist or not
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        next(new AppError('You are not authorise person for view this page!', 404));
    }

    // verification token
    const decode = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);

    // check user if still exist
    const userExist = await userModel.findOne({
        where: { id: decode.id },
        attributes: { exclude: ['password', 'confirmPassword'] },
    }
    );
    if (!userExist) {
        return next(new AppError('You are not authorise person for view this page!', 404))
    }

    // check if user change password
    const jwtCreatedTime = decode.iat;

    let newDate = userExist.updatedAt.getTime() / 1000;
    if (jwtCreatedTime < newDate) {
        return next(new AppError("Your recently changed password, login again pls", 401))
    }
    res.user = userExist;
    next();
})