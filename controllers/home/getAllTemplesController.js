
const { catchAsync } = require("../../util/function/catchAsync");
const AppError = require("../../util/function/appError");

exports.getAllTemples = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: 'success',
        message: "req found"
    });
})