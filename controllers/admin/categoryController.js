const sequelize = require("../../util/database/database");
const { catchAsync } = require("../../util/function/catchAsync");
const categoryModel = require("../../models/admin/categoryModel");

exports.createCategory = catchAsync(async (req, res, next) => {

    console.clear()
    console.log("🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹")
    console.log(req)
    console.log("🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹")

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
    // const allData = await categoryModel.findAll({ attributes: ["id", "category"] });
    res.status(201).json({
        status: "success",
        message: allData
    });
    next();
});


