const sequelize = require("../../util/database/database");
const { catchAsync } = require("../../util/function/catchAsync");
const categoryModel = require("../../models/admin/categoryModel");
const bodyParser = require("body-parser");

// exports.createCategory = catchAsync(async (req, res, next) => {
//     const createdCategory = await categoryModel.create({
//         category: req.body.category,
//         userId: res.user.id,
//         file: req?.processedImages
//             ? req?.processedImages[0]?.processedImages
//             : "no file",
//         processFile: req?.processedImages
//             ? req?.processedImages[0]?.processedImages
//             : "no file"
//     });

//     // this id is for sample purpose where you can find data with condition
//     // const allData = await categoryModel.findAll({ where: { userId: res.user.id } });
//     const allData = await categoryModel.findAll({ attributes: ["id", "category"] });
//     res.status(200).json({
//         status: "success",
//         message: allData
//     });
//     next();
// });


exports.addCategory = catchAsync(async (req, res, next) => {
    console.log("req.body here 💥💥💥💥💥💥");
    console.log(req.query);
    res.json({
        status: req.body
    })
    next();
})