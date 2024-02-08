const sequelize = require("../../util/database/database");
const { catchAsync } = require("../../util/function/catchAsync");
const god = require("../../models/admin/fileModel");
const addGodModel = require("../../models/admin/productModel");
const fileModel = require("../../models/admin/fileModel");


exports.createGod = catchAsync(async (req, res, next) => {
    const godCreated = await addGodModel.create({
        religion: req.body.religion,
        categoryId: req.body.categoryId,
        subCategoryId: req.body.subCategoryId,
        countryId: req.body.countryId,
        stateId: req.body.stateId,
        userId: res.user.id,
        address: req.body.address,
        pinCode: req.body.pincode,
        mapLocation: req.body.mapLocation,
        details: req.body.details,
    })

    const fileUploadNow = req.processedImages.map((result) => ({
        file: result.originalImagePath,
        processFile: result.processedImagePath,
        userId: res.user.id,
        godTableId: godCreated.id
    }))

    console.log(fileUploadNow)
    await fileModel.bulkCreate(fileUploadNow);






    res.status(200).json({
        status: "success"
    })
})