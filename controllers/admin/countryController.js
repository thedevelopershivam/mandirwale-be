const countryModel = require("../../models/admin/countryModel");
const AppError = require("../../util/function/appError");
const { catchAsync } = require("../../util/function/catchAsync");
const multer = require("multer");


exports.createCountry = catchAsync(async (req, res, next) => {
    const createCountry = await countryModel.create({
        country: "India",
        userId: res.user.id
    })

    res.status(200).json({
        status: "success",
        data: createCountry
    });

    next();
})