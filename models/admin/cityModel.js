
const sequelize = require("../../util/database/database");
const citySchema = require("../../schemas/admin/citySchema");

const cityModel = sequelize.define("city", citySchema, {
    timestamps: false
});

module.exports = cityModel;