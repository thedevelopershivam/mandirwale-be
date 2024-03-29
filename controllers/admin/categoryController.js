const sequelize = require("../../util/database/database");
const { catchAsync } = require("../../util/function/catchAsync");
const categoryModel = require("../../models/admin/categoryModel");
const multer = require("multer");


exports.createCategory = catchAsync(async (req, res, next) => {

    console.log("req.body 💖💖💖💖💖💖");
    console.log(req.body);
    console.log("req.body 💖💖💖💖💖💖");

    const createdCategory = await categoryModel.create({
        category: req.body.category,
        userId: res.user.id,
        file: req?.processedImages
            ? req?.processedImages[0]?.processedImages
            : "no file",
        processFile: req?.processedImages
            ? req?.processedImages[0]?.processedImages
            : "no file"
    });

    // this id is for sample purpose where you can find data with condition
    const allData = await categoryModel.findAll();
    res.status(201).json({
        status: "success",
        message: allData
    });

    next();
});


