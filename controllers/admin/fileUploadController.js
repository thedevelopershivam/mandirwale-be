const { catchAsync } = require("../../util/function/catchAsync");
// const multer = require("multer");




exports.fileUpload = catchAsync(async (req, res, next) => {
    console.log(req.processedImages)

    // console.log(req.body)

    res.status(200).json({
        status: "success",
        message: "file has been uploaded",
        data: req.body
    });
    next();
})