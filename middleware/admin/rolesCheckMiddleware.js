const AppError = require("../../util/function/appError")

exports.userRoleMiddleware = (...roles) => {

    return (req, res, next) => {
        if (!roles.includes(res.user.role)) {
            return next(new AppError("You are not authorise person to perform this action!", 403));
        }
        next();
    }
}