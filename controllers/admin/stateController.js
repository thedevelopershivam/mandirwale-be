const { stateModel } = require("../../association");
const { catchAsync } = require("../../util/function/catchAsync");

exports.createState = catchAsync(async (req, res, next) => {
    const stateCreated = await stateModel.create({
        state: req.body.state,
        countryId: req.body.country,
        userId: res.user.id
    })
    res.status(200).json({
        status: "success",
        data: stateCreated
    });
    next();
})