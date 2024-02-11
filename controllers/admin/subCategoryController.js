const sequelize = require("../../util/database/database");
const { catchAsync } = require("../../util/function/catchAsync");
const subCategoryModel = require("../../models/admin/subCategoryModel");


exports.createSubCategory = catchAsync(async (req, res, next) => {

    const subCat = await subCategoryModel.create({
        subCategory: req.body.subCategory,
        categoryId: req.body.categoryId,
        userId: res.user.id,
    });

    res.status(200).json({
        status: "success",
        message: subCat
    });
});